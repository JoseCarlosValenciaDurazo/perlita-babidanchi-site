import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const PORT = 5000;

// Try to clear port 5000 before any server initialization
async function clearPort() {
  try {
    const { stdout, stderr } = await execAsync('npx fkill :5000 --force');
    log(`Port clear stdout: ${stdout}`);
    if (stderr) log(`Port clear stderr: ${stderr}`);
    log('Cleared port 5000');
    // Add a delay to ensure the port is fully released
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    // If no process was using the port, fkill will throw an error, which we can ignore
    log('Port 5000 was already free');
  }
}

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
    await clearPort(); // Clear port before server initialization

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
        .once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE') {
            log(`Error: Port ${PORT} is already in use. Please ensure no other processes are using port ${PORT} and try again.`);
            log(`Detailed error: ${err.message}`);
            reject(new Error(`Port ${PORT} is required but is already in use. Please free up port ${PORT} and restart the application.`));
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