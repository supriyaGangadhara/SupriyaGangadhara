import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Users, Briefcase, BookOpen, Mail, MapPin } from "lucide-react";

const Sitemap = () => {
  const sitemapData = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Blogs", path: "/blogs" },
      ],
    },
    {
      title: "Services",
      icon: Briefcase,
      links: [
        { name: "SEO Services", path: "/services/search-engine-optimization" },
        { name: "SEM Services", path: "/services/search-engine-marketing" },
        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Local SEO Services", path: "/services/local-seo" },
        { name: "PPC Services", path: "/services/ppc" },
        { name: "Email Marketing", path: "/services/email-marketing" },
        { name: "Personal Branding", path: "/services/personal-branding" },
        { name: "Guest Posting", path: "/services/guest-posting" },
        { name: "Link Building", path: "/services/link-building" },
      ],
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { name: "All Blogs", path: "/blogs" },
        { name: "SEO Trends 2025", path: "/blog/10-seo-trends-2025" },
        { name: "Content Marketing Guide", path: "/blog/content-marketing-strategy-guide" },
        { name: "Social Media Best Practices", path: "/blog/social-media-best-practices-2025" },
        { name: "Google Ads Tips", path: "/blog/google-ads-optimization-tips" },
        { name: "Email Marketing Automation", path: "/blog/email-marketing-automation-guide" },
        { name: "Local SEO Guide", path: "/blog/local-seo-google-business-profile" },
        { name: "Technical SEO Checklist", path: "/blog/technical-seo-checklist" },
        { name: "PPC vs SEO", path: "/blog/ppc-vs-seo-comparison" },
      ],
    },
    {
      title: "Contact",
      icon: Mail,
      links: [
        { name: "Contact Us", path: "/#contact", isHash: true },
        { name: "Book Consultation", path: "/#contact", isHash: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Site Navigation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground">
              Find everything you need on our website. Navigate through our pages, services, and resources easily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapData.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <ul className="space-y-3">
                  {category.links.map((link) => (
                    <li key={link.path + link.name}>
                      {link.isHash ? (
                        <a
                          href={link.path}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;