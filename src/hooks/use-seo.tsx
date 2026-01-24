import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const BASE_URL = "https://supriyagangadhara.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo/v2.svg`;
const DEFAULT_AUTHOR = "Supriya Growth Hub";

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  keywords,
  author = DEFAULT_AUTHOR,
  publishedTime,
  modifiedTime,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (
      property: string,
      content: string,
      isProperty = false
    ) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(
        `meta[${attribute}="${property}"]`
      ) as HTMLMetaElement;

      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Helper to remove meta tag if exists
    const removeMetaTag = (property: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      const meta = document.querySelector(`meta[${attribute}="${property}"]`);
      if (meta) meta.remove();
    };

    // Update or create canonical link
    const updateCanonical = (url: string) => {
      let link = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (link) {
        link.setAttribute("href", url);
      } else {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.setAttribute("href", url);
        document.head.appendChild(link);
      }
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("author", author);

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Canonical URL
    if (canonical) {
      updateCanonical(BASE_URL+ canonical);
    }

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", (BASE_URL + canonical) || BASE_URL, true);
    updateMetaTag("og:site_name", "Supriya Growth Hub", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:site", "@supriyagrowth");

    // Article specific meta tags (for blog posts)
    if (ogType === "article") {
      if (publishedTime) {
        updateMetaTag("article:published_time", publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag("article:modified_time", modifiedTime, true);
      }
      updateMetaTag("article:author", author, true);
    } else {
      // Remove article-specific tags for non-article pages
      removeMetaTag("article:published_time", true);
      removeMetaTag("article:modified_time", true);
      removeMetaTag("article:author", true);
    }

    // Cleanup function to restore default title on unmount (optional)
    return () => {
      // Keep the last set meta tags (single page app behavior)
    };
  }, [
    title,
    description,
    canonical,
    ogImage,
    ogType,
    keywords,
    author,
    publishedTime,
    modifiedTime,
  ]);
};

export default useSEO;