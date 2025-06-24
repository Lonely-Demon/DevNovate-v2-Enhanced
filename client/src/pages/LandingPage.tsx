import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import { featuredHackathons as hardcodedFeaturedHackathons, FeaturedHackathon } from "@/data/featured-hackathons";
import { statsData as hardcodedStatsData, StatsType as HardcodedStatsType } from "@/data/stats";


// Import other sections
import { Sponsors } from "@/components/sections/Sponsors";
// import { Stats } from "@/components/sections/Stats"; // Stats component is not used directly, PlatformImpact is
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { PlatformImpact } from "@/components/sections/PlatformImpact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  // State for challenge categories and carousel
  const [activeCategory, setActiveCategory] = useState("Hackathons");
  const challengesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Use hardcoded featured hackathons
  const featuredHackathons: FeaturedHackathon[] = hardcodedFeaturedHackathons;
  const isLoading = false; // Data is hardcoded, so not loading for featured hackathons

  // Use hardcoded stats
  const statsData: HardcodedStatsType = hardcodedStatsData;
  const statsLoading = false; // Data is hardcoded
  
  // Challenge carousel navigation with improvements for college students (simpler UI, more intuitive)
  const scrollLeft = () => {
    if (challengesRef.current) {
      const cardWidth = 300 + 24; // card width (300px) + gap (24px)
      const currentScrollLeft = challengesRef.current.scrollLeft;
      
      if (currentScrollLeft < cardWidth) { // If scrolling left would go past the beginning or at the beginning
        // Jump to the end for circular navigation
        const scrollableWidth = challengesRef.current.scrollWidth - challengesRef.current.clientWidth;
        challengesRef.current.scrollTo({ left: scrollableWidth, behavior: 'smooth' });
      } else {
        challengesRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };
  
  const scrollRight = () => {
    if (challengesRef.current) {
      const cardWidth = 300 + 24; // card width (300px) + gap (24px)
      const currentScrollLeft = challengesRef.current.scrollLeft;
      const scrollableWidth = challengesRef.current.scrollWidth - challengesRef.current.clientWidth;
      
      // Check if we're at or near the end (within one card scroll)
      if (currentScrollLeft >= scrollableWidth - cardWidth + 1) { // Add 1 for pixel precision
        // If at the end, jump to the beginning for circular navigation
        challengesRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        challengesRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };
  
  // Use featuredHackathons for the "Hackathons" category, others can remain sample or be expanded
  const challengesByCategory = {
    "Hackathons": featuredHackathons.map(h => ({ // Adapt featuredHackathons to the existing structure
      id: h.id,
      title: h.title,
      description: h.description,
      format: h.format,
      registrations: h.registrations,
      daysLeft: h.daysLeft,
    })),
    "Competitions": [1, 2, 3, 4].map(item => ({
      id: item,
      title: `Web Dev Competition ${item}`,
      description: "Create responsive web applications with modern technologies. Prizes for top submissions.",
      format: "Hybrid",
      registrations: 180,
      daysLeft: 12
    })),
    "Bounties": [1, 2, 3].map(item => ({
      id: item,
      title: `Open Source Bounty ${item}`,
      description: "Contribute to major open source projects and earn rewards for your contributions.",
      format: "Remote",
      registrations: 125,
      daysLeft: 30
    })),
    "Assessments": [1, 2, 3, 4, 5].map(item => ({
      id: item,
      title: `Technical Assessment ${item}`,
      description: "Test your skills and get certified in various technology domains.",
      format: "Online",
      registrations: 320,
      daysLeft: 5
    })),
    "Open Source": [1, 2, 3, 4].map(item => ({
      id: item,
      title: `Contributing Project ${item}`,
      description: "Join community-driven development projects and build your portfolio.",
      format: "Remote",
      registrations: 150,
      daysLeft: 15
    }))
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar with menu items (navbar) */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">
                DevNovate
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/challenges"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Challenges
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/community"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Community
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">
                Login
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2 rounded-full text-sm relative overflow-hidden group">
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative z-10 flex items-center">
                  Sign Up
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean, centered, minimalist approach */}
      <section className="flex items-center justify-center min-h-[calc(100vh-80px)] relative overflow-hidden">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
        
        {/* Gentle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[120px] opacity-60 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Hackathons Begin Where<br/>
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Forms End</span>
                  
                  {/* Highlight underline animated on load */}
                  <motion.span 
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10 rounded-full -z-10"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  ></motion.span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                No Forms, Just Fun - Join the Pack who's got your Back. One profile unlocks all challenges for students across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA with advanced hover effect */}
                <Button 
                  size="lg" 
                  className="join-button bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all duration-300 shadow-md hover:shadow-lg px-8 py-6 rounded-xl text-lg font-medium relative group overflow-hidden"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Join with 1-Click</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
                
                {/* Secondary CTA with subtle hover effect */}
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white border-gray-200 text-gray-800 hover:border-primary/30 hover:text-gray-900 transition-all duration-300 px-8 py-6 rounded-full text-lg font-medium"
                >
                  <span>Host Challenge</span>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* We work with section - direct without the stats counter */}
          <div className="max-w-3xl mx-auto mt-20 mb-6 text-center">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-6">We work with top universities</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png" alt="IIT Madras" className="h-8 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" alt="IIT Bombay" className="h-8 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png" alt="IIT Kanpur" className="h-8 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Delhi_Logo.svg/1200px-IIT_Delhi_Logo.svg.png" alt="IIT Delhi" className="h-8 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png" alt="IIT Kharagpur" className="h-8 object-contain" />
            </div>
          </div>
        </div>

        {/* Fonts and animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&display=swap');

            .font-display {
              font-family: 'Clash Display', sans-serif;
            }
            
            .join-button {
              transition: transform 0.2s ease;
            }
            .join-button:hover {
              transform: scale(1.05);
            }
          `
        }} />
      </section>

      {/* Sponsors Section */}
      <Sponsors />
      
      {/* Platform Impact Section */}
      <PlatformImpact stats={statsData} isLoading={statsLoading} />

      {/* Buzzing Challenges Section - inspired by Clipup.com with college-friendly design */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900">Buzzing Challenges</h2>
              <p className="text-gray-600 mt-2 max-w-xl">Discover challenges that match your skills and interests</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-sm hover:shadow-md font-medium rounded-lg relative overflow-hidden group">
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Host your own
                </span>
              </Button>
            </div>
          </div>
          
          {/* Challenge Type Filter - Pill style inspired by Novu.co */}
          <div className="flex flex-wrap gap-2 mb-8 pb-2 overflow-x-auto scrollbar-challenges">
            {[
              { name: "Hackathons", icon: "code" },
              { name: "Competitions", icon: "trophy" },
              { name: "Bounties", icon: "database" },
              { name: "Assessments", icon: "puzzle" },
              { name: "Open Source", icon: "clock" }
            ].map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all
                  ${category.name === activeCategory 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm text-gray-700'}`}
              >
                {category.icon === "code" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {category.icon === "trophy" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {category.icon === "database" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )}
                {category.icon === "puzzle" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )}
                {category.icon === "clock" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Carousel of cards with modern styling */}
          <div className="relative py-4 mb-8">
            {/* Left Arrow - hidden on mobile */}
            {!isMobile && (
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-gray-50 
                rounded-full shadow-md border border-gray-100 flex items-center justify-center transition-all duration-300"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {/* Carousel Content - elevated cards with subtle shadows */}
            <div className={isMobile ? "mx-2" : "mx-14"}>
              <div 
                ref={challengesRef}
                className="flex space-x-6 overflow-x-auto pb-4 scrollbar-challenges snap-x"
              >
                {challengesByCategory[activeCategory as keyof typeof challengesByCategory].map((challenge) => (
                  <div 
                    key={challenge.id} 
                    className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-md hover:shadow-lg 
                    transition-all duration-300 p-5 border border-gray-100 snap-start flex flex-col 
                    hover:translate-y-[-5px]"
                  >
                    {/* Challenge banner with gradient and badge */}
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-5 relative" style={{
                      background: `linear-gradient(135deg, ${challenge.id % 2 === 0 ? '#6366f1' : '#ec4899'}, ${challenge.id % 3 === 0 ? '#8b5cf6' : '#06b6d4'})`,
                    }}>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                        {challenge.format}
                      </div>
                    </div>
                    
                    {/* Challenge title and content */}
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{challenge.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{challenge.description}</p>
                    
                    {/* Participants showcase with bubbles */}
                    <div className="flex items-center justify-between mb-4 bg-gray-50 p-3 rounded-lg">
                      <div className="px-3 py-1 bg-blue-100 rounded-full text-xs flex items-center gap-1.5 whitespace-nowrap font-medium text-blue-700">
                        <Users className="w-3.5 h-3.5" />
                        {challenge.registrations} participants
                      </div>
                      <div className="px-3 py-1 bg-amber-100 rounded-full text-xs flex items-center gap-1.5 whitespace-nowrap font-medium text-amber-700">
                        <Clock className="w-3.5 h-3.5" />
                        {challenge.daysLeft}d left
                      </div>
                    </div>
                    
                    {/* Prominent action button with 1-click flow animation */}
                    <Button 
                      className="one-click-button bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-xl py-5 font-medium shadow-sm hover:shadow 
                      transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                    >
                      {/* Shine effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Join with 1-Click</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
              
              {/* Mobile swipe indicator */}
              {isMobile && (
                <div className="mt-4 mb-2 flex justify-center">
                  {/* Swipe indicator */}
                  <div className="flex items-center text-xs text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-full">
                    <svg className="w-4 h-4 mr-1.5 animate-pulse-horizontal text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Swipe to see more
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Arrow - hidden on mobile */}
            {!isMobile && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-gray-50 
                rounded-full shadow-md border border-gray-100 flex items-center justify-center transition-all duration-300"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
          
          {/* CTA - Direct and straightforward like ruul.io */}
          <div className="mt-8 text-center">
            <Link href="/challenges">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-sm hover:shadow-md font-medium rounded-lg px-8 py-5 transition-all duration-300 relative overflow-hidden group">
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  <span>View All Challenges</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              
              /* Flow animation for 1-click button */
              .flow-animation {
                position: absolute;
                width: 150%;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(255, 255, 255, 0.2),
                  transparent
                );
                left: -50%;
                animation: flowEffect 1.5s ease-in-out infinite;
              }
              
              @keyframes flowEffect {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              
              .one-click-button:hover .flow-animation {
                animation-play-state: running;
              }
              
              .one-click-button .flow-animation {
                animation-play-state: paused;
              }
              
              /* Custom scrollbar for challenges */
              .scrollbar-challenges::-webkit-scrollbar {
                height: 6px;
                width: 6px;
              }
              
              .scrollbar-challenges::-webkit-scrollbar-track {
                border-radius: 100vh;
                background: #f3f4f6;
              }
              
              .scrollbar-challenges::-webkit-scrollbar-thumb {
                background: #8b5cf6;
                border-radius: 100vh;
              }
              
              .scrollbar-challenges::-webkit-scrollbar-thumb:hover {
                background: #6d28d9;
              }
              
              .scrollbar-challenges {
                scrollbar-width: thin;
                scrollbar-color: #8b5cf6 #f3f4f6;
              }
              
              /* Pulse horizontal animation for swipe indicator */
              @keyframes pulse-horizontal {
                0%, 100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(3px);
                }
              }
              
              .animate-pulse-horizontal {
                animation: pulse-horizontal 1.5s ease-in-out infinite;
              }
            `
          }} />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section - Action-oriented and minimalist */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[120px] opacity-60 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
                Ready to revolutionize your <br/>hackathon experience?
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join thousands of college students who are building their tech skills, portfolios, and futures with DevNovate.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl px-10 py-6 rounded-xl text-lg font-medium group relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Join with 1-Click</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
              
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                <p className="text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Secure & Reliable
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Regular Updates
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Lightning Fast
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}