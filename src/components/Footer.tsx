
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 text-dolphin-500">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15.5 9C15.5 10.1046 14.6046 11 13.5 11C12.3954 11 11.5 10.1046 11.5 9C11.5 7.89543 12.3954 7 13.5 7C14.6046 7 15.5 7.89543 15.5 9Z" fill="currentColor"/>
                  <path d="M6 14.5C10 19 18 14 18 9C18 8.5 17.5 8 17 8.5C16.5 9 15 12 13.5 12C12 12 12 9 10 9C8 9 8 11.5 6 11.5C4 11.5 2 11 6 14.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="font-bold text-xl">Witty Dolphin</div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Breaking language barriers with BKIP.AI
            </p>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How it Works</a>
              <a href="#cta" className="text-sm text-gray-300 hover:text-white transition-colors">Get Started</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Witty Dolphin. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-dolphin-400 transition-colors">
              <span className="sr-only">Privacy Policy</span>
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-dolphin-400 transition-colors">
              <span className="sr-only">Terms of Service</span>
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-dolphin-400 transition-colors">
              <span className="sr-only">Contact</span>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
