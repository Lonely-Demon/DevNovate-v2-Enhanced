import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { HackathonWithRegistrationStatus } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface ChallengesProps {
  hackathons: HackathonWithRegistrationStatus[];
  isLoading: boolean;
}

export function Challenges({ hackathons, isLoading }: ChallengesProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: "all", label: "All Challenges" },
    { id: "hackathons", label: "Hackathons" },
    { id: "coding", label: "Coding Contests" },
    { id: "opensource", label: "Open Source" },
    { id: "uiux", label: "UI/UX Design" },
    { id: "hiring", label: "Hiring Challenges" },
  ];

  // Improved smooth scrolling logic
  const scrollCards = (direction: 'left' | 'right') => {
    if (!cardsRef.current) return;
    
    const container = cardsRef.current;
    const cardWidth = 320; // Approximate width of a card
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    // Smooth scroll behavior
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-sm font-medium mb-4">
              Discover Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Find your next challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Browse hot challenges or explore by category to find the perfect match for your skills and interests.</p>
          </motion.div>
          
          {/* Category filters with purple theme */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none" 
                  : "bg-white text-gray-700 hover:text-purple-600 hover:border-purple-300 border-gray-200"} 
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Hot Challenges - Bento Grid */}
        {isLoading ? (
          <ChallengesSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Featured Challenge (Large Card) */}
              {hackathons[0] && (
                <Card className="row-span-2 col-span-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full md:col-span-2 border border-gray-100">
                  <div className="relative h-48">
                    <img 
                      src={hackathons[0].imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1170&q=80"} 
                      alt={hackathons[0].title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</div>
                    {hackathons[0].prizeInfo && (
                      <div className="absolute top-4 right-4 flex space-x-1">
                        <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">{hackathons[0].prizeInfo}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl">{hackathons[0].title}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">{hackathons[0].format}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{hackathons[0].description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hackathons[0].technologies?.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-5 h-5 mr-1 text-purple-600" />
                      <span>
                        {getDaysLeft(hackathons[0].registrationDeadline)} days left
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
                      1-Click Register
                    </Button>
                  </div>
                </Card>
              )}
              
              {/* Standard Challenge Cards */}
              {hackathons.slice(1, 4).map((hackathon) => (
                <Card 
                  key={hackathon.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold">{hackathon.title}</h3>
                      <span className={`px-3 py-1 ${getFormatClasses(hackathon.format)} rounded-full text-xs font-medium`}>{hackathon.format}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{hackathon.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hackathon.technologies?.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-5 h-5 mr-1 text-purple-600" />
                      <span>{getDaysLeft(hackathon.registrationDeadline)} days left</span>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
                      1-Click Register
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Horizontal scrollable card section with smooth scrolling */}
            <div className="mb-10 relative">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">More opportunities</span>
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scrollCards('left')}
                    className="rounded-full w-10 h-10 hover:bg-purple-500/10 hover:text-purple-600 border-gray-200"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scrollCards('right')}
                    className="rounded-full w-10 h-10 hover:bg-purple-500/10 hover:text-purple-600 border-gray-200"
                  >
                    <ArrowRight className="h-5 w-5" />
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <div 
                  ref={cardsRef}
                  className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {/* Additional challenge cards for horizontal scrolling */}
                  {hackathons.map((hackathon) => (
                    <Card 
                      key={`scroll-${hackathon.id}`}
                      className="min-w-[320px] max-w-[320px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
                    >
                      <div className="p-6 flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold">{hackathon.title}</h3>
                          <span className={`px-3 py-1 ${getFormatClasses(hackathon.format)} rounded-full text-xs font-medium`}>{hackathon.format}</span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">{hackathon.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hackathon.technologies?.slice(0, 2).map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="px-6 pb-6 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-5 h-5 mr-1 text-purple-600" />
                          <span>{getDaysLeft(hackathon.registrationDeadline)} days left</span>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
                          1-Click Register
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="text-center">
          <Link href="/challenges">
            <Button 
              className="bg-white hover:bg-purple-50 border border-purple-200 shadow-sm hover:shadow font-medium px-6 py-3"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">View all challenges</span>
              <ChevronRight className="w-5 h-5 ml-1 text-purple-600" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ChallengesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Featured Challenge Skeleton */}
      <div className="row-span-2 col-span-2 bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full md:col-span-2">
        <Skeleton className="h-48 w-full" />
        
        <div className="p-6 flex-grow">
          <div className="flex items-start justify-between mb-3">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-4" />
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="h-6 w-20 rounded" />
            <Skeleton className="h-6 w-16 rounded" />
            <Skeleton className="h-6 w-24 rounded" />
          </div>
        </div>
        
        <div className="px-6 pb-6 flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-10 w-40 rounded" />
        </div>
      </div>
      
      {/* Standard Challenge Card Skeletons */}
      {[0, 1, 2].map((i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
          <div className="p-6 flex-grow">
            <div className="flex items-start justify-between mb-3">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-6 w-20 rounded" />
              <Skeleton className="h-6 w-16 rounded" />
            </div>
          </div>
          
          <div className="px-6 pb-6 flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-40 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function getDaysLeft(dateString: string | Date): number {
  const deadline = new Date(dateString);
  const today = new Date();
  const diffTime = deadline.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

function getFormatClasses(format: string): string {
  switch (format.toLowerCase()) {
    case 'remote':
      return 'bg-green-100 text-green-800';
    case 'hybrid':
      return 'bg-yellow-100 text-yellow-800';
    case 'in-person':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
