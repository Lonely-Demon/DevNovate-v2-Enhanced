import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Sponsors } from "@/components/sections/Sponsors";
import { Stats } from "@/components/sections/Stats";
import { Challenges } from "@/components/sections/Challenges";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // Fetch featured hackathons for the homepage
  const { data: featuredHackathons = [], isLoading } = useQuery({
    queryKey: ['/api/hackathons/featured'],
  });

  // Fetch stats for the homepage
  const { data: stats = {
    registeredDevelopers: 0,
    hostedChallenges: 0,
    partnerOrganizations: 0,
    projectsSubmitted: 0
  }, isLoading: statsLoading } = useQuery({
    queryKey: ['/api/stats'],
  });

  return (
    <div className="font-sans bg-white text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Sponsors />
        <Stats stats={stats} isLoading={statsLoading} />
        <Challenges hackathons={featuredHackathons} isLoading={isLoading} />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
