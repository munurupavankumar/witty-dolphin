
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Linkedin, Twitter } from "lucide-react";

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Akhil",
      description: "Leading the vision and strategy for BKIP.AI, Akhil combines his passion for language technology with a strong desire to make knowledge accessible to all. He has experience developing AI solutions that break language barriers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Pavan",
      description: "Building the technology behind BKIP.AI, Pavan brings expertise in AI-powered language translation systems. With a background in natural language processing, he's passionate about creating tools that connect people across different languages.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="about-us" className="relative py-24 bg-gradient-to-b from-background to-[#0a1025]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">About us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left column - Description */}
            <div className="md:col-span-5 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Having previously worked with various language translation technologies, we're a team with diverse skills 
                banded together to make knowledge accessible across all languages.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join us on this journey as we break language barriers and open up a world of information for everyone, 
                regardless of what language they speak.
              </p>
            </div>
            
            {/* Right columns - Team members */}
            <div className="md:col-span-7 grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col">
                  <div className="relative mb-4 overflow-hidden rounded-xl transition-all duration-500 group">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gradient mb-2">{member.name}</h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="flex space-x-4 mt-auto">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-dolphin-400 transition-colors">
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-dolphin-400 transition-colors">
                      <Linkedin size={20} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
