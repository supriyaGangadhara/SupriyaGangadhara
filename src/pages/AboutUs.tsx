import { motion } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  BarChart3,
  Search,
  Share2,
  FileText,
  MousePointer,
  MapPin,
  Mail,
  CheckCircle,
  Award,
  Eye,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutData from "@/jsons/about-us.json";

const iconMap: Record<string, any> = {
  Search,
  Share2,
  MousePointer,
  FileText,
  MapPin,
  Target,
  Mail,
  BarChart3,
  Eye,
  Rocket,
  TrendingUp,
  Users,
  Award,
  CheckCircle
};

const AboutUs = () => {
  const { hero, whoWeAre, whatWeDo, ourApproach, whyChooseUs, missionVision, cta } = aboutData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex max-xl:flex-col items-center gap-6">
            <motion.div
              className="max-w-[750px] mx-auto max-xl:text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {hero.tagline}
              </motion.span>
              <h1 className="text-4xl xl:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {hero.title}
              </h1>
              <p className="text-xl xl:text-2xl text-foreground font-medium mb-4">
                {hero.subtitle}
              </p>
              <p className="text-lg text-primary font-semibold mb-8">
                {hero.highlight}
              </p>
              {hero.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <figure>
              <img src={hero?.image} className="rounded-lg" />
            </figure>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl max-w-4xl mx-auto md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              {whoWeAre.title}
            </h2>
            {whoWeAre.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-muted-foreground text-center mb-6 leading-relaxed last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {whatWeDo.title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {whatWeDo.description}
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {whatWeDo.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <motion.div
                  key={service.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {whatWeDo.footer}
          </motion.p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-12">
          <div className=" mx-auto">
            <motion.h2
              className="text-3xl max-w-5xl mx-auto md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {ourApproach.title}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {ourApproach.intro}
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {ourApproach.description}
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-6">
              {ourApproach.points.map((point, index) => {
                const Icon = iconMap[point.icon] || Target;
                return (
                  <motion.div
                    key={point.title}
                    className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.p
              className="text-center text-muted-foreground mt-10 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {ourApproach.footer}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {whyChooseUs.title}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {whyChooseUs.intro}
            </motion.p>
            <div className="space-y-4">
              {whyChooseUs.points.map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-center text-lg text-primary mt-10 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {whyChooseUs.footer}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{missionVision.mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {missionVision.mission.description}
              </p>
            </motion.div>
            <motion.div
              className="p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{missionVision.vision.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {missionVision.vision.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              {cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {cta.description}
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to={cta.buttonLink}>{cta.buttonText}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
