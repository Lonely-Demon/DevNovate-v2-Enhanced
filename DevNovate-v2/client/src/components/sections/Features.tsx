import { Button } from "@/components/ui/button";
import { UserCog, Search, CheckSquare, Zap, Award, Users, Clock, Sparkles, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function Features() {
  const isMobile = useIsMobile();
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - inspired by clipup.com */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
            How DevNovate Works
          </h2>
          <p className="text-lg text-gray-600">
            One platform, zero hassle. From discovery to participation, we've made tech challenges simple, accessible, and fun for Indian college students.
          </p>
        </div>
        
        {/* 1-Click Registration Feature Showcase */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className={`p-8 md:p-12 flex flex-col justify-center ${isMobile ? 'order-1' : 'order-2 lg:order-1'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600">SIGNATURE FEATURE</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6 text-gray-900">
                1-Click Registration System
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Register for any hackathon or challenge with just one click. No more repetitive forms, no more unnecessary steps. 
                Create your profile once, and you're all set to join any competition instantly.
              </p>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Save 95% of registration time</h4>
                    <p className="text-gray-600">What used to take 15 minutes now takes just seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Smart profile-matching</h4>
                    <p className="text-gray-600">Automatically fills required fields based on organizer requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Team formation simplified</h4>
                    <p className="text-gray-600">Invite teammates with a link - they can join with one click too</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md hover:shadow-lg w-fit px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 group transition-all duration-300 relative overflow-hidden"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  <span>Try it now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-gray-50 p-8 md:p-12 flex items-center justify-center order-1 lg:order-2">
              {/* 1-Click Registration Demo */}
              <div className="max-w-md w-full">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">AI Innovation Challenge 2025</h4>
                        <p className="text-xs text-gray-500">By Microsoft Student Partners</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-emerald-100 rounded-full text-xs whitespace-nowrap font-medium text-emerald-700">Registration Open</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <img src="https://i.pravatar.cc/100?img=1" alt="Participant" className="w-8 h-8 rounded-full border-2 border-white" />
                          <img src="https://i.pravatar.cc/100?img=2" alt="Participant" className="w-8 h-8 rounded-full border-2 border-white" />
                          <img src="https://i.pravatar.cc/100?img=3" alt="Participant" className="w-8 h-8 rounded-full border-2 border-white" />
                        </div>
                        <span className="text-sm text-gray-600 whitespace-nowrap">127 participants</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="whitespace-nowrap">5 days left</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="text-sm font-medium text-gray-500 mb-2">YOUR PROFILE STATUS</h5>
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Skills Profile</span>
                          </div>
                          <span className="text-xs text-emerald-700">Complete</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Educational Info</span>
                          </div>
                          <span className="text-xs text-emerald-700">Complete</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Contact Details</span>
                          </div>
                          <span className="text-xs text-emerald-700">Complete</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button className="join-button relative w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-300 group overflow-hidden">
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <span>Join with 1-Click</span>
                          <CheckSquare className="w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Animation indicator */}
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Core Features Grid - inspired by ruul.io's straightforwardness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Feature 1: Profile */}
          <FeatureCard
            icon={<UserCog className="w-10 h-10 text-primary" />}
            title="Create Your Profile"
            description="Build your tech profile once with skills, experience, and portfolio links – never fill out repetitive forms again."
            benefits={[
              "Complete skills assessment",
              "Link social and coding profiles",
              "Upload resume (optional)"
            ]}
          />
          
          {/* Feature 2: Discover */}
          <FeatureCard
            icon={<Search className="w-10 h-10 text-primary" />}
            title="Find Your Perfect Match"
            description="Discover challenges that align with your skills and goals using our smart filters and recommendation engine."
            benefits={[
              "Filter by tech, theme, or format",
              "Browse challenges by category",
              "Save favorites for later"
            ]}
          />
          
          {/* Feature 3: Skill Development */}
          <FeatureCard
            icon={<Award className="w-10 h-10 text-primary" />}
            title="Develop Your Skills"
            description="Participate in challenges designed for Indian college students to enhance technical skills and build a strong portfolio."
            benefits={[
              "Gain practical experience",
              "Receive mentorship and feedback",
              "Build real-world projects"
            ]}
          />
        </div>
        
        {/* Additional college-friendly features with modern design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Team Formation Feature */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Team Formation</h3>
              <p className="text-gray-600 mb-6">
                Find the perfect teammates or join existing teams with our intelligent matchmaking system based on skills and interests.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Browse available teams or create your own</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Find teammates with complementary skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Built-in chat and coordination tools</p>
                </div>
              </div>
              
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                Learn more
              </Button>
            </div>
          </motion.div>
          
          {/* Badges & Recognition Feature */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Badges & Recognition</h3>
              <p className="text-gray-600 mb-6">
                Earn verifiable badges and certifications that enhance your portfolio and showcase your practical tech skills.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Team Player</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Code Explorer</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Problem Solver</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Innovator</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Consistent</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Hot Streak</p>
                </div>
              </div>
              
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                View badge gallery
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Showcase Feature - Portfolio Builder */}
        <motion.div 
          className="rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">PORTFOLIO BUILDER</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-gray-900">Showcase your verified tech journey</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Every challenge participation is tracked and added to your dynamic tech portfolio. 
                Use this as a living resume that demonstrates your practical hands-on experience.
              </p>
              
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Automatic achievement tracking</h4>
                    <p className="text-gray-600">All your projects and challenge completions automatically appear on your profile</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Skills verification</h4>
                    <p className="text-gray-600">Earn badges and certifications for skills demonstrated in challenges</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Share with potential employers</h4>
                    <p className="text-gray-600">Generate a custom, shareable portfolio link that showcases your achievements</p>
                  </div>
                </li>
              </ul>
              
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-lg py-6 px-6 inline-flex items-center justify-center font-medium shadow-sm hover:shadow transition-all w-fit relative overflow-hidden group">
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  <span>Create your portfolio</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </Button>
            </div>
            
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
              {/* Portfolio showcase mockup - modern for college students */}
              <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl mr-4 shadow-sm">
                      <span>DS</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">David Singh</h4>
                      <p className="text-gray-600 text-sm flex items-center">
                        <span>Computer Science Student</span>
                        <span className="mx-2">•</span>
                        <span className="text-primary font-medium">12 Achievements</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-semibold text-gray-900">Recent Achievements</h5>
                    <Button variant="ghost" className="text-xs h-7 px-2">View all</Button>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-grow">
                        <h6 className="font-medium text-sm text-gray-900">Web3 Hackathon</h6>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-600">2nd Place</p>
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Verified</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-grow">
                        <h6 className="font-medium text-sm text-gray-900">AI Challenge</h6>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-600">Completed</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Certified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-3">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">JavaScript</span>
                      <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">Python</span>
                      <span className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">+5 more</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-gray-200 text-gray-700 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                    <span>Share profile</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <motion.div 
      className="feature-card bg-white rounded-2xl shadow-md hover:shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:translate-y-[-5px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-gray-700 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
