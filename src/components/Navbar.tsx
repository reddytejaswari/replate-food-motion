
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-sm shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo className="z-50" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <NavButtons />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-replate-dark p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col justify-center items-center md:hidden animate-fade-in z-40">
            <div className="flex flex-col items-center gap-6">
              <NavLinks onClick={() => setMobileMenuOpen(false)} />
              <NavButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks = ({ onClick }: NavLinksProps) => {
  const links = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Locations", href: "#locations" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-replate-dark hover:text-replate-green transition-colors text-sm font-medium"
          onClick={onClick}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

const NavButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        className="text-replate-dark hover:text-replate-green hover:bg-replate-light-green"
      >
        Login
      </Button>
      <Button className="bg-replate-green hover:bg-replate-green/90 text-white">
        Donate Now
      </Button>
    </div>
  );
};

export default Navbar;
