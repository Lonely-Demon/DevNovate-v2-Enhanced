import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Award, Building2, Code, ArrowRight, Zap, Flag, BarChart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface StatsProps {
  stats: {
    registeredDevelopers: number;
    hostedChallenges: number;
    partnerOrganizations: number;
    projectsSubmitted: number;
  };
  isLoading: boolean;
}

export function Stats({ stats, isLoading }: StatsProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements inspired by Novu.co */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Community Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">Powering the DevNovate Ecosystem</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform connects talented college developers with high-quality opportunities to learn, 
              compete, and build a career through innovative technical challenges.
            </p>
          </motion.div>
        </div>
        
        {/* Stats grid with modern design inspired by Novu.co */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          <StatCard
            value={stats.registeredDevelopers}
            suffix="K+"
            label="Active Developers"
            description="Tech enthusiasts building their skills through challenges"
            icon={<Users className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
            isLoading={isLoading}
            delay={0}
          />
          
          <StatCard
            value={stats.hostedChallenges}
            suffix="+"
            label="Challenges Hosted"
            description="From beginner to expert level learning opportunities"
            icon={<Award className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-emerald-500 to-emerald-600"
            isLoading={isLoading}
            delay={0.1}
          />
          
          <StatCard
            value={stats.partnerOrganizations}
            suffix="+"
            label="Partner Organizations"
            description="Top tech companies and institutions that trust us"
            icon={<Building2 className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-violet-500 to-violet-600"
            isLoading={isLoading}
            delay={0.2}
          />
          
          <StatCard
            value={stats.projectsSubmitted}
            suffix="K+"
            label="Projects Created"
            description="Innovative solutions showcasing creativity and skill"
            icon={<Code className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-amber-500 to-amber-600"
            isLoading={isLoading}
            delay={0.3}
          />
        </div>
        
        {/* Growth metrics card - inspired by Clickup.com */}
        <motion.div 
          className="relative mt-24 mb-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-100/30 rounded-3xl blur-xl opacity-80 -z-10 transform scale-105"></div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">Platform Impact</span>
                  <h3 className="text-2xl font-bold mt-3 text-gray-900">Growing with the student community</h3>
                  <p className="text-gray-600 mt-2">Our growth metrics demonstrate how we're making tech challenges accessible to all college students</p>
                </div>
                <Button className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white gap-2 group">
                  <span>Join our community</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">98%</h4>
                      <p className="text-xs text-gray-600">Growth YoY</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Nearly doubled our developer community in just one year</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Flag className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">12K+</h4>
                      <p className="text-xs text-gray-600">New registrations</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">New college hackers joined our platform this year</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <BarChart className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">5x</h4>
                      <p className="text-xs text-gray-600">Hackathon growth</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">More institutions are hosting challenges on our platform</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Inspired by Ruul.io with the directness they have */}
        <div className="text-center mt-16">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Start your tech journey</span>
            <Zap className="w-5 h-5" />
          </Button>
          <p className="text-gray-600 mt-4 text-sm">Join 1,200+ students already building their portfolio</p>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  isLoading: boolean;
  delay: number;
}

function StatCard({ value, suffix, label, description, icon, iconBg, isLoading, delay }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isLoading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue(0, value, 2000);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [value, isLoading]);
  
  const animateValue = (start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card 
        ref={cardRef}
        className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl border border-gray-100 
        transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group overflow-hidden"
      >
        <div className="flex items-start justify-between mb-6">
          {/* Modern shaped icon */}
          <div className={`p-3 rounded-xl ${iconBg} shadow-sm`}>
            {icon}
          </div>
          
          {/* Line graph decoration - purely decorative */}
          <svg className="w-20 h-10 text-gray-100 group-hover:text-primary/10 transition-colors duration-300" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40h100V0H0v40z" fill="transparent"/>
            <path d="M0 30.293L7.075 23.5l7.813 7.5L23.962 22l7.813 7.5L40.566 20l7.812 12L57.17 18.5l7.812 12L73.774 18l7.812 15.5L89.4 22l10.618 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          {/* Number */}
          <div className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            {isLoading ? (
              <Skeleton className="h-12 w-20" />
            ) : (
              <>
                {displayValue}{suffix}
              </>
            )}
          </div>
          
          {/* Label */}
          {isLoading ? (
            <div className="font-medium mb-1">
              <Skeleton className="h-6 w-32" />
            </div>
          ) : (
            <p className="font-medium text-gray-900">
              {label}
            </p>
          )}
          
          {/* Description */}
          {isLoading ? (
            <div>
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
