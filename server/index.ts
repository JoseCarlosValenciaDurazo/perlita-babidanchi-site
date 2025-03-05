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

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

const startServer = async (): Promise<void> => {
  try {
    log("Initializing server...");

    // Create HTTP server first
    const server = registerRoutes(app);

    // Add error handling middleware before Vite setup
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      log(`Error encountered: ${err.message}`);
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
    });

    if (app.get("env") === "development") {
      log("Setting up Vite in development mode...");
      await setupVite(app, server);
      log("Vite setup complete");
    } else {
      log("Setting up static file serving...");
      serveStatic(app);
    }

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
            log(`Port ${PORT} is in use, attempting to free it...`);
            try {
              const { stdout, stderr } = await execAsync('npx fkill :5000 --force');
              log(`Port clear stdout: ${stdout}`);
              if (stderr) log(`Port clear stderr: ${stderr}`);

              // Shorter delay since we already tried binding once
              await new Promise(resolve => setTimeout(resolve, 1000));

              // Try binding again
              server.listen(PORT, "0.0.0.0")
                .once('listening', () => {
                  const retryTime = Date.now() - startTime;
                  log(`Server listening on port ${PORT} after retry (took ${retryTime}ms total)`);
                  resolve();
                })
                .once('error', (retryErr) => {
                  log(`Failed to bind to port ${PORT} after retry: ${retryErr.message}`);
                  reject(retryErr);
                });
            } catch (killError) {
              log(`Failed to free port ${PORT}: ${killError}`);
              reject(new Error(`Could not free port ${PORT} for use`));
            }
          } else {
            log(`Failed to start server: ${err.message}`);
            reject(err);
          }
        });
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