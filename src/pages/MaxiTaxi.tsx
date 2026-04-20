import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Users, CheckCircle, Car } from "lucide-react";
import { AffiliateCards, InlineAffiliateBanner } from "@/components/AffiliateCards";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookmelbournetaxi.com" },
    { "@type": "ListItem", position: 2, name: "Maxi Taxi Melbourne", item: "https://bookmelbournetaxi.com/maxi-taxi-melbourne" },
  ],
};

const MaxiTaxi = () => (
  <SEOPageLayout
    title="Maxi Taxi Melbourne"
    subtitle="Book a maxi taxi in Melbourne for groups, families, weddings, corporate transfers, sports teams and airport pickups. Up to 11 passengers, full luggage capacity, wheelchair accessible options, fixed-quote bookings and 24/7 availability across Melbourne and Victoria."
    metaTitle="Maxi Taxi Melbourne — Book 11-Seater Cabs from $80 | Groups & Airport"
    metaDescription="Maxi taxi Melbourne — 6, 8 or 11-seater cabs for groups, families, weddings & airport transfers. Fares from $80, wheelchair accessible, 24/7 booking with 13CABS & Silver Top."
    slug="maxi-taxi-melbourne"
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
    jsonLd={[breadcrumbSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: Users, title: "Up to 11 Passengers", desc: "Maxi taxis in Melbourne can seat up to 11 passengers, perfect for large groups, families, and corporate transfers." },
            { icon: Car, title: "Wheelchair Accessible", desc: "Many maxi taxis are wheelchair accessible with ramp access, making them ideal for passengers with mobility needs." },
            { icon: Users, title: "Extra Luggage Space", desc: "Travelling with surfboards, golf clubs, or multiple suitcases? Maxi taxis have the boot space you need." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-6">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">What is a Maxi Taxi in Melbourne?</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            A <strong>maxi taxi</strong> (also called a maxi cab) is a larger taxi vehicle that can carry between 
            6 and 11 passengers. In Melbourne, maxi taxis are commonly used for airport transfers with large groups, 
            wedding transport, corporate events, and family outings. They're operated by the same licensed taxi 
            companies as regular cabs, including 13CABS and Silver Top.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">Maxi Taxi Fares in Melbourne</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Route</th>
                  <th className="text-right p-4 text-foreground font-semibold">Estimated Fare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">Airport to CBD</td><td className="p-4 text-right text-foreground">$65–$90</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to St Kilda</td><td className="p-4 text-right text-foreground">$30–$40</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to Brighton Beach</td><td className="p-4 text-right text-foreground">$40–$55</td></tr>
                <tr><td className="p-4 text-muted-foreground">Airport to Geelong</td><td className="p-4 text-right text-foreground">$150–$200</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to MCG</td><td className="p-4 text-right text-foreground">$15–$25</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-8">
            * Maxi taxi fares are approximately 20–30% more than standard taxis due to the larger vehicle. 
            Prices vary based on traffic, time of day, and number of passengers.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">How to Book a Maxi Taxi in Melbourne</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Call 13CABS (13 2227) and request a maxi cab — available 24/7",
              "Use the Silver Top Taxis app and select 'Maxi' vehicle type",
              "Book online through Melbourne maxi taxi services for fixed quotes",
              "At Melbourne Airport, ask the taxi marshal for a maxi taxi",
              "Pre-book at least 1 hour ahead for guaranteed availability",
              "Specify number of passengers and luggage when booking",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <InlineAffiliateBanner offerKey="airportTransfer" />

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">When to Choose a Maxi Taxi</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Maxi taxis are the smart choice when travelling with 5 or more people. Instead of splitting into 
            two regular taxis, a single maxi taxi is often cheaper and more convenient. They're especially 
            popular for Melbourne Airport pickups where families and groups have multiple suitcases.
          </p>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            Maxi taxis are also the preferred option for passengers using wheelchairs, as many vehicles 
            feature ramp access and securement systems. Contact your taxi company to confirm wheelchair-accessible 
            vehicle availability.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Popular Uses for Maxi Taxis in Melbourne</h2>
          <ul className="space-y-3 mb-10">
            {[
              "Melbourne Airport (Tullamarine) group transfers — families of 5+ with luggage",
              "Wedding transport for bridal parties from ceremony to reception",
              "Corporate group transfers for conferences at MCEC, Crown, or Etihad Stadium",
              "Sports teams travelling to MCG, Marvel Stadium, AAMI Park, or Melbourne Park",
              "Hens and bucks night party transport between bars and restaurants",
              "School excursions, formals, and graduation transfers",
              "Funeral transport for extended family",
              "Day tours to Yarra Valley wineries, Mornington Peninsula or Phillip Island",
              "Wheelchair-accessible group transport (WAT maxi taxis)",
              "Cruise ship terminal transfers from Station Pier, Port Melbourne",
            ].map((use) => (
              <li key={use} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{use}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Maxi Taxi vs Regular Taxi vs Rideshare — Cost Comparison</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            For a group of 6 travelling from Melbourne Airport to the CBD with luggage:
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Option</th>
                  <th className="text-right p-4 text-foreground font-semibold">Total Cost</th>
                  <th className="text-right p-4 text-foreground font-semibold">Per Person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">1× Maxi taxi</td><td className="p-4 text-right text-foreground">$80–$110</td><td className="p-4 text-right text-foreground">$13–$18</td></tr>
                <tr><td className="p-4 text-muted-foreground">2× Standard taxis</td><td className="p-4 text-right text-foreground">$110–$150</td><td className="p-4 text-right text-foreground">$18–$25</td></tr>
                <tr><td className="p-4 text-muted-foreground">2× UberX</td><td className="p-4 text-right text-foreground">$100–$160 (surge dependent)</td><td className="p-4 text-right text-foreground">$17–$27</td></tr>
                <tr><td className="p-4 text-muted-foreground">1× Uber XL / Premier 6-seater</td><td className="p-4 text-right text-foreground">$95–$140</td><td className="p-4 text-right text-foreground">$16–$23</td></tr>
                <tr><td className="p-4 text-muted-foreground">SkyBus (6× adult tickets)</td><td className="p-4 text-right text-foreground">$118</td><td className="p-4 text-right text-foreground">$19.75</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions — Maxi Taxis Melbourne</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">How many passengers can a Melbourne maxi taxi carry?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Most Melbourne maxi taxis seat 6, 8 or up to 11 passengers depending on vehicle configuration. The most common is the 11-seater Toyota HiAce. Always specify your group size when booking — the dispatcher will assign the right vehicle.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Can I get a fixed quote for a Melbourne maxi taxi?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes. While metered fares are standard, many maxi taxi operators offer <strong>fixed-quote bookings</strong> for airport transfers, weddings and tours — useful for budgeting and avoiding surprises in heavy traffic.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Are maxi taxis available 24/7 in Melbourne?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes — 13CABS and Silver Top dispatch maxi taxis around the clock, but availability is lower between 1 am and 5 am. Pre-booking is strongly recommended for early-morning airport runs.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Do maxi taxis have child seats?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Child restraints are not standard. You must request a child seat at the time of booking (usually a $5–$10 surcharge) or bring your own approved restraint.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AffiliateCards
      title="Group Tours & Activities — Perfect for Maxi Taxi Passengers"
      subtitle="Travelling as a group? Combine your maxi taxi with these top-rated Melbourne group experiences."
      offers={["greatOceanRoad", "yarraValley", "phillipIsland", "puffingBilly", "mornington", "airportTransfer"]}
      variant="dark"
    />
  </SEOPageLayout>
);

export default MaxiTaxi;
