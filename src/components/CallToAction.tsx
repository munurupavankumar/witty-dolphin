import React from 'react';
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  onTryDemo: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onTryDemo }) => {
  // This is the original content from the CallToAction component,
  // but we're adding the onTryDemo prop to make it interactive
  
  // The internal implementation stays the same, just update any button 
  // click handlers to use the onTryDemo prop
  
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-background to-dolphin-950/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[500px] w-[500px] rounded-full bg-dolphin-500/10 blur-3xl"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Break Language Barriers?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of users who are already using BKIP.AI to make knowledge accessible across language barriers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-dolphin-500 hover:bg-dolphin-600 text-white hover:scale-105 transform transition-all duration-300"
              onClick={onTryDemo}
            >
              Try BKIP.AI Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-dolphin-400 hover:bg-dolphin-900/30 text-dolphin-400 hover:scale-105 transform transition-all duration-300"
              onClick={() => window.location.hash = "#features"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
