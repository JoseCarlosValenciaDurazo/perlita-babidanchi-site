import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
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

  const httpServer = createServer(app);
  return httpServer;
}
