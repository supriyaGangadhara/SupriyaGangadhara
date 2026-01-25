import { Card } from "@/components/ui/card";
import { Users, MessageSquare, TrendingUp, Globe, Store, Target, Smartphone, ThumbsUp, Send, UserCheck, Layers, Zap, Crosshair, Megaphone, ShieldCheck, Link } from "lucide-react";
import { motion } from "framer-motion";

interface ApproachItem {
  title: string;
  description: string;
  icon?: string;
}

interface ApproachProps {
  items: ApproachItem[];
  title: string;
  subtitle?: string;
}

const icons = {
  Users: Users,
  MessageSquare: MessageSquare,
  TrendingUp: TrendingUp,
  Globe: Globe,
  Store: Store,
  Target: Target,
  Smartphone: Smartphone,
  ThumbsUp: ThumbsUp,
  Send: Send,
  UserCheck: UserCheck,
  Crosshair: Crosshair,
  Zap: Zap,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Megaphone: Megaphone,
  Link: Link,
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren", // ensures parent animates before children start  
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Approach = ({ items, title, subtitle }: ApproachProps) => {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-md:px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
              {subtitle}
            </p>
          )}
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
           whileInView="visible"
          animate="show"
        >
          {items.map((item, index) => {
            const Icon = icons[item.icon!];
            return (
              <motion.div key={index}  whileInView="visible" variants={itemVariants}>
                <Card
                  className="group p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-glow">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
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
