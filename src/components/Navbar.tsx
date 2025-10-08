
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronRight, PackageOpen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

interface NavbarProps {
  onTryDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTryDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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

  const products = [
    { name: "BKIP.AI", description: "AI-powered analytics platform", href: "#features" },
    { name: "WD Journey Builder", description: "Create custom user journeys", href: "/under-construction/journey-builder" },
    { name: "Whatsapp Bot", description: "Automated customer support", href: "/under-construction/whatsapp-bot" },
    { name: "WD-RAG", description: "Retrieval Augmented Generation", href: "/wd-rag" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="w-full px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">Witty Dolphin</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">How it Works</a>
          
          {/* Desktop Products Dropdown - Improved with no blue hover */}
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 p-0 h-auto bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <span>Products</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200" />
            </Button>
          </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/95 backdrop-blur-md border border-dolphin-400 rounded-lg z-50 min-w-[240px] p-2">
              {products.map((product, index) => (
                <DropdownMenuItem 
                  key={index} 
                  className="hover:bg-blue-900/30 cursor-pointer rounded-md my-1 transition-all duration-200 p-2 focus:bg-blue-900/30 focus:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  {product.href.startsWith('#') ? (
                    <a href={product.href} className="w-full flex flex-col">
                      <span className="text-sm font-medium text-white">{product.name}</span>
                      <span className="text-xs text-gray-400">{product.description}</span>
                    </a>
                  ) : (
                    <Link to={product.href} className="w-full flex flex-col">
                      <span className="text-sm font-medium text-white">{product.name}</span>
                      <span className="text-xs text-gray-400">{product.description}</span>
                    </Link>
                  )}
                </DropdownMenuItem>
              ))}
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
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-dolphin-900/30 transition-colors duration-300 focus-visible:ring-0 focus-visible:ring-offset-0">
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
              
              {/* Mobile Products Submenu - Improved with dark blue hover */}
              <Collapsible 
                open={isProductsOpen} 
                onOpenChange={setIsProductsOpen}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between w-full py-1 text-lg text-gray-300 hover:text-white cursor-pointer">
                    <div className="flex items-center gap-2">
                      <PackageOpen className="h-5 w-5" />
                      <span>Products</span>
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${isProductsOpen ? 'rotate-90' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-7 mt-2 space-y-3 border-l border-dolphin-400/50">
                  {products.map((product, index) => (
                    product.href.startsWith('#') ? (
                      <a 
                        key={index}
                        href={product.href} 
                        className="block hover:text-white hover:bg-blue-900/30 p-2 rounded-md transition-all transform duration-200"
                        onClick={handleNavItemClick}
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-medium text-gray-200">{product.name}</span>
                          <span className="text-sm text-gray-400">{product.description}</span>
                        </div>
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={product.href}
                        className="block hover:text-white hover:bg-blue-900/30 p-2 rounded-md transition-all transform duration-200"
                        onClick={handleNavItemClick}
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-medium text-gray-200">{product.name}</span>
                          <span className="text-sm text-gray-400">{product.description}</span>
                        </div>
                      </Link>
                    )
                  ))}
                </CollapsibleContent>
              </Collapsible>
              
              <a 
                href="#about-us" 
                className="text-lg text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 flex items-center"
                onClick={handleNavItemClick}
              >
                About Us
              </a>
              <Button 
                className="mt-4 bg-dolphin-500 hover:bg-dolphin-600 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
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
