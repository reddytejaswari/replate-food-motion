
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Leaf, 
  HeartHandshake,
  BadgeCheck
} from "lucide-react";

const AboutSection = () => {
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

  const stats = [
    { label: "Food Saved", value: "12M+", unit: "lbs" },
    { label: "CO₂ Prevented", value: "8.6K", unit: "tons" },
    { label: "Meals Provided", value: "10M+", unit: "" },
    { label: "Active Communities", value: "200+", unit: "" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Reducing food waste to minimize environmental impact",
      color: "bg-replate-light-green text-replate-green border-replate-green/20",
    },
    {
      icon: HeartHandshake,
      title: "Community",
      description: "Building connections between donors and recipients",
      color: "bg-replate-peach text-replate-orange border-replate-orange/20",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making food donation simple and accessible for everyone",
      color: "bg-blue-50 text-blue-500 border-blue-200",
    },
    {
      icon: BadgeCheck,
      title: "Responsibility",
      description: "Ensuring food safety and dignified distribution",
      color: "bg-purple-50 text-replate-purple border-purple-200",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-replate-light-green/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-replate-green/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-replate-peach/20 rounded-full translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              About <span className="gradient-text">Replate</span>
            </h2>
            
            <p className={cn(
              "text-lg text-replate-dark mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              Founded in 2023, Replate is on a mission to revolutionize how we think about surplus food. 
              We believe that good food should never go to waste when it can nourish those in need.
            </p>
            
            <p className={cn(
              "text-lg text-replate-gray mb-8 transition-all duration-700 delay-200",
              isVisible ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              Our platform connects businesses and individuals with surplus food to local communities,
              food banks, and shelters, creating a more sustainable and equitable food system for all.
            </p>
            
            {/* Stats */}
            <div className={cn(
              "grid grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-300",
              isVisible ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-2xl md:text-3xl text-replate-green">
                    {stat.value} <span className="text-sm font-normal text-replate-gray">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-replate-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Our Values */}
          <div>
            <h3 className={cn(
              "text-2xl font-bold mb-6 transition-all duration-700 delay-400",
              isVisible ? "opacity-100" : "opacity-0 translate-y-8"
            )}>
              Our Values
            </h3>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-4 border rounded-lg flex items-center",
                    value.color,
                    "transition-all duration-700",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  )}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="p-2 rounded-full bg-white mr-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-replate-dark">{value.title}</h4>
                    <p className="text-sm text-replate-gray">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
