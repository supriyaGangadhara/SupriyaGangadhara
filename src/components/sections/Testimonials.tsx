import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import testimonialIcon from '/assets/testimonial-icon.webp'

interface Testimonial {
  rating: number;
  content: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  cards?: Testimonial[];
}

const Testimonials = (props: TestimonialsProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl xl:text-5xl font-bold">{props?.title}</h2>
            <p className="text-lg text-muted-foreground mt-2">
              {props?.description}
            </p>
            <img src={testimonialIcon} alt="testimonial icon" className="object-contain h-8 w-64 mx-auto mt-3" />
          </motion.div>

          {/* Carousel */}
          {props?.cards && props?.cards.length > 0 && (
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {props?.cards?.map((testimonial: Testimonial, index: number) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <Card className="p-8 h-full">
                        <div className="flex gap-1 mb-4">
                          {/* {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${testimonial.rating > i ? 'fill-primary' : ''}  text-primary`}
                            />
                          ))} */}

                          {[...Array(5)].map((_, i) => {
                            const rating = testimonial.rating;
                            const filled = i + 1 <= Math.floor(rating);
                            const half = !filled && rating > i && rating < i + 1;

                            return (
                              <div key={i} className="relative w-5 h-5">
                                {/* Base Star (outline) */}
                                <Star className="w-5 h-5 text-primary/40" />

                                {/* Filled Star */}
                                {filled && (
                                  <Star className="w-5 h-5 text-primary fill-primary absolute top-0 left-0" />
                                )}

                                {/* Half Star */}
                                {half && (
                                  <Star
                                    className="w-5 h-5 text-primary fill-primary absolute top-0 left-0"
                                    style={{
                                      clipPath: "inset(0 50% 0 0)"
                                    }}
                                  />
                                )}
                              </div>
                            );
                          })}

                        </div>
                        <p className="text-muted-foreground mb-6 italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
