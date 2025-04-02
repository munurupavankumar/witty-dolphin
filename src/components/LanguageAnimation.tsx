
import React, { useEffect, useState } from 'react';

const languages = [
  'English',
  'हिन्दी (Hindi)', 
  'বাংলা (Bengali)', 
  'ગુજરાતી (Gujarati)', 
  'ಕನ್ನಡ (Kannada)', 
  'മലയാളം (Malayalam)', 
  'मराठी (Marathi)', 
  'ଓଡ଼ିଆ (Odia)', 
  'ਪੰਜਾਬੀ (Punjabi)', 
  'தமிழ் (Tamil)', 
  'తెలుగు (Telugu)'
];

const LanguageAnimation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
        setVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 flex items-center justify-center overflow-hidden">
      <span 
        className={`text-xl md:text-2xl font-medium transition-all duration-500 text-dolphin-300 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
      >
        {languages[currentIndex]}
      </span>
    </div>
  );
};

export default LanguageAnimation;
