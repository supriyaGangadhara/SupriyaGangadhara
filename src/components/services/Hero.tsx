import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  tagline: string;
  contents: string[];
  bgImg?: string;
  cta?: string;
}

export const Hero = ({ title, tagline, contents, bgImg, cta }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <motion.section
        className="relative min-h-[calc(100vh-640px)] flex items-center justify-center overflow-hidden px-4"
        // initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={containerVariants}
      >

        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />

        <div className="flex max-xl:flex-col xl:justify-between items-center gap-4 container mx-auto">
          <div className=" grid items-center max-xl:text-center relative z-10 py-10 xl:py-20">
            <div className="space-y-8 max-w-5xl mx-auto">
              <motion.h1
                variants={containerVariants}
                className="text-4xl  xl:text-5xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              >
                {title}
              </motion.h1>
              {contents.map((desc: string, index: number) => (
                <motion.p key={desc} variants={containerVariants} className="text-base max-w-[95%] xl:text-xl text-muted-foreground leading-relaxed">
                  {desc}
                </motion.p>
              ))}
              <motion.div variants={containerVariants} className="pt-4">
                  <Link  to={"/coming-soon"}>
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)]">
                    {cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                  </Link>
                {/* <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Learn More
            </Button> */}
              </motion.div>
            </div>
          </div>

          <figure className="z-10 pb-10 xl:py-10">
            <img src={bgImg} className="rounded-lg" />
          </figure>
        </div>
      </motion.section>

    </>
  );
};
