import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertHackathonSchema, insertRegistrationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all hackathons
  app.get("/api/hackathons", async (req, res) => {
    try {
      const hackathons = await storage.getAllHackathons();
      res.json(hackathons);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch hackathons" });
    }
  });

  // Get featured hackathons
  app.get("/api/hackathons/featured", async (req, res) => {
    try {
      const featuredHackathons = await storage.getFeaturedHackathons();
      res.json(featuredHackathons);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured hackathons" });
    }
  });

  // Get hackathon by id
  app.get("/api/hackathons/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid hackathon ID" });
      }

      const hackathon = await storage.getHackathon(id);
      if (!hackathon) {
        return res.status(404).json({ message: "Hackathon not found" });
      }

      res.json(hackathon);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch hackathon" });
    }
  });

  // Create hackathon
  app.post("/api/hackathons", async (req, res) => {
    try {
      const hackathonData = insertHackathonSchema.parse(req.body);
      const newHackathon = await storage.createHackathon(hackathonData);
      res.status(201).json(newHackathon);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid hackathon data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create hackathon" });
    }
  });

  // Register for a hackathon
  app.post("/api/registrations", async (req, res) => {
    try {
      const registrationData = insertRegistrationSchema.parse(req.body);
      
      // Check if hackathon exists
      const hackathon = await storage.getHackathon(registrationData.hackathonId);
      if (!hackathon) {
        return res.status(404).json({ message: "Hackathon not found" });
      }

      // Check if user exists
      const user = await storage.getUser(registrationData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if user is already registered
      const existingRegistration = await storage.getRegistrationByUserAndHackathon(
        registrationData.userId, 
        registrationData.hackathonId
      );
      
      if (existingRegistration) {
        return res.status(400).json({ message: "User is already registered for this hackathon" });
      }

      const registration = await storage.createRegistration(registrationData);
      
      // Increment registration count
      await storage.incrementHackathonRegistrationCount(registrationData.hackathonId);
      
      res.status(201).json(registration);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid registration data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to register for hackathon" });
    }
  });

  // Get stats
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
