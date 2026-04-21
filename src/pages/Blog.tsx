import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedPages from "@/components/RelatedPages";
import { blogPosts } from "@/data/blog-posts";
import {
  sitewideLocalBusinessSchema,
  aggregateRatingSchema,
  buildBreadcrumbSchema,
  BASE,
} from "@/lib/seo-schemas";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home" },
  { name: "Blog", slug: "blog" },
]);

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BASE}/blog#blog`,
  name: "BookMelbourneTaxi Blog",
  description:
    "Long-tail guides, fare comparisons, route breakdowns and insider tips for booking a taxi in Melbourne, Victoria.",
  url: `${BASE}/blog`,
  publisher: { "@id": `${BASE}/#business` },
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    url: `${BASE}/blog/${p.slug}`,
    datePublished: p.publishedAt,
    dateModified: p.updatedAt,
    author: { "@type": "Organization", name: "BookMelbourneTaxi.com" },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogPosts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE}/blog/${p.slug}`,
    name: p.title,
  })),
};

const Blog = () => (
  <>
    <SEOHead
      title="Melbourne Taxi Blog — Fares, Tips & Route Guides | BookMelbourneTaxi"
      description="In-depth Melbourne taxi guides: airport-to-CBD prices, fare comparisons, peak-hour timing, wheelchair-accessible cabs, taxi vs Uber and more — updated 2026."
      canonical={`${BASE}/blog`}
      jsonLd={[blogListSchema, itemListSchema, sitewideLocalBusinessSchema, aggregateRatingSchema, breadcrumbSchema]}
    />
    <Navbar />
    <main>
      <section className="pt-24 pb-12 bg-navy-gradient">
        <div className="container text-center max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm font-body text-primary-foreground/60">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground/80">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            Melbourne Taxi Blog
          </h1>
          <p className="text-lg md:text-xl font-body text-primary-foreground/75">
            In-depth guides, fare breakdowns and insider tips for getting around Melbourne by taxi —
            updated for 2026.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs font-body text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTimeMinutes} min
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="font-body text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm font-body text-muted-foreground pt-3 border-t border-border">
                  <time dateTime={post.publishedAt} className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-primary font-semibold inline-flex items-center gap-1">
                    Read article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        title="Browse our Melbourne taxi guides"
        subtitle="Service pages with full fare breakdowns and booking links."
        links={["airport", "maxi", "cbd", "victoria", "howto", "calculator"]}
      />
    </main>
    <Footer />
  </>
);

export default Blog;
