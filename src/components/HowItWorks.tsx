
import React from 'react';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-24 bg-gradient-to-b from-gray-900/80 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">BKIP.AI</span> Works
          </h2>
          <p className="text-gray-400">
            A simple three-step process to understand any content in your preferred language
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="relative">
            <div className="opacity-0 animate-fade-in animation-delay-100">
              <div className="glass rounded-xl p-6 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-dolphin-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                
                <div className="text-center pt-6">
                  <div className="w-24 h-24 bg-dolphin-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h.01" />
                      <path d="M10 7h7" />
                      <path d="M7 11h.01" />
                      <path d="M10 11h7" />
                      <path d="M7 15h.01" />
                      <path d="M10 15h7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Select Language</h3>
                  <p className="text-gray-400">
                    Choose your preferred language from our selection of 10+ Indian languages for output.
                  </p>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 md:rotate-0">
                    <path d="M39.5 6L30 0.226497V11.7735L39.5 6ZM0 7H31V5H0V7Z" fill="#0AAFF1" fillOpacity="0.4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="opacity-0 animate-fade-in animation-delay-300">
              <div className="glass rounded-xl p-6 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-dolphin-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>

                <div className="text-center pt-6">
                  <div className="w-24 h-24 bg-dolphin-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Capture or Upload</h3>
                  <p className="text-gray-400">
                    Take a photo of any text, upload a document, or paste text content directly into the app.
                  </p>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 md:rotate-0">
                    <path d="M39.5 6L30 0.226497V11.7735L39.5 6ZM0 7H31V5H0V7Z" fill="#0AAFF1" fillOpacity="0.4"/>
                  </svg>
                </div>
              
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="opacity-0 animate-fade-in animation-delay-500">
              <div className="glass rounded-xl p-6 h-full">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-dolphin-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                
                <div className="text-center pt-6">
                  <div className="w-24 h-24 bg-dolphin-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Listen & Read</h3>
                  <p className="text-gray-400">
                    Get the translated text displayed on screen and listen to it being read aloud in your language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto glass rounded-2xl overflow-hidden opacity-0 animate-fade-in animation-delay-600">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-gradient-accent">Empowering the Unempowered</h3>
                <p className="text-gray-400 mb-6">
                  BKIP.AI is designed with a mission to make knowledge accessible to everyone, 
                  especially those who face literacy and language barriers. Our technology bridges
                  the gap between information and understanding.
                </p>
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm">100+ Source Languages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                    <span className="text-sm">10+ Indian Languages</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0 md:w-1/3 bg-dolphin-900/30 rounded-xl p-4 animate-float">
                <div className="rounded-lg bg-gray-900/70 p-3">
                  <div className="flex justify-end mb-2">
                    <div className="bg-dolphin-400/20 text-dolphin-400 text-xs rounded-full px-2 py-1">
                      BKIP.AI
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-700 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-700 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-700 rounded-full w-2/3"></div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dolphin-400 animate-pulse">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                    <span className="text-xs text-gray-400">Secure and Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
