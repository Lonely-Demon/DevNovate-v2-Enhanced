import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Database, User, Building, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Enhanced glow effect in background with purple theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full filter blur-[150px] opacity-80"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full filter blur-[120px] opacity-70"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Small eyebrow text with micro-animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hackathons Begin Where Forms End</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
              The <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">One-Click</span> Hackathon Platform
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join challenges instantly with our revolutionary 1-Click Registration. No forms, just fun — build your tech skills and portfolio through innovative challenges.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl px-10 py-6 rounded-full text-lg font-medium group relative overflow-hidden"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="flex items-center gap-2 relative z-10">
                  <span>Start Exploring</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-purple-200 text-gray-700 hover:text-purple-700 hover:border-purple-300 transition-all duration-300 px-8 py-6 rounded-full text-lg font-medium"
              >
                How it works
              </Button>
            </motion.div>
            
            {/* One-Click Registration Animation */}
            <motion.div 
              className="mt-20 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <div className="max-w-lg mx-auto relative">
                {/* Flow animation */}
                <div className="flex items-center justify-between relative mb-3">
                  {/* User Profile */}
                  <motion.div 
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-md flex items-center justify-center relative z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    <User className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                    <div className="absolute -bottom-2 w-full text-center text-xs font-medium text-gray-700">Profile</div>
                  </motion.div>
                  
                  {/* Connection line with animation */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 flex-grow mx-2 relative"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <motion.div 
                      className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500"
                      animate={{ 
                        x: ['0%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>
                  
                  {/* Database */}
                  <motion.div 
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-md flex items-center justify-center relative z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  >
                    <Database className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                    <div className="absolute -bottom-2 w-full text-center text-xs font-medium text-gray-700">System</div>
                  </motion.div>
                  
                  {/* Connection line with animation */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 flex-grow mx-2 relative"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <motion.div 
                      className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500"
                      animate={{ 
                        x: ['0%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                  
                  {/* Organizers */}
                  <motion.div 
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-md flex items-center justify-center relative z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                  >
                    <Building className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                    <div className="absolute -bottom-2 w-full text-center text-xs font-medium text-gray-700">Organizers</div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="text-sm text-gray-600 text-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.5 }}
                >
                  One profile, instant registration to any challenge — your information flows seamlessly to organizers.
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
