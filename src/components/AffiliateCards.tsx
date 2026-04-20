import { ExternalLink, Star } from "lucide-react";

const GYG = "0IQTGX8";
const base = (slug: string) =>
  `https://www.getyourguide.com/melbourne-l169/${slug}?partner_id=${GYG}&utm_medium=online_publisher`;

export const affiliateOffers = {
  airportTransfer: {
    title: "Melbourne Airport Private Transfer",
    desc: "Skip the taxi rank — pre-booked private car, meet & greet at arrivals, fixed price, free cancellation.",
    price: "from $89",
    rating: "4.7",
    reviews: "1,200+",
    link: base("airport-transfer-t1/"),
    cta: "Book Airport Transfer",
  },
  greatOceanRoad: {
    title: "Great Ocean Road & 12 Apostles Day Trip",
    desc: "Full-day tour from Melbourne CBD — Twelve Apostles, Loch Ard Gorge, Koala spotting, lunch stop.",
    price: "from $125",
    rating: "4.7",
    reviews: "8,500+",
    link: base("great-ocean-road-12-apostles-day-trip-t1/"),
    cta: "Book Great Ocean Road Tour",
  },
  phillipIsland: {
    title: "Phillip Island Penguin Parade Tour",
    desc: "See the famous Penguin Parade at sunset, plus Koala Conservation Centre and scenic Nobbies coastline.",
    price: "from $99",
    rating: "4.6",
    reviews: "5,300+",
    link: base("phillip-island-penguin-parade-t1/"),
    cta: "Book Phillip Island Tour",
  },
  yarraValley: {
    title: "Yarra Valley Wine & Food Tour",
    desc: "Premium small-group winery tour — 4 cellar doors, gourmet 2-course lunch, chocolate factory.",
    price: "from $159",
    rating: "4.8",
    reviews: "3,100+",
    link: base("yarra-valley-wine-tour-t1/"),
    cta: "Book Yarra Valley Tour",
  },
  cityCard: {
    title: "Melbourne All-Inclusive Pass",
    desc: "Skip-the-line entry to top attractions: Eureka Skydeck, Melbourne Star, SEA LIFE, Zoo & more.",
    price: "from $79",
    rating: "4.5",
    reviews: "2,400+",
    link: base("city-card-c5360/"),
    cta: "Get Melbourne Pass",
  },
  streetArt: {
    title: "Melbourne Laneways & Street Art Walking Tour",
    desc: "3-hour expert-guided walking tour of hidden CBD laneways, Hosier Lane & coffee culture.",
    price: "from $45",
    rating: "4.9",
    reviews: "1,900+",
    link: base("street-art-walking-tour-t1/"),
    cta: "Book Walking Tour",
  },
  puffingBilly: {
    title: "Puffing Billy Steam Train & Dandenong Ranges",
    desc: "Heritage steam train through the rainforest + Sherbrooke Forest & Yarra Valley wine tasting.",
    price: "from $115",
    rating: "4.5",
    reviews: "1,600+",
    link: base("puffing-billy-dandenong-ranges-t1/"),
    cta: "Book Puffing Billy",
  },
  mornington: {
    title: "Mornington Peninsula Hot Springs & Wineries",
    desc: "Soak in the famous Peninsula Hot Springs, visit boutique wineries, lunch at a vineyard.",
    price: "from $169",
    rating: "4.7",
    reviews: "1,100+",
    link: base("mornington-peninsula-tour-t1/"),
    cta: "Book Peninsula Tour",
  },
  eureka: {
    title: "Eureka Skydeck — Skip the Line",
    desc: "Southern Hemisphere's highest viewing platform. 88 floors up over Melbourne CBD.",
    price: "from $28",
    rating: "4.6",
    reviews: "4,200+",
    link: base("eureka-skydeck-t1/"),
    cta: "Get Skydeck Tickets",
  },
  river: {
    title: "Yarra River Sightseeing Cruise",
    desc: "Relaxed 1-hour cruise past Crown, Docklands & Southbank with live commentary.",
    price: "from $35",
    rating: "4.5",
    reviews: "2,800+",
    link: base("yarra-river-cruise-t1/"),
    cta: "Book River Cruise",
  },
} as const;

export type OfferKey = keyof typeof affiliateOffers;

export const allActivitiesLink = `https://www.getyourguide.com/melbourne-l169/?partner_id=${GYG}&utm_medium=online_publisher`;

interface AffiliateCardsProps {
  title?: string;
  subtitle?: string;
  offers: OfferKey[];
  variant?: "light" | "dark";
}

export const AffiliateCards = ({
  title = "Recommended Melbourne Tours & Activities",
  subtitle = "Save time and money — book trusted top-rated experiences. Free cancellation up to 24 h before.",
  offers,
  variant = "light",
}: AffiliateCardsProps) => {
  const isDark = variant === "dark";
  return (
    <section className={`py-16 ${isDark ? "bg-navy-gradient" : "bg-muted"}`}>
      <div className="container">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold mb-3 ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {title}
          </h2>
          <p
            className={`font-body ${
              isDark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((key) => {
            const o = affiliateOffers[key];
            return (
              <a
                key={key}
                href={o.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`group rounded-lg p-6 border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? "bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15"
                    : "bg-card border-border hover:border-primary"
                }`}
              >
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span
                    className={`text-sm font-body font-semibold ${
                      isDark ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {o.rating}
                  </span>
                  <span
                    className={`text-xs font-body ${
                      isDark ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    ({o.reviews} reviews)
                  </span>
                </div>
                <h3
                  className={`text-lg font-heading font-bold mb-2 ${
                    isDark ? "text-primary-foreground" : "text-foreground"
                  } group-hover:text-primary transition-colors`}
                >
                  {o.title}
                </h3>
                <p
                  className={`text-sm font-body mb-4 leading-relaxed ${
                    isDark ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {o.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-heading font-bold">{o.price}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-body font-semibold text-sm">
                    {o.cta} <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <a
            href={allActivitiesLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            View All Melbourne Activities <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface InlineAffiliateBannerProps {
  offerKey: OfferKey;
}

export const InlineAffiliateBanner = ({ offerKey }: InlineAffiliateBannerProps) => {
  const o = affiliateOffers[offerKey];
  return (
    <a
      href={o.link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block my-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 hover:border-primary transition-colors group"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-body font-semibold text-foreground">
              {o.rating}
            </span>
            <span className="text-xs font-body text-muted-foreground">
              ({o.reviews} reviews)
            </span>
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {o.title}
          </h3>
          <p className="text-sm font-body text-muted-foreground">{o.desc}</p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="text-right">
            <p className="text-xs font-body text-muted-foreground uppercase">From</p>
            <p className="text-2xl font-heading font-bold text-primary">
              {o.price.replace("from ", "")}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold whitespace-nowrap">
            {o.cta} <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>
    </a>
  );
};

export { GYG };
