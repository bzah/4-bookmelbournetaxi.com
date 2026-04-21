import { Link } from "react-router-dom";
import { ArrowRight, MapPin, GitCompareArrows, BookOpen, Plane, Car, Calculator, Phone, Building2, Accessibility } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import GetYourGuideSection from "@/components/GetYourGuideSection";
import RelatedPages from "@/components/RelatedPages";
import { blogPosts } from "@/data/blog-posts";
import {
  sitewideLocalBusinessSchema,
  aggregateRatingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  BASE,
} from "@/lib/seo-schemas";

/**
 * /taxi-melbourne — internal linking hub targeting the head term "taxi melbourne".
 *
 * Funnels link equity to:
 *   • Top route pages (Airport↔CBD, CBD ranks, Victoria-wide)
 *   • Comparison guides (taxi vs Uber, fare calculator)
 *   • Booking guides (How-to-book, Maxi taxi, accessibility)
 *   • Latest blog articles
 */

const ROUTE_PAGES = [
  {
    to: "/taxi-melbourne-airport-to-cbd",
    icon: Plane,
    title: "Melbourne Airport to CBD",
    desc: "Fares $55–$75 AUD, 25–40 min via Tullamarine Freeway & CityLink. Terminal-by-terminal pickup guide.",
  },
  {
    to: "/melbourne-taxi-cbd",
    icon: Building2,
    title: "Melbourne CBD Taxi Ranks",
    desc: "50+ official ranks at Flinders St, Southern Cross, Crown, Federation Square and major hotels.",
  },
  {
    to: "/maxi-taxi-melbourne",
    icon: Car,
    title: "Maxi Taxi Melbourne",
    desc: "6, 8 and 11-seater group cabs for families, weddings, corporate transfers and airport runs.",
  },
  {
    to: "/taxis-melbourne-victoria",
    icon: MapPin,
    title: "Taxis across Victoria",
    desc: "Compare 13CABS, Silver Top &amp; GM Cabs. Official 2026 Victorian fare structure explained.",
  },
];

const COMPARISON_PAGES = [
  {
    to: "/taxi-fare-calculator-melbourne",
    icon: Calculator,
    title: "Melbourne Taxi Fare Calculator",
    desc: "Estimate your fare instantly using the official Victorian per-km, flagfall and surcharge rates.",
  },
  {
    to: "/blog/melbourne-taxi-vs-uber-price-comparison",
    icon: GitCompareArrows,
    title: "Taxi vs Uber: 2026 Comparison",
    desc: "Side-by-side pricing for 6 popular Melbourne trips — and exactly when each one wins.",
  },
];

const BOOKING_PAGES = [
  {
    to: "/how-to-book-taxi-melbourne",
    icon: Phone,
    title: "How to Book a Melbourne Taxi",
    desc: "Five ways to get a cab — app, phone, rank, web or hail — with insider tips for each.",
  },
  {
    to: "/blog/best-time-to-book-taxi-melbourne",
    icon: BookOpen,
    title: "Best Time to Book a Taxi",
    desc: "Cheapest and worst windows for 2026, plus when to lock in airport pickups in advance.",
  },
  {
    to: "/blog/wheelchair-accessible-taxi-melbourne",
    icon: Accessibility,
    title: "Wheelchair Accessible Taxis",
    desc: "How to book a WAT cab, MPTP 50% discount, lift fees and airport WAT pickup procedure.",
  },
];

const HUB_FAQS = [
  {
    q: "How do I book a taxi in Melbourne?",
    a: "You can book a Melbourne taxi five ways: call 13CABS on 13 22 27 or Silver Top on 13 10 08, use the 13CABS / Silver Top mobile apps, hail one on the street in the CBD, queue at one of 50+ official ranks, or pre-book online up to 7 days in advance. Apps and phone bookings carry a $2 booking fee; rank and street hails do not.",
  },
  {
    q: "How much does a taxi cost in Melbourne in 2026?",
    a: "Melbourne taxi fares are set by the Victorian Government: $4.20 flagfall, $1.62/km daytime (6 am–10 pm Mon–Fri), $1.80/km night & weekend rate, plus a $3.50 Melbourne Airport surcharge if applicable and a 5% credit card surcharge. A typical CBD short trip is $12–$20; airport to CBD is $55–$75; airport to St Kilda is $75–$95.",
  },
  {
    q: "What's the difference between a Melbourne taxi and a maxi taxi?",
    a: "A standard Melbourne taxi seats up to 4 passengers (sedan or wagon). A maxi taxi is a 6, 8 or 11-seater van — perfect for families, sports teams, weddings and group airport transfers. Maxi taxis use the same per-km rate but have a higher flagfall and are best pre-booked through 13CABS or Silver Top.",
  },
  {
    q: "Are Melbourne taxis available 24/7?",
    a: "Yes. 13CABS, Silver Top, GM Cabs and Melbourne Combined all dispatch 24 hours a day, 7 days a week, including public holidays. Driver supply is lowest 1–5 am — pre-book early-morning airport runs the night before to guarantee pickup.",
  },
  {
    q: "Is Uber cheaper than a taxi in Melbourne?",
    a: "It depends on time of day. Off-peak (Tue–Thu 10 am–3 pm) UberX is usually 10–20% cheaper than the metered taxi fare. During peak demand — Friday/Saturday nights, post-AFL match, NYE, storms — Uber surge can spike 1.5–3× and the regulated taxi meter wins decisively.",
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home" },
  { name: "Taxi Melbourne", slug: "taxi-melbourne" },
]);

const serviceSchema = buildServiceSchema({
  name: "Taxi Melbourne — Complete 2026 Guide",
  description:
    "Comprehensive Melbourne taxi resource: airport transfers, CBD ranks, maxi taxis, fares, booking methods, accessibility and route guides across Melbourne and Victoria.",
  slug: "taxi-melbourne",
  serviceType: "Taxi service hub",
  priceRange: "$10–$200 AUD",
});

const faqSchema = buildFaqSchema(HUB_FAQS);

// ItemList schema lists all hub-linked pages — helps Google build sitelinks.
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Melbourne Taxi Guides",
  itemListElement: [...ROUTE_PAGES, ...COMPARISON_PAGES, ...BOOKING_PAGES].map(
    (item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}${item.to}`,
      name: item.title.replace(/&amp;/g, "&"),
    }),
  ),
};

interface HubCardProps {
  to: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}

const HubCard = ({ to, icon: Icon, title, desc }: HubCardProps) => (
  <Link
    to={to}
    className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col"
  >
    <div className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h3
      className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <p
      className="font-body text-sm text-muted-foreground mb-4 leading-relaxed flex-1"
      dangerouslySetInnerHTML={{ __html: desc }}
    />
    <span className="inline-flex items-center gap-1 text-primary font-body font-semibold text-sm">
      Read guide <ArrowRight className="w-3.5 h-3.5" />
    </span>
  </Link>
);

const TaxiMelbourneHub = () => {
  const url = `${BASE}/taxi-melbourne`;
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Taxi Melbourne — Complete 2026 Guide to Fares, Routes & Booking"
        description="The complete Melbourne taxi guide: airport transfers, CBD ranks, maxi cabs, fare calculator, taxi vs Uber comparison and how-to-book tips for every trip."
        canonical={url}
        jsonLd={[
          sitewideLocalBusinessSchema,
          aggregateRatingSchema,
          serviceSchema,
          itemListSchema,
          faqSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy-gradient">
          <div className="container max-w-4xl text-center">
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/15 text-primary font-body text-xs font-semibold uppercase tracking-wide mb-5">
              Melbourne Taxi Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
              Taxi Melbourne — Everything You Need in One Place
            </h1>
            <p className="text-lg md:text-xl font-body text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Compare fares, find the right route, pre-book the best vehicle for your trip
              and learn the inside tips Melbourne locals use every day. Updated for 2026.
            </p>
          </div>
        </section>

        {/* Top routes */}
        <section className="py-16 bg-background" aria-labelledby="routes-heading">
          <div className="container max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 id="routes-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Top Melbourne Taxi Routes
              </h2>
              <p className="font-body text-muted-foreground">
                The four most-searched taxi journeys in Melbourne — fares, timings and pickup tips for each.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ROUTE_PAGES.map((p) => (
                <HubCard key={p.to} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparisons */}
        <section className="py-16 bg-muted" aria-labelledby="compare-heading">
          <div className="container max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 id="compare-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Compare Fares &amp; Services
              </h2>
              <p className="font-body text-muted-foreground">
                Calculate your trip cost upfront and see how Melbourne taxis stack up against rideshare.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {COMPARISON_PAGES.map((p) => (
                <HubCard key={p.to} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Booking guides */}
        <section className="py-16 bg-background" aria-labelledby="book-heading">
          <div className="container max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 id="book-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                How to Book — Step-by-Step
              </h2>
              <p className="font-body text-muted-foreground">
                Whether you need a cab in 5 minutes or a wheelchair-accessible van next month, start here.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BOOKING_PAGES.map((p) => (
                <HubCard key={p.to} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* GetYourGuide block */}
        <GetYourGuideSection variant="light" />

        {/* Latest from the blog */}
        <section className="py-16 bg-muted" aria-labelledby="blog-heading">
          <div className="container max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <h2 id="blog-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  Latest from the Blog
                </h2>
                <p className="font-body text-muted-foreground">
                  Long-form guides covering fares, routes, comparisons and accessibility.
                </p>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-primary font-body font-semibold hover:underline"
              >
                View all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition-all flex flex-col"
                >
                  <span className="text-xs font-body font-semibold text-primary uppercase tracking-wide mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-body font-semibold text-sm">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">
              Melbourne Taxi FAQ
            </h2>
            <div className="space-y-5">
              {HUB_FAQS.map((f) => (
                <div key={f.q} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">{f.q}</h3>
                  <p className="font-body text-foreground/75 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages
          title="Keep Exploring"
          subtitle="Every Melbourne taxi guide on the site, in one place."
          links={["airport", "maxi", "cbd", "victoria", "howto", "calculator"]}
        />
      </main>
      <Footer />
    </>
  );
};

export default TaxiMelbourneHub;
