import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { useVisitorInfo } from "@/hooks/use-visitor-info";

const Contact = (props: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const info = useVisitorInfo();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    console.log(formRef.current,"formRef.current")

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAIL_API_KEY

    )
      .then(result => {
        // console.log("Email sent: ", result.text);
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        formRef.current?.reset();
      })
      .catch(error => {
        // console.error("Email send error: ", error.text);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl mb-4 font-bold">{props?.title}</h2>
            <p className="text-xl text-muted-foreground">{props?.sub_title}</p>
            <p className="text-lg text-muted-foreground mt-2">{props?.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">{props?.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+91 {props?.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={formRef}
              className="space-y-6 bg-card p-8 rounded-2xl shadow-medium"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
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
              {info && Object.entries(info).map(([key]) => (
                <div key={key} className="hidden">
                  <label className="capitalize">{key}</label>

                  {key === "message" ? (
                    <textarea
                      name={key}
                      required
                      className="border p-2 w-full"
                    />
                  ) : (
                    <input
                      type={"text"}
                      name={key}
                      value={info[key]}
                      required
                      className="border p-2 w-full"
                    />
                  )}
                </div>
              ))}
              <Button variant="hero" size="lg" className="w-full" disabled={isSending}>
                {isSending ? "Sending…" : "Send Message"}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

