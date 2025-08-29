import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";

const founders = [
  {
    name: "Clive Whittaker",
    title: "Co-Founder & AI Strategist",
    bio: "Add Clive Whittaker's bio here - his background, expertise, and role in Lee County AI.",
    image: "/api/placeholder/300/300", // Placeholder until real image is provided
    linkedin: "#",
    twitter: "#",
    email: "#"
  },
  {
    name: "Kai Grey",
    title: "Co-Founder & Technical Lead", 
    bio: "Add Kai Grey's bio here - his background, expertise, and role in Lee County AI.",
    image: "/api/placeholder/300/300", // Placeholder until real image is provided
    linkedin: "#",
    twitter: "#", 
    email: "#"
  }
];

export const FoundersSection = () => {
  return (
    <section id="founders" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our Founders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The visionary leaders driving Lee County AI's mission to foster innovation 
            and education in artificial intelligence across Southwest Florida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
                    {founder.title}
                  </Badge>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={founder.linkedin}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={founder.twitter}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={founder.email}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our founders bring decades of combined experience in artificial intelligence, 
            technology leadership, and community building to create Southwest Florida's 
            premier AI community.
          </p>
        </div>
      </div>
    </section>
  );
};