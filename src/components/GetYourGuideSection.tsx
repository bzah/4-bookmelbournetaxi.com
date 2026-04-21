import { ExternalLink, Star, ShieldCheck, Calendar, BadgeCheck, MapPin } from "lucide-react";
import { GYG, affiliateOffers, allActivitiesLink } from "@/components/AffiliateCards";

/**
 * Dedicated "Book with GetYourGuide" section.
 *
 * Explains exactly how visitors can use our partner link
 * (partner_id=0IQTGX8) to pre-book Melbourne Airport transfers
 * with fixed pricing, free cancellation and meet-&-greet service.
 *
 * Designed to be dropped into the home page, the Airport→CBD page
 * and the Maxi Taxi page.
 */

interface GetYourGuideSectionProps {
  variant?: "light" | "dark";
  /** Optional override of the section heading. */
  heading?: string;
  /** Optional override of the lead paragraph. */
  subheading?: string;
}

const STEPS = [
  {
    icon: MapPin,
    title: "1. Pick your transfer",
    desc: "Choose between a private sedan, family wagon or maxi-van for up to 7 passengers — all licensed Melbourne operators.",
  },
  {
    icon: Calendar,
    title: "2. Lock in the price",
    desc: "Pay the fixed quote in your own currency. No meter, no surge, no hidden tolls. Free cancellation up to 24 h before pickup.",
  },
  {
    icon: BadgeCheck,
    title: "3. Meet & greet at MEL",
    desc: "Your driver tracks your flight and waits inside the terminal with a name sign. Free 60-minute wait time included.",
  },
];

const BENEFITS = [
  "Fixed price per vehicle — never per passenger",
  "Free cancellation up to 24 hours before pickup",
  "Meet & greet inside the arrivals hall (T1, T2, T3, T4)",
  "Flight tracking included — no charge for delays",
  "Pay in AUD, USD, EUR, GBP or 30+ currencies",
  "24/7 multilingual customer support",
];

export const GetYourGuideSection = ({
  variant = "light",
  heading = "Book Your Melbourne Airport Transfer with GetYourGuide",
  subheading = "Skip the rank, lock in your price and have a driver waiting inside the terminal — powered by GetYourGuide, the world's most-trusted travel-experience marketplace.",
}: GetYourGuideSectionProps) => {
  const isDark = variant === "dark";
  const offer = affiliateOffers.airportTransfer;

  return (
    <section
      className={`py-16 md:py-20 ${isDark ? "bg-navy-gradient" : "bg-muted"}`}
      aria-labelledby="gyg-heading"
    >
      <div className="container max-w-6xl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary font-body text-xs font-semibold uppercase tracking-wide mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official GetYourGuide partner
          </span>
          <h2
            id="gyg-heading"
            className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`font-body leading-relaxed ${
              isDark ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            {subheading}
          </p>
        </div>

        {/* Three-step explainer */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {STEPS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className={`rounded-xl p-6 border transition-all ${
                isDark
                  ? "bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20"
                  : "bg-card border-border"
              }`}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3
                className={`font-heading font-bold text-lg mb-2 ${
                  isDark ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {title}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed ${
                  isDark ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Featured offer + benefits list */}
        <div
          className={`rounded-2xl overflow-hidden border grid md:grid-cols-5 gap-0 ${
            isDark
              ? "bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20"
              : "bg-card border-border shadow-lg"
          }`}
        >
          {/* Left: featured offer */}
          <div className="md:col-span-3 p-7 md:p-9 border-b md:border-b-0 md:border-r border-inherit">
            <div className="flex items-center gap-1.5 mb-3">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span
                className={`text-sm font-body font-semibold ${
                  isDark ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {offer.rating}
              </span>
              <span
                className={`text-xs font-body ${
                  isDark ? "text-primary-foreground/60" : "text-muted-foreground"
                }`}
              >
                ({offer.reviews} verified reviews)
              </span>
            </div>
            <h3
              className={`text-2xl md:text-3xl font-heading font-bold mb-3 ${
                isDark ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {offer.title}
            </h3>
            <p
              className={`font-body mb-6 leading-relaxed ${
                isDark ? "text-primary-foreground/75" : "text-muted-foreground"
              }`}
            >
              {offer.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div>
                <p
                  className={`text-xs font-body uppercase tracking-wide mb-0.5 ${
                    isDark ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  From
                </p>
                <p className="text-3xl font-heading font-bold text-primary">
                  {offer.price.replace("from ", "")}
                  <span
                    className={`text-sm font-body font-normal ml-1 ${
                      isDark ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    / vehicle
                  </span>
                </p>
              </div>
              <a
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Book on GetYourGuide <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p
              className={`text-xs font-body ${
                isDark ? "text-primary-foreground/50" : "text-muted-foreground"
              }`}
            >
              Booked through our partner link (<code className="font-mono">partner_id={GYG}</code>) —
              no extra cost to you, helps keep this guide free.
            </p>
          </div>

          {/* Right: benefits */}
          <div className="md:col-span-2 p-7 md:p-9">
            <h4
              className={`font-heading font-bold text-lg mb-4 ${
                isDark ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              What's included
            </h4>
            <ul className="space-y-3">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className={`flex items-start gap-2.5 font-body text-sm ${
                    isDark ? "text-primary-foreground/80" : "text-foreground/80"
                  }`}
                >
                  <BadgeCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center mt-10">
          <a
            href={allActivitiesLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`inline-flex items-center gap-2 font-body font-semibold underline-offset-4 hover:underline ${
              isDark ? "text-primary-foreground/90" : "text-foreground/80"
            }`}
          >
            Browse all Melbourne transfers &amp; tours on GetYourGuide
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetYourGuideSection;
