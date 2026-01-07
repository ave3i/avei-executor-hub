import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import glockIcon from "@/assets/glock-icon.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo with glow effect */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-150" />
              <img 
                src={glockIcon} 
                alt="Glock" 
                className="h-24 w-auto mx-auto relative z-10 animate-float"
              />
            </div>
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-up animation-delay-100 hover-glow">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-foreground font-medium">Now Available</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up animation-delay-200">
            Glock
            <span className="block text-muted-foreground">Script Executor</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up animation-delay-300">
            Fast, reliable, and undetectable. Execute your scripts with confidence using the most powerful executor available.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button variant="glow" size="xl" asChild className="hover-lift">
              <a href="#pricing">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="hover-lift">
              <Link to="/download">
                <Download className="w-5 h-5" />
                Download
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-border animate-fade-up animation-delay-500">
            <div className="hover-lift p-4 rounded-xl">
              <div className="text-2xl md:text-4xl font-bold text-foreground">10K+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Active Users</div>
            </div>
            <div className="hover-lift p-4 rounded-xl">
              <div className="text-2xl md:text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Uptime</div>
            </div>
            <div className="hover-lift p-4 rounded-xl">
              <div className="text-2xl md:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
