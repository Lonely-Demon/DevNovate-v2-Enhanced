export const featuredHackathons = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    description: "Develop AI solutions for real-world problems.",
    format: "Remote",
    registrations: 350,
    daysLeft: 10,
    startDate: "2024-08-01T00:00:00.000Z",
    endDate: "2024-08-15T00:00:00.000Z",
    prize: 50000,
    organizer: "Tech Solutions Inc.",
    location: "Online",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    status: "active", // Added status for consistency if needed
    isRegistered: false, // Added for HackathonWithRegistrationStatus compatibility
    registrationCount: 350, // Added for HackathonWithRegistrationStatus compatibility
  },
  {
    id: 2,
    title: "Web3 Wonders Hackathon",
    description: "Explore the future of decentralized applications.",
    format: "Hybrid",
    registrations: 200,
    daysLeft: 25,
    startDate: "2024-08-20T00:00:00.000Z",
    endDate: "2024-09-10T00:00:00.000Z",
    prize: 75000,
    organizer: "Crypto Coders",
    location: "New York / Online",
    technologies: ["Solidity", "React", "Node.js"],
    status: "upcoming",
    isRegistered: false,
    registrationCount: 200,
  },
  {
    id: 3,
    title: "Sustainable Tech Challenge",
    description: "Create technology for a greener planet.",
    format: "Remote",
    registrations: 150,
    daysLeft: 5, // Ends soon
    startDate: "2024-07-20T00:00:00.000Z",
    endDate: "2024-07-30T00:00:00.000Z",
    prize: 30000,
    organizer: "Greenovation Hub",
    location: "Online",
    technologies: ["IoT", "Data Analysis", "Renewable Energy"],
    status: "active",
    isRegistered: true, // Example of a registered one
    registrationCount: 150,
  },
];

export type FeaturedHackathon = typeof featuredHackathons[0];
