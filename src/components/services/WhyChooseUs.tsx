import { Card } from "@/components/ui/card";
import { Users, Shield, Eye, TrendingUp, Award, Target, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Item {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  items: Item[];
}

const icons: Record<string, React.ElementType> = {
  Users,
  Shield,
  Eye,
  TrendingUp,
  Award,
  Target,
  Zap,
  CheckCircle,
};

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const WhyChooseUs = ({ title, items }: WhyChooseUsProps) => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => {
            const Icon = icons[item.icon] || Users;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-card)]">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
