import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Glock?",
    answer: "Glock is a powerful script executor designed for optimal performance and reliability. It supports full Lua scripting and is regularly updated.",
  },
  {
    question: "How do I receive my license key?",
    answer: "After purchase through LemonSqueezy, your license key will be delivered to your email address instantly. You can then use it on the download page to access Glock.",
  },
  {
    question: "Is Glock safe to use?",
    answer: "Yes, Glock is designed with security in mind. We employ advanced detection-avoidance techniques to ensure safe operation.",
  },
  {
    question: "Do I get lifetime updates?",
    answer: "Absolutely! Your one-time purchase includes all future updates at no additional cost.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and other payment methods through LemonSqueezy.",
  },
  {
    question: "How do I get support?",
    answer: "Join our Discord community for 24/7 support from our team and community members.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border data-[state=open]:border-muted-foreground/30 transition-all duration-300 animate-fade-up hover-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-foreground hover:no-underline py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
