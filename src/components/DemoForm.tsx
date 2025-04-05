
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";

const demoImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb258ZW58MHx8fHwxNzEyODM4Njk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHx8MTcxMjgzODcyMnww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw3fHxlZHVjYXRpb258ZW58MHx8fHwxNzEyODM4Njk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
];

interface DemoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Success message
    toast({
      title: "Success!",
      description: "Your demo request has been submitted.",
      variant: "default",
    });
    
    // Close the dialog after submission
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-dolphin-950/95 border border-dolphin-700">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Phone carousel */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Carousel className="w-full" autoPlay={true} autoPlayInterval={3500}>
                <CarouselContent>
                  {demoImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-[220px] h-[440px] mx-auto">
                        {/* Phone Frame */}
                        <div className="absolute inset-0 bg-black rounded-[36px] shadow-2xl overflow-hidden border-4 border-gray-800">
                          {/* Screen Content - just the image */}
                          <div className="absolute inset-0 overflow-hidden">
                            <img 
                              src={image} 
                              alt={`Demo image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Home Indicator */}
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full z-10"></div>
                        </div>
                        
                        {/* Phone Highlights */}
                        <div className="absolute top-[25%] right-[-3px] w-1.5 h-12 bg-gray-800 rounded-l-md"></div>
                        <div className="absolute top-[15%] left-[-3px] w-1.5 h-10 bg-gray-800 rounded-r-md"></div>
                        <div className="absolute top-[22%] left-[-3px] w-1.5 h-10 bg-gray-800 rounded-r-md"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-center p-6 z-10">
              <h3 className="text-xl font-bold mb-2 opacity-0 animate-fade-in">Break Language Barriers</h3>
              <p className="text-sm text-gray-300 mb-4 opacity-0 animate-fade-in animation-delay-100">
                Try our AI-powered translation and literacy tool that works in 11 Indian languages.
              </p>
            </div>
          </div>
          
          {/* Form section */}
          <div className="p-6">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-gradient animate-pulse">Try BKIP.AI</DialogTitle>
              <DialogDescription className="opacity-0 animate-fade-in">
                Fill out this form to get access to our demo
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-100">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="bg-dolphin-900/50 border-dolphin-700 text-white"
                />
              </div>
              
              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-200">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="bg-dolphin-900/50 border-dolphin-700 text-white"
                />
              </div>
              
              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-300">
                <Label htmlFor="phone">Contact Number *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="Your phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="bg-dolphin-900/50 border-dolphin-700 text-white"
                />
              </div>
              
              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-400">
                <Label htmlFor="organization">Organization (Optional)</Label>
                <Input 
                  id="organization" 
                  name="organization" 
                  placeholder="Your organization" 
                  value={formData.organization} 
                  onChange={handleChange} 
                  className="bg-dolphin-900/50 border-dolphin-700 text-white" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-dolphin-500 hover:bg-dolphin-600 text-white opacity-0 animate-fade-in animation-delay-500 hover:scale-105 transition-all duration-300"
              >
                Request Demo Access
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;
