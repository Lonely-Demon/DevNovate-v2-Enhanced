import { motion } from "framer-motion";
import { Laptop, Rocket, Building, Lightbulb } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type StatsType = {
  registeredDevelopers: number;
  hostedChallenges: number;
  partnerOrganizations: number;
  projectsSubmitted: number;
};

interface PlatformImpactProps {
  stats: StatsType;
  isLoading?: boolean;
}

export function PlatformImpact({ stats, isLoading = false }: PlatformImpactProps) {
  // Use mobile detection for responsive design
  const isMobile = useIsMobile();
  
  const statCards = [
    {
      value: stats.registeredDevelopers,
      label: "Registered Developers",
      description: "Students and developers across India",
      icon: <Laptop className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500`} />,
      color: "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100"
    },
    {
      value: stats.hostedChallenges,
      label: "Hackathons Hosted",
      description: "Technical challenges and competitions",
      icon: <Rocket className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500`} />,
      color: "bg-gradient-to-r from-pink-50 to-purple-50 border-pink-100"
    },
    {
      value: stats.partnerOrganizations,
      label: "Partner Organizations",
      description: "Companies, universities and communities",
      icon: <Building className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500`} />,
      color: "bg-gradient-to-r from-fuchsia-50 to-purple-50 border-fuchsia-100" 
    },
    {
      value: stats.projectsSubmitted,
      label: "Projects Submitted",
      description: "Solutions created through challenges",
      icon: <Lightbulb className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500`} />,
      color: "bg-gradient-to-r from-violet-50 to-fuchsia-50 border-violet-100"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Platform Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-6 text-gray-900">
              Our growing community
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers and students who are finding opportunities and building skills on DevNovate.
            </p>
          </motion.div>
        </div>
        
        {/* Mobile-optimized vertical scrolling with one card visible at a time */}
        {isMobile ? (
          <div className="relative overflow-hidden">
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6 }}
                className={`${card.color} border rounded-xl p-5 shadow-sm mb-4 hover:shadow-md transition-all duration-300 scroll-mt-4`}
                id={`stat-card-${index}`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div>
                    {card.icon}
                  </div>
                  <p className="font-semibold text-gray-900">{card.label}</p>
                </div>
                
                <h3 className="text-3xl font-bold mb-2">
                  {isLoading ? (
                    <div className="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
                    >
                      {new Intl.NumberFormat().format(card.value)}
                    </motion.span>
                  )}
                </h3>
                
                <p className="text-sm text-gray-600">{card.description}</p>
              </motion.div>
            ))}
            
            {/* No scroll indicators after the 4th card as requested */}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${card.color} border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                
                <h3 className="text-4xl font-bold mb-2">
                  {isLoading ? (
                    <div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
                    >
                      {new Intl.NumberFormat().format(card.value)}
                    </motion.span>
                  )}
                </h3>
                
                <p className="font-semibold text-gray-900 mb-1">{card.label}</p>
                <p className="text-sm text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}