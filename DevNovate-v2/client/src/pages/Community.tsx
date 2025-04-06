import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Users, MessageCircle, Trophy, Calendar, ArrowRight, Bookmark, Share2, ThumbsUp, ExternalLink } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Join Our Growing Community
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with fellow developers, share your projects, get advice, and stay updated on the latest challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 relative overflow-hidden group">
                  {/* Shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  
                  <span className="relative z-10">Join Discord</span>
                </Button>
                <Button className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 hover:text-gray-900 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    Follow on Twitter
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">Community Members</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">5K+</p>
                <p className="text-sm text-gray-500">Monthly Discussions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Project Showcases</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Monthly Events</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community forum section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Community Discussions</h2>
                <div className="mt-4 md:mt-0">
                  <Input 
                    placeholder="Search discussions..." 
                    className="w-full md:w-64"
                  />
                </div>
              </div>
              
              <Tabs defaultValue="popular" className="mb-8">
                <TabsList className="w-full md:w-auto grid grid-cols-4 md:inline-flex">
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="popular" className="mt-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Tips for winning hackathons as a beginner?",
                        category: "Advice",
                        author: "Priya M.",
                        replies: 28,
                        likes: 42,
                        time: "2 days ago",
                        tags: ["beginners", "hackathons", "tips"]
                      },
                      {
                        title: "Best way to showcase projects in your portfolio",
                        category: "Discussion",
                        author: "Ajay K.",
                        replies: 19,
                        likes: 35,
                        time: "4 days ago",
                        tags: ["portfolio", "career"]
                      },
                      {
                        title: "Learning React vs Angular in 2024 - which is better for hackathons?",
                        category: "Question",
                        author: "Vikram S.",
                        replies: 42,
                        likes: 31,
                        time: "1 week ago",
                        tags: ["react", "angular", "frameworks"]
                      },
                      {
                        title: "DevNovate helped me land an internship at Google!",
                        category: "Success Story",
                        author: "Neha R.",
                        replies: 53,
                        likes: 124,
                        time: "2 weeks ago",
                        tags: ["success", "internship", "google"]
                      }
                    ].map((discussion, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                              {discussion.category}
                            </span>
                            <span className="text-xs text-gray-500">{discussion.time}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-gray-900">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>By {discussion.author}</span>
                            <span className="mx-2">•</span>
                            <span>{discussion.replies} replies</span>
                            <span className="mx-2">•</span>
                            <span>{discussion.likes} likes</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {discussion.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                                <ThumbsUp className="w-4 h-4" />
                                <span>Like</span>
                              </button>
                              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                                <MessageCircle className="w-4 h-4" />
                                <span>Reply</span>
                              </button>
                              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                                <Bookmark className="w-4 h-4" />
                                <span>Save</span>
                              </button>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                              <Share2 className="w-4 h-4" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 relative overflow-hidden group">
                      {/* Shine effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      
                      <span className="relative z-10 flex items-center gap-2">
                        View more discussions
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="recent">
                  <div className="p-8 text-center bg-white border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Select the "Popular" tab to see sample discussions.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="unanswered">
                  <div className="p-8 text-center bg-white border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Select the "Popular" tab to see sample discussions.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="resources">
                  <div className="p-8 text-center bg-white border border-gray-200 rounded-lg">
                    <p className="text-gray-500">Select the "Popular" tab to see sample discussions.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Upcoming events */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Upcoming Community Events</h2>
                <Link href="/challenges">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white hidden md:flex items-center gap-2 relative overflow-hidden group">
                    {/* Shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    
                    <span className="relative z-10 flex items-center gap-2">
                      View all events <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "React Beginners Workshop",
                    date: "June 15, 2024",
                    time: "2:00 PM - 4:00 PM IST",
                    host: "DevNovate Team",
                    attendees: 126,
                    location: "Online",
                    image: "bg-gradient-to-r from-blue-500 to-violet-500"
                  },
                  {
                    title: "Hackathon Success Stories",
                    date: "June 20, 2024",
                    time: "6:00 PM - 7:30 PM IST",
                    host: "Industry Experts Panel",
                    attendees: 85,
                    location: "Online",
                    image: "bg-gradient-to-r from-amber-500 to-pink-500"
                  },
                  {
                    title: "Portfolio Review Session",
                    date: "June 25, 2024",
                    time: "3:00 PM - 5:00 PM IST",
                    host: "HR & Tech Leads",
                    attendees: 52,
                    location: "Online",
                    image: "bg-gradient-to-r from-emerald-500 to-teal-500"
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className={`h-36 ${event.image} flex items-center justify-center`}>
                      <Calendar className="w-16 h-16 text-white opacity-25" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          Hosted by <span className="font-medium text-gray-700">{event.host}</span>
                        </span>
                        <Button variant="ghost" size="sm" className="text-primary">
                          <span className="flex items-center gap-1">
                            Join <ExternalLink className="w-3 h-3" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center md:hidden">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 relative overflow-hidden group">
                  {/* Shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    View all events
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join community CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Join Our Community?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with thousands of developers, get help with your projects, and stay updated on the latest hackathons and tech challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-6 text-lg relative overflow-hidden group">
                  {/* Shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  
                  <span className="relative z-10">Join Discord Community</span>
                </Button>
                <Link href="/challenges">
                  <Button className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 hover:text-gray-900 px-8 py-6 text-lg relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Challenges
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
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