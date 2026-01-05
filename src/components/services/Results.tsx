import { Card } from "@/components/ui/card";
import { ArrowUp, Users, BarChart, Target, TrendingUp, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Metric {
  icon: string;
  title: string;
  description: string;
}

interface ResultsProps {
  title: string;
  metrics: Metric[];
}

const icons: Record<string, React.ElementType> = {
  ArrowUp,
  Users,
  BarChart,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const Results = ({ title, metrics }: ResultsProps) => {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {metrics.map((metric, index) => {
            const Icon = icons[metric.icon] || ArrowUp;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {metric.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
