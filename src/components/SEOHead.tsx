import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object[];
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = "https://bookmelbournetaxi.com/og-image.jpg";

const SEOHead = ({ title, description, canonical, jsonLd, ogImage = DEFAULT_OG_IMAGE }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:locale", "en_AU", "property");
    setMeta("og:site_name", "BookMelbourneTaxi.com", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // JSON-LD (page-specific)
    const scriptIds: string[] = [];
    if (jsonLd) {
      jsonLd.forEach((schema, i) => {
        const id = `seo-jsonld-${i}`;
        scriptIds.push(id);
        let script = document.getElementById(id) as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement("script");
          script.id = id;
          script.type = "application/ld+json";
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema);
      });
    }

    return () => {
      scriptIds.forEach((id) => document.getElementById(id)?.remove());
    };
  }, [title, description, canonical, jsonLd, ogImage]);

  return null;
};

export default SEOHead;
