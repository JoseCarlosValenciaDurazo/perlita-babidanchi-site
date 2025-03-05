import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 5000;

const app = express();
log("Starting Express application...");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Detailed logging middleware for assets
app.use('/assets', (req, res, next) => {
  const fullPath = path.resolve(__dirname, '..', 'attached_assets', decodeURIComponent(req.path.substring(1)));
  log('Asset Request Details:');
  log(`Request Path: ${req.path}`);
  log(`Decoded Path: ${decodeURIComponent(req.path)}`);
  log(`Full File Path: ${fullPath}`);
  next();
});

// Serve files from attached_assets directory
app.use('/assets', express.static(path.resolve(__dirname, '..', 'attached_assets'), {
  dotfiles: 'allow',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline');
    } else if (filePath.endsWith('.docx')) {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    log(`Serving file: ${filePath}`);
  }
}));

// Simplified request logging middleware for development
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path}`);
    }
    next();
  });
}

// Add a health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

const startServer = async (): Promise<void> => {
  try {
    log("Initializing server...");
    const server = registerRoutes(app);
    await new Promise<void>((resolve, reject) => {
      server.listen(PORT, "0.0.0.0")
        .once('listening', () => {
          log(`Server bound to port ${PORT}`);
          resolve();
        })
        .once('error', (err: NodeJS.ErrnoException) => {
          reject(err);
        });
    });

    if (process.env.NODE_ENV !== "production") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }
  } catch (error) {
    log(`Fatal error during startup: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
};

startServer().catch((error) => {
  log(`Could not start server: ${error}`);
  process.exit(1);
});