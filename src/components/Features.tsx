
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`glass rounded-xl p-6 opacity-0 animate-fade-in ${delay}`}>
      <div className="h-14 w-14 rounded-lg bg-dolphin-900 flex items-center justify-center mb-4">
        <div className="text-dolphin-400">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="py-24 bg-gradient-to-b from-background to-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Breaking Language <span className="text-gradient">Barriers</span>
          </h2>
          <p className="text-gray-400 opacity-0 animate-fade-in animation-delay-100">
            BKIP.AI uses advanced AI technology to help people access information regardless of 
            their literacy level or native language.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            }
            title="Image Translation"
            description="Process images containing text in 100+ languages and convert them into any of the 10+ native Indian languages."
            delay="animation-delay-100"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 10v2a2 2 0 0 1-2 2H5" />
                <path d="m7 7-4 4 4 4" />
                <path d="M17 17h-2a2 2 0 0 1-2-2V5" />
                <path d="m15 8 4-4-4-4" />
              </svg>
            }
            title="Text Conversion"
            description="Seamlessly transform written content into spoken words in regional languages, making information accessible to everyone."
            delay="animation-delay-200"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            }
            title="Real-time Processing"
            description="Get instant translations and audio output in seconds, enabling quick understanding of important documents and notices."
            delay="animation-delay-300"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
            }
            title="Document Processing"
            description="Upload PDFs, documents, and forms to translate their content into your preferred language."
            delay="animation-delay-400"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            }
            title="Text to Speech"
            description="Listen to translated content in natural-sounding voices in your native language, making information consumption easier."
            delay="animation-delay-500"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            }
            title="Privacy Focused"
            description="Your documents and personal information remain secure with our privacy-first approach to data handling."
            delay="animation-delay-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
