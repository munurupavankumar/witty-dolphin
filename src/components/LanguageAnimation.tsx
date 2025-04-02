
import React, { useEffect, useState } from 'react';

const languages = [
  'हिन्दी (Hindi)', 
  'తెలుగు (Telugu)', 
  'தமிழ் (Tamil)', 
  'ಕನ್ನಡ (Kannada)', 
  'മലയാളം (Malayalam)', 
  'ਪੰਜਾਬੀ (Punjabi)', 
  'বাংলা (Bengali)', 
  'ગુજરાતી (Gujarati)', 
  'ଓଡ଼ିଆ (Odia)', 
  'मराठी (Marathi)'
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
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        {languages[currentIndex]}
      </span>
    </div>
  );
};

export default LanguageAnimation;
