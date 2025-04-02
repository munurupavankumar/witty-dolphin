import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import LanguageAnimation from './LanguageAnimation';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const spotlight = containerRef.current.querySelector('.spotlight') as HTMLElement;
      if (!spotlight) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      spotlight.style.opacity = '1';
      spotlight.style.transform = `translate(${x - width/4}px, ${y - height/4}px)`;
    };
    
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16" ref={containerRef}>
      <div className="spotlight animate-spotlight"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center rounded-full border border-dolphin-700 bg-dolphin-900/20 px-3 py-1 text-sm animate-bounce">
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
              11 native Indian languages with text and speech.
            </p>

            <LanguageAnimation />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in animation-delay-300">
              <Button size="lg" className="bg-dolphin-500 hover:bg-dolphin-600 text-white transition-all duration-300 hover:scale-105 transform">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-dolphin-400 hover:bg-dolphin-900/30 text-dolphin-400 transition-all duration-300 hover:scale-105 transform">
                How it Works
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 opacity-0 animate-fade-in animation-delay-400">
              Empowering illiterate people with the ability to understand text in images, documents & more
            </p>
          </div>
          
          <div className="relative flex items-center justify-center opacity-0 animate-fade-in animation-delay-300">
            <div className="absolute inset-0 bg-gradient-radial from-dolphin-500/20 to-transparent rounded-full blur-xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-dolphin-600/30 shadow-xl animate-float hover:scale-105 transition-transform duration-500">
              {/* Hero image container with styled overlay */}
              <div className="relative">
                <img 
                  src="/assets/hero.png" 
                  alt="People reading together" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient to better blend with the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-dolphin-900/80 to-transparent opacity-60"></div>
                
                {/* Animated glow effect on book */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-32 h-32 bg-dolphin-500/30 rounded-full blur-xl animate-pulse-slow"></div>
                </div>
                
                {/* Text overlay highlighting the purpose */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dolphin-900 to-transparent">
                  <p className="text-lg font-medium text-white">Bridging literacy gaps across generations</p>
                  <p className="text-sm text-dolphin-200">Empowering communities through accessible language tools</p>
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