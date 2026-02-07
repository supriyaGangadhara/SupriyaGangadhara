import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BlogCard {
  category: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
}

interface BlogsProps {
  title?: string;
  description?: string;
  cards?: BlogCard[];
}

const Blogs = (props: BlogsProps) => {
  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl xl:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {props?.title}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {props?.description}
            </motion.p>
          </div>

          {/* Blog Cards */}
          <div className="space-y-8">
            {props?.cards?.map((blog: BlogCard, index: number) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <span className="px-3 py-1 text-xs font-semibold gradient-primary text-white rounded-full">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-primary/10 self-start md:self-center mt-4 md:mt-0"
                  >
                    Read More{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
