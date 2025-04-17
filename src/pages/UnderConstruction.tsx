
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ConstructionAnimation } from '@/components/ConstructionAnimation';
import LanguageAnimation from '@/components/LanguageAnimation';
import { ArrowLeft } from 'lucide-react';

const UnderConstruction: React.FC = () => {
  const { product } = useParams<{ product: string }>();
  
  // Update page title
  useEffect(() => {
    // Format product name for display
    let productName = "Product";
    if (product === "journey-builder") {
      productName = "WD Journey Builder";
    } else if (product === "whatsapp-bot") {
      productName = "WhatsApp Bot";
    }
    
    document.title = `${productName} - Coming Soon | Witty Dolphin`;
    
    return () => {
      document.title = "Witty Dolphin"; // Reset on unmount
    };
  }, [product]);

  // Get product-specific information
  const getProductInfo = () => {
    switch (product) {
      case 'journey-builder':
        return {
          name: "WD Journey Builder",
          description: "Create comprehensive user journeys tailored to your business needs. Our Journey Builder will allow you to map out the entire customer experience from first contact to conversion and beyond."
        };
      case 'whatsapp-bot':
        return {
          name: "WhatsApp Bot",
          description: "Automate customer support with our intelligent WhatsApp Bot. Handle inquiries, process requests, and provide information instantly through the world's most popular messaging platform."
        };
      default:
        return {
          name: "New Product",
          description: "We're working on something exciting. Check back soon for updates!"
        };
    }
  };

  const productInfo = getProductInfo();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-900 flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">{productInfo.name}</span> is Coming Soon
        </h1>
        
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          {productInfo.description}
        </p>

        {/* Add language animation only for WhatsApp Bot */}
        {product === 'whatsapp-bot' && (
          <div className="glass p-6 rounded-xl max-w-md mx-auto mb-8">
            <h3 className="text-lg font-medium mb-2">Supports Multiple Languages</h3>
            <LanguageAnimation />
          </div>
        )}
        
        <div className="w-full max-w-md mx-auto mb-12">
          <ConstructionAnimation />
        </div>
        
        <div className="glass p-6 rounded-xl max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-3">Want to know when we launch?</h2>
          <p className="text-gray-400 mb-4">
            Leave your email and we'll notify you as soon as {productInfo.name} is ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-dolphin-400 focus:outline-none"
            />
            <Button variant="default" className="bg-dolphin-500 hover:bg-dolphin-600">
              Notify Me
            </Button>
          </div>
        </div>
        
        <div className="mt-12">
          <Link to="/">
            <Button variant="outline" className="border-dolphin-400 text-dolphin-400 hover:bg-dolphin-900/30">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
