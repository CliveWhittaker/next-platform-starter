import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/30b2a6ce-a5fd-4249-862b-fa5927fcd2e9.png" 
              alt="Lee County AI Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground">Lee County AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
              <a href="#founders" className="text-muted-foreground hover:text-foreground transition-colors">
                Founders
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Join Meetup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                Events
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#founders" className="text-muted-foreground hover:text-foreground transition-colors">
                Founders
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity w-full">
                Join Meetup
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};