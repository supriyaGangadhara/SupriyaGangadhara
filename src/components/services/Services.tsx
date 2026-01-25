import { Card } from "@/components/ui/card";
import strategyIcon from "/assets/content-marketing/strategy-icon.png";
import socialIcon from "/assets/content-marketing/social-icon.png";
import { Mail, Video, Share2, BarChart3, Smartphone, Star, PenTool, LinkIcon, Store, Search, Target, Workflow, Users, LayoutTemplate, FlaskConical, Receipt, User, FileText, Shield, Globe, Mic, MousePointerClick, Monitor, ExternalLink, Settings, Link, Chrome, RectangleEllipsis, FileBarChart, Handshake, Unlink, Megaphone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  id: string | number;
  title: string;
  icon: string;
  description?: string;
}

interface ServicesProps {
  items: Service[];
  title: string;
}

const iconMap: Record<string, string | React.ElementType> = {
  strategy: strategyIcon,
  social: socialIcon,
  email: Mail,
  video: Video,
  distribution: Share2,
  analytics: BarChart3,
  keyword: Search,
  gmb: Store,
  citation: LinkIcon,
  seo: BarChart3,
  writing: PenTool,
  reviews: Star,
  mobile: Smartphone,

  target: Target,
  workflow: Workflow,
  users: Users,
  layout: LayoutTemplate,
  test: FlaskConical,
  receipt: Receipt,
  newsletter: Mail,

  identity: User,
  content: FileText,
  reputation: Shield,
  website: Globe,
  speaking: Mic,
  networking: Users,

  landing: MousePointerClick,
  remarketing: Target,
  display: Monitor,

  "file-text": FileText,
  "external-link": ExternalLink,
  "settings": Settings,
  "link": Link,
  "search": Search,
  "pen-tool": PenTool,
  "shield": Shield,

  google: Chrome,
  ads: RectangleEllipsis,
  reporting: FileBarChart,

  handshake: Handshake,
  "link-broken": Unlink,
  megaphone: Megaphone,

  'map-pin': MapPin
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Services = ({ title, items }: ServicesProps) => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {items.map((service, index) => {
            const icon = iconMap[service.icon];
            const isImage = typeof icon === "string";
            const Icon = !isImage ? icon as React.ElementType : null;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
              >
                <Card
                  className="group h-full p-6 bg-[image:var(--gradient-card)] border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {isImage ? (
                        <img src={icon as string} alt={service.title} className="w-12 h-12 object-contain" />
                      ) : Icon ? (
                        <Icon className="w-8 h-8 text-primary" />
                      ) : null}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {service.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
