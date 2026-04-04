import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Plane, Clock, DollarSign, Car, CheckCircle } from "lucide-react";

const AirportToCBD = () => (
  <SEOPageLayout
    title="Taxi Melbourne Airport to CBD"
    subtitle="Complete guide to taxi transfers from Melbourne Airport (Tullamarine) to Melbourne CBD. Fares, travel times, tips and booking options."
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Alternatives to Taxis
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            <strong>SkyBus:</strong> The SkyBus express shuttle runs every 10 minutes between Melbourne Airport and 
            Southern Cross Station in the CBD. Adult fares are approximately $19.75 one-way. Journey time is about 30 minutes.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            <strong>Rideshare:</strong> Uber, Ola, and DiDi operate at Melbourne Airport. Pickup is from a designated 
            rideshare area. Fares are typically similar to taxis but can surge during peak times.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            <strong>Private Transfer:</strong> Pre-booked private cars offer fixed pricing, meet-and-greet at arrivals, 
            and are ideal for business travellers or families with luggage.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default AirportToCBD;
