import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const features = [
  "Lifetime access",
  "All future updates",
  "Priority support",
  "Full Lua support",
  "Auto updates",
  "Undetectable",
];

const PricingSection = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handlePurchase = async () => {
    if (!user) {
      navigate("/auth?redirect=pricing");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          priceId: "price_1SjNW7GY68qHNPyZXJ8CDNaC",
          customerEmail: user.email,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to start checkout",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background">
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
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-foreground/20" />
            
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
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
                  <div className="w-5 h-5 rounded-full bg-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="glow" 
              size="xl" 
              className="w-full"
              onClick={handlePurchase}
              disabled={loading}
            >
              {loading ? "Loading..." : user ? "Purchase Now" : "Login to Purchase"}
            </Button>
            
            <p className="text-center text-muted-foreground text-xs mt-4">
              Secure payment via Stripe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
