
import React, { useEffect, useState } from 'react';
import { Hammer, Wrench, Cog, PaintBucket, Sparkles } from 'lucide-react';

export const ConstructionAnimation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Cycle through tools for animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const tools = [
    { icon: <Hammer size={32} />, color: "text-blue-400" },
    { icon: <Wrench size={32} />, color: "text-purple-400" },
    { icon: <Cog size={32} className="animate-spin-slow" />, color: "text-green-400" },
    { icon: <PaintBucket size={32} />, color: "text-amber-400" }
  ];

  return (
    <div className="relative h-64 w-full glass rounded-xl p-6 overflow-hidden">
      {/* Main construction image - stylized gears/cogs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Cog size={180} className="text-gray-500 animate-spin-slow" />
        <Cog size={120} className="text-gray-600 animate-spin-slow animation-reverse absolute top-1/4 right-1/4" />
        <Cog size={100} className="text-gray-400 animate-spin-slow absolute bottom-1/4 left-1/3" />
      </div>
      
      {/* Animated tools */}
      <div className="relative z-10 h-full flex items-center justify-center gap-8">
        {tools.map((tool, index) => (
          <div 
            key={index}
            className={`transition-all duration-300 transform ${
              index === activeIndex 
                ? "scale-125 " + tool.color
                : "scale-100 text-gray-500 opacity-50"
            }`}
          >
            {tool.icon}
          </div>
        ))}
      </div>
      
      {/* Sparkles animation */}
      <div className="absolute bottom-4 right-4 animate-bounce text-yellow-400">
        <Sparkles size={24} />
      </div>
      <div className="absolute top-4 left-4 animate-pulse text-dolphin-400">
        <Sparkles size={24} />
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-dolphin-400 w-3" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
