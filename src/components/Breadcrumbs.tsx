import { useLocation, Link, useParams } from "react-router-dom";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import blogsData from "@/jsons/blogs.json";

const routeLabels: Record<string, string> = {
  "about-us": "About Us",
  "blogs": "Blogs",
  "coming-soon": "Coming Soon",
  "services": "Services",
  "sitemap": "Sitemap",
};

const formatServiceName = (id: string) =>
  id.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  // Don't render on homepage
  if (segments.length === 0) return null;

  // Skip sitemap XML routes
  if (location.pathname.includes("sitemap") && location.pathname.includes(".xml")) return null;

  const crumbs: { label: string; path: string }[] = [];

  segments.forEach((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    if (segment === "blog" && !isLast) {
      // "blog" prefix for blog detail — show "Blogs" linking to /blogs
      crumbs.push({ label: "Blogs", path: "/blogs" });
    } else if (segments[0] === "blog" && index === 1) {
      // Blog detail — resolve title from JSON
      const blog = blogsData.blogs.find((b) => b.id === segment);
      crumbs.push({ label: blog?.title || formatServiceName(segment), path });
    } else if (segments[0] === "services" && index === 1) {
      // Service detail — format name
      crumbs.push({ label: formatServiceName(segment), path });
    } else {
      if(segment !== "services"){
        crumbs.push({ label: routeLabels[segment] || formatServiceName(segment), path });
      }
    }
  });

  return (
    <div className="container mx-auto px-4 pt-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map((crumb, i) => (
            <span key={crumb.path} className="inline-flex items-center gap-1.5">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === crumbs.length - 1 ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
