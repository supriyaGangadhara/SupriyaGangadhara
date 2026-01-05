import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = (props: any) => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">{props?.title}</h2>
            <p className="text-lg text-muted-foreground">{props?.description}</p>
          </motion.div>

          {/* Accordion Items */}
          <Accordion type="single" collapsible className="space-y-4">
            {props?.items.map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Optional Call to Action */}
          {/* 
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out, and I'll be happy to help you with any queries you might have.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
