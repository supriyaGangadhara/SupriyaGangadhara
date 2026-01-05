import { Lightbulb, Rocket, Eye, BarChart3, TrendingUp } from "lucide-react";
import strategyIllustration from "/strategy-illustration.jpg";
import { motion } from "framer-motion";

const icons: Record<string, any> = {
  Lightbulb,
  Rocket,
  Eye,
  BarChart3,
  TrendingUp,
};

const WorkProcess = (props: any) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={strategyIllustration}
          alt="work process background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl xl:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          {props?.title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {props?.sub_title}
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[4px] bg-gradient-to-b from-primary/60 via-purple-400/60 to-primary/60 -translate-x-1/2" />

        <div className="flex flex-col md:gap-24 gap-16">
          {props?.steps.map((step, index) => {
            const Icon = icons[step.icon];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Connector Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-purple-500 rounded-full shadow-lg" />

                {/* Content Card */}
                <div
                  className={`relative w-full md:w-1/2 bg-card/80 backdrop-blur-lg border border-border rounded-2xl shadow-sm p-8 ${isLeft ? "md:mr-auto" : "md:ml-auto"
                    } hover:shadow-xl transition-all duration-300`}
                >
                  <div
                    className={`flex justify-start
                       mb-4`}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Number Badge */}
                  <div
                    className={`absolute top-4 text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-purple-500/30 opacity-20 ${isLeft ? "right-4" : "left-4"
                      }`}
                  >
                    {step.number}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
