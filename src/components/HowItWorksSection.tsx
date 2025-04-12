
import { useState, useEffect, useRef } from "react";
import { 
  ShoppingBag, 
  Map, 
  Clock, 
  ThumbsUp,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const HowItWorksSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: ShoppingBag,
      title: "List Surplus Food",
      description:
        "Businesses and individuals list their surplus food items through our easy-to-use app.",
      color: "bg-replate-light-green text-replate-green",
    },
    {
      icon: Map,
      title: "Local Matching",
      description:
        "Our system matches donations with nearby recipients who can best use the food.",
      color: "bg-replate-peach text-replate-orange",
    },
    {
      icon: Clock,
      title: "Schedule Pickup",
      description:
        "Arrange convenient pickup times or opt for our volunteer delivery network.",
      color: "bg-blue-50 text-blue-500",
    },
    {
      icon: ThumbsUp,
      title: "Reduce Waste, Help Others",
      description:
        "Track your impact and see how your donations help the community and environment.",
      color: "bg-purple-50 text-replate-purple",
    },
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          )}>
            How Replate Works
          </h2>
          <p className={cn(
            "text-lg text-replate-gray transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-8"
          )}>
            Our platform makes food donation simple, efficient, and rewarding for everyone involved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl transition-all duration-500 card-hover",
                  activeIndex === index 
                    ? "border-2 border-replate-green shadow-md" 
                    : "border border-gray-100",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start">
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4",
                    step.color
                  )}>
                    {activeIndex === index ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-replate-gray">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className={cn(
            "rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="People sharing food"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
