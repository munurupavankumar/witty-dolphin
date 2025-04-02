
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/80">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-bold text-xl text-gradient">Witty Dolphin</div>
            <p className="text-gray-400 mt-2 text-sm">
              Breaking language barriers with BKIP.AI
            </p>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Features</a>
              <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">How it Works</a>
              <a href="#cta" className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Get Started</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Witty Dolphin. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-dolphin-400 transition-colors hover:scale-110 transform duration-200">
              <span className="sr-only">Privacy Policy</span>
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-dolphin-400 transition-colors hover:scale-110 transform duration-200">
              <span className="sr-only">Terms of Service</span>
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-dolphin-400 transition-colors hover:scale-110 transform duration-200">
              <span className="sr-only">Contact</span>
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">Supported languages: English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
