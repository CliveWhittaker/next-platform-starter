import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement Badge */}
          <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Next Meetup: Join our AI Community Event
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">CONNECT &</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              INNOVATE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Together we build the future
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Lee County AI cultivates an inclusive community where entrepreneurs, small businesses, 
            and individuals come together to learn, connect, and thrive through artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-glow-primary group px-8 py-6 text-lg"
            >
              Join Our Meetup
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24</div>
              <div className="text-muted-foreground">Events This Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">8</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};