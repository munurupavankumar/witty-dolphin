import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import screenshot1 from "@/components/assets/screenshot1.jpg";
import screenshot2 from "@/components/assets/screenshot2.jpg";
import screenshot3 from "@/components/assets/screenshot3.jpg";
import screenshot4 from "@/components/assets/screenshot4.jpg";
import screenshot5 from "@/components/assets/screenshot5.jpg";
import screenshot6 from "@/components/assets/screenshot6.jpg";
import screenshot7 from "@/components/assets/screenshot7.jpg";
import screenshot8 from "@/components/assets/screenshot8.jpg";

const demoImages = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
  screenshot7,
  screenshot8,
];

interface DemoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Success message
    toast({
      title: "Request received!",
      description: "We'll be in touch soon about your demo access.",
      variant: "default",
    });

    // Close the dialog after submission
    onOpenChange(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-gradient-to-br from-dolphin-950 to-[#070b1a] border border-dolphin-700/50 shadow-[0_0_50px_-12px] shadow-dolphin-500/20 max-h-[95vh] sm:max-h-[90vh] w-[95vw] sm:w-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[95vh] md:max-h-none overflow-auto md:overflow-hidden">
          {/* Phone carousel - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block relative h-full overflow-hidden bg-gradient-to-b from-dolphin-900/80 to-dolphin-950">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="animate-[float_6s_ease-in-out_infinite] will-change-transform">
                <Carousel
                  className="w-full"
                  autoPlay={true}
                  autoPlayInterval={4000}
                >
                  <CarouselContent>
                    {demoImages.map((image, index) => (
                      <CarouselItem key={index}>
                        {/* Wrapper to provide extra padding for the glow */}
                        <div
                          className="relative mx-auto p-10"
                          style={{ width: "280px", height: "580px" }}
                        >
                          <div className="relative mx-auto w-[240px] h-[520px]">
                            {/* Phone Frame */}
                            <div className="absolute inset-0 bg-black rounded-[40px] overflow-hidden border-8 border-black shadow-[0_0_20px_8px_rgba(10,175,241,0.4)]">
                              {/* Screen Content - Full image */}
                              <div className="absolute inset-0 overflow-hidden">
                                <img
                                  src={image}
                                  alt={`BKIP.AI App Screen ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>

                            {/* Phone Highlights */}
                            <div className="absolute top-[25%] right-[-5px] w-3 h-16 bg-black rounded-md"></div>
                            <div className="absolute top-[15%] left-[-5px] w-3 h-12 bg-black rounded-md"></div>
                            <div className="absolute top-[22%] left-[-5px] w-3 h-12 bg-black rounded-md"></div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>

          {/* Form section - Enhanced with better gradients */}
          <div className="p-5 md:p-8 bg-gradient-to-br from-dolphin-900/40 to-transparent backdrop-blur-sm md:bg-gradient-to-br md:from-dolphin-900/40 md:to-transparent md:backdrop-blur-sm overflow-y-auto">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-gradient">
                Try BKIP.AI
              </DialogTitle>
              <DialogDescription className="opacity-0 animate-fade-in text-gray-400">
                Experience the future of language accessibility
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-100">
                <Label htmlFor="name" className="text-white">
                  Name <span className="text-dolphin-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-dolphin-900/50 border-dolphin-700 text-white focus:border-dolphin-500 transition-colors duration-300"
                />
              </div>

              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-200">
                <Label htmlFor="email" className="text-white">
                  Email <span className="text-dolphin-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-dolphin-900/50 border-dolphin-700 text-white focus:border-dolphin-500 transition-colors duration-300"
                />
              </div>

              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-300">
                <Label htmlFor="phone" className="text-white">
                  Contact Number <span className="text-dolphin-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-dolphin-900/50 border-dolphin-700 text-white focus:border-dolphin-500 transition-colors duration-300"
                />
              </div>

              <div className="space-y-2 opacity-0 animate-fade-in animation-delay-400">
                <Label htmlFor="organization" className="text-white">
                  Organization{" "}
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Your organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-dolphin-900/50 border-dolphin-700 text-white focus:border-dolphin-500 transition-colors duration-300"
                />
              </div>

              <div className="mt-6 md:mt-8 opacity-0 animate-fade-in animation-delay-500">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-dolphin-500 to-dolphin-600 hover:from-dolphin-600 hover:to-dolphin-700 text-white font-medium py-2.5 hover:scale-105 transform transition-all duration-300 shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Request Demo Access"}
                </Button>

                <p className="text-center mt-4 text-xs text-gray-400">
                  By submitting, you agree to our{" "}
                  <span className="text-dolphin-400 hover:text-dolphin-300 cursor-pointer">
                    Terms
                  </span>{" "}
                  &{" "}
                  <span className="text-dolphin-400 hover:text-dolphin-300 cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;