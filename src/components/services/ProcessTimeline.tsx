import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  steps: Step[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const ProcessTimeline = ({ title, steps }: ProcessTimelineProps) => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number circle */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)]">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
