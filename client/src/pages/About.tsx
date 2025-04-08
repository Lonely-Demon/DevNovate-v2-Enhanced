import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Lightbulb, Gift, Trophy, Heart, Users, Globe, BarChart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Transforming How Students Engage with Tech Challenges
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                DevNovate is streamlining the way college students discover, join, and participate 
                in hackathons, coding competitions, and tech challenges across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/challenges">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 relative overflow-hidden group">
                    {/* Shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    
                    <span className="relative z-10">Explore Challenges</span>
                  </Button>
                </Link>
                <Button variant="outline" className="border-gray-300">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                At DevNovate, we're dedicated to creating a more accessible, inclusive, and 
                streamlined challenge participation experience for India's future tech leaders.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Empower Students</h3>
                <p className="text-gray-600">
                  Enable students to build portfolios, gain real-world experience, and connect with peers through tech challenges.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Bridge the Gap</h3>
                <p className="text-gray-600">
                  Connect organizers with talented students by removing barriers to challenge participation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Foster Innovation</h3>
                <p className="text-gray-600">
                  Create an environment where creative ideas flourish through collaboration and competition.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      The idea for DevNovate was born out of frustration. As college students passionate about 
                      hackathons, we faced the same challenge repeatedly: spending hours filling out the same 
                      information for each event we wanted to join.
                    </p>
                    <p>
                      We wondered: Why isn't there a platform that streamlines this process? A place where students 
                      could create a single profile and join any challenge with just one click?
                    </p>
                    <p>
                      That question led to the creation of DevNovate in 2024 – a platform dedicated to making 
                      tech challenges more accessible for students across India while helping organizers connect 
                      with the right talent.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Core Values</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: <Lightbulb className="w-5 h-5" />, text: "Innovation at every step" },
                        { icon: <Heart className="w-5 h-5" />, text: "Passion for community growth" },
                        { icon: <Users className="w-5 h-5" />, text: "Inclusivity across skill levels" },
                        { icon: <Trophy className="w-5 h-5" />, text: "Excellence in execution" }
                      ].map((value, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {value.icon}
                          </div>
                          <span>{value.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">From Our Founder</h3>
                      </div>
                      <blockquote className="pl-4 border-l-4 border-primary/30 italic text-gray-600">
                        "We built DevNovate to solve a real problem we experienced as students. Our goal is to make the tech challenge ecosystem more efficient and accessible for everyone involved."
                      </blockquote>
                      <div className="mt-4 flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                        <div>
                          <p className="font-medium text-gray-900">Rahul Sharma</p>
                          <p className="text-sm text-gray-500">CEO & Co-founder</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">Our Impact So Far</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-gray-700">Students</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">2,500+</p>
                          <p className="text-xs text-gray-500">Registered users</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Trophy className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-medium text-gray-700">Challenges</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">120+</p>
                          <p className="text-xs text-gray-500">Hosted on platform</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Gift className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-gray-700">Prizes</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">₹25L+</p>
                          <p className="text-xs text-gray-500">Awarded to winners</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <BarChart className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">Growth</span>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">150%</p>
                          <p className="text-xs text-gray-500">Monthly increase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-primary/5 p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Transform Your Challenge Experience?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of students and organizers who are simplifying tech challenges with DevNovate.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/challenges">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-sm px-8 py-6 text-lg relative overflow-hidden group">
                    {/* Shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Challenges <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}