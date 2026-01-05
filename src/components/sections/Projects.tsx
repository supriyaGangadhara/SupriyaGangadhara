import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce SEO Campaign",
      description: "Increased organic traffic by 340% and revenue by 280% for a leading online retailer",
      results: "+340% Traffic",
      category: "E-commerce",
    },
    {
      title: "Local SEO Success",
      description: "Dominated local search results for law firm, generating 150+ qualified leads monthly",
      results: "+150 Leads/Month",
      category: "Local SEO",
    },
    {
      title: "SaaS Content Strategy",
      description: "Built content authority for B2B SaaS company, ranking for 500+ keywords",
      results: "500+ Rankings",
      category: "Content",
    },
    {
      title: "Technical SEO Overhaul",
      description: "Fixed critical technical issues, improving Core Web Vitals and rankings",
      results: "+250% Rankings",
      category: "Technical",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Real results from real campaigns
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-medium hover:shadow-large transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                    {project.results}
                  </span>
                  <Button variant="ghost" size="sm">
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
