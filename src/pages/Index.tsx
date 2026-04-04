import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MelbourneInfoWidget from "@/components/MelbourneInfoWidget";
import TaxiRoutesSection from "@/components/TaxiRoutesSection";
import MelbourneMapSection from "@/components/MelbourneMapSection";
import AttractionsSection from "@/components/AttractionsSection";
import ToursSection from "@/components/ToursSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const BASE = "https://bookmelbournetaxi.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BookMelbourneTaxi.com",
  url: BASE,
  logo: `${BASE}/favicon.png`,
  description: "Your complete guide to taxis, transport, tours and attractions in Melbourne, Victoria, Australia.",
  areaServed: {
    "@type": "City",
    name: "Melbourne",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is a taxi from Melbourne Airport to CBD?",
      acceptedAnswer: { "@type": "Answer", text: "A taxi from Melbourne Airport (Tullamarine) to Melbourne CBD typically costs between $55 and $75 AUD, depending on traffic and time of day. The journey takes approximately 25–40 minutes." },
    },
    {
      "@type": "Question",
      name: "How do I book a taxi in Melbourne?",
      acceptedAnswer: { "@type": "Answer", text: "You can book a Melbourne taxi by calling 13CABS (13 2227) or Silver Top Taxis (131 008), using their apps, or hailing one on the street. Rideshare services like Uber and Ola are also widely available." },
    },
    {
      "@type": "Question",
      name: "What is the taxi fare structure in Melbourne?",
      acceptedAnswer: { "@type": "Answer", text: "Melbourne taxis charge a flagfall of approximately $4.20 AUD, plus a per-kilometre rate of around $1.62 during the day. Rates increase at night, on weekends, and during public holidays. There's also a booking fee of about $2.00 if you pre-book." },
    },
    {
      "@type": "Question",
      name: "Are taxis available 24/7 in Melbourne?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Melbourne taxis operate 24 hours a day, 7 days a week. They are readily available in the CBD, at taxi ranks near major hotels, shopping centres and train stations, and at Melbourne Airport." },
    },
    {
      "@type": "Question",
      name: "How much is a taxi from Melbourne Airport to Geelong?",
      acceptedAnswer: { "@type": "Answer", text: "A taxi from Melbourne Airport to Geelong costs approximately $120–$160 AUD. The journey takes about 55–75 minutes depending on traffic." },
    },
    {
      "@type": "Question",
      name: "What are the best things to do in Melbourne?",
      acceptedAnswer: { "@type": "Answer", text: "Melbourne is famous for its vibrant laneways and street art, world-class dining, the Great Ocean Road, Phillip Island penguins, Yarra Valley wineries, Brighton Beach bathing boxes, MCG, Queen Victoria Market, and the Royal Botanic Gardens." },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BookMelbourneTaxi.com",
  url: BASE,
  image: `${BASE}/favicon.png`,
  description: "Melbourne taxi booking guide — fares, routes, airport transfers, maxi taxis, and tours across Victoria, Australia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  priceRange: "$$",
};

const Index = () => (
  <>
    <SEOHead
      title="Taxi Melbourne | Book Melbourne Taxis, Airport Transfers & Tours"
      description="Book a taxi in Melbourne, Victoria. Compare fares for Melbourne Airport to CBD transfers, popular taxi routes, and discover top Melbourne tours and attractions."
      canonical={BASE}
      jsonLd={[organizationSchema, faqSchema, localBusinessSchema]}
    />
    <Navbar />
    <main>
      <HeroSection />
      <MelbourneInfoWidget />
      <TaxiRoutesSection />
      <MelbourneMapSection />
      <AttractionsSection />
      <ToursSection />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default Index;
