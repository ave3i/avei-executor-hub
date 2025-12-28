import { Zap, Shield, RefreshCw, Code, Cpu, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute scripts instantly with our optimized engine. No lag, no delays.",
  },
  {
    icon: Shield,
    title: "Undetectable",
    description: "Advanced bypass technology keeps you safe and secure at all times.",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description: "Always running the latest version with automatic silent updates.",
  },
  {
    icon: Code,
    title: "Full Lua Support",
    description: "Complete Lua support with all standard libraries and custom extensions.",
  },
  {
    icon: Cpu,
    title: "Low Resource Usage",
    description: "Minimal CPU and memory footprint for smooth performance.",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Your scripts and data are encrypted and protected at all times.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Avei?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built from the ground up with performance and reliability in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover:border-muted-foreground/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary border-2 border-border flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
