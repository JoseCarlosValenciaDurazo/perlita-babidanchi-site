// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  contacts;
  currentId;
  currentContactId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.currentId = 1;
    this.currentContactId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContact(insertContact) {
    const id = this.currentContactId++;
    const contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 100 }),
  message: text("message").notNull()
});
var insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  company: true,
  message: true
}).extend({
  email: z.string().email(),
  name: z.string().min(2),
  message: z.string().min(10)
});

// server/routes.ts
import { ZodError } from "zod";
function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      await storage.createContact(data);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data" });
        return;
      }
      res.status(500).json({ message: "Error sending message" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import { exec } from "child_process";
import { promisify } from "util";
var execAsync = promisify(exec);
var PORT = 3e3;
var app = express2();
log("Starting Express application...");
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path}`);
    }
    next();
  });
}
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});
var startServer = async () => {
  try {
    log("Initializing server...");
    const server = registerRoutes(app);
    const serverReady = new Promise((resolve, reject) => {
      const startTime = Date.now();
      log(`Attempting to bind to port ${PORT}...`);
      server.listen(PORT, "0.0.0.0").once("listening", () => {
        const bindTime = Date.now() - startTime;
        log(`Server bound to port ${PORT} (took ${bindTime}ms)`);
        resolve();
      }).once("error", (err) => {
        if (err.code === "EADDRINUSE") {
          log(`Failed to bind to port ${PORT}: ${err.message}`);
          reject(new Error(`Port ${PORT} is in use. The application will restart automatically.`));
        } else {
          log(`Failed to start server: ${err.message}`);
          reject(err);
        }
      });
    });
    const viteSetup = async () => {
      if (process.env.NODE_ENV === "development") {
        log("Setting up Vite in development mode...");
        await setupVite(app, server);
        log("Vite setup complete");
      } else {
        log("Setting up static file serving...");
        serveStatic(app);
      }
    };
    await serverReady;
    viteSetup().catch((error) => {
      log(`Error during Vite setup: ${error}`);
    });
  } catch (error) {
    log(`Fatal error during startup: ${error instanceof Error ? error.message : String(error)}`);
    throw error;
  }
};
startServer().catch((error) => {
  log(`Could not start server: ${error}`);
  process.exit(1);
});
