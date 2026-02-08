import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import ContactForm from "../ContactForm";

interface ServicesCTAProps {
  title: string;
  description: string;
  primaryButton: string;
}

export const ServicesCTA = ({ title, description, primaryButton }: ServicesCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (

    <>
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <motion.div
          className="container mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 shadow-[var(--shadow-card)]">
            <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)]">
                {/* <a href="https://calendly.com/supriya99722" target="_blank"> */}
                {/* {primaryButton} */}
                Get your free consultation
                {/* </a> */}

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>


      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] lg:max-h-[90vh] overflow-y-auto bg-background border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get Your Free Consultation
            </DialogTitle>
          </DialogHeader>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-30 animate-pulse" />
            <ContactForm isModal={true} styles={{form: "relative"}} onSuccess={() => setIsModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
