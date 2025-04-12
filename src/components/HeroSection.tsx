
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Food Illustrations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-20 -right-12 w-64 h-64 rounded-full bg-replate-light-green animate-float-slow opacity-70" 
        />
        <div 
          className="absolute bottom-20 -left-12 w-48 h-48 rounded-full bg-replate-peach animate-float opacity-50" 
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className={`max-w-lg transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-replate-dark">Sharing Food,</span>
              <span className="gradient-text">Building Communities</span>
            </h1>
            <p className="text-lg text-replate-gray mb-8">
              Replate connects food donors with local communities in need. 
              Reduce waste, fight hunger, and build a more sustainable food system—all through one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-replate-green hover:bg-replate-green/90 text-white">
                Donate Food
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-replate-green text-replate-green hover:bg-replate-light-green"
              >
                Find Food <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-replate-gray">
              <MapPin size={16} className="mr-2 text-replate-orange" />
              <span>Already serving 200+ communities across the country</span>
            </div>
          </div>
          
          {/* Right Column - Food Images */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className={`absolute top-0 left-0 w-60 h-60 rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh fruits and vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute top-20 right-0 w-48 h-48 rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People sharing food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute bottom-0 right-10 w-64 h-64 rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1593760684482-a4a792211a2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Prepared meals" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
