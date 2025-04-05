
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';

const Index: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  // Handle mobile touch swipe detection
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;
      
      // Can add swipe actions here if needed
      if (isLeftSwipe) {
        // console.log('swiped left');
      }
      if (isRightSwipe) {
        // console.log('swiped right');
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, touchEnd]);

  return (
    <div 
      className="min-h-screen flex flex-col bg-background text-foreground no-horizontal-scroll"
      onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)} 
      onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
      onTouchEnd={() => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        
        if (isLeftSwipe || isRightSwipe) {
          // Can add swipe actions here
        }
      }}
    >
      <Navbar onTryDemo={() => setIsDemoOpen(true)} />
      
      <main className="flex-grow overflow-x-hidden">
        <Hero onGetStarted={() => setIsDemoOpen(true)} />
        <Features />
        <HowItWorks />
        <AboutUs />
        <CallToAction onTryDemo={() => setIsDemoOpen(true)} />
      </main>
      
      <Footer />
      
      <DemoForm open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </div>
  );
};

export default Index;
