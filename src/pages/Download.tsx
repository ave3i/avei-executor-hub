import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download as DownloadIcon, Key, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import glockIcon from "@/assets/glock-icon.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// REPLACE WITH YOUR ACTUAL DOWNLOAD URL
const DOWNLOAD_URL = "https://your-storage.com/glock-latest.zip";

const DownloadPage = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const validateKey = async () => {
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const valid = licenseKey.trim().length > 10;
    setIsValid(valid);
    setIsChecking(false);
  };

  const handleDownload = () => {
    window.open(DOWNLOAD_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 animate-fade-in">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-150" />
                <img src={glockIcon} alt="Glock" className="h-20 w-auto relative z-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Download Glock</h1>
              <p className="text-muted-foreground">Enter your license key to access the download.</p>
            </div>
            
            <div className="glass-card p-6 md:p-8 animate-scale-in animation-delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Key className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">License Validation</h2>
                  <p className="text-sm text-muted-foreground">Enter the key from your purchase</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={licenseKey}
                  onChange={(e) => { setLicenseKey(e.target.value); setIsValid(null); }}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-center font-mono tracking-wider"
                />
                
                {isValid === false && (
                  <div className="flex items-center gap-2 text-destructive text-sm animate-fade-in">
                    <AlertCircle className="w-4 h-4" />
                    Invalid license key. Please check and try again.
                  </div>
                )}
                
                {isValid === true && (
                  <div className="flex items-center gap-2 text-green-500 text-sm animate-fade-in">
                    <CheckCircle className="w-4 h-4" />
                    License verified successfully!
                  </div>
                )}
                
                {isValid !== true ? (
                  <Button variant="glow" size="xl" className="w-full hover-lift" onClick={validateKey} disabled={!licenseKey.trim() || isChecking}>
                    {isChecking ? "Validating..." : "Validate Key"}
                  </Button>
                ) : (
                  <Button variant="glow" size="xl" className="w-full hover-lift" onClick={handleDownload}>
                    <DownloadIcon className="w-5 h-5" />
                    Download Glock
                  </Button>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Don't have a license? <Link to="/#pricing" className="text-foreground hover:underline">Purchase one here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownloadPage;
