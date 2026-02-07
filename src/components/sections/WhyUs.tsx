import { motion } from "framer-motion";

interface Reason {
  image: string;
  title: string;
  description: string;
}

interface WhyUsProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  reasons?: Reason[];
}

const WhyUs = (props: WhyUsProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-md:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">{props?.title}</h2>
          <p className="text-lg text-muted-foreground mb-2 md:px-12 mx-auto">
            {props?.subtitle}
          </p>
          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            {props?.highlight}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-20 md:px-12">
          {props?.reasons?.map((reason: Reason, index: number) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-64 h-64 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
