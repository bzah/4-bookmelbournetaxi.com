import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Users, CheckCircle, Car } from "lucide-react";

const MaxiTaxi = () => (
  <SEOPageLayout
    title="Maxi Taxi Melbourne"
    subtitle="Need a larger vehicle? Book a maxi taxi in Melbourne for groups, families, and airport transfers. Seats up to 11 passengers with luggage space."
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
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
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            What is a Maxi Taxi in Melbourne?
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            A <strong>maxi taxi</strong> (also called a maxi cab) is a larger taxi vehicle that can carry between 
            6 and 11 passengers. In Melbourne, maxi taxis are commonly used for airport transfers with large groups, 
            wedding transport, corporate events, and family outings. They're operated by the same licensed taxi 
            companies as regular cabs, including 13CABS and Silver Top.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">
            Maxi Taxi Fares in Melbourne
          </h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            How to Book a Maxi Taxi in Melbourne
          </h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            When to Choose a Maxi Taxi
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Maxi taxis are the smart choice when travelling with 5 or more people. Instead of splitting into 
            two regular taxis, a single maxi taxi is often cheaper and more convenient. They're especially 
            popular for Melbourne Airport pickups where families and groups have multiple suitcases.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Maxi taxis are also the preferred option for passengers using wheelchairs, as many vehicles 
            feature ramp access and securement systems. Contact your taxi company to confirm wheelchair-accessible 
            vehicle availability.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default MaxiTaxi;
