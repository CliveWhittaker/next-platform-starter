import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Lee County AI
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Lee County AI Users Group is Southwest Florida's premier community for artificial 
            intelligence enthusiasts, developers, researchers, and business leaders. Founded in 2025, 
            we bring together diverse perspectives to explore the transformative potential of AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To foster innovation, education, and responsible development of AI technologies 
              in Southwest Florida through community engagement, knowledge sharing, and 
              collaborative projects.
            </p>
            
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Affiliations</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Lee County AI is affiliated with{" "}
              <a 
                href="https://la-ai.io/" 
                className="text-primary hover:text-primary/80 transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lower Alabama AI
              </a>
              , fostering collaboration and knowledge sharing across the Gulf Coast AI community.
            </p>
            
            <Badge className="bg-accent/20 text-accent border-accent/30">
              2nd Largest AI Community in Florida
            </Badge>
          </div>

          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24</div>
                  <div className="text-muted-foreground">Events This Year</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">8</div>
                  <div className="text-muted-foreground">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-warning mb-2">2nd</div>
                  <div className="text-muted-foreground">Largest in FL</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="text-xl font-semibold text-foreground">
              Championing education, collaboration, and real-world applications
            </h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together we spark innovation and drive meaningful impact across Southwest Florida, 
            building a future where AI benefits everyone in our community.
          </p>
        </div>
      </div>
    </section>
  );
};