import React, { useState, useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import image1 from "../components/assets/image1.jpg";
import image2 from "../components/assets/image2.jpg";

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Akhil",
      description: "Leading the vision and strategy for Witty Dolphin, Akhil is an advocate for responsible AI who combines technological expertise with a commitment to social impact. He focuses on developing AI-powered solutions that address the needs of under-served communities across India, making knowledge and technology accessible across the demographics.",
      image: image1,
    },
    {
      name: "Pavan",
      description: "Building the technology behind the products under Witty Dolphin, Pavan brings expertise in AI-powered language translation systems. As an uder-grad student in Computer Science, specialized in AI, he is passionate about creating simple yet powerful products that are easy to use and that speak to the users in their colloquial language.",
      image: image2,
      social: {
        github: "https://github.com/munurupavankumar",
        linkedin: "https://www.linkedin.com/in/pavan-k-munuru-52a87123b/"
      }
    }
  ];

  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Refs for each team member to track if they're in view
  const memberRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    team.map(() => React.createRef<HTMLDivElement>())
  );
  
  // Check if each member is in view
  const memberInViews = memberRefs.current.map((ref) => useInView(ref, { once: false, amount: 0.6 }));

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Effect to set hovered member based on mobile and inView status
  useEffect(() => {
    if (isMobile) {
      team.forEach((member, index) => {
        if (memberInViews[index]) {
          setHoveredMember(member.name);
        }
      });
    }
  }, [isMobile, memberInViews]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="about-us" 
      className="relative py-32 bg-gradient-to-b from-background to-[#0a1025] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-white"
            variants={itemVariants}
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">us</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left column - Description */}
            <motion.div 
              className="md:col-span-5 space-y-8"
              variants={itemVariants}
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Having previously worked with various language translation technologies, we're a team with diverse skills 
                banded together to make knowledge accessible across all languages.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join us on this journey as we break language barriers and open up a world of information for everyone, 
                regardless of what language they speak.
              </p>
            </motion.div>
            
            {/* Right columns - Team members */}
            <div className="md:col-span-7 grid md:grid-cols-2 gap-10">
              {team.map((member, index) => (
                <motion.div 
                  key={member.name} 
                  ref={memberRefs.current[index]}
                  className="flex flex-col"
                  variants={itemVariants}
                  onMouseEnter={() => !isMobile && setHoveredMember(member.name)}
                  onMouseLeave={() => !isMobile && setHoveredMember(null)}
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl transition-all duration-700 group">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredMember === member.name ? 'scale-110 grayscale-0' : 'scale-100 grayscale'
                        }`}
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                      hoveredMember === member.name ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Render social icons only if social info exists */}
                    {member.social && (
                      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ${
                        hoveredMember === member.name ? 'translate-y-0' : 'translate-y-20'
                      }`}>
                        <div className="flex space-x-4">
                          <a 
                            href={member.social.github} 
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300"
                          >
                            <Github size={18} />
                            <span className="sr-only">GitHub</span>
                          </a>
                          <a 
                            href={member.social.linkedin} 
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300"
                          >
                            <Linkedin size={18} />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed mt-2">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;