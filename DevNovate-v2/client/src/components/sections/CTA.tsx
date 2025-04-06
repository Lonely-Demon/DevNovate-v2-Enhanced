import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-pink-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your challenge experience?</h2>
              <p className="text-white text-opacity-90 text-lg mb-8">Create your profile once, register for challenges with a single click, and build a verifiable portfolio of your technical achievements.</p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg">
                  Join with 1-Click
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  For Organizers
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
              {/* Abstract decoration */}
              <div className="absolute inset-0 bg-white bg-opacity-10">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="rgba(255,255,255,0.05)" cx="200" cy="200" r="150"/>
                    <circle fill="rgba(255,255,255,0.05)" cx="200" cy="200" r="120"/>
                    <circle fill="rgba(255,255,255,0.05)" cx="200" cy="200" r="90"/>
                    <circle fill="rgba(255,255,255,0.05)" cx="200" cy="200" r="60"/>
                    <circle fill="rgba(255,255,255,0.05)" cx="200" cy="200" r="30"/>
                  </g>
                </svg>
              </div>
              
              {/* Stats */}
              <div className="relative flex flex-col justify-center items-center h-full p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">1-Click</div>
                  <div className="text-white text-opacity-80">Registration</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">~3 min</div>
                    <div className="text-white text-opacity-80 text-sm">Create Profile</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">1 sec</div>
                    <div className="text-white text-opacity-80 text-sm">Join Challenges</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-white text-opacity-80 text-sm">Active Challenges</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">15K+</div>
                    <div className="text-white text-opacity-80 text-sm">Developers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
