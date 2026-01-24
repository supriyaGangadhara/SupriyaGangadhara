import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

const Contact = (props: any) => {
  

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          {props?.title && (<motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl mb-4 font-bold">{props?.title}</h2>
            <p className="text-xl text-muted-foreground">{props?.sub_title}</p>
            <p className="text-lg text-muted-foreground mt-2">{props?.description}</p>
          </motion.div>)}

          <div className={`grid ${(props?.email && props?.phone) ? "md:grid-cols-2" : ""} gap-12`}>
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {(props?.email && props?.phone) && <div>
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
              </div>}
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

