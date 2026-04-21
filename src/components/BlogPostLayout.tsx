import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedPages from "@/components/RelatedPages";
import BookTaxiCTA from "@/components/BookTaxiCTA";
import StickyBlogCTA from "@/components/StickyBlogCTA";
import QuoteForm from "@/components/QuoteForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlogPost } from "@/data/blog-posts";
import {
  sitewideLocalBusinessSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  BASE,
} from "@/lib/seo-schemas";

interface BlogPostLayoutProps {
  post: BlogPost;
  related: BlogPost[];
}

const BlogPostLayout = ({ post, related }: BlogPostLayoutProps) => {
  const url = `${BASE}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: `${BASE}/og-image.jpg`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "BookMelbourneTaxi.com",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "BookMelbourneTaxi.com",
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-AU",
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home" },
    { name: "Blog", slug: "blog" },
    { name: post.title, slug: `blog/${post.slug}` },
  ]);

  const faqSchema = buildFaqSchema(post.faqs);

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={url}
        jsonLd={[articleSchema, sitewideLocalBusinessSchema, breadcrumbSchema, faqSchema]}
      />
      <Navbar />
      <StickyBlogCTA />
      <main>
        <article className="pt-24 pb-16 bg-navy-gradient">
          <div className="container max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-body text-primary-foreground/60">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary-foreground/80 line-clamp-1">{post.category}</span>
            </nav>

            <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary font-body text-xs font-semibold uppercase tracking-wide mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm font-body text-primary-foreground/60 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTimeMinutes} min read
              </span>
            </div>

            <p className="text-lg md:text-xl font-body text-primary-foreground/80 leading-relaxed">
              {post.intro}
            </p>

            <BookTaxiCTA variant="hero" />
          </div>
        </article>

        <section className="py-12 bg-background">
          <div className="container max-w-3xl">
            {/* TL;DR */}
            <aside className="mb-12 bg-muted border-l-4 border-primary rounded-r-lg p-6">
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">Key takeaways</h2>
              <ul className="space-y-2 font-body text-foreground/80">
                {post.tldr.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <BookTaxiCTA variant="inline" />

            {/* Body sections */}
            {post.sections.map((sec, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pi) => (
                  <p key={pi} className="font-body text-foreground/80 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="space-y-2 mb-4 font-body text-foreground/80">
                    {sec.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <BookTaxiCTA
              heading="Now you know the fares — book your ride"
              subheading="Pre-book online for a fixed price with free cancellation, or get an instant fare estimate from our calculator."
            />

            {/* FAQs — native accordion + JSON-LD FAQPage schema (emitted in <head>) */}
            <section
              className="mt-12 pt-10 border-t border-border"
              aria-labelledby="faq-heading"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              <h2
                id="faq-heading"
                className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6"
              >
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {post.faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-lg px-5 border-b"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline">
                      <span itemProp="name">{f.q}</span>
                    </AccordionTrigger>
                    <AccordionContent
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div
                        itemProp="text"
                        className="font-body text-foreground/75 leading-relaxed"
                      >
                        {f.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Book your taxi CTA inside FAQ section */}
              <div className="mt-8 pt-6 border-t border-border">
                <BookTaxiCTA
                  heading="Ready to book your taxi?"
                  subheading="Get an instant quote or pre-book your ride now."
                />
              </div>
            </section>

            {/* Related posts — auto-selected by shared route keywords + category */}
            {related.length > 0 && (
              <section className="mt-12 pt-10 border-t border-border" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-2xl font-heading font-bold text-foreground mb-1.5">
                  Continue reading
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-5">
                  Hand-picked based on shared Melbourne routes &amp; topics.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="group bg-card border border-border rounded-lg p-5 hover:border-primary hover:-translate-y-1 transition-all flex flex-col"
                    >
                      <span className="text-xs font-body font-semibold text-primary uppercase tracking-wide">
                        {rp.category}
                      </span>
                      <h3 className="font-heading font-bold text-foreground mt-2 mb-1.5 group-hover:text-primary transition-colors">
                        {rp.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground line-clamp-2">
                        {rp.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>

        <RelatedPages links={post.relatedInternal} />
      </main>
      <Footer />
    </>
  );
};

export default BlogPostLayout;
