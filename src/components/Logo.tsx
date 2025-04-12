
import { Chef, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  showText?: boolean;
}

const Logo = ({
  className,
  textClassName,
  iconClassName,
  showText = true
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative animate-pulse-light">
        <UtensilsCrossed 
          className={cn("text-replate-green relative z-10", iconClassName)} 
          size={28} 
        />
        <div className="absolute -inset-1 bg-replate-light-green rounded-full blur-sm" />
      </div>
      {showText && (
        <span className={cn("font-display font-bold text-xl gradient-text", textClassName)}>
          replate
        </span>
      )}
    </div>
  );
};

export default Logo;
