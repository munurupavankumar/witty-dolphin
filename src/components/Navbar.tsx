
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="animate-wave w-8 h-8 text-dolphin-500">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M15.5 9C15.5 10.1046 14.6046 11 13.5 11C12.3954 11 11.5 10.1046 11.5 9C11.5 7.89543 12.3954 7 13.5 7C14.6046 7 15.5 7.89543 15.5 9Z" fill="currentColor"/>
              <path d="M6 14.5C10 19 18 14 18 9C18 8.5 17.5 8 17 8.5C16.5 9 15 12 13.5 12C12 12 12 9 10 9C8 9 8 11.5 6 11.5C4 11.5 2 11 6 14.5Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="font-bold text-xl">Witty Dolphin</div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#cta" className="text-sm text-gray-300 hover:text-white transition-colors">Get Started</a>
        </div>
        <Button size="sm" variant="outline" className="hidden md:flex border-dolphin-400 hover:bg-dolphin-900/30 text-dolphin-400">
          Try BKIP.AI
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
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
