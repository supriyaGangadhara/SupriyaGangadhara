import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import blogsData from "@/jsons/blogs.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useSEO from "@/hooks/use-seo";

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const blog = useMemo(() => {
    return blogsData.blogs.find((b) => b.id === blogId);
  }, [blogId]);

  const getCategoryName = (categoryId: string) => {
    const category = blogsData.categories.find((c) => c.id === categoryId);
    return category?.name || categoryId;
  };

  // SEO for blog detail page
  useSEO({
    title: blog ? `${blog.title} | Supriya Growth Hub Blog` : "Blog Not Found | Supriya Growth Hub",
    description: blog?.excerpt || "Read our latest digital marketing insights and tips.",
    canonical: `/blog/${blogId}`,
    ogType: "article",
    ogImage: blog?.image ? `https://supriyagrowthhub.com${blog.image}` : undefined,
    author: blog?.author || "Supriya Growth Hub",
    keywords: blog ? `${getCategoryName(blog?.category)}, digital marketing, ${blog.title}` : "digital marketing blog",
  });


  const relatedBlogs = useMemo(() => {
    if (!blog) return [];
    return blogsData.blogs
      .filter((b) => b.category === blog.category && b.id !== blog.id)
      .slice(0, 3);
  }, [blog]);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!blog) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/blogs")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
          </Button>
        </div>
      </main>
    );
  }

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-muted-foreground ml-4 mb-2">
            {line.replace("- ", "")}
          </li>
        );
      }
      // if (line.trim() === "") {
      //   return <br key={index} />;
      // }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blogs">Blogs</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{blog.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Link
                to={`/blogs?category=${blog.category}`}
                className="px-3 py-1 text-sm font-semibold gradient-primary text-white rounded-full hover:opacity-90 transition-opacity"
              >
                {getCategoryName(blog.category)}
              </Link>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.article
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {blog.excerpt}
            </p>
            {renderContent(blog.content)}
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.article
                  key={relatedBlog.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-elegant transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${relatedBlog.id}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{relatedBlog.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want More Insights?</h2>
            <p className="text-muted-foreground mb-8">
              Explore our complete collection of digital marketing articles and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link to="/blogs">
                  View All Articles <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/#contact">Get a Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
