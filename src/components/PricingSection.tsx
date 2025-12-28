import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Lifetime access",
  "All future updates",
  "Priority support",
  "Full Lua support",
  "Auto updates",
  "Undetectable",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One payment, lifetime access. No subscriptions, no hidden fees.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 glow-effect relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Lifetime Key
              </span>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-foreground">$6.99</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="glow" size="xl" className="w-full">
              Purchase Now
            </Button>
            
            <p className="text-center text-muted-foreground text-xs mt-4">
              Secure payment via trusted providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
