
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onTryDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTryDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Add scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="w-full px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">Witty Dolphin</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">How it Works</a>
          
          {/* Desktop Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 p-0 h-auto bg-transparent">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-dolphin-400 z-50 min-w-[200px]">
              <DropdownMenuItem className="hover:bg-dolphin-900/30 cursor-pointer">
                <a href="#" className="w-full text-sm py-1">BKIP.AI</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-dolphin-900/30 cursor-pointer">
                <a href="#" className="w-full text-sm py-1">WD Journey Builder</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-dolphin-900/30 cursor-pointer">
                <a href="#" className="w-full text-sm py-1">Whatsapp Bot</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="#about-us" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">About Us</a>
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
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-dolphin-900/30 transition-colors duration-300">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" variant="solid" className="bg-black">
            <SheetHeader>
              <SheetTitle className="text-gradient">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              <a 
                href="#features" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
                onClick={handleNavItemClick}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
                onClick={handleNavItemClick}
              >
                How it Works
              </a>
              
              {/* Mobile Products Submenu */}
              <div className="flex flex-col space-y-2">
                <p className="text-lg text-gray-300">Products</p>
                <div className="flex flex-col space-y-2 ml-4">
                  <a 
                    href="#" 
                    className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200"
                    onClick={handleNavItemClick}
                  >
                    BKIP.AI
                  </a>
                  <a 
                    href="#" 
                    className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200"
                    onClick={handleNavItemClick}
                  >
                    WD Journey Builder
                  </a>
                  <a 
                    href="#" 
                    className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200"
                    onClick={handleNavItemClick}
                  >
                    Whatsapp Bot
                  </a>
                </div>
              </div>
              
              <a 
                href="#about-us" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
                onClick={handleNavItemClick}
              >
                About Us
              </a>
              <Button 
                className="mt-4 bg-dolphin-500 hover:bg-dolphin-600 text-white"
                onClick={() => {
                  handleNavItemClick();
                  onTryDemo();
                }}
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
