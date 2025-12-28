import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
            
            <div className="space-y-8">
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Avei, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">2. License Grant</h2>
                <p className="text-muted-foreground">
                  Upon purchase, you are granted a non-exclusive, non-transferable, lifetime license 
                  to use Avei for personal use. This license cannot be shared, sold, or transferred 
                  to another party.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Prohibited Activities</h2>
                <p className="text-muted-foreground mb-4">You agree not to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Share, distribute, or resell your license key</li>
                  <li>Attempt to reverse engineer or modify the software</li>
                  <li>Use the software for any illegal purposes</li>
                  <li>Exploit bugs or vulnerabilities for unauthorized access</li>
                  <li>Create derivative works based on our software</li>
                </ul>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Refund Policy</h2>
                <p className="text-muted-foreground">
                  Due to the digital nature of our product, all sales are final. No refunds will be 
                  provided after purchase. We encourage you to review all features and requirements 
                  before making a purchase.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground">
                  Avei is provided "as is" without any warranties, express or implied. We do not 
                  guarantee uninterrupted or error-free operation of the software.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall Avei or its developers be liable for any indirect, incidental, 
                  special, or consequential damages arising from the use or inability to use the software.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate your license at any time if you violate these 
                  Terms of Service. Upon termination, you must cease all use of the software.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Continued use of Avei 
                  after changes constitutes acceptance of the new terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
