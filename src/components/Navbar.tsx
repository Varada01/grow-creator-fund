import { Button } from "@/components/ui/button";
import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CreatorFund</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              For Creators
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              For Investors
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Success Stories
            </a>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#" className="block text-sm font-medium hover:text-primary transition-colors">
              For Creators
            </a>
            <a href="#" className="block text-sm font-medium hover:text-primary transition-colors">
              For Investors
            </a>
            <a href="#" className="block text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#" className="block text-sm font-medium hover:text-primary transition-colors">
              Success Stories
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button variant="hero" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;