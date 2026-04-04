import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { MapPin, CheckCircle, Phone } from "lucide-react";

const TaxisMelbourneVictoria = () => (
  <SEOPageLayout
    title="Taxis Melbourne Victoria"
    subtitle="Everything you need to know about taxi services across Melbourne and Victoria, Australia. Companies, fares, regulations, and booking options."
    bookLink={`https://www.getyourguide.com/melbourne-l169/?partner_id=${GYG}&utm_medium=online_publisher`}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Taxi Services in Melbourne, Victoria
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Melbourne, the capital of <strong>Victoria, Australia</strong>, has one of the most comprehensive 
            taxi networks in the country. Licensed taxis operate across the Greater Melbourne area and regional 
            Victoria, providing reliable transport for locals and visitors alike. The industry is regulated by 
            the <strong>Commercial Passenger Vehicles Victoria (CPVV)</strong>.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">
            Major Melbourne Taxi Companies
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { name: "13CABS", phone: "13 2227", desc: "Australia's largest taxi network. Available via app, phone, or street hail." },
              { name: "Silver Top Taxis", phone: "131 008", desc: "Melbourne's iconic silver-top fleet. 24/7 service across metro Melbourne." },
              { name: "Melbourne Airport Taxi", phone: "At ranks", desc: "Dedicated airport taxi service at Tullamarine terminal ranks." },
              { name: "Wheelchair Accessible Taxis", phone: "1800 100 350", desc: "Multi Purpose Taxi Program for passengers with disabilities." },
            ].map((company) => (
              <div key={company.name} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{company.name}</h3>
                <p className="flex items-center gap-2 text-sm font-body text-primary mb-2">
                  <Phone className="w-3 h-3" /> {company.phone}
                </p>
                <p className="font-body text-sm text-muted-foreground">{company.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Melbourne Taxi Fare Guide
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            All Melbourne taxis use calibrated meters. The fare structure is set by the Victorian Government 
            and applies to all licensed taxi services:
          </p>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Fare Component</th>
                  <th className="text-right p-4 text-foreground font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">Flagfall (daytime)</td><td className="p-4 text-right text-foreground">$4.20</td></tr>
                <tr><td className="p-4 text-muted-foreground">Per km (daytime, Mon–Fri)</td><td className="p-4 text-right text-foreground">$1.62</td></tr>
                <tr><td className="p-4 text-muted-foreground">Per km (night 10pm–5am)</td><td className="p-4 text-right text-foreground">$1.80</td></tr>
                <tr><td className="p-4 text-muted-foreground">Per km (weekends & public holidays)</td><td className="p-4 text-right text-foreground">$1.80</td></tr>
                <tr><td className="p-4 text-muted-foreground">Waiting time (per minute)</td><td className="p-4 text-right text-foreground">$0.58</td></tr>
                <tr><td className="p-4 text-muted-foreground">Booking fee</td><td className="p-4 text-right text-foreground">$2.00</td></tr>
                <tr><td className="p-4 text-muted-foreground">Airport surcharge</td><td className="p-4 text-right text-foreground">$3.50</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Popular Taxi Routes in Melbourne
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { route: "Melbourne Airport → CBD", fare: "$55–$75", time: "25–40 min" },
              { route: "CBD → St Kilda", fare: "$20–$30", time: "15–25 min" },
              { route: "CBD → Brighton Beach", fare: "$30–$45", time: "20–30 min" },
              { route: "CBD → MCG", fare: "$10–$15", time: "5–10 min" },
              { route: "Melbourne Airport → Geelong", fare: "$120–$160", time: "55–75 min" },
              { route: "CBD → Docklands", fare: "$10–$15", time: "5–10 min" },
            ].map((r) => (
              <div key={r.route} className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body font-medium text-foreground">{r.route}</span>
                </div>
                <div className="text-right">
                  <span className="font-heading font-bold text-primary">{r.fare}</span>
                  <span className="text-xs font-body text-muted-foreground ml-2">({r.time})</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Tips for Taking Taxis in Melbourne
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "All licensed taxis display a rooftop sign and driver ID — check before entering",
              "Card payment (Visa, Mastercard, EFTPOS) is accepted in all taxis",
              "Tipping is not expected but rounding up is appreciated",
              "Taxi ranks are located at major hotels, shopping centres, and train stations",
              "You can hail a taxi on the street if its rooftop light is on",
              "Melbourne's free tram zone in the CBD means short trips may be better by tram",
              "For complaints, contact CPVV (Commercial Passenger Vehicles Victoria)",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Regional Victoria Taxi Services
          </h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Taxi services extend beyond Melbourne to regional Victoria cities including <strong>Geelong</strong>, 
            <strong> Ballarat</strong>, <strong>Bendigo</strong>, and the <strong>Mornington Peninsula</strong>. 
            Regional taxis use the same fare structure as Melbourne but may require pre-booking. For long-distance 
            trips from Melbourne to regional destinations, consider pre-booking for a fixed quote.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default TaxisMelbourneVictoria;
