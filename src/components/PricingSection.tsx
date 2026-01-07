import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Lifetime access",
  "All future updates",
  "Priority support",
  "Full Lua support",
  "Auto updates",
  "Undetectable",
];

// REPLACE THIS WITH YOUR LEMONSQUEEZY CHECKOUT LINK
const LEMONSQUEEZY_CHECKOUT_URL = "https://your-store.lemonsqueezy.com/checkout/buy/YOUR_PRODUCT_ID";

const PricingSection = () => {
  const handlePurchase = () => {
    window.open(LEMONSQUEEZY_CHECKOUT_URL, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One payment, lifetime access. No subscriptions, no hidden fees.
          </p>
        </div>
        
        <div className="max-w-md mx-auto animate-scale-in animation-delay-200">
          <div className="glass-card p-6 md:p-8 relative overflow-hidden hover-glow transition-all duration-500">
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Lifetime Key
              </span>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-foreground">$6.99</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={feature} 
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="glow" 
              size="xl" 
              className="w-full hover-lift"
              onClick={handlePurchase}
            >
              Purchase Now
              <ExternalLink className="w-4 h-4" />
            </Button>
            
            <p className="text-center text-muted-foreground text-xs mt-4">
              Secure payment via LemonSqueezy • License key delivered instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
