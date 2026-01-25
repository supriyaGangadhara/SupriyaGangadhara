import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface ServicesProps {
  title?: string;
  description?: string;
  services?: Service[];
}

const Services = (props: ServicesProps) => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl font-bold">{props?.title}</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
              {props?.description}
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {props?.services?.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
