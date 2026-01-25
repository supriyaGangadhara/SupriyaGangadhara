import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon, Search, BarChart, FileText, Share2, MapPin, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  link: string;
  image?: string;
}

const iconMap = {
  Search,
  BarChart,
  Share2,
  FileText,
  Mail,
  MapPin,
  User
};

const ServiceCard = ({ icon, title, description, link, image }: ServiceCardProps) => {
  const Icon = iconMap[icon];
  return (
    <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border overflow-hidden group">
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="link" className="p-0 h-auto text-primary" asChild>
          <Link to={link}>
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
