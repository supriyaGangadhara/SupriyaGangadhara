import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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

  const navLinks = [
    { name: "Home", path: "/", type: "link" },
    { name: "About", path: "/about-us", type: "link" },
    { name: "Services", type: "dropdown" },
    { name: "Blogs", path: "/blogs", type: "link" },
    { name: "Resources", path: "/#resources", type: "link" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.hash === path?.split("#")[1] ? `#${path?.split("#")[1]}` : "";
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">Supriya
            </span> */}
            <img src="/logo/v2.svg" alt="supriya logo" className="aspect-[80/60] " />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.type === "link" ?
                  <a
                    href={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-foreground"
                      }`}
                  >
                    {link.name}
                  </a>
                  :
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                      Services <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-popover border-border">
                      {services.map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link to={service.path} className="cursor-pointer">
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
              </div>
            ))}



            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button variant="hero" size="sm" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen((isOpen)=> isOpen = !isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden p-4 border-t border-border max-md:h-screen max-md:overflow-auto">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-foreground"
                    }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm pl-4 py-1 text-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} Mode</span>
              </Button>

              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
