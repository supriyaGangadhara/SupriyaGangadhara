import { Card } from "@/components/ui/card";
import { Search, Shield, TrendingUp, Target, Eye, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

interface Point {
  icon: string;
  title: string;
  description: string;
}

interface WhyItMattersProps {
  title: string;
  description: string;
  points: Point[];
}

const icons: Record<string, React.ElementType> = {
  Search,
  Shield,
  TrendingUp,
  Target,
  Eye,
  Users,
  Zap,
  Award,
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const WhyItMatters = ({ title, description, points }: WhyItMattersProps) => {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 leading-relaxed">
            {description}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {points.map((point, index) => {
            const Icon = icons[point.icon] || Search;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
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
