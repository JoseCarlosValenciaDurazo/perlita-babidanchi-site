import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execAsync = promisify(exec);
const PORT = 5000;

const app = express();
log("Starting Express application...");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve files from attached_assets directory with a file mapping
const fileMapping = {
  'huachinera-deposit-study.pdf': 'Geología de los depósitos de perlita de Huachinera, Sonora, México.pdf'
};

app.use('/assets', (req, res, next) => {
  // Log the incoming request
  log(`Asset request: ${req.path}`);

  // Check if we need to map the requested file to its actual name
  const requestedFile = req.path.substring(1); // Remove leading slash
  const actualFileName = fileMapping[requestedFile] || requestedFile;

  // Log the file mapping
  log(`Mapping ${requestedFile} to ${actualFileName}`);

  // Set the actual file path
  req.url = '/' + actualFileName;
  next();
});

app.use('/assets', express.static(path.resolve(__dirname, '..', 'attached_assets'), {
  setHeaders: (res, filePath) => {
    // Set appropriate headers for PDF and DOCX files
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
    } else if (filePath.endsWith('.docx')) {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    }
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