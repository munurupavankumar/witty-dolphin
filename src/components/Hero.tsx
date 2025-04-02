
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import LanguageAnimation from './LanguageAnimation';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen flex items-center pt-16" ref={containerRef}>
      <div className="spotlight animate-spotlight"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center rounded-full border border-dolphin-700 bg-dolphin-900/20 px-3 py-1 text-sm">
                <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-dolphin-500 mr-2"></span>
                <span>Introducing BKIP.AI</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block opacity-0 animate-fade-in">Because Knowledge</span>
              <span className="block text-gradient opacity-0 animate-fade-in animation-delay-100">Is Power</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 opacity-0 animate-fade-in animation-delay-200">
              Breaking language barriers for everyone. Convert images from 100+ languages into 
              10+ native Indian languages with text and speech.
            </p>

            <LanguageAnimation />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in animation-delay-300">
              <Button size="lg" className="bg-dolphin-500 hover:bg-dolphin-600 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-dolphin-400 hover:bg-dolphin-900/30 text-dolphin-400">
                How it Works
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 opacity-0 animate-fade-in animation-delay-400">
              Empowering illiterate people with the ability to understand text in images, documents & more
            </p>
          </div>
          
          <div className="relative flex items-center justify-center opacity-0 animate-fade-in animation-delay-300">
            <div className="absolute inset-0 bg-gradient-radial from-dolphin-500/20 to-transparent rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-1 rounded-2xl border border-gray-800 shadow-xl animate-float">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] w-full max-w-lg">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-8 bg-gray-900 flex items-center px-4 space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 p-4 flex flex-col">
                      <div className="flex space-x-4 mb-4">
                        <div className="w-1/3 h-8 bg-dolphin-800/30 rounded animate-pulse"></div>
                        <div className="w-1/2 h-8 bg-dolphin-700/20 rounded"></div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-dolphin-900/40 to-dolphin-700/20 rounded-lg p-4 flex flex-col">
                          <div className="w-10 h-10 rounded-full bg-dolphin-500/50 mb-3"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-4/5"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-3/5"></div>
                          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-900/20 to-amber-700/10 rounded-lg p-4 flex flex-col">
                          <div className="w-10 h-10 rounded-full bg-amber-500/30 mb-3"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-3/4"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-5/6"></div>
                          <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/30 rounded-lg p-4 flex flex-col">
                          <div className="w-10 h-10 rounded-full bg-gray-600 mb-3"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-2/3"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-4/5"></div>
                          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                        </div>
                        <div className="bg-gradient-to-br from-dolphin-900/40 to-dolphin-800/20 rounded-lg p-4 flex flex-col">
                          <div className="w-10 h-10 rounded-full bg-dolphin-500/40 mb-3"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-3/4"></div>
                          <div className="h-3 bg-gray-700 rounded mb-2 w-1/2"></div>
                          <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
