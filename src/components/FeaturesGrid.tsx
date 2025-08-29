import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Users, MessageCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "UPCOMING EVENTS",
    subtitle: "Join Our Meetups",
    description: "Connect with the AI community at our monthly events",
    color: "primary",
    link: "https://www.meetup.com/lee-ai/"
  },
  {
    icon: BookOpen,
    title: "RESOURCES",
    subtitle: "Learn AI Skills",
    description: "Access guides, directories, and learning materials",
    color: "warning",
    link: "#resources"
  },
  {
    icon: Users,
    title: "COMMUNITY",
    subtitle: "Join the Network",
    description: "Connect with 120+ AI enthusiasts and professionals",
    color: "accent",
    link: "#community"
  },
  {
    icon: MessageCircle,
    title: "CONTACT",
    subtitle: "Get Involved",
    description: "Reach out to our organizers and community leaders",
    color: "success",
    link: "#contact"
  }
];

export const FeaturesGrid = () => {
  return (
    <section id="explore" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            EXPLORE LEE COUNTY AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities to learn, connect, and grow with Southwest Florida's 
            premier AI community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      ${feature.color === 'primary' ? 'bg-primary/20 text-primary' : ''}
                      ${feature.color === 'warning' ? 'bg-warning/20 text-warning' : ''}
                      ${feature.color === 'accent' ? 'bg-accent/20 text-accent' : ''}
                      ${feature.color === 'success' ? 'bg-success/20 text-success' : ''}
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-muted-foreground mb-1 tracking-wider">
                        {feature.title}
                      </h3>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        {feature.subtitle}
                      </h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent"
                        asChild
                      >
                        <a href={feature.link} className="flex items-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            VIEW ALL RESOURCES
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};