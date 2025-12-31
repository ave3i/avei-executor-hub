import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Memoria" className="h-8 w-auto" />
        </Link>

        {/* Center pill nav - Desktop */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-secondary border-2 border-border">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm px-4 py-1.5 rounded-full hover:bg-background"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm px-4 py-1.5 rounded-full hover:bg-background"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm px-4 py-1.5 rounded-full hover:bg-background"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Right side - Auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-muted-foreground text-sm hidden lg:block">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
            >
              FAQ
            </a>

            <div className="pt-4 flex flex-col gap-4">
              {user ? (
                <>
                  <span className="text-muted-foreground text-sm">
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Login
                </Link>
              )}

              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..."/>
                </svg>
                Discord
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
