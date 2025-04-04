
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Akhil",
      role: "Co-founder & CEO",
      description: "Leading the vision and strategy for BKIP.AI, passionate about making knowledge accessible to all languages.",
      avatar: "photo-1581091226825-a6a2a5aee158" // Placeholder
    },
    {
      name: "Pavan",
      role: "Co-founder & CTO",
      description: "Building the technology behind BKIP.AI, with expertise in AI-powered language translation systems.",
      avatar: "photo-1488590528505-98d2b5aba04b" // Placeholder
    }
  ];

  return (
    <section id="about-us" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animate-fade-in">About Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Meet the team behind BKIP.AI who are passionate about breaking language barriers and making knowledge accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name} 
              className="group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-dolphin-800/50 overflow-hidden transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-lg group-hover:shadow-dolphin-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-dolphin-900/50 via-transparent to-dolphin-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 ring-2 ring-dolphin-500/50 group-hover:ring-dolphin-400 transition-all duration-300">
                      <AvatarImage 
                        src={`https://images.unsplash.com/${member.avatar}`} 
                        alt={member.name} 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl text-gradient">{member.name}</CardTitle>
                      <CardDescription className="text-dolphin-300">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-300">{member.description}</p>
                </CardContent>
                
                <CardFooter className="relative z-10 border-t border-dolphin-800/30">
                  <div className="flex space-x-4">
                    <a href="#" className="text-dolphin-400 hover:text-dolphin-300 transition-colors">LinkedIn</a>
                    <a href="#" className="text-dolphin-400 hover:text-dolphin-300 transition-colors">Twitter</a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
