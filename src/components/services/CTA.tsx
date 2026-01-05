import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/30 shadow-[var(--shadow-card)]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/50">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Transform Your Content?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Let's Build Your Brand Together
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with us to create compelling content that resonates with your audience and drives real results for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)]">
              <a href="/#contact" className="w-full">
                Start Your Journey
              </a>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="https://calendly.com/supriya99722" className="w-full" target="_blank">
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
