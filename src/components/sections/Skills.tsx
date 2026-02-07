import { Search, Target, Share2, FileEdit, Mail, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Search,
  Target,
  Share2,
  FileEdit,
  Mail,
  MapPin,
  Award,
};

interface Skill {
  icon: keyof typeof iconMap;
  name: string;
  level: number;
}

interface SkillsProps {
  title?: string;
  description?: string;
  skills?: Skill[];
}

const Skills = (props: SkillsProps) => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl font-bold">{props?.title}</h2>
            <p className="text-lg text-muted-foreground mt-2">{props?.description}</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {props?.skills?.map((skill: Skill, index: number) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
                  </div>

                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
