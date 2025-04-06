import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Filter, Clock, MapPin, Users, Award, ArrowRight, ChevronRight, Tag } from "lucide-react";
import { HackathonWithRegistrationStatus } from "@shared/schema";

// Helper function to format dates
const formatDate = (dateString: Date | string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = dateString instanceof Date ? dateString : new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

// Helper function to calculate days left
const getDaysLeft = (dateString: Date | string): number => {
  const today = new Date();
  const endDate = dateString instanceof Date ? dateString : new Date(dateString);
  const diffTime = endDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

// Helper function to get format classes
const getFormatClasses = (format: string): string => {
  switch (format.toLowerCase()) {
    case 'hackathon':
      return 'bg-violet-100 text-violet-800 border-violet-200';
    case 'competition':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'bounty':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'open source':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Fetch all hackathons
  const { data: hackathons = [], isLoading } = useQuery<HackathonWithRegistrationStatus[]>({
    queryKey: ['/api/hackathons'],
    select: (data) => data.map(hackathon => ({
      ...hackathon,
      daysLeft: getDaysLeft(hackathon.endDate)
    }))
  });

  const filteredHackathons = hackathons.filter(hackathon => {
    if (activeTab === "all") return true;
    if (activeTab === "active" && hackathon.daysLeft && hackathon.daysLeft > 0) return true;
    if (activeTab === "upcoming" && new Date(hackathon.startDate) > new Date()) return true;
    if (activeTab === "completed" && hackathon.daysLeft !== undefined && hackathon.daysLeft === 0) return true;
    return false;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Discover Challenges
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect hackathon, competition, or bounty to showcase your skills, 
              build your portfolio, and connect with top companies.
            </p>
          </div>
          
          {/* Filters and Tabs */}
          <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="text-sm flex items-center gap-2" onClick={() => setActiveFilter(activeFilter === "filter" ? null : "filter")}>
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          {/* Challenge Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-full mb-1" />
                    <Skeleton className="h-6 w-4/5" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                    <div className="flex items-center mt-5 justify-between">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              filteredHackathons.map((hackathon) => (
                <Card key={hackathon.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <Badge className={`${getFormatClasses(hackathon.format)}`}>
                        {hackathon.format}
                      </Badge>
                      {hackathon.daysLeft !== undefined && hackathon.daysLeft > 0 ? (
                        <span className="text-xs font-medium text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {hackathon.daysLeft} days left
                        </span>
                      ) : (
                        <Badge variant="outline" className="bg-gray-100 text-gray-500">
                          Completed
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-gray-900 mt-1">
                      {hackathon.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 line-clamp-2 mt-1">
                      {hackathon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {hackathon.location || "Remote"}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-gray-400" />
                          {hackathon.registrations} registered
                        </div>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {formatDate(hackathon.startDate)}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-gray-400" />
                          ₹{hackathon.prize} Prize
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {hackathon.technologies && hackathon.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700">
                            {tech}
                          </Badge>
                        ))}
                        {hackathon.technologies && hackathon.technologies.length > 3 && (
                          <Badge variant="outline" className="bg-gray-50 text-gray-700">
                            +{hackathon.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 py-3 px-6 border-t border-gray-100">
                    <div className="w-full flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        by <span className="font-medium text-gray-700">{hackathon.organizer}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-primary font-medium text-sm p-2"
                      >
                        View details <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}

            {!isLoading && filteredHackathons.length === 0 && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 py-12 text-center bg-gray-50 rounded-xl">
                <div className="max-w-md mx-auto">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No challenges found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any challenges matching your current filters.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setActiveTab("all");
                      setActiveFilter(null);
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Load more button */}
          {!isLoading && filteredHackathons.length > 9 && (
            <div className="mt-10 text-center">
              <Button variant="outline" className="px-8">
                Load more
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Calendar icon component for the challenge cards
function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}