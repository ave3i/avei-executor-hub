import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-up">
            <img 
              src={logo} 
              alt="Avei" 
              className="h-20 w-auto mx-auto animate-float"
            />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border-2 border-border mb-8 animate-fade-up animation-delay-100">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-sm text-foreground font-medium">Now Available</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up animation-delay-200">
            The Ultimate
            <span className="block">Script Executor</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up animation-delay-300">
            Fast, reliable, and undetectable. Execute your scripts with confidence using the most powerful executor available.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button variant="glow" size="xl" asChild>
              <a href="#pricing">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#features">
                Learn More
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t-2 border-border animate-fade-up animation-delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
