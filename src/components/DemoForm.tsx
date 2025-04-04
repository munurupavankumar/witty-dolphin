
import React, { useState, useEffect } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % demoImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

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
          {/* Image carousel section */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {demoImages.map((image, index) => (
                  <CarouselItem key={index} className={`h-full ${index === currentSlide ? 'block' : 'hidden'}`}>
                    <div className="relative w-full h-full">
                      <img 
                        src={image} 
                        alt={`Demo image ${index + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-dolphin-950/90 to-transparent"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {demoImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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
              <DialogTitle className="text-2xl font-bold text-gradient animate-pulse">Try BKIP.AI Demo</DialogTitle>
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
