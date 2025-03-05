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
  'huachinera-deposit-study.pdf': 'Geología de los depósitos de perlita de Huachinera, Sonora, México.pdf',
  'informe-babidanchi-2016.docx': 'Informe proyecto Perlita Babidanchi agosto 2016.docx',
  'thesis-signatures.pdf': 'Ratificación de firmas y contenidos de tesis.pdf'
};

app.use('/assets', (req, res, next) => {
  // Log the incoming request
  log(`Asset request: ${req.path}`);

  // Check if we need to map the requested file to its actual name
  const requestedFile = req.path.substring(1); // Remove leading slash
  const actualFileName = fileMapping[requestedFile] || requestedFile;

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

    // Create HTTP server first
    const server = registerRoutes(app);

    // Create a promise that resolves when the server is ready
    const serverReady = new Promise<void>((resolve, reject) => {
      const startTime = Date.now();
      log(`Attempting to bind to port ${PORT}...`);

      server.listen(PORT, "0.0.0.0")
        .once('listening', () => {
          const bindTime = Date.now() - startTime;
          log(`Server bound to port ${PORT} (took ${bindTime}ms)`);
          resolve();
        })
        .once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE') {
            log(`Failed to bind to port ${PORT}: ${err.message}`);
            reject(new Error(`Port ${PORT} is in use. The application will restart automatically.`));
          } else {
            log(`Failed to start server: ${err.message}`);
            reject(err);
          }
        });
    });

    // Start Vite setup in parallel with server binding
    const viteSetup = async () => {
      // Always use development mode unless explicitly set to production
      if (process.env.NODE_ENV !== "production") {
        log("Setting up Vite in development mode...");
        await setupVite(app, server);
        log("Vite setup complete");
      } else {
        log("Setting up static file serving...");
        serveStatic(app);
      }
    };

    // Wait for server to bind first
    await serverReady;

    // Then set up Vite without blocking server readiness
    viteSetup().catch(error => {
      log(`Error during Vite setup: ${error}`);
      // Don't throw here, let the server continue running
    });

  } catch (error) {
    log(`Fatal error during startup: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
};

// Start the server
startServer().catch((error) => {
  log(`Could not start server: ${error}`);
  process.exit(1);
});