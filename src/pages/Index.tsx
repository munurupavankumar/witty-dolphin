
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';

const Index: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Helper to apply smooth scrolling to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              behavior: 'smooth',
              top: element.offsetTop - 80, // Adjust for navbar height
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Make the demo form openable from anywhere in the app
  useEffect(() => {
    // Create a global event for opening the demo form
    const handleOpenDemo = () => setIsDemoOpen(true);
    window.addEventListener('openDemo', handleOpenDemo);
    
    return () => {
      window.removeEventListener('openDemo', handleOpenDemo);
    };
  }, []);

  // Update page title
  useEffect(() => {
    document.title = "BKIP.AI | Because Knowledge is Power";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar onTryDemo={() => setIsDemoOpen(true)} />
      
      <main className="flex-grow">
        <Hero onGetStarted={() => setIsDemoOpen(true)} />
        <Features />
        <HowItWorks />
        <CallToAction onTryDemo={() => setIsDemoOpen(true)} />
      </main>
      
      <Footer />
      
      <DemoForm open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </div>
  );
};

export default Index;
