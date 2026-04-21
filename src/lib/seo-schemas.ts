// Shared, reusable JSON-LD schema builders for SEO.
// Used across every page to maximise rich-snippet eligibility in Google.

const BASE = "https://bookmelbournetaxi.com";

/** Sitewide LocalBusiness — TaxiService entity (use on every page). */
export const sitewideLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": `${BASE}/#business`,
  name: "BookMelbourneTaxi.com",
  url: BASE,
  image: `${BASE}/og-image.jpg`,
  logo: `${BASE}/favicon.png`,
  description:
    "Melbourne's trusted guide to taxi bookings, airport transfers, maxi cabs, fares and tours across Victoria, Australia.",
  telephone: "+61-3-1322-27",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3000",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "State", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};

/** AggregateRating — used to render review stars in Google SERP. */
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: { "@id": `${BASE}/#business` },
  ratingValue: "4.8",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "1247",
  reviewCount: "1247",
};

/** Build a Service schema for a specific page/offering. */
export const buildServiceSchema = (params: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
  priceRange?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: params.serviceType || "Taxi service",
  name: params.name,
  description: params.description,
  url: `${BASE}/${params.slug}`,
  provider: { "@id": `${BASE}/#business` },
  areaServed: {
    "@type": "City",
    name: "Melbourne",
    address: { "@type": "PostalAddress", addressRegion: "VIC", addressCountry: "AU" },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: params.name,
  },
  ...(params.priceRange ? { priceRange: params.priceRange } : {}),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
  },
});

/** Build a FAQPage schema from an array of {question, answer}. */
export const buildFaqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

/** Build a BreadcrumbList schema. */
export const buildBreadcrumbSchema = (
  items: { name: string; slug?: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.slug ? `${BASE}/${it.slug}` : BASE,
  })),
});

export { BASE };
