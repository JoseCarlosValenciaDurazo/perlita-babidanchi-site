import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const PORT = 5000;

const app = express();
log("Starting Express application...");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simplified request logging middleware for development
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path}`);
    }
    next();
  });
}

const startServer = async (): Promise<void> => {
  try {
    log("Initializing server...");

    // Setup Vite first if in development mode
    if (process.env.NODE_ENV === "development") {
      log("Setting up Vite in development mode...");
      // Create HTTP server first so Vite can use it for HMR
      const server = registerRoutes(app);
      await setupVite(app, server);
      log("Vite setup complete");

      return new Promise((resolve, reject) => {
        const startTime = Date.now();
        log(`Attempting to bind to port ${PORT}...`);

        server.listen(PORT, "0.0.0.0")
          .once('listening', () => {
            const bindTime = Date.now() - startTime;
            log(`Server listening on port ${PORT} (took ${bindTime}ms to bind)`);
            resolve();
          })
          .once('error', async (err: NodeJS.ErrnoException) => {
            if (err.code === 'EADDRINUSE') {
              log(`Failed to bind to port ${PORT}: ${err.message}`);
              reject(new Error(`Port ${PORT} is in use. The application will restart automatically.`));
            } else {
              log(`Failed to start server: ${err.message}`);
              reject(err);
            }
          });
      });
    } else {
      // Production mode - simpler setup
      log("Setting up static file serving...");
      const server = registerRoutes(app);
      serveStatic(app);

      return new Promise((resolve, reject) => {
        server.listen(PORT, "0.0.0.0")
          .once('listening', () => {
            log(`Server listening on port ${PORT}`);
            resolve();
          })
          .once('error', (err) => {
            log(`Failed to start server: ${err.message}`);
            reject(err);
          });
      });
    }
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