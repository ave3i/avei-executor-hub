import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b-2 border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Avei" className="h-8 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            FAQ
          </a>
        </div>

        <a 
          href="#pricing" 
          className="bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
