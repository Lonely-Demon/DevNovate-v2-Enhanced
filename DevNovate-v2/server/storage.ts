import { 
  users, 
  hackathons, 
  registrations,
  type User, 
  type InsertUser,
  type Hackathon,
  type InsertHackathon,
  type Registration,
  type InsertRegistration,
  type HackathonWithRegistrationStatus
} from "@shared/schema";

// Interface for storage methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Hackathon methods
  getAllHackathons(): Promise<Hackathon[]>;
  getFeaturedHackathons(): Promise<Hackathon[]>;
  getHackathon(id: number): Promise<Hackathon | undefined>;
  createHackathon(hackathon: InsertHackathon): Promise<Hackathon>;
  incrementHackathonRegistrationCount(id: number): Promise<void>;
  
  // Registration methods
  getRegistrationByUserAndHackathon(userId: number, hackathonId: number): Promise<Registration | undefined>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  
  // Stats methods
  getStats(): Promise<{
    registeredDevelopers: number;
    hostedChallenges: number;
    partnerOrganizations: number;
    projectsSubmitted: number;
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private hackathons: Map<number, Hackathon>;
  private registrations: Map<number, Registration>;
  
  private userId: number;
  private hackathonId: number;
  private registrationId: number;

  constructor() {
    this.users = new Map();
    this.hackathons = new Map();
    this.registrations = new Map();
    
    this.userId = 1;
    this.hackathonId = 1;
    this.registrationId = 1;
    
    // Add some initial sample data
    this.seedData();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const createdAt = new Date();
    
    // Ensure all optional fields have null values if they are not provided
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt,
      fullName: insertUser.fullName || null,
      skills: insertUser.skills || null,
      githubUrl: insertUser.githubUrl || null,
      linkedinUrl: insertUser.linkedinUrl || null,
      portfolioUrl: insertUser.portfolioUrl || null
    };
    
    this.users.set(id, user);
    return user;
  }
  
  // Hackathon methods
  async getAllHackathons(): Promise<Hackathon[]> {
    return Array.from(this.hackathons.values());
  }
  
  async getFeaturedHackathons(): Promise<Hackathon[]> {
    return Array.from(this.hackathons.values()).filter(
      (hackathon) => hackathon.featured
    );
  }
  
  async getHackathon(id: number): Promise<Hackathon | undefined> {
    return this.hackathons.get(id);
  }
  
  async createHackathon(insertHackathon: InsertHackathon): Promise<Hackathon> {
    const id = this.hackathonId++;
    const createdAt = new Date();
    const registrationCount = 0;
    
    const hackathon: Hackathon = { 
      ...insertHackathon, 
      id, 
      createdAt,
      registrationCount,
      prizeInfo: insertHackathon.prizeInfo || null,
      categories: insertHackathon.categories || null,
      technologies: insertHackathon.technologies || null,
      featured: insertHackathon.featured ?? false,
      imageUrl: insertHackathon.imageUrl || null
    };
    
    this.hackathons.set(id, hackathon);
    return hackathon;
  }
  
  async incrementHackathonRegistrationCount(id: number): Promise<void> {
    const hackathon = this.hackathons.get(id);
    if (hackathon) {
      // Handle case where registrationCount could be null
      hackathon.registrationCount = (hackathon.registrationCount || 0) + 1;
      this.hackathons.set(id, hackathon);
    }
  }
  
  // Registration methods
  async getRegistrationByUserAndHackathon(
    userId: number, 
    hackathonId: number
  ): Promise<Registration | undefined> {
    return Array.from(this.registrations.values()).find(
      (reg) => reg.userId === userId && reg.hackathonId === hackathonId
    );
  }
  
  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.registrationId++;
    const createdAt = new Date();
    const status = "registered";
    const submissionUrl = null;
    
    const registration: Registration = {
      ...insertRegistration,
      id,
      createdAt,
      status,
      submissionUrl,
    };
    
    this.registrations.set(id, registration);
    return registration;
  }
  
  // Stats methods
  async getStats(): Promise<{
    registeredDevelopers: number;
    hostedChallenges: number;
    partnerOrganizations: number;
    projectsSubmitted: number;
  }> {
    const submittedRegistrations = Array.from(this.registrations.values()).filter(
      (reg) => reg.status === "submitted"
    );
    
    // Count unique organizations (using organizer IDs as proxy)
    const organizerIds = new Set(
      Array.from(this.hackathons.values()).map((h) => h.organizerId)
    );
    
    return {
      registeredDevelopers: this.users.size,
      hostedChallenges: this.hackathons.size,
      partnerOrganizations: organizerIds.size,
      projectsSubmitted: submittedRegistrations.length,
    };
  }
  
  // Seed some initial data for development
  private seedData() {
    // Seed users
    const adminUser: User = {
      id: this.userId++,
      username: "admin",
      password: "admin123",
      email: "admin@example.com",
      fullName: "Admin User",
      skills: ["JavaScript", "React", "Node.js"],
      githubUrl: "https://github.com/admin",
      linkedinUrl: "https://linkedin.com/in/admin",
      portfolioUrl: "https://admin-portfolio.com",
      createdAt: new Date(),
    };
    this.users.set(adminUser.id, adminUser);
    
    // Seed hackathons
    const now = new Date();
    
    // Hackathon 1 - Ongoing
    const hackathon1: Hackathon = {
      id: this.hackathonId++,
      title: "AI Innovation Challenge",
      description: "Build AI-powered solutions that solve real-world problems in healthcare, education, or sustainability.",
      format: "Remote",
      registrationDeadline: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      startDate: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // Started 2 days ago
      endDate: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000), // Ends in 12 days
      prizeInfo: "$10,000 in prizes",
      organizerId: adminUser.id,
      categories: ["AI", "Machine Learning", "Data Science"],
      technologies: ["Python", "TensorFlow", "PyTorch"],
      featured: true,
      registrationCount: 45,
      imageUrl: "https://images.unsplash.com/photo-1677442135096-faaa19e842ca",
      createdAt: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
    };
    this.hackathons.set(hackathon1.id, hackathon1);
    
    // Hackathon 2 - Upcoming
    const hackathon2: Hackathon = {
      id: this.hackathonId++,
      title: "Web3 Sustainability Hackathon",
      description: "Develop blockchain-based solutions for environmental monitoring, renewable energy tracking, and sustainable supply chains.",
      format: "Hybrid",
      registrationDeadline: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000),
      startDate: new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + 17 * 24 * 60 * 60 * 1000),
      prizeInfo: "$5,000 in prizes and mentorship opportunities",
      organizerId: adminUser.id,
      categories: ["Blockchain", "Sustainability", "Climate Tech"],
      technologies: ["Ethereum", "Solidity", "Web3.js"],
      featured: true,
      registrationCount: 23,
      imageUrl: "https://images.unsplash.com/photo-1639152201720-5e536d254d81",
      createdAt: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000),
    };
    this.hackathons.set(hackathon2.id, hackathon2);
    
    // Hackathon 3 - About to end
    const hackathon3: Hackathon = {
      id: this.hackathonId++,
      title: "Mobile Dev Jam",
      description: "Create innovative mobile apps that enhance accessibility, productivity, or social connection.",
      format: "In-person",
      registrationDeadline: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000),
      startDate: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000),
      prizeInfo: "Apple developer packages and internship interviews",
      organizerId: adminUser.id,
      categories: ["Mobile", "UX/UI", "Accessibility"],
      technologies: ["React Native", "Flutter", "Swift"],
      featured: false,
      registrationCount: 38,
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      createdAt: new Date(now.getTime() - 45 * 24 * 60 * 60 * 1000),
    };
    this.hackathons.set(hackathon3.id, hackathon3);
  }
}

export const storage = new MemStorage();
