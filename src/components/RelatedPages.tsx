import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface RelatedLink {
  to: string;
  title: string;
  desc: string;
}

/** Sitewide directory of internal pages — used to build contextual link blocks. */
export const allInternalLinks: Record<string, RelatedLink> = {
  hub: {
    to: "/taxi-melbourne",
    title: "Taxi Melbourne — Complete Hub",
    desc: "All Melbourne taxi guides in one place: routes, fares, comparisons &amp; booking tips.",
  },
  airport: {
    to: "/taxi-melbourne-airport-to-cbd",
    title: "Melbourne Airport to CBD Taxi",
    desc: "Fares $55–$75, terminal-by-terminal pickup guide and pre-booking tips.",
  },
  maxi: {
    to: "/maxi-taxi-melbourne",
    title: "Maxi Taxi Melbourne",
    desc: "6, 8 and 11-seater cabs for groups, families and weddings — 24/7 booking.",
  },
  victoria: {
    to: "/taxis-melbourne-victoria",
    title: "Taxis Melbourne &amp; Victoria",
    desc: "Compare 13CABS, Silver Top &amp; GM Cabs. Official 2026 fare structure.",
  },
  cbd: {
    to: "/melbourne-taxi-cbd",
    title: "Melbourne CBD Taxi Ranks",
    desc: "50+ ranks at Flinders St, Southern Cross, Crown and Federation Square.",
  },
  howto: {
    to: "/how-to-book-taxi-melbourne",
    title: "How to Book a Melbourne Taxi",
    desc: "App, phone, rank or online — 5 easy ways with insider tips.",
  },
  calculator: {
    to: "/taxi-fare-calculator-melbourne",
    title: "Melbourne Taxi Fare Calculator",
    desc: "Instantly estimate your cab fare with the official Victorian rates.",
  },
  about: {
    to: "/about",
    title: "About BookMelbourneTaxi",
    desc: "Independent travel resource trusted by thousands of Melbourne visitors.",
  },
  contact: {
    to: "/contact",
    title: "Contact Us",
    desc: "Send us a question, partnership enquiry or fare correction.",
  },
};

interface RelatedPagesProps {
  title?: string;
  subtitle?: string;
  links: (keyof typeof allInternalLinks)[];
}

const RelatedPages = ({
  title = "Related Melbourne Taxi Guides",
  subtitle = "Keep exploring — these guides are read alongside this page by most visitors.",
  links,
}: RelatedPagesProps) => (
  <section className="py-16 bg-muted">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          {title}
        </h2>
        <p className="font-body text-muted-foreground">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {links.map((key) => {
          const link = allInternalLinks[key];
          if (!link) return null;
          return (
            <Link
              key={link.to}
              to={link.to}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:-translate-y-1 transition-all"
            >
              <h3
                className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                dangerouslySetInnerHTML={{ __html: link.title }}
              />
              <p
                className="font-body text-sm text-muted-foreground mb-4"
                dangerouslySetInnerHTML={{ __html: link.desc }}
              />
              <span className="inline-flex items-center gap-1 text-primary font-body font-semibold text-sm">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default RelatedPages;
