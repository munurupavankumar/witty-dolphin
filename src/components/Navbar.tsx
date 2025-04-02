
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">BKIP.AI</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">How it Works</a>
          <a href="#cta" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Get Started</a>
        </div>
        <Button size="sm" variant="outline" className="hidden md:flex border-dolphin-400 hover:bg-dolphin-900/30 text-dolphin-400 transition-all duration-300 hover:scale-105">
          Try BKIP.AI
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-dolphin-900/30 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
