import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/use-contact-form";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";


interface ContactFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
  styles?: {
    form?: string;
  };
}

const ContactForm = (props: ContactFormProps) => {
    const { formRef, isSending, handleSubmit, visitorInfo } = useContactForm(props?.isModal ? props?.onSuccess : null);
    return (
        <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`${props?.styles?.form ?? ''} space-y-6 bg-card p-8 rounded-2xl shadow-medium`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            {props?.isModal && (<div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Free Consultation</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Get Started Today
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                    Let's discuss how we can help grow your business
                </p>
            </div>)}

            <div className={`grid ${props?.isModal ? 'space-y-6' : 'md:grid-cols-2 gap-6'} `}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <Input id="name" name="user_name" placeholder="Your name" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <Input id="email" name="user_email" type="email" placeholder="your@email.com" required />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                </label>
                <Input id="phone" name="user_phone" type="tel" placeholder="+91 123-4567" required />
            </div>
            <div>
                <label htmlFor="company_name" className="block text-sm font-medium mb-2">
                    Company Name
                </label>
                <Input id="company_name" name="company_name" placeholder="Company Name" required />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message or Inquiry
                </label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your digital marketing needs..."
                    rows={5}
                    required
                />
            </div>


            {/* Hidden visitor info */}
            {visitorInfo &&
                Object.entries(visitorInfo).map(([key, value]) => (
                    <input key={key} type="hidden" name={key} value={value} />
                ))}

            <Button variant="hero" size="lg" className="w-full" disabled={isSending}>
                {isSending ? "Sending…" : "Send Message"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust indicators */}
            {props?.isModal && (<div className="mt-6 pt-4 border-t border-primary/10">
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Quick Response
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        No Spam
                    </span>
                </div>
            </div>)}
        </motion.form>
    );
};

export default ContactForm;
