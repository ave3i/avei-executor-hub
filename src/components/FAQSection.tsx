import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Avei?",
    answer: "Avei is a powerful and reliable script executor designed for optimal performance and security. It allows you to run Lua scripts with full feature support.",
  },
  {
    question: "Is Avei safe to use?",
    answer: "Yes, Avei is built with security as a top priority. Our advanced technology ensures undetectable operation while protecting your system and data.",
  },
  {
    question: "How do I get my key after purchase?",
    answer: "After completing your purchase, you will receive your lifetime key instantly via email. You can also access it through your account dashboard.",
  },
  {
    question: "Do I need to pay again for updates?",
    answer: "No! Your one-time payment of $6.99 includes lifetime access to all future updates at no additional cost.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit cards, debit cards, and PayPal for your convenience.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Due to the digital nature of our product, all sales are final. However, if you experience technical issues, our support team is here to help.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through our Discord server where we provide fast and helpful assistance to all users.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
                className="glass-card px-6 border-2 data-[state=open]:border-muted-foreground/30 transition-colors"
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
