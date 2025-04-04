
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavbarProps {
  onTryDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTryDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">BKIP.AI</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">How it Works</a>
          <a href="#cta" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">About Us</a>
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          className="hidden md:flex border-dolphin-400 hover:bg-dolphin-900/30 text-dolphin-400 transition-all duration-300 hover:scale-105"
          onClick={onTryDemo}
        >
          Try BKIP.AI
        </Button>
        
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-dolphin-900/30 transition-colors duration-300">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dolphin-950/95 border-dolphin-800">
            <SheetHeader>
              <SheetTitle className="text-gradient">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              <a 
                href="#features" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
              >
                How it Works
              </a>
              <a 
                href="#cta" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
              >
                About Us
              </a>
              <Button 
                className="mt-4 bg-dolphin-500 hover:bg-dolphin-600 text-white"
                onClick={onTryDemo}
              >
                Try BKIP.AI
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
