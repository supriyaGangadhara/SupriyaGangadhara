import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const iconMap = {
  ArrowRight,
};

interface Button {
  label: string;
  href: string;
  variant: string;
  icon?: string;
}

interface HeroProps {
  title?: string;
  subheading?: string;
  description?: string;
  buttons?: Button[];
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
    <section className="xl:pt-32 xl:pb-20 py-10 gradient-hero relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto relative z-10 max-md:px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            className="text-5xl xl:text-7xl mb-6 leading-tight font-bold"
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
            className="text-xl md:text-2xl text-muted-foreground mb-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {props?.subheading}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 mx-auto"
            // className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {props?.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {props?.buttons?.map((btn: Button, index: number) => {
              const Icon = btn.icon ? iconMap[btn.icon] : null;
              return (
                <Button key={index} variant={btn.variant} size="lg" asChild>
                  <a href={btn.href} target="_blank" className="capitalize">
                    {btn.label}
                    {Icon && <Icon className="ml-2 w-5 h-5" />}
                  </a>
                </Button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
