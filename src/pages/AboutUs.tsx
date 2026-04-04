import SEOPageLayout from "@/components/SEOPageLayout";
import { MapPin, Users, Award, Heart } from "lucide-react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BookMelbourneTaxi.com",
  url: "https://bookmelbournetaxi.com",
  image: "https://bookmelbournetaxi.com/favicon.png",
  description: "Melbourne's trusted taxi booking guide — fares, routes, airport transfers, maxi taxis, and tours across Victoria, Australia.",
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
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 144.9631 },
    geoRadius: "100000",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

const AboutUs = () => (
  <SEOPageLayout
    title="About Us"
    subtitle="Learn about BookMelbourneTaxi.com — Melbourne's trusted guide to taxi services, airport transfers, tours, and transport across Victoria."
    metaTitle="About Us — BookMelbourneTaxi.com | Melbourne Taxi Guide"
    metaDescription="BookMelbourneTaxi.com is Melbourne's trusted resource for taxi fares, airport transfers, maxi taxis, tours, and transport tips across Victoria, Australia."
    slug="about"
    jsonLd={[localBusinessSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {[
            { icon: MapPin, label: "Based in", value: "Melbourne, VIC" },
            { icon: Users, label: "Monthly Visitors", value: "Growing" },
            { icon: Award, label: "Pages", value: "10+ Guides" },
            { icon: Heart, label: "Mission", value: "Help Travellers" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-body text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-xl font-heading font-bold text-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Who We Are</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              <strong>BookMelbourneTaxi.com</strong> is an independent travel resource dedicated to helping locals and visitors navigate Melbourne's taxi and transport landscape. We provide up-to-date information on taxi fares, routes, booking methods, airport transfers, and the best tours and attractions in Melbourne and Victoria.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our team is based in Melbourne, Australia, and we're passionate about making transport information accessible, accurate, and easy to understand for everyone — whether you're a first-time visitor arriving at Tullamarine or a local looking for the best fare to the MCG.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We believe that getting around Melbourne should be stress-free. Our mission is to be the most comprehensive and trustworthy source for Melbourne taxi information online. We compare fares, explain booking options, and curate the best tours so you can focus on enjoying everything Melbourne has to offer.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Affiliate Disclosure</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Some links on our website are affiliate links. This means we may earn a small commission when you book tours, transfers, or services through our partner links (such as GetYourGuide). This comes at no extra cost to you and helps us maintain and improve this free resource. We only recommend services we genuinely believe will benefit our visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default AboutUs;
