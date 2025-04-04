
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-dolphin-900/30 to-background"></div>
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 text-center transform transition-transform hover:scale-[1.02] duration-500">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-dolphin-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-dolphin-500/10 rounded-full blur-3xl animate-pulse"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative animate-fade-in">
            Join the <span className="text-gradient">Knowledge Revolution</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Start breaking language barriers today. BKIP.AI is making knowledge accessible to everyone, 
            regardless of literacy level or language preference.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in animation-delay-200">
            <Button size="lg" className="bg-dolphin-500 hover:bg-dolphin-600 text-white transition-all duration-300 hover:scale-105 transform">
              Try BKIP.AI for Free
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in animation-delay-300">
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 hover:bg-gray-800/80 transition-colors duration-300 hover:scale-105 transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 hover:bg-gray-800/80 transition-colors duration-300 hover:scale-105 transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h.01"></path>
                <path d="M10 7h7"></path>
                <path d="M7 11h.01"></path>
                <path d="M10 11h7"></path>
                <path d="M7 15h.01"></path>
                <path d="M10 15h7"></path>
              </svg>
              <span className="text-sm">11 Indian Languages</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 hover:bg-gray-800/80 transition-colors duration-300 hover:scale-105 transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400">
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className="text-sm">Real-time Processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
