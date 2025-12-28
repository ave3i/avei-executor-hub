import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>
            
            <div className="space-y-8">
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy explains how Avei collects, uses, and protects your personal 
                  information. We are committed to ensuring your privacy is protected.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following information:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Email address (for license delivery and support)</li>
                  <li>Payment information (processed by third-party providers)</li>
                  <li>Device information (for license validation)</li>
                  <li>Usage statistics (anonymous, for product improvement)</li>
                </ul>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use collected information for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Delivering and managing your license</li>
                  <li>Providing customer support</li>
                  <li>Improving our products and services</li>
                  <li>Communicating important updates</li>
                </ul>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. Your data 
                  is encrypted and stored securely.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We use trusted third-party services for payment processing. These services have 
                  their own privacy policies, and we encourage you to review them. We do not store 
                  your full payment details.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Cookies</h2>
                <p className="text-muted-foreground">
                  Our website may use cookies to enhance your experience. You can choose to accept 
                  or decline cookies through your browser settings.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as necessary to fulfill the 
                  purposes outlined in this policy, unless a longer retention period is required 
                  by law.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Any changes will be posted 
                  on this page with an updated revision date.
                </p>
              </section>
              
              <section className="glass-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us through 
                  our Discord server or support channels.
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

export default Privacy;
