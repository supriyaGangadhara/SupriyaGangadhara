import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import React from "react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  ArrowRight,
};

interface HeroButton {
  label: string;
  href: string;
  variant: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | "hero";
  icon?: string;
}

interface HeroProps {
  title?: string;
  subheading?: string;
  description?: string;
  buttons?: HeroButton[];
}

const Hero = (props: HeroProps) => {
  const words = useMemo(() => ["SEO", "SMM", "SEM", "PPC"], []);

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting && text !== currentWord) {
      // Typing forward
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text !== "") {
      // Deleting backwards
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text === currentWord) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    } else if (isDeleting && text === "") {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <section className="xl:pb-20 py-10 pt-20 relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto relative z-10 max-md:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            {/* Badge pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 30+ Brands
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl mb-5 leading-tight font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {props?.title}{" "}
              <span className="text-primary">{text}</span>
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl font-medium text-foreground/80 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {props?.subheading}
            </motion.p>

            {/* Description */}
            {props?.description && (
              <motion.p
                className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {props?.description}
              </motion.p>
            )}

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start xl:mt-10 md:mt-8 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {props?.buttons?.map((btn: HeroButton) => {
                const Icon = btn.icon ? iconMap[btn.icon] : null;
                return (
                  <Button key={btn.label} variant={btn.variant} size="lg" asChild>
                    <a href={btn.href} target="_blank" rel="noreferrer" className="capitalize">
                      {btn.label}
                      {Icon && <Icon className="ml-2 w-5 h-5" />}
                    </a>
                  </Button>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            className="w-full lg:w-[42%] shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/assets/home/services/seo.jpg"
              alt="Digital Marketing Strategy"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
