import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { MapPin, Clock, DollarSign, CheckCircle, Car } from "lucide-react";
import { AffiliateCards, InlineAffiliateBanner } from "@/components/AffiliateCards";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookmelbournetaxi.com" },
    { "@type": "ListItem", position: 2, name: "Melbourne Taxi CBD", item: "https://bookmelbournetaxi.com/melbourne-taxi-cbd" },
  ],
};

const MelbourneTaxiCBD = () => (
  <SEOPageLayout
    title="Melbourne Taxi CBD"
    subtitle="The complete 2026 guide to catching a taxi in Melbourne's Central Business District (CBD). Find every major taxi rank, understand the metered fare structure, learn the busiest pickup points, late-night safe ranks, accessible taxi options, and insider tips from local Melbourne taxi drivers."
    metaTitle="Melbourne Taxi CBD 2026 — 50+ Taxi Ranks, Fares from $4.20 & Insider Tips"
    metaDescription="Catch a taxi in Melbourne CBD: 50+ ranks at Flinders St, Southern Cross, Crown, Federation Square. Flagfall $4.20, $1.62/km. Late-night safe ranks, maxi taxi pickup zones, 13CABS & Silver Top options for the Melbourne city centre."
    slug="melbourne-taxi-cbd"
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
    jsonLd={[breadcrumbSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: MapPin, label: "CBD Taxi Ranks", value: "50+" },
            { icon: DollarSign, label: "Flagfall", value: "$4.20 AUD" },
            { icon: Clock, label: "Avg Wait", value: "2–5 min" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-body text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-2xl font-heading font-bold text-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Finding a Taxi in Melbourne CBD</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Melbourne's CBD has over <strong>50 dedicated taxi ranks</strong> located outside major hotels, train stations,
            shopping centres, and entertainment precincts. Key locations include <strong>Flinders Street Station</strong>,
            <strong> Southern Cross Station</strong>, <strong>Crown Casino</strong>, and <strong>Federation Square</strong>.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            During the day, taxis cruise frequently along Swanston Street, Collins Street, and Bourke Street. At night,
            dedicated safe taxi ranks operate in entertainment districts with security supervision, especially on Friday
            and Saturday nights.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">CBD Taxi Fare Guide</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Route</th>
                  <th className="text-right p-4 text-foreground font-semibold">Est. Fare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">CBD to St Kilda</td><td className="p-4 text-right text-foreground">$18–$25</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to South Yarra</td><td className="p-4 text-right text-foreground">$15–$22</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to Richmond</td><td className="p-4 text-right text-foreground">$12–$18</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to Docklands</td><td className="p-4 text-right text-foreground">$8–$14</td></tr>
                <tr><td className="p-4 text-muted-foreground">CBD to Melbourne Airport</td><td className="p-4 text-right text-foreground">$55–$75</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Tips for CBD Taxi Travel</h2>
          <ul className="space-y-3 mb-8">
            {[
              "Use official taxi ranks — they're marked with blue signs throughout the CBD",
              "Avoid hailing taxis on tram-only streets like Swanston Street north of Flinders",
              "All licensed taxis accept contactless card payments",
              "Late-night safe taxi ranks have queue marshals on weekends",
              "Short CBD trips under 2 km still incur the standard flagfall of $4.20",
              "Rideshare pickup zones are separate from taxi ranks — don't mix them up",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <InlineAffiliateBanner offerKey="streetArt" />

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Popular CBD Taxi Rank Locations</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { name: "Flinders Street Station", detail: "Elizabeth St entrance, 24/7" },
              { name: "Southern Cross Station", detail: "Spencer St, all hours" },
              { name: "Crown Casino", detail: "Clarendon St, busy evenings" },
              { name: "Melbourne Central", detail: "La Trobe St side" },
              { name: "QV Melbourne", detail: "Lonsdale St" },
              { name: "Parliament Station", detail: "Spring St, peak hours" },
              { name: "Marvel Stadium (Docklands)", detail: "Bourke St, post-event marshals" },
              { name: "RMIT University", detail: "Swanston St / La Trobe St corner" },
              { name: "The Royal Melbourne Hospital", detail: "Grattan St, 24/7 medical priority" },
              { name: "State Library Victoria", detail: "Swanston St, daytime tourists" },
            ].map((rank) => (
              <div key={rank.name} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-foreground">{rank.name}</p>
                  <p className="text-sm font-body text-muted-foreground">{rank.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Peak Hours, Surge Times & When to Pre-Book</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Melbourne CBD taxi demand follows predictable patterns. <strong>Morning peak</strong> (7–9 am) sees heavy demand at hotels and Southern Cross Station as commuters and business travellers head to meetings. <strong>Evening peak</strong> (5–7 pm) is the busiest time of day, especially at Collins Street financial-district ranks. <strong>Friday and Saturday nights</strong> from 10 pm to 3 am are peak entertainment-precinct hours, with long queues at Crown Casino, King Street, and Chinatown ranks.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            On <strong>major event nights</strong> (AFL finals at the MCG, concerts at Rod Laver Arena, Melbourne Cup, New Year's Eve, White Night, Australian Open) demand can quadruple. The Victorian Government deploys <strong>Safe City Taxi Marshal</strong> teams at high-demand ranks to manage queues and passenger safety. We strongly recommend pre-booking via the 13CABS or Silver Top app on these nights.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Wheelchair Accessible Taxis (WAT) in the CBD</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            All major Melbourne taxi networks operate <strong>Wheelchair Accessible Taxis</strong> equipped with ramps and securement systems. WATs can be booked through 13CABS (13 22 27), Silver Top (13 10 08) or via the dedicated WAT booking line on <strong>1800 100 350</strong>. Members of the Victorian <strong>Multi Purpose Taxi Program (MPTP)</strong> receive a 50% subsidy on fares up to $60 per trip.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Free Tram Zone vs Taxi — When Should You Cab It?</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            The Melbourne CBD <strong>Free Tram Zone</strong> covers the area bounded by Spring Street, La Trobe Street, William Street, Flinders Street, and the Docklands. Inside this zone all tram travel is free. For very short trips between Federation Square, Queen Victoria Market, Southern Cross, or Docklands, the tram is faster and free. Choose a taxi when:
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "You are travelling outside the Free Tram Zone (St Kilda, South Yarra, Richmond, Fitzroy)",
              "You have luggage, shopping bags, sports equipment, or mobility aids",
              "It is late at night and trams are running infrequently (after midnight)",
              "You are travelling in a group of 3+ where a maxi or sedan beats per-person tram costs",
              "You need a direct door-to-door trip without walking to a tram stop",
              "Weather is extreme (storms, summer heatwave above 38 °C)",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions — Melbourne CBD Taxis</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Can I hail a taxi anywhere in the Melbourne CBD?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes, on most CBD streets — except tram-only sections of Swanston Street and Bourke Street Mall. Look for taxis with a lit rooftop sign indicating they are vacant.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Is there a minimum fare in Melbourne CBD?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">There is no minimum fare beyond the $4.20 flagfall. A 1 km trip in light traffic typically costs $6–$8 AUD.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Are tips expected in Melbourne taxis?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">No, tipping is not part of Australian culture. Many passengers round the fare up to the nearest dollar as a courtesy, but it is not expected.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Can I share a taxi with strangers in the CBD at night?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes — at official late-night Safe City Taxi Ranks (e.g. King Street, Flinders Street) marshals will often co-ordinate share-rides for passengers heading in the same direction, with the fare split between you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AffiliateCards
      title="Top Things to Do in Melbourne CBD"
      subtitle="Skip-the-line tickets and guided tours of the city's best attractions, just a short taxi ride away."
      offers={["streetArt", "eureka", "river", "cityCard", "greatOceanRoad", "phillipIsland"]}
    />
  </SEOPageLayout>
);

export default MelbourneTaxiCBD;
