import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  skills: text("skills").array(),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  portfolioUrl: text("portfolio_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const hackathons = pgTable("hackathons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  format: text("format").notNull(), // Remote, Hybrid, In-person
  registrationDeadline: timestamp("registration_deadline").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  prizeInfo: text("prize_info"),
  organizerId: integer("organizer_id").notNull(),
  categories: text("categories").array(),
  technologies: text("technologies").array(),
  featured: boolean("featured").default(false),
  registrationCount: integer("registration_count").default(0),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  hackathonId: integer("hackathon_id").notNull(),
  status: text("status").notNull().default("registered"), // registered, submitted, completed
  submissionUrl: text("submission_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  skills: true,
  githubUrl: true,
  linkedinUrl: true,
  portfolioUrl: true,
});

export const insertHackathonSchema = createInsertSchema(hackathons).pick({
  title: true,
  description: true,
  format: true,
  registrationDeadline: true,
  startDate: true,
  endDate: true,
  prizeInfo: true,
  organizerId: true,
  categories: true,
  technologies: true,
  featured: true,
  imageUrl: true,
});

export const insertRegistrationSchema = createInsertSchema(registrations).pick({
  userId: true,
  hackathonId: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertHackathon = z.infer<typeof insertHackathonSchema>;
export type Hackathon = typeof hackathons.$inferSelect;

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

// For frontend display
export type HackathonWithRegistrationStatus = Hackathon & {
  isRegistered?: boolean;
  daysLeft?: number;
  location?: string;
  registrations?: number;
  prize?: number | string;
  organizer?: string;
};
