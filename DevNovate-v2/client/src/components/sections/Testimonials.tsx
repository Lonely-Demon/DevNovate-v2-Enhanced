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
      className={`h-full rounded-xl overflow-hidden border-0 shadow-sm transition-all duration-300 bg-white ${
        isHovered 
          ? 'transform scale-105 shadow-md z-20' 
          : 'hover:shadow hover:-translate-y-1'
      }`}
    >
      <CardContent className="p-6 relative h-[300px] flex flex-col">
        {/* User Info and View All in Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="relative bg-purple-100 rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-purple-600 text-sm font-semibold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="ml-2">
              <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
              <div className="flex flex-col">
                <p className="text-xs text-gray-600 leading-tight">{testimonial.university}</p>
                <p className="text-xs text-gray-600 leading-tight">{testimonial.role}</p>
              </div>
            </div>
            <div className="ml-2 text-pink-500 text-xs">
              <span className="px-1.5 py-0.5 bg-pink-50 rounded-full text-[10px]">• {testimonial.challenges} achievements</span>
            </div>
          </div>
          
          {/* View link on the right */}
          <div className="text-xs text-blue-600 font-medium">
            View all
          </div>
        </div>
        
        {/* Challenge Cards */}
        <div className="mb-2 space-y-2">
          <div className="flex items-center space-x-2 p-2 rounded-lg bg-green-50">
            <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">P</div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-800">Web3 Hackathon</p>
              <p className="text-[10px] text-gray-500">Jun 2025</p>
            </div>
            <div className="px-2 py-0.5 bg-green-100 rounded-full text-xs text-green-700">
              2nd Place
            </div>
          </div>
          
          <div className="flex items-center space-x-2 p-2 rounded-lg bg-cyan-50">
            <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-xs">R</div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-800">AI Challenge</p>
              <p className="text-[10px] text-gray-500">May 2025</p>
            </div>
            <div className="px-2 py-0.5 bg-cyan-100 rounded-full text-xs text-cyan-700">
              Finalist
            </div>
          </div>
          
          <div className="flex items-center space-x-2 p-2 rounded-lg bg-blue-50">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">D</div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-800">XR Hackathon</p>
              <p className="text-[10px] text-gray-500">Mar 2025</p>
            </div>
            <div className="px-2 py-0.5 bg-blue-100 rounded-full text-xs text-blue-700">
              Certified
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-700">
            JavaScript
          </div>
          <div className="px-2 py-1 bg-pink-100 rounded-full text-xs text-pink-700">
            React
          </div>
          <div className="px-2 py-1 bg-indigo-100 rounded-full text-xs text-indigo-700">
            NextJS
          </div>
        </div>
        
        {/* Button */}
        <div className="mt-auto pt-3">
          <button className="w-full py-2 rounded-lg bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors">
            Share profile
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
