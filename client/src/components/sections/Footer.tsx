import { Rocket, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { 
  SiInstagram, 
  SiX, 
  SiGithub, 
  SiYoutube,
  SiDiscord,
  SiLinkedin
} from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-8 border-t border-gray-200">      
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand and mission */}
          <div className="md:col-span-3 lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-500/10 rounded-xl">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <span className="font-display text-xl font-semibold text-gray-900">DevNovate</span>
            </div>
            <p className="text-gray-600 mb-6">
              The central hub for college students to discover, instantly join, and showcase achievements from a diverse range of technical challenges. No forms, just fun.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <SiX className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <SiDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info - inspired by Novu.co */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-gray-900 font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600 text-sm">123 Innovation Boulevard, Tech District, CA 94103</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">hello@devnovate.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation columns */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">How it works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-6">For Students</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Browse Challenges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Create Profile</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Tech Stack Filter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Learning Resources</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-6">For Organizers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Host a Challenge</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Organizer Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Talent Recruitment</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} DevNovate. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
