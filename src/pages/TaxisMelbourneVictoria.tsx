import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { MapPin, CheckCircle, Phone } from "lucide-react";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookmelbournetaxi.com" },
    { "@type": "ListItem", position: 2, name: "Taxis Melbourne Victoria", item: "https://bookmelbournetaxi.com/taxis-melbourne-victoria" },
  ],
};

const TaxisMelbourneVictoria = () => (
  <SEOPageLayout
    title="Taxis Melbourne Victoria"
    subtitle="The complete 2026 guide to taxi services across Melbourne and the State of Victoria, Australia. Compare every major taxi company, learn the official Victorian fare structure, find taxi ranks, understand regulations from Commercial Passenger Vehicles Victoria (CPVV), and get insider tips for visitors and locals booking cabs in metropolitan Melbourne and regional Victoria."
    metaTitle="Taxis Melbourne Victoria 2026 — Companies, Fares, Ranks & Booking Guide"
    metaDescription="Complete guide to taxis in Melbourne & Victoria, Australia. Compare 13CABS, Silver Top, Melbourne Combined & GM Cabs. Official fares (flagfall $4.20, $1.62/km), airport surcharge, MPTP, regulations, regional Victoria taxi services in Geelong, Ballarat, Bendigo & the Mornington Peninsula."
    slug="taxis-melbourne-victoria"
    bookLink={`https://www.getyourguide.com/melbourne-l169/?partner_id=${GYG}&utm_medium=online_publisher`}
    jsonLd={[breadcrumbSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Taxi Services in Melbourne, Victoria</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Melbourne, the capital of <strong>Victoria, Australia</strong>, has one of the most comprehensive 
            taxi networks in the country. Licensed taxis operate across the Greater Melbourne area and regional 
            Victoria, providing reliable transport for locals and visitors alike. The industry is regulated by 
            the <strong>Commercial Passenger Vehicles Victoria (CPVV)</strong>.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-10">Major Melbourne Taxi Companies</h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Melbourne Taxi Fare Guide</h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Popular Taxi Routes in Melbourne</h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Tips for Taking Taxis in Melbourne</h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Regional Victoria Taxi Services</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Taxi services extend beyond Melbourne to regional Victoria cities including <strong>Geelong</strong>, 
            <strong> Ballarat</strong>, <strong>Bendigo</strong>, and the <strong>Mornington Peninsula</strong>. 
            Regional taxis use the same fare structure as Melbourne but may require pre-booking. For long-distance 
            trips from Melbourne to regional destinations, consider pre-booking for a fixed quote.
          </p>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            In addition to the cities listed, licensed taxis operate in <strong>Shepparton</strong>, <strong>Warrnambool</strong>, <strong>Mildura</strong>, <strong>Wodonga</strong>, the <strong>Yarra Valley</strong>, the <strong>Macedon Ranges</strong>, <strong>Phillip Island</strong> and along the <strong>Great Ocean Road</strong>. Many regional operators also provide <strong>winery tour packages</strong>, <strong>day-trip charters</strong>, and <strong>airport-to-region transfers</strong> from Melbourne (Tullamarine) and Avalon Airport.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Taxi Regulations in Victoria — What Passengers Should Know</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            All commercial passenger vehicles in Victoria — including taxis, hire cars, and rideshare — are regulated by <strong>Commercial Passenger Vehicles Victoria (CPVV)</strong>, the state's safety and conduct regulator. Every licensed taxi driver must:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Hold a Driver Accreditation issued by CPVV (background-checked)",
              "Display their photo ID and accreditation number visibly inside the vehicle",
              "Use a calibrated meter that prints a fare receipt",
              "Accept all licensed payment methods including card and contactless",
              "Take the most direct or fastest route unless the passenger requests otherwise",
              "Not refuse short trips or wheelchair-accessible bookings",
              "Carry at least one approved fire extinguisher and first-aid kit",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{rule}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            Complaints can be lodged with CPVV online at <em>cpv.vic.gov.au</em> or by calling <strong>1800 638 802</strong>. Always note the vehicle registration and driver accreditation number from the receipt.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Multi Purpose Taxi Program (MPTP) Subsidy</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            The Victorian Government's <strong>Multi Purpose Taxi Program (MPTP)</strong> subsidises taxi travel for people with severe and permanent disabilities that prevent independent use of public transport. MPTP members receive a <strong>50% subsidy</strong> on fares, capped at $60 per trip. The program covers standard, maxi, and wheelchair-accessible taxis across Victoria. Members must present their MPTP smartcard at the start of each trip and pay the discounted fare directly through the in-vehicle terminal.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Taxis vs Rideshare in Melbourne — Which Should You Choose?</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Both <strong>taxis (13CABS, Silver Top)</strong> and <strong>rideshare services (Uber, Ola, DiDi, Bolt)</strong> are legal and regulated in Melbourne. Choose a <strong>taxi</strong> when you want to hail on the street, use a rank, pay with a Cabcharge or MPTP card, need a wheelchair-accessible vehicle, or are travelling at peak times when rideshare surge pricing is heavy. Choose <strong>rideshare</strong> when you want upfront pricing, in-app driver ratings, and shorter wait times in non-CBD suburbs. For Melbourne Airport pickups, taxi rank wait times are usually shorter than rideshare pickup walks.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions — Taxis in Melbourne &amp; Victoria</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">What is the cheapest way to get a taxi in Melbourne?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">All taxi fares are set by the Victorian Government, so the meter price is the same across operators. To save money, avoid pre-booking by phone (saves the $2 booking fee), travel before 10 pm to get the daytime per-km rate, and split a maxi taxi if you're in a group.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Can I use Myki on taxis in Melbourne?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">No. Myki is only valid on trams, trains, and buses. Taxis use cash, card, mobile pay, Cabcharge accounts, or MPTP cards.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Are Melbourne taxis available in regional Victoria?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes — 13CABS and Silver Top operate in major regional centres, and most regional towns have their own local taxi network. Pre-booking is recommended outside the metro area, especially after 9 pm.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">What's the difference between a taxi and a hire car in Victoria?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Taxis can be hailed on the street, use ranks, charge by meter, and display a rooftop sign. Hire cars must be pre-booked, charge an agreed fare, and don't display a rooftop sign. Both are CPVV-regulated.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Do Melbourne taxis charge extra for luggage?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">No additional luggage fee applies for normal suitcases. Bulky items (surfboards, bicycles, large boxes) may attract a small handling charge at the driver's discretion. Always confirm before loading.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default TaxisMelbourneVictoria;
