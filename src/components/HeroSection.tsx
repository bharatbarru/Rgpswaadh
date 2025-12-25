import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center pt-20"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/60 rounded-full px-4 py-2 animate-fade-up">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Sustainable Agriculture Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up animation-delay-100">
              Innovating Agriculture.
              <span className="block text-primary">Empowering Growth.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-up animation-delay-200">
              Welcome to RGP, a diversified enterprise dedicated to building
              sustainable value across agriculture, food processing, trading,
              and infrastructure. Delivering dependable solutions that empower
              farmers and global buyers.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
              <Button variant="hero" size="lg">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-fade-up animation-delay-400">
              <div>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-accent rounded-3xl -rotate-3" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-foreground">RGP Swaadh Farms</p>
                  <p className="text-muted-foreground">Modern Farming Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
