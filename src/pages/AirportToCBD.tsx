import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Plane, Clock, DollarSign, Car, CheckCircle } from "lucide-react";
import { AffiliateCards, InlineAffiliateBanner } from "@/components/AffiliateCards";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookmelbournetaxi.com" },
    { "@type": "ListItem", position: 2, name: "Airport to CBD Taxi", item: "https://bookmelbournetaxi.com/taxi-melbourne-airport-to-cbd" },
  ],
};

const AirportToCBD = () => (
  <SEOPageLayout
    title="Taxi Melbourne Airport to CBD"
    subtitle="Complete 2026 guide to taxi transfers from Melbourne Airport (Tullamarine, MEL) to Melbourne CBD. Compare metered taxi fares, travel times, peak-hour surcharges, terminal pickup points, payment options, child seat availability and how to pre-book a Melbourne Airport taxi online."
    metaTitle="Taxi Melbourne Airport to CBD — Fares $55–$75 | 2026 Guide"
    metaDescription="Melbourne Airport to CBD taxi: $55–$75 AUD, 25–40 min via Tullamarine Freeway. Compare 13CABS, Silver Top, maxi & private transfer fares with 2026 booking tips."
    slug="taxi-melbourne-airport-to-cbd"
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
    jsonLd={[breadcrumbSchema]}
  >
    {/* Key Info Cards */}
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {[
            { icon: DollarSign, label: "Estimated Fare", value: "$55–$75 AUD" },
            { icon: Clock, label: "Travel Time", value: "25–40 min" },
            { icon: Plane, label: "Distance", value: "~23 km" },
            { icon: Car, label: "Availability", value: "24/7" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-body text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-2xl font-heading font-bold text-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            How Much is a Taxi from Melbourne Airport to CBD?
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            A metered taxi from <strong>Melbourne Airport (Tullamarine)</strong> to <strong>Melbourne CBD</strong> typically 
            costs between <strong>$55 and $75 AUD</strong>. The fare depends on traffic conditions, time of day, and your 
            exact destination within the city centre. During peak hours (7am–9am and 4pm–7pm), expect fares closer to 
            the higher end due to congestion on the Tullamarine Freeway.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Taxis are available around the clock at designated taxi ranks outside all terminals at Melbourne Airport. 
            You don't need to pre-book — simply follow the signs to the taxi rank after collecting your luggage. 
            However, pre-booking a private transfer can guarantee a fixed price and meet-and-greet service.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">
            Taxi Fare Breakdown
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Component</th>
                  <th className="text-right p-4 text-foreground font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">Flagfall</td><td className="p-4 text-right text-foreground">$4.20</td></tr>
                <tr><td className="p-4 text-muted-foreground">Per km rate (day)</td><td className="p-4 text-right text-foreground">$1.62/km</td></tr>
                <tr><td className="p-4 text-muted-foreground">Per km rate (night/weekend)</td><td className="p-4 text-right text-foreground">$1.80/km</td></tr>
                <tr><td className="p-4 text-muted-foreground">Airport surcharge</td><td className="p-4 text-right text-foreground">$3.50</td></tr>
                <tr><td className="p-4 text-muted-foreground">Booking fee (if pre-booked)</td><td className="p-4 text-right text-foreground">$2.00</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Tips for Taking a Taxi from Melbourne Airport
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "Use the official taxi rank — avoid unlicensed drivers inside the terminal",
              "Ask the driver to use the Tullamarine Freeway for the quickest route",
              "Payment by card (Visa, Mastercard) is accepted in all licensed taxis",
              "Keep your receipt — useful for expense claims and complaints",
              "Late-night fares (10pm–5am) include a higher per-km rate",
              "Consider a private airport transfer for fixed pricing and comfort",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <InlineAffiliateBanner offerKey="airportTransfer" />

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Alternatives to Taxis from Melbourne Airport
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            <strong>SkyBus Melbourne Airport Express:</strong> The SkyBus express shuttle runs every 10 minutes, 24 hours a day, between Melbourne Airport (Tullamarine) and Southern Cross Station in the CBD. Adult one-way fares are approximately <strong>$19.75 AUD</strong>, with a return ticket around $32. Journey time is about 30 minutes. SkyBus also offers free hotel transfers from Southern Cross to most CBD hotels.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            <strong>Rideshare (Uber, Ola, DiDi, Bolt):</strong> All major rideshare operators serve Melbourne Airport. Pickup is from the dedicated rideshare zone on Level 1 of the short-term car park, a short walk from the terminals. Fares are typically similar to metered taxis (around <strong>$50–$80 AUD</strong>) but can <em>surge</em> 1.5×–3× during peak times, public holidays, and major events at the MCG or Marvel Stadium.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            <strong>Private Airport Transfer:</strong> Pre-booked private cars and chauffeur services offer fixed pricing (typically $90–$160 for a sedan, $140–$220 for a luxury vehicle), meet-and-greet at arrivals, name boards, and complimentary waiting time. Ideal for business travellers, families with luggage, and visitors wanting a stress-free arrival.
          </p>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            <strong>Public Transport:</strong> There is currently no train link to Melbourne Airport (the Melbourne Airport Rail Link is under construction, expected 2029). Public bus route 901 (SmartBus) connects Melbourne Airport with Broadmeadows Station for around $5 with a Myki card, then a Metro train into the city.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Melbourne Airport Taxi Ranks — Terminal by Terminal
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Melbourne Airport (IATA code: <strong>MEL</strong>) has four passenger terminals, each with its own taxi rank:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Terminal 1 (Qantas Domestic) — taxi rank on the ground level, exit through automatic doors and follow the yellow taxi signs.",
              "Terminal 2 (International) — large covered taxi rank with marshals on duty 24/7. The busiest rank during morning international arrivals.",
              "Terminal 3 (Virgin Australia Domestic) — taxi rank directly outside arrivals, very short walk from baggage claim.",
              "Terminal 4 (Jetstar, Rex, Bonza) — taxi rank on the ground floor near the southern end of the terminal.",
              "All terminal taxi ranks operate 24 hours, 7 days a week — no booking is required during the day.",
              "For early-morning departures (before 5 am) and large groups, pre-booking a maxi taxi is strongly recommended.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Routes from Melbourne Airport — The Tullamarine Freeway Explained
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            The fastest and most common route from Melbourne Airport (Tullamarine) to the CBD is via the <strong>Tullamarine Freeway (M2)</strong>, connecting to <strong>CityLink</strong> through the Bolte Bridge or the Domain Tunnel. CityLink is a tolled motorway, but the toll is included in your taxi metered fare — you do not need a separate e-tag. The total distance is approximately 23 km.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            During peak hours (7–9 am inbound, 4–7 pm outbound), traffic on the Tullamarine Freeway can add 15–25 minutes to your trip. Some experienced drivers use the alternative <strong>Mickleham Road / Pascoe Vale Road</strong> route to bypass congestion, especially when there is a major event at Flemington Racecourse or Marvel Stadium.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Taxi Fares from Melbourne Airport to Major Suburbs
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Destination</th>
                  <th className="text-right p-4 text-foreground font-semibold">Estimated Fare</th>
                  <th className="text-right p-4 text-foreground font-semibold">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">Melbourne CBD</td><td className="p-4 text-right text-foreground">$55–$75</td><td className="p-4 text-right text-muted-foreground">25–40 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">Southbank / Crown</td><td className="p-4 text-right text-foreground">$60–$80</td><td className="p-4 text-right text-muted-foreground">30–40 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">St Kilda</td><td className="p-4 text-right text-foreground">$70–$90</td><td className="p-4 text-right text-muted-foreground">35–50 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">Brighton</td><td className="p-4 text-right text-foreground">$85–$110</td><td className="p-4 text-right text-muted-foreground">40–55 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">Box Hill</td><td className="p-4 text-right text-foreground">$80–$105</td><td className="p-4 text-right text-muted-foreground">35–50 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">Geelong</td><td className="p-4 text-right text-foreground">$120–$160</td><td className="p-4 text-right text-muted-foreground">55–75 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">Mornington Peninsula</td><td className="p-4 text-right text-foreground">$160–$220</td><td className="p-4 text-right text-muted-foreground">75–95 min</td></tr>
                <tr><td className="p-4 text-muted-foreground">Yarra Valley</td><td className="p-4 text-right text-foreground">$140–$190</td><td className="p-4 text-right text-muted-foreground">60–80 min</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions — Melbourne Airport Taxis
          </h2>
          <div className="space-y-6 mb-4">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Do Melbourne Airport taxis accept credit cards?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes. Every licensed Melbourne taxi accepts contactless payment with Visa, Mastercard, American Express, EFTPOS, Apple Pay and Google Pay. A 5% card surcharge applies. Cash is also accepted.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Can I book a maxi taxi from Melbourne Airport?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes — maxi taxis (6 to 11 passengers) are available at all terminal ranks but it is highly recommended to pre-book through 13CABS or Silver Top, especially for groups of 5 or more with luggage. Maxi airport fares to the CBD typically run $80–$110 AUD.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Are child seats available in Melbourne taxis?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Children under 7 must legally use an approved child restraint. Standard taxis do not carry child seats by default — you must request one when booking (a small surcharge usually applies) or bring your own.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Is there a flat rate from Melbourne Airport to the CBD?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Metered taxis use the official Victorian fare structure — there is no government-set flat rate. However, several private transfer companies offer <strong>fixed-price airport transfers</strong> from around $89 AUD, useful for budgeting and avoiding surge pricing.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">How early should I leave the CBD for a flight at Melbourne Airport?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Allow 60 minutes outside peak hours and 90 minutes during peak (7–9 am, 4–7 pm). For international flights, arrive at the airport 3 hours before departure; for domestic, 90 minutes is standard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AffiliateCards
      title="Combine Your Airport Transfer with a Tour"
      subtitle="Top-rated Melbourne day trips, transfers and attractions — book ahead and save."
      offers={["airportTransfer", "greatOceanRoad", "phillipIsland", "yarraValley", "puffingBilly", "mornington"]}
      variant="dark"
    />
  </SEOPageLayout>
);

export default AirportToCBD;
