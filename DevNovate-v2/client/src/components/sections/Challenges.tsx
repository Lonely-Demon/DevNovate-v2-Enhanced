import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { HackathonWithRegistrationStatus } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

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

  // Use our mobile hook to get mobile state
  const isMobile = useIsMobile();

  return (
    <section id="categories" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-sm font-medium mb-3 md:mb-4">
              Discover Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Find your next challenge</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">Browse hot challenges or explore by category to find the perfect match for your skills and interests.</p>
          </motion.div>
          
          {/* Category filters with purple theme - Horizontal scrollable on mobile */}
          <div className="overflow-x-auto pb-2 mb-8 md:mb-10">
            <div className={`flex ${isMobile ? 'justify-start' : 'flex-wrap justify-center'} gap-3 ${isMobile ? 'min-w-max' : ''} px-1`}>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`${activeCategory === category.id 
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none" 
                    : "bg-white text-gray-700 hover:text-purple-600 hover:border-purple-300 border-gray-200"} 
                    whitespace-nowrap text-sm md:text-base px-3 md:px-4`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Hot Challenges - Responsive Grid */}
        {isLoading ? (
          <ChallengesSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* Featured Challenge Card - Full width on mobile */}
              {hackathons[0] && (
                <Card className="row-span-1 col-span-1 md:row-span-2 md:col-span-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-40 md:h-48">
                    <img 
                      src={hackathons[0].imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1170&q=80"} 
                      alt={hackathons[0].title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</div>
                    {hackathons[0].prizeInfo && (
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 flex space-x-1">
                        <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">{hackathons[0].prizeInfo}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 md:p-6 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-bold text-lg md:text-xl">{hackathons[0].title}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium self-start">{hackathons[0].format}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-3 md:line-clamp-none">{hackathons[0].description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hackathons[0].technologies?.slice(0, isMobile ? 2 : 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 md:px-6 pb-4 md:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 text-purple-600" />
                      <span>
                        {getDaysLeft(hackathons[0].registrationDeadline)} days left
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm w-full sm:w-auto">
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
                  <div className="p-4 md:p-6 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-bold text-base md:text-lg">{hackathon.title}</h3>
                      <span className={`px-3 py-1 ${getFormatClasses(hackathon.format)} rounded-full text-xs font-medium self-start`}>{hackathon.format}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2 md:line-clamp-3">{hackathon.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hackathon.technologies?.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 md:px-6 pb-4 md:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 text-purple-600" />
                      <span>{getDaysLeft(hackathon.registrationDeadline)} days left</span>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm w-full sm:w-auto">
                      1-Click Register
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Horizontal scrollable card section with improved mobile experience */}
            <div className="mb-10 relative">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">More opportunities</span>
                </h3>
                {/* Show arrows only on desktop */}
                {!isMobile && (
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => scrollCards('left')}
                      className="rounded-full w-8 h-8 md:w-10 md:h-10 hover:bg-purple-500/10 hover:text-purple-600 border-gray-200"
                    >
                      <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => scrollCards('right')}
                      className="rounded-full w-8 h-8 md:w-10 md:h-10 hover:bg-purple-500/10 hover:text-purple-600 border-gray-200"
                    >
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="overflow-hidden">
                <div 
                  ref={cardsRef}
                  className="flex gap-3 md:space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {/* Mobile optimized scrollable cards with preview of next card */}
                  {hackathons.map((hackathon) => (
                    <Card 
                      key={`scroll-${hackathon.id}`}
                      className={`${isMobile ? 'min-w-[75vw]' : 'sm:min-w-[280px] md:min-w-[320px] md:max-w-[320px]'} flex-shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100`}
                    >
                      {/* Optional small image for mobile */}
                      {isMobile && hackathon.imageUrl && (
                        <div className="h-24 w-full">
                          <img 
                            src={hackathon.imageUrl} 
                            alt={hackathon.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-3 sm:p-4 md:p-6 flex-grow">
                        <div className={`flex ${isMobile ? 'justify-between' : 'flex-col'} items-start gap-2 mb-3`}>
                          <h3 className="font-bold text-base md:text-lg">{hackathon.title}</h3>
                          <span className={`px-3 py-1 ${getFormatClasses(hackathon.format)} rounded-full text-xs font-medium self-start`}>{hackathon.format}</span>
                        </div>
                        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{hackathon.description}</p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                          {hackathon.technologies?.slice(0, isMobile ? 2 : 3).map((tech, index) => (
                            <span key={index} className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-xs">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                        <div className="flex items-center text-xs sm:text-sm text-gray-600">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 text-purple-600" />
                          <span>{getDaysLeft(hackathon.registrationDeadline)} days left</span>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto">
                          {isMobile ? 'Register' : '1-Click Register'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {/* Scroll indicator for mobile */}
                {isMobile && (
                  <div className="flex justify-center mt-4 mb-2 space-x-1.5">
                    {hackathons.map((_, index) => (
                      <div 
                        key={index} 
                        className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-60"
                      />
                    ))}
                  </div>
                )}
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
  // Use our mobile hook for responsive skeleton
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
      {/* Featured Challenge Skeleton - Responsive */}
      <div className="row-span-1 col-span-1 md:row-span-2 md:col-span-2 bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
        <Skeleton className="h-40 md:h-48 w-full" />
        
        <div className="p-4 md:p-6 flex-grow">
          <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-start justify-between'} mb-3`}>
            <Skeleton className="h-6 md:h-7 w-36 md:w-40" />
            <Skeleton className="h-5 md:h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-3 md:h-4 w-full mb-2" />
          <Skeleton className="h-3 md:h-4 w-5/6 mb-2" />
          <Skeleton className="h-3 md:h-4 w-4/5 mb-4" />
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="h-5 md:h-6 w-16 md:w-20 rounded" />
            <Skeleton className="h-5 md:h-6 w-14 md:w-16 rounded" />
            <Skeleton className="h-5 md:h-6 w-20 md:w-24 rounded" />
          </div>
        </div>
        
        <div className="px-4 md:px-6 pb-4 md:pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-9 md:h-10 w-full sm:w-40 rounded" />
        </div>
      </div>
      
      {/* Standard Challenge Card Skeletons */}
      {[0, 1, 2].map((i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
          <div className="p-4 md:p-6 flex-grow">
            <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-start justify-between'} mb-3`}>
              <Skeleton className="h-5 md:h-6 w-32 md:w-36" />
              <Skeleton className="h-5 md:h-6 w-16 md:w-20 rounded-full" />
            </div>
            <Skeleton className="h-3 md:h-4 w-full mb-2" />
            <Skeleton className="h-3 md:h-4 w-5/6 mb-4" />
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-5 md:h-6 w-16 md:w-20 rounded" />
              <Skeleton className="h-5 md:h-6 w-14 md:w-16 rounded" />
            </div>
          </div>
          
          <div className="px-4 md:px-6 pb-4 md:pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Skeleton className="h-5 w-28 md:w-32" />
            <Skeleton className="h-9 md:h-10 w-full sm:w-36 md:w-40 rounded" />
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
