import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { MapPin, Clock, DollarSign, CheckCircle, Car } from "lucide-react";

const MelbourneTaxiCBD = () => (
  <SEOPageLayout
    title="Melbourne Taxi CBD"
    subtitle="Everything you need to know about catching a taxi in Melbourne's Central Business District — ranks, fares, peak hours and insider tips."
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
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
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Finding a Taxi in Melbourne CBD
          </h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">
            CBD Taxi Fare Guide
          </h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Tips for CBD Taxi Travel
          </h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Popular CBD Taxi Rank Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Flinders Street Station", detail: "Elizabeth St entrance, 24/7" },
              { name: "Southern Cross Station", detail: "Spencer St, all hours" },
              { name: "Crown Casino", detail: "Clarendon St, busy evenings" },
              { name: "Melbourne Central", detail: "La Trobe St side" },
              { name: "QV Melbourne", detail: "Lonsdale St" },
              { name: "Parliament Station", detail: "Spring St, peak hours" },
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
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default MelbourneTaxiCBD;
