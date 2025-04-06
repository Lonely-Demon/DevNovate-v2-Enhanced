import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, Check, Award, Sparkles, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Updated testimonials with purple-pink gradient theme
const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CS Major at Stanford",
    university: "Stanford University",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    content: "The 1-Click Registration is a game-changer! I was able to join three AI hackathons in minutes instead of filling out the same information over and over again. My profile now showcases all my challenge achievements.",
    challenges: 7,
    achievement: "Internship at Google",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Hackathon Organizer",
    university: "MIT",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    content: "As a student organizer, the platform made our hackathon registration process so much smoother. The 1-Click feature increased our participation by 40% and we could focus on event quality instead of registration issues.",
    challenges: 3,
    organizer: true,
    achievement: "Organized PennApps 2025",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Computer Engineering Student",
    university: "UC Berkeley",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    content: "The Tech Radar feature helped me find challenges that perfectly match my skills. I landed my dream internship after a recruiter discovered my profile and saw my challenge achievements!",
    challenges: 12,
    achievement: "Facebook Fellowship Recipient",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "AI/ML Enthusiast",
    university: "Carnegie Mellon",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    content: "This platform has been essential for building my portfolio. The AI and ML challenges helped me showcase my problem-solving abilities to recruiters in a way my resume never could.",
    challenges: 8,
    achievement: "OpenAI Research Grant",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Entrepreneurship Major",
    university: "Harvard University",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 5,
    content: "As an undergrad with a startup idea, this platform connected me with amazing tech talent. Through hackathon challenges, I found my technical co-founders and we've just secured our first round of funding!",
    challenges: 5,
    organizer: true,
    achievement: "Y Combinator S25 Batch",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 6,
    name: "Zoe Taylor",
    role: "Data Science Student",
    university: "University of Washington",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    content: "The tech profile I built through participation in challenges on this platform has been my most valuable asset during job interviews. Recruiters love seeing my actual projects instead of just coursework.",
    challenges: 9,
    achievement: "Microsoft Data Scientist Intern",
    bgColor: "from-purple-50 to-pink-50"
  }
];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to handle the automatic sliding
  const autoPlay = () => {
    if (carouselRef.current && !isPaused) {
      const scrollAmount = 2; // Slower, smoother movement
      carouselRef.current.scrollLeft += scrollAmount;
      
      // Reset the scroll position to create a seamless loop when it reaches the end
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10) {
        carouselRef.current.scrollLeft = 0;
      }
    }
  };
  
  // Setup autoplay
  useEffect(() => {
    autoPlayRef.current = setInterval(autoPlay, 30); // Even smoother animation with smaller steps
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused]);
  
  // Handle manual navigation
  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };
  
  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements with purple theme */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
              What our users are saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from college students and developers who have accelerated their careers through our 1-Click Registration platform.
            </p>
          </motion.div>
        </div>
        
        {/* Enhanced continuous auto-scrolling testimonial carousel */}
        <div className="mb-10 relative">
          <div className="flex justify-end items-center mb-8">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full w-10 h-10 hover:bg-purple-500/10 hover:text-purple-600 border-gray-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full w-10 h-10 hover:bg-purple-500/10 hover:text-purple-600 border-gray-200"
              >
                <ArrowRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
          
          {/* Carousel container with auto-scroll and hover pause functionality */}
          <div 
            className="overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredCardId(null);
            }}
          >
            <div 
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Duplicate testimonials for infinite effect */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="min-w-[300px] w-[300px] transition-all duration-300 ease-out flex-shrink-0 pt-1 pb-3"
                  onMouseEnter={() => setHoveredCardId(testimonial.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isHovered={hoveredCardId === testimonial.id} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA with purple gradient */}
        <div className="text-center mt-14">
          <h3 className="font-display text-2xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Ready to join our community?</span>
          </h3>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Join with 1-Click
          </Button>
          <p className="text-gray-600 mt-4">One profile, endless opportunities.</p>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    university: string;
    avatar: string;
    rating: number;
    content: string;
    challenges: number;
    achievement: string;
    organizer?: boolean;
    bgColor: string;
  };
  isHovered: boolean;
}

function TestimonialCard({ testimonial, isHovered }: TestimonialCardProps) {
  return (
    <Card 
      className={`h-full rounded-xl overflow-hidden border-0 shadow-sm transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 ${
        isHovered 
          ? 'transform scale-105 shadow-md z-20' 
          : 'hover:shadow hover:-translate-y-1'
      }`}
    >
      <CardContent className="p-6 relative h-[250px] flex flex-col">
        {/* User Info and Quote Icon in Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="relative">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-8 h-8 rounded-full object-cover border-0" 
              />
              {/* Green status dot */}
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="ml-2">
              <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
              <p className="text-xs text-gray-600">{testimonial.university}</p>
            </div>
          </div>
          
          {/* Quote icon on the right */}
          <div className="h-8 w-8 flex items-center justify-center text-purple-300/40">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5,17h-5l5,-8h-3v-6h-6v6l-5,8h-5v6h14v-6Zm15,0h-5l5,-8h-3v-6h-6v6l-5,8h-5v6h14v-6Z" fill="currentColor" transform="scale(0.5)"/>
            </svg>
          </div>
        </div>
        
        {/* Stars */}
        <div className="mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                stroke="none"
              />
            ))}
          </div>
        </div>
        
        {/* Testimonial content */}
        <p className="text-sm leading-relaxed text-gray-800 mb-auto line-clamp-5">
          "{testimonial.content}"
        </p>
        
        {/* Footer with achievement and challenges */}
        <div className="flex items-center justify-between text-xs pt-2 mt-auto border-t border-gray-100">
          <div className="flex items-center text-purple-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12.5 22.5H2.50002C1.5 22.5 1 22 1 21V20.5C1 14.9772 5.47715 10.5 11 10.5H12C17.5228 10.5 22 14.9772 22 20.5V21C22 22 21.5 22.5 20.5 22.5H12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 4.5C15 6.70914 13.2091 8.5 11 8.5C8.79086 8.5 7 6.70914 7 4.5C7 2.29086 8.79086 0.5 11 0.5C13.2091 0.5 15 2.29086 15 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-1.5">{testimonial.achievement}</span>
          </div>
          <div className="text-gray-500">
            {testimonial.challenges} challenges
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
