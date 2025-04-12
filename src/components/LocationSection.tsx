
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", 
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "San Francisco"
  ];

  return (
    <section id="locations" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          )}>
            Find Food or Donate Near You
          </h2>
          <p className={cn(
            "text-lg text-replate-gray transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          )}>
            Replate is active across the country. Enter your location to find donation
            opportunities or food resources in your area.
          </p>
        </div>

        {/* Location Search */}
        <div className={cn(
          "max-w-lg mx-auto mb-16 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-replate-gray" />
            </div>
            <input
              type="text"
              placeholder="Enter your city or zip code"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-replate-green focus:border-transparent"
            />
            <Button className="absolute right-1.5 top-1.5 bg-replate-green hover:bg-replate-green/90">
              Search
            </Button>
          </div>
        </div>

        {/* Map and Cities */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Cities List */}
          <div className={cn(
            "md:col-span-2 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <h3 className="text-xl font-semibold mb-4">Popular Locations</h3>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center bg-gray-50 p-3 rounded-lg hover:bg-replate-light-green hover:text-replate-green cursor-pointer transition-all",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  )}
                  style={{ transitionDelay: `${index * 50 + 400}ms` }}
                >
                  <MapPin size={16} className="mr-2 text-replate-orange" />
                  <span className="text-sm">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className={cn(
            "md:col-span-3 h-[400px] bg-gray-100 rounded-xl overflow-hidden relative transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            {/* This would be a real map in a production app */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-replate-gray mb-3 font-medium">Interactive Map</div>
                <div className="text-sm text-replate-gray">
                  In a live application, an interactive map would be displayed here
                  showing donation points and food resources in the selected area.
                </div>
              </div>
            </div>
            
            {/* Sample Map Points */}
            {isVisible && (
              <>
                <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-replate-green rounded-full animate-pulse" />
                <div className="absolute top-[45%] left-[60%] w-3 h-3 bg-replate-green rounded-full animate-pulse" />
                <div className="absolute top-[60%] left-[40%] w-3 h-3 bg-replate-green rounded-full animate-pulse" />
                <div className="absolute top-[25%] left-[70%] w-3 h-3 bg-replate-orange rounded-full animate-pulse" />
                <div className="absolute top-[70%] left-[80%] w-3 h-3 bg-replate-orange rounded-full animate-pulse" />
                <div className="absolute top-[50%] left-[20%] w-3 h-3 bg-replate-orange rounded-full animate-pulse" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
