import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  const services = [
    { name: "SEO Services", path: "/services/search-engine-optimization" },
    { name: "SEM Services", path: "/services/search-engine-marketing" },
    { name: "Social Media Marketing Services", path: "/services/social-media-marketing" },
    { name: "Content Marketing Services", path: "/services/content-marketing" },
    { name: "Local SEO Services", path: "/services/local-seo" },
    { name: "PPC Services", path: "/services/ppc" },
    { name: "Email Marketing Services", path: "/services/email-marketing" },
    { name: "Personal Branding Services", path: "/services/personal-branding" },
    { name: "Guest Posting Services", path: "/services/guest-posting" },
    { name: "Link Building Services", path: "/services/link-building" },
  ];

  const quickLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Blogs', path: '/#blogs' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Supriya</h3>
            <p className="text-muted-foreground text-sm">
              Elevating brands through strategic digital marketing solutions. Your growth is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/kandrasupriya/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kandrasupriya/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kandrasupriya/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/techbysupriya/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Supriya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
