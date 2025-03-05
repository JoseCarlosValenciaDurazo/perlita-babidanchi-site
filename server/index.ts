import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

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
    const server = registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      log(`Error encountered: ${err.message}`);
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      throw err;
    });

    if (app.get("env") === "development") {
      log("Setting up Vite in development mode...");
      await setupVite(app, server);
      log("Vite setup complete");
    } else {
      log("Setting up static file serving...");
      serveStatic(app);
    }

    const PORT = 5000;

    return new Promise((resolve, reject) => {
      server.listen(PORT, "0.0.0.0")
        .once('listening', () => {
          log(`Server listening on port ${PORT}`);
          resolve();
        })
        .once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE') {
            log(`Error: Port ${PORT} is already in use. Please ensure no other processes are using port ${PORT} and try again.`);
            reject(new Error(`Port ${PORT} is required but is already in use. Please free up port ${PORT} and restart the application.`));
          } else {
            reject(err);
          }
        });
    });
  } catch (error) {
    log(`Fatal error during startup: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
};

// Start the server on port 5000
startServer().catch((error) => {
  log(`Could not start server: ${error}`);
  process.exit(1);
});