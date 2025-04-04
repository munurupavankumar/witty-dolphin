
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
          <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-8">
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
            
            {/* Phone Display */}
            <div className="md:w-2/5 animate-float">
              <div className="relative mx-auto w-[260px] h-[520px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl overflow-hidden border-4 border-gray-800">
                  {/* Status Bar */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-black flex items-center justify-between px-6 pt-1">
                    <span className="text-white text-xs font-medium">11:45</span>
                    <div className="flex space-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M18 10a6 6 0 0 0-12 0v11h12V10Z"></path>
                        <path d="M6 10a6 6 0 0 1 6-6 6 6 0 0 1 6 6"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M6.08 13.34a8.92 8.92 0 0 1 0-2.68"></path>
                        <path d="M9.4 16.08a8.92 8.92 0 0 0 5.2 0"></path>
                        <path d="M14.6 7.92a8.92 8.92 0 0 0-5.2 0"></path>
                        <path d="M17.92 13.34a8.92 8.92 0 0 0 0-2.68"></path>
                        <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-white">
                        <path d="M23 7v10h-6.708q.123-.374.196-.748.073-.375.073-.752a3.4 3.4 0 0 0-.132-.967 3.92 3.92 0 0 0-.337-.814h6.908V8h-7.908a3.92 3.92 0 0 0-.814-.336A3.4 3.4 0 0 0 13.3 7.53a3.4 3.4 0 0 0-.967.134 3.92 3.92 0 0 0-.814.336H23Zm-10.25 6.5q0 .625-.219 1.156-.218.531-.61.922-.39.39-.921.61-.532.218-1.157.218-.625 0-1.156-.219-.531-.218-.922-.609-.39-.39-.61-.922Q7 15.125 7 14.5q0-.625.219-1.156.218-.531.61-.922.39-.39.921-.61.532-.218 1.157-.218.625 0 1.156.219.531.218.922.609.39.39.61.922.218.531.218 1.156Zm-9.228 3.5H1V7h2.522q.183.085.358.183.174.097.339.204h-1.72v6.226h1.72q-.165.107-.34.204-.174.098-.357.183Zm5.54-3.499a2.057 2.057 0 0 1-.615 1.487 2.057 2.057 0 0 1-1.487.615 2.05 2.05 0 0 1-1.484-.615 2.05 2.05 0 0 1-.617-1.487 2.05 2.05 0 0 1 .617-1.485 2.05 2.05 0 0 1 1.484-.617 2.056 2.056 0 0 1 1.487.617c.41.41.615.927.615 1.485Z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute top-7 inset-x-0 bottom-0 bg-[#0f172a] overflow-hidden">
                    <div className="p-3">
                      {/* App Interface */}
                      <div className="w-full h-full rounded-xl bg-[#1c2541] overflow-hidden">
                        {/* App Header */}
                        <div className="flex items-center justify-between p-3 border-b border-gray-800">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m12 19-7-6 7-6"></path>
                                <path d="M19 5v14"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Video Content */}
                        <div className="p-3">
                          <div className="text-xs text-gray-400 mb-1">CURRENT GOAL</div>
                          <div className="bg-[#2c3e5d] p-2 rounded-lg mb-3 flex justify-between items-center">
                            <span className="text-white font-medium">Translate Document</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </div>

                          {/* Video Preview */}
                          <div className="rounded-lg overflow-hidden mb-3 aspect-video bg-[#1a2234] relative">
                            <img 
                              src="/lovable-uploads/c1419807-71a1-4819-bfba-da686a955fc3.png" 
                              alt="BKIP.AI App Demo" 
                              className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-dolphin-500/50 flex items-center justify-center backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Video Info */}
                          <div className="mb-4">
                            <div className="text-white font-medium mb-1">BKIP.AI Document Translation</div>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded-full bg-dolphin-600 flex items-center justify-center text-xs text-white font-bold">B</div>
                              <span className="text-xs text-gray-400">BKIP.AI</span>
                              <span className="text-xs text-gray-500">• 1M</span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="mb-4">
                            <div className="text-sm text-white mb-2">This content changes your understanding</div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-[#2c3e5d] p-2 rounded-lg">
                                <div className="text-[10px] text-gray-400">ALIGNMENT TO GOAL</div>
                                <div className="text-white font-medium">97%</div>
                              </div>
                              <div className="bg-[#2c3e5d] p-2 rounded-lg">
                                <div className="text-[10px] text-gray-400">BETTER CLARITY</div>
                                <div className="flex items-center">
                                  <div className="text-white font-medium">100%</div>
                                  <span className="ml-1 text-[10px] bg-red-500 text-white px-1 rounded">NEW</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Navigation */}
                          <div className="bg-[#2c3e5d] p-2 rounded-full flex items-center justify-between">
                            <div className="w-10 h-10 rounded-full bg-[#1c2541] flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="m12 19-7-6 7-6"></path>
                              </svg>
                            </div>
                            <div className="w-12 h-10 rounded-full bg-dolphin-500 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="m5 12 14 0"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Phone Highlights */}
                <div className="absolute top-[25%] right-[-5px] w-2 h-16 bg-gray-800 rounded-l-md"></div>
                <div className="absolute top-[15%] left-[-5px] w-2 h-12 bg-gray-800 rounded-r-md"></div>
                <div className="absolute top-[22%] left-[-5px] w-2 h-12 bg-gray-800 rounded-r-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
