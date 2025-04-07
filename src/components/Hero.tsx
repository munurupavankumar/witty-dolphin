import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import LanguageAnimation from './LanguageAnimation';
import heroImage from './assets/hero.png';
import { motion } from 'framer-motion';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip mouse effects on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      setMousePosition({ x, y });
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    container?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  const calculateTransform = (x: number, y: number) => {
    if (!containerRef.current || isMobile) return { x: 0, y: 0 };
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    const moveX = (x - width / 2) / 50;
    const moveY = (y - height / 2) / 50;
    
    return { x: moveX, y: moveY };
  };

  const transform = calculateTransform(mousePosition.x, mousePosition.y);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden" ref={containerRef}>
      {/* Enhanced background effects - simplified for mobile */}
      <div className="absolute inset-0 bg-dolphin-950 z-0">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-dolphin-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-dolphin-700/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Spotlight effect - only on desktop */}
      {!isMobile && (
        <div className={`spotlight absolute w-64 h-64 rounded-full bg-gradient-radial from-dolphin-500/30 to-transparent blur-2xl transition-all duration-300 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            left: `${mousePosition.x - 128}px`, 
            top: `${mousePosition.y - 128}px`
          }}
        ></div>
      )}
      
      {/* Interactive particles - fewer on mobile */}
      {!isMobile && <InteractiveParticles mousePosition={mousePosition} particleCount={20} />}
      {isMobile && <InteractiveParticles mousePosition={mousePosition} particleCount={10} />}
      
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center rounded-full border border-dolphin-700 bg-dolphin-900/40 px-2 py-1 text-xs md:text-sm backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-dolphin-500 mr-2 pulse-animation"></span>
                <span>Introducing BKIP.AI</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="block">Because Knowledge</span>
              <span className="block bg-gradient-to-r from-dolphin-300 to-dolphin-500 bg-clip-text text-transparent">Is Power</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-xl text-gray-300/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Breaking language barriers through AI.
            </motion.p>

            {/* Mobile-optimized language animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-10 md:h-16 flex items-center"
            >
              <div className="flex items-center pr-4 md:pr-20">
                <LanguageAnimation />
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                size={isMobile ? "default" : "lg"}
                className="relative overflow-hidden bg-gradient-to-r from-dolphin-500 to-dolphin-600 text-white transition-all duration-300 hover:scale-105 transform group"
                onClick={onGetStarted}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-dolphin-400 to-dolphin-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button 
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                size={isMobile ? "default" : "lg"}
                variant="outline" 
                className="border-dolphin-400 hover:bg-dolphin-900/40 text-dolphin-400 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
              >
                How it Works
              </Button>
            </motion.div>
            
            {!isMobile && (
              <motion.p 
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                Convert information written in 100+ languages into 11 native Indian languages.
              </motion.p>
            )}
          </motion.div>
          
          <motion.div 
            className="relative flex items-center justify-center mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ 
              transform: !isMobile ? `perspective(1000px) rotateY(${transform.x}deg) rotateX(${-transform.y}deg)` : 'none',
              transition: isHovering && !isMobile ? 'none' : 'transform 0.5s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-dolphin-500/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative w-full max-w-2xl overflow-hidden rounded-xl md:rounded-2xl border border-dolphin-600/30 shadow-2xl backdrop-blur-sm bg-dolphin-950/40">
              {/* Hero image container with improved styling */}
              <div className="relative aspect-video">
                <img 
                  src={heroImage} 
                  alt="People reading together" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Improved overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dolphin-950 via-dolphin-900/50 to-transparent opacity-70"></div>
                
                {/* Enhanced glow effects - simplified for mobile */}
                {!isMobile && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse-slow absolute w-48 h-48 bg-dolphin-500/30 rounded-full blur-3xl"></div>
                  </div>
                )}
                
                {/* Text overlay with improved styling - shortened for mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-dolphin-950 to-transparent">
                  <p className="text-sm md:text-lg font-medium text-white/90 drop-shadow-md">
                    {isMobile ? "Making knowledge accessible to India." : "Making knowledge accessible to the most ignored segments of India."}
                  </p>
                </div>
                
                {/* Floating elements - fewer on mobile */}
                {!isMobile && (
                  <>
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-dolphin-400/40 to-dolphin-600/40 rounded-lg backdrop-blur-sm rotate-12 animate-float-slow"></div>
                    <div className="absolute bottom-24 right-12 w-8 h-8 bg-gradient-to-br from-dolphin-500/40 to-dolphin-700/40 rounded-full backdrop-blur-sm animate-float"></div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Interactive particles with configurable count
const InteractiveParticles = ({ mousePosition, particleCount = 20 }) => {
  const [particles, setParticles] = useState(() => 
    Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      speed: Math.random() * 0.03 + 0.01
    }))
  );

  useEffect(() => {
    if (!mousePosition.x && !mousePosition.y) return;

    const timer = requestAnimationFrame(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate distance from mouse
          const dx = (mousePosition.x / window.innerWidth) * 100 - particle.x;
          const dy = (mousePosition.y / window.innerHeight) * 100 - particle.y;
          
          // Move particle slightly away from mouse
          const moveX = particle.x + dx * -0.01;
          const moveY = particle.y + dy * -0.01;
          
          // Ensure particles stay within bounds and gradually return to initial position
          const returnToInitialX = (particle.initialX - moveX) * particle.speed;
          const returnToInitialY = (particle.initialY - moveY) * particle.speed;
          
          return {
            ...particle,
            x: moveX + returnToInitialX,
            y: moveY + returnToInitialY
          };
        })
      );
    });

    return () => cancelAnimationFrame(timer);
  }, [mousePosition]);

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="absolute bg-dolphin-500/30 rounded-full transition-transform duration-300 ease-out"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;