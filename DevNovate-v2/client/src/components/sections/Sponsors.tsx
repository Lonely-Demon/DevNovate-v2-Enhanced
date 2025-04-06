import React, { useEffect, useState } from "react";
import {
  FaMicrosoft, 
  FaGoogle, 
  FaApple, 
  FaAmazon, 
  FaUber, 
  FaSlack, 
  FaSpotify
} from "react-icons/fa6";
import { SiNetflix, SiUnity, SiNvidia, SiSamsung } from "react-icons/si";

// Function to return authentic brand colors
const getCompanyColor = (company: string): string => {
  const colors: { [key: string]: string } = {
    Microsoft: "#00A4EF",
    Google: "#4285F4",
    Apple: "#999999",
    Amazon: "#FF9900",
    Uber: "#000000",
    Samsung: "#1428A0",
    Netflix: "#E50914",
    Slack: "#4A154B",
    Unity: "#000000",
    Spotify: "#1DB954",
    NVIDIA: "#76B900"
  };
  
  return colors[company] || "#000000";
};

// Sponsors carousel with authentic company logos
export function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate the carousel smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 11);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Array of all sponsor logos and names with official brand logos
  const sponsorsList = [
    { Logo: FaMicrosoft, name: "Microsoft" },
    { Logo: FaGoogle, name: "Google" },
    { Logo: FaApple, name: "Apple" },
    { Logo: FaAmazon, name: "Amazon" },
    { Logo: FaUber, name: "Uber" },
    { Logo: SiSamsung, name: "Samsung" },
    { Logo: SiNetflix, name: "Netflix" },
    { Logo: FaSlack, name: "Slack" },
    { Logo: SiUnity, name: "Unity" },
    { Logo: FaSpotify, name: "Spotify" },
    { Logo: SiNvidia, name: "NVIDIA" }
  ];
  
  // Get visible sponsors (7 total - 3 before current, current, 3 after current)
  const getVisibleSponsors = () => {
    const visibleSponsors = [];
    for (let i = -3; i <= 3; i++) {
      const index = (currentIndex + i + sponsorsList.length) % sponsorsList.length;
      visibleSponsors.push({ 
        ...sponsorsList[index],
        position: i 
      });
    }
    return visibleSponsors;
  };
  
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-medium text-gray-900">
            We work with
          </h2>
        </div>
        
        <div className="relative py-8">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center space-x-20 md:space-x-24 sponsor-carousel">
              {getVisibleSponsors().map((sponsor, index) => {
                const position = sponsor.position;
                const isCenter = position === 0;
                
                return (
                  <div 
                    key={index} 
                    className="transition-all duration-700 ease-in-out flex flex-col items-center"
                    style={{ 
                      transform: isCenter ? 'scale(1.25)' 
                               : Math.abs(position) === 1 ? 'scale(0.9)'
                               : Math.abs(position) === 2 ? 'scale(0.8)'
                               : 'scale(0.7)',
                      opacity: isCenter ? 1 
                              : Math.abs(position) === 1 ? 0.9
                              : Math.abs(position) === 2 ? 0.8
                              : 0.6
                    }}
                  >
                    <div>
                      <sponsor.Logo 
                        className={`h-16 md:h-20 w-auto ${Math.abs(position) >= 1 ? 'opacity-80' : ''}`} 
                        style={{ 
                          color: getCompanyColor(sponsor.name)
                        }}
                      />
                    </div>
                    <span className={`text-sm font-medium mt-3`} style={{ color: getCompanyColor(sponsor.name) }}>
                      {sponsor.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
