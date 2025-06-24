import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Sponsors } from "@/components/sections/Sponsors";
import { Stats } from "@/components/sections/Stats";
import { Challenges } from "@/components/sections/Challenges";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { featuredHackathons as hardcodedFeaturedHackathons, FeaturedHackathon } from "@/data/featured-hackathons";
import { statsData as hardcodedStatsData, StatsType as HardcodedStatsType } from "@/data/stats";


export default function Home() {
  // Use hardcoded featured hackathons
  const featuredHackathons: FeaturedHackathon[] = hardcodedFeaturedHackathons;
  const isLoading = false; // Data is hardcoded for featured hackathons

  // Use hardcoded stats
  const stats: HardcodedStatsType = hardcodedStatsData;
  const statsLoading = false; // Data is hardcoded for stats

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
