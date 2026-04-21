import { Link } from "react-router-dom";
import { ExternalLink, Calculator, Phone } from "lucide-react";
import { affiliateOffers } from "@/components/AffiliateCards";

/**
 * Reusable dual-CTA strip for blog content.
 *  • "Book a taxi" → GetYourGuide airport-transfer link (partner_id=0IQTGX8)
 *  • "Get a quote" → on-site fare calculator
 *
 * variant="inline"  → compact 2-button row, drops into article body
 * variant="banner"  → full-width banner with heading + subheading
 * variant="hero"    → centred hero placement, light text on dark bg
 */

interface BookTaxiCTAProps {
  variant?: "inline" | "banner" | "hero";
  heading?: string;
  subheading?: string;
}

const BookTaxiCTA = ({
  variant = "banner",
  heading = "Ready to book your Melbourne taxi?",
  subheading = "Lock in a fixed price online or estimate your fare instantly with our official Victorian rate calculator.",
}: BookTaxiCTAProps) => {
  const bookLink = affiliateOffers.airportTransfer.link;

  if (variant === "inline") {
    return (
      <div className="my-8 flex flex-wrap gap-3" role="group" aria-label="Book or quote a Melbourne taxi">
        <a
          href={bookLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Book a taxi
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
        <Link
          to="/taxi-fare-calculator-melbourne"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Calculator className="w-4 h-4" />
          Get a quote
        </Link>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={bookLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Book a taxi
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
        <Link
          to="/taxi-fare-calculator-melbourne"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-base hover:bg-primary-foreground/15 transition-colors"
        >
          <Calculator className="w-4 h-4" />
          Get a quote
        </Link>
      </div>
    );
  }

  // banner (default)
  return (
    <aside
      className="my-12 rounded-2xl bg-gradient-to-r from-primary/15 via-primary/5 to-transparent border border-primary/30 p-6 md:p-8"
      aria-label="Book or quote a Melbourne taxi"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1.5">
            {heading}
          </h3>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={bookLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            Book a taxi
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
          <Link
            to="/taxi-fare-calculator-melbourne"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
          >
            <Calculator className="w-4 h-4" />
            Get a quote
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default BookTaxiCTA;
