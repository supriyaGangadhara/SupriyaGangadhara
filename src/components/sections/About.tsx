import { Award, Users, TrendingUp, Target } from "lucide-react";
import { motion } from "framer-motion";
import BookConsultation from "./BookConsultation";
const iconMap = {
  TrendingUp,
  Users,
  Target,
  Award,
};

interface Achievement {
  icon: keyof typeof iconMap;
  value: string;
  label: string;
}

interface AboutProps {
  title?: string;
  paragraphs?: string[];
  achievements?: Achievement[];
}

const About = (props: AboutProps) => {

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto max-md:px-4">

        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl xl:text-5xl text-center mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {props?.title}
          </motion.h2>

          {/* Paragraphs */}
          {props?.paragraphs.map((text: string, i: number) => (
            <motion.p
              key={i}
              className="text-lg text-muted-foreground text-center mb-8 mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}


          <div className="grid md:grid-cols-4 gap-8 pt-8">
            {props?.achievements.map((achievement, index) => {
              const Icon = iconMap[achievement?.icon];
              return (
                <motion.div key={index} className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  {/* text-transparent */}
                  <div className="text-4xl font-bold mb-2 gradient-primary bg-clip-text text-white">
                    {achievement.value}
                  </div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section >
  );
};

export default About;
