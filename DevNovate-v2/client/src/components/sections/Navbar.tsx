import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Rocket, ChevronDown, ArrowRight, Sparkles, Star, Trophy, Users, Zap, Compass, Heart, Info } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Simplified and fixed navbar with working mobile menu
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isMobile = useIsMobile();
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle outside clicks to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };
  
  // Dropdown menu animations
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      transition: { duration: 0.15, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.2, 
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.15, ease: "easeInOut" }
    }
  };
  
  // Mobile menu animations
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };
  
  // Mega menu data structure - inspired by Stripe
  const exploreMegaMenu = {
    title: "Explore challenge types",
    description: "Find the perfect format for your skills and goals",
    sections: [
      {
        title: "By Category",
        items: [
          { 
            icon: <Zap className="w-5 h-5 text-violet-500" />, 
            name: "Hackathons", 
            description: "Intense collaborative sprint events",
            href: "#" 
          },
          { 
            icon: <Trophy className="w-5 h-5 text-amber-500" />, 
            name: "Competitions", 
            description: "Structured challenges with prizes",
            href: "#" 
          },
          { 
            icon: <Star className="w-5 h-5 text-pink-500" />, 
            name: "Bounties", 
            description: "Solve specific problems for rewards",
            href: "#" 
          },
          { 
            icon: <Compass className="w-5 h-5 text-emerald-500" />, 
            name: "Open Source", 
            description: "Contribute to community projects",
            href: "#" 
          }
        ]
      },
      {
        title: "By Difficulty",
        items: [
          { 
            icon: <div className="w-2 h-2 rounded-full bg-green-500" />, 
            name: "Beginner Friendly", 
            description: "Perfect for newcomers",
            href: "#" 
          },
          { 
            icon: <div className="w-2 h-2 rounded-full bg-yellow-500" />, 
            name: "Intermediate", 
            description: "For experienced developers",
            href: "#" 
          },
          { 
            icon: <div className="w-2 h-2 rounded-full bg-red-500" />, 
            name: "Advanced", 
            description: "Expert-level challenges",
            href: "#" 
          }
        ]
      }
    ],
    popularItems: [
      {
        name: "AI Innovation Challenge",
        status: "Popular",
        href: "#"
      },
      {
        name: "Climate Tech Hackathon",
        status: "New",
        href: "#"
      },
      {
        name: "Web3 Development Sprint",
        status: "Trending",
        href: "#"
      }
    ]
  };
  
  // About menu data
  const aboutMegaMenu = {
    title: "About DevNovate",
    description: "Learn more about our platform and mission",
    sections: [
      {
        title: "Our Story",
        items: [
          { 
            icon: <Info className="w-5 h-5 text-primary" />, 
            name: "About Us", 
            description: "Our mission and vision",
            href: "#" 
          },
          { 
            icon: <Users className="w-5 h-5 text-primary" />, 
            name: "Team", 
            description: "Meet the people behind DevNovate",
            href: "#" 
          }
        ]
      },
      {
        title: "Resources",
        items: [
          { 
            icon: <Sparkles className="w-5 h-5 text-primary" />, 
            name: "Blog", 
            description: "Latest news and articles",
            href: "#" 
          },
          { 
            icon: <Heart className="w-5 h-5 text-primary" />, 
            name: "Partners", 
            description: "Our collaborators and sponsors",
            href: "#" 
          }
        ]
      }
    ]
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 sm:py-3 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100' 
          : 'py-3 sm:py-4 bg-white'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 relative group">
              <div className={`flex items-center justify-center ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-primary/10 rounded-xl relative overflow-hidden group-hover:bg-primary/20 transition-colors duration-300`}>
                <Rocket className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-primary relative z-10`} />
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 bg-primary/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className={`font-display ${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-900`}>DevNovate</span>
              
              {/* Beta badge */}
              <div className={`absolute -top-2 ${isMobile ? '-right-10' : '-right-12'} bg-gradient-to-r from-amber-500 to-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium tracking-wide`}>
                BETA
              </div>
            </Link>
            
            <nav className="hidden lg:flex ml-10 items-center">
              {/* Challenges link */}
              <div 
                className="relative mx-3"
              >
                <Link href="/challenges">
                  <span 
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-md transition-colors hover:bg-gray-50 text-gray-700"
                  >
                    <span className="font-medium">Challenges</span>
                  </span>
                </Link>
                
                <AnimatePresence>
                  {activeDropdown === 'explore' && (
                    <motion.div 
                      className="absolute left-0 mt-2 w-[540px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                    >
                      <div className="p-6 grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-display font-medium text-gray-900 mb-1">{exploreMegaMenu.title}</h3>
                          <p className="text-sm text-gray-500 mb-4">{exploreMegaMenu.description}</p>
                          
                          <div className="space-y-6">
                            {exploreMegaMenu.sections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{section.title}</h4>
                                <ul className="space-y-1">
                                  {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <a 
                                        href={item.href}
                                        className="flex items-start p-2 hover:bg-gray-50 rounded-lg group transition-colors"
                                      >
                                        <span className="mr-3 mt-0.5">{item.icon}</span>
                                        <div>
                                          <span className="block text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">{item.name}</span>
                                          <span className="block text-xs text-gray-500">{item.description}</span>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-l border-gray-100 pl-6">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Popular Challenges</h4>
                          
                          <div className="space-y-4">
                            {exploreMegaMenu.popularItems.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className="block group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">{item.name}</span>
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    item.status === 'New' ? 'bg-green-100 text-green-800' :
                                    item.status === 'Popular' ? 'bg-amber-100 text-amber-800' :
                                    'bg-blue-100 text-blue-800'
                                  }`}>{item.status}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-gray-100">
                            <Link href="/challenges" className="flex items-center text-sm font-medium text-primary group">
                              <span>View all challenges</span>
                              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Looking for specific technologies?</p>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/5">
                          Explore skills
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* About link */}
              <div
                className="relative mx-3"
              >
                <Link href="/about">
                  <span 
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-md transition-colors hover:bg-gray-50 text-gray-700"
                  >
                    <span className="font-medium">About</span>
                  </span>
                </Link>
              </div>
              
              {/* Community link */}
              <div className="relative mx-3">
                <Link href="/community">
                  <span 
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-md transition-colors hover:bg-gray-50 text-gray-700"
                  >
                    <span className="font-medium">Community</span>
                  </span>
                </Link>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow hidden lg:flex"
            >
              Join with 1-Click
            </Button>
            
            {/* Mobile menu button */}
            <button
              ref={buttonRef}
              className="lg:hidden ml-4 p-1 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu - Enhanced for mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="lg:hidden mt-3 mx-auto bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden fixed left-0 right-0 top-14 z-50 max-h-[80vh] overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="p-3 sm:p-4">
                <div className="grid grid-cols-1 gap-2 mb-5">
                  <Link href="/challenges">
                    <div className="flex items-center space-x-3 px-3 py-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      <Trophy className="text-purple-600 w-5 h-5" />
                      <span className="font-medium text-gray-800">Challenges</span>
                    </div>
                  </Link>
                  
                  <Link href="/about">
                    <div className="flex items-center space-x-3 px-3 py-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      <Info className="text-purple-600 w-5 h-5" />
                      <span className="font-medium text-gray-800">About</span>
                    </div>
                  </Link>
                  
                  <Link href="/community">
                    <div className="flex items-center space-x-3 px-3 py-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      <Users className="text-purple-600 w-5 h-5" />
                      <span className="font-medium text-gray-800">Community</span>
                    </div>
                  </Link>
                </div>
                
                {/* Show popular challenges on mobile */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 px-2">Popular Challenges</h4>
                  <div className="space-y-2">
                    {exploreMegaMenu.popularItems.map((item, idx) => (
                      <a key={idx} href={item.href}>
                        <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-2">
                            <Sparkles className="text-amber-500 w-4 h-4" />
                            <span className="text-sm font-medium text-gray-700">{item.name}</span>
                          </div>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full text-xs ${
                            item.status === 'New' ? 'bg-green-100 text-green-800' :
                            item.status === 'Popular' ? 'bg-amber-100 text-amber-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>{item.status}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Join with 1-Click
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
