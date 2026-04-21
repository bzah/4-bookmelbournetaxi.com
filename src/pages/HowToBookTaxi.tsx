import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Phone, Smartphone, MapPin, CheckCircle, Clock } from "lucide-react";
import { AffiliateCards, InlineAffiliateBanner } from "@/components/AffiliateCards";
import RelatedPages from "@/components/RelatedPages";
import {
  sitewideLocalBusinessSchema,
  aggregateRatingSchema,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo-schemas";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home" },
  { name: "How to Book a Taxi", slug: "how-to-book-taxi-melbourne" },
]);

const serviceSchema = buildServiceSchema({
  name: "Book a Taxi in Melbourne — App, Phone, Rank or Online",
  description:
    "Step-by-step guide to booking a Melbourne taxi by app, phone, street hail, taxi rank or online — with 13CABS, Silver Top, Melbourne Combined and GM Cabs.",
  slug: "how-to-book-taxi-melbourne",
  serviceType: "Taxi booking guide",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book a Taxi in Melbourne",
  description: "Step-by-step guide to booking a taxi in Melbourne by app, phone, street hail, or online.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Book via App", text: "Download 13CABS or Silver Top app, enter pickup and destination, confirm booking and track your driver in real time." },
    { "@type": "HowToStep", position: 2, name: "Call to Book", text: "Phone 13CABS (13 22 27) or Silver Top (13 10 08). Provide pickup address, destination, and preferred time." },
    { "@type": "HowToStep", position: 3, name: "Hail or Use a Taxi Rank", text: "In the CBD, hail a vacant taxi with a lit roof sign, or go to a designated taxi rank at train stations and shopping centres." },
    { "@type": "HowToStep", position: 4, name: "Pre-Book Online", text: "Visit 13cabs.com.au or silvertop.com.au to schedule a booking up to 7 days in advance." },
  ],
};

const faqSchema = buildFaqSchema([
  { q: "Is it cheaper to book a taxi by app or by phone?", a: "The fare is identical — Melbourne taxi fares are regulated by the Victorian Government and the metered rate doesn't change based on booking method. App bookings often skip the $2 phone-booking fee and offer fixed-quote options." },
  { q: "How far in advance can I pre-book a Melbourne taxi?", a: "Up to 7 days in advance through 13CABS and Silver Top apps or websites. For corporate accounts, longer lead times are possible." },
  { q: "Can I track my taxi driver in real time?", a: "Yes — both the 13CABS and Silver Top apps offer live GPS tracking, ETA updates, driver name and photo, and vehicle registration." },
  { q: "What if my taxi is late?", a: "Use the app to check the driver's location. If significantly delayed, call the dispatcher and they'll either expedite the booking or assign a closer car at no extra cost." },
  { q: "Are Melbourne taxis safer than rideshare?", a: "Both are regulated by the CPVV. Licensed taxis have CCTV, mandatory driver background checks, and a long-established complaints process. Late at night, official taxi ranks with marshals are generally considered the safest option." },
]);

const HowToBookTaxi = () => (
  <SEOPageLayout
    title="How to Book a Taxi in Melbourne"
    subtitle="The complete 2026 guide to booking a Melbourne taxi — by smartphone app, phone call, street hail, taxi rank, hotel concierge or online. Compare 13CABS, Silver Top, Melbourne Combined and GM Cabs, plus tips for airport pre-bookings, peak-hour reservations, accessible taxis and group maxi cab bookings across Melbourne and Victoria."
    metaTitle="How to Book a Taxi in Melbourne — 5 Easy Ways (2026 Guide)"
    metaDescription="Book a Melbourne taxi by app, phone, rank or online. Compare 13CABS & Silver Top, with tips for airport transfers, maxi cabs & wheelchair-accessible bookings."
    slug="how-to-book-taxi-melbourne"
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
    jsonLd={[sitewideLocalBusinessSchema, aggregateRatingSchema, serviceSchema, howToSchema, faqSchema, breadcrumbSchema]}
  >

    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">4 Ways to Book a Melbourne Taxi</h2>

          <div className="space-y-8 mb-12">
            {[
              {
                icon: Smartphone,
                title: "1. Book via App",
                content: "Download the 13CABS or Silver Top app from the App Store or Google Play. Enter your pickup and destination, choose your vehicle type, and confirm. You'll see the driver's ETA, registration number, and can track in real time. Payment is handled in-app.",
              },
              {
                icon: Phone,
                title: "2. Call to Book",
                content: "Phone 13CABS (13 22 27) or Silver Top (13 10 08) to book over the phone. An operator will take your pickup address, destination, and preferred time. Pre-booking for airport pickups is recommended — allow at least 30 minutes lead time.",
              },
              {
                icon: MapPin,
                title: "3. Hail or Use a Taxi Rank",
                content: "In the CBD and inner suburbs you can hail a vacant taxi (look for the lit roof sign). Alternatively, head to a designated taxi rank — found at train stations, hospitals, shopping centres, and entertainment venues across Melbourne.",
              },
              {
                icon: Clock,
                title: "4. Pre-Book Online",
                content: "Visit 13cabs.com.au or silvertop.com.au to book online. Pre-booking is ideal for airport transfers, early morning pickups, or events. You can specify vehicle type (sedan, wagon, maxi taxi, wheelchair accessible) and schedule up to 7 days in advance.",
              },
            ].map((method) => (
              <div key={method.title} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <method.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-heading font-bold text-foreground">{method.title}</h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">{method.content}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Melbourne Taxi Companies</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Company</th>
                  <th className="text-left p-4 text-foreground font-semibold">Phone</th>
                  <th className="text-left p-4 text-foreground font-semibold">App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 text-muted-foreground">13CABS</td><td className="p-4 text-foreground">13 22 27</td><td className="p-4 text-foreground">✓</td></tr>
                <tr><td className="p-4 text-muted-foreground">Silver Top</td><td className="p-4 text-foreground">13 10 08</td><td className="p-4 text-foreground">✓</td></tr>
                <tr><td className="p-4 text-muted-foreground">Melbourne Combined</td><td className="p-4 text-foreground">13 24 69</td><td className="p-4 text-foreground">✗</td></tr>
                <tr><td className="p-4 text-muted-foreground">GM Cabs</td><td className="p-4 text-foreground">13 19 24</td><td className="p-4 text-foreground">✓</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Booking Tips</h2>
          <ul className="space-y-3 mb-10">
            {[
              "Book at least 15–30 minutes before you need to leave, especially during peak hours",
              "For airport transfers, pre-book the night before to guarantee availability",
              "Specify if you need a maxi taxi, wheelchair-accessible vehicle, or child seat",
              "Have your exact pickup address ready — landmarks help drivers find you faster",
              "Check surge periods: Friday/Saturday nights and major events can cause delays",
              "Keep your booking confirmation number for reference",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <InlineAffiliateBanner offerKey="airportTransfer" />

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Booking a Taxi for Melbourne Airport (Tullamarine)</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            For early-morning flights from Melbourne Airport (MEL, IATA), pre-booking the night before is essential. Both 13CABS and Silver Top allow scheduled bookings up to 7 days in advance through their apps. Specify <strong>"airport pickup"</strong> in the notes so the driver knows to allow extra luggage time and uses the Tullamarine Freeway via CityLink.
          </p>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            For arrivals at Melbourne Airport, you do <strong>not</strong> need to pre-book — taxi ranks at all four terminals (T1 Qantas, T2 International, T3 Virgin, T4 Jetstar) operate 24/7 with marshals managing the queue. However, for groups of 5+ or anyone needing a wheelchair-accessible vehicle, pre-booking is strongly recommended.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Booking a Wheelchair Accessible Taxi (WAT)</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Wheelchair Accessible Taxis (WATs) are larger maxi-style vehicles with hydraulic ramps and securement points. To book a WAT in Melbourne, call <strong>13CABS on 13 22 27</strong>, <strong>Silver Top on 13 10 08</strong>, or the dedicated WAT booking line on <strong>1800 100 350</strong>. Members of Victoria's <strong>Multi Purpose Taxi Program (MPTP)</strong> receive a 50% government subsidy on fares up to $60 per trip — be sure to present your MPTP card at the start of the journey.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Pre-Booking for Major Melbourne Events</h2>
          <p className="font-body text-muted-foreground mb-4 leading-relaxed">
            Demand for taxis spikes dramatically during the <strong>Australian Open</strong> (January), <strong>Melbourne Cup Carnival</strong> (November), <strong>AFL Grand Final</strong> (September), <strong>Formula 1 Australian Grand Prix</strong> (March/April), <strong>Boxing Day Test</strong> at the MCG, <strong>New Year's Eve fireworks</strong>, and large concerts at <strong>Marvel Stadium</strong> or <strong>Rod Laver Arena</strong>. Pre-book at least 24 hours in advance and consider a maxi taxi to share with friends — both apps allow split-fare payments.
          </p>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Payment Methods Accepted in Melbourne Taxis</h2>
          <ul className="space-y-3 mb-10">
            {[
              "Cash (AUD) — accepted in all licensed taxis",
              "Visa, Mastercard, American Express — 5% card surcharge applies",
              "EFTPOS debit cards — 5% surcharge",
              "Apple Pay, Google Pay, Samsung Pay — contactless tap-to-pay",
              "In-app payment via 13CABS or Silver Top apps — no surcharge",
              "Cabcharge accounts for corporate accounts and government users",
              "MPTP smart cards for eligible disability program members",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions — Booking a Melbourne Taxi</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Is it cheaper to book a taxi by app or by phone?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">The fare is identical — Melbourne taxi fares are regulated by the Victorian Government and the metered rate doesn't change based on booking method. However, app bookings often skip the $2 phone-booking fee and offer fixed-quote options.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">How far in advance can I pre-book a Melbourne taxi?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Up to 7 days in advance through 13CABS and Silver Top apps or websites. For corporate accounts, longer lead times are possible.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Can I track my taxi driver in real time?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Yes — both the 13CABS and Silver Top apps offer live GPS tracking, ETA updates, driver name and photo, and vehicle registration. You can also share your trip with a friend or family member for safety.</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">What if my taxi is late?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Use the app to check the driver's location. If significantly delayed, call the dispatcher and they'll either expedite the booking or assign a closer car at no extra cost. For repeated issues, complaints can be lodged with the Commercial Passenger Vehicles Victoria (CPVV).</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Are Melbourne taxis safer than rideshare?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">Both are regulated by the CPVV. Licensed taxis have CCTV, mandatory driver background checks, and a long-established complaints process. Rideshare platforms also vet drivers and offer in-app safety features. Late at night, official taxi ranks with marshals are generally considered the safest option.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AffiliateCards
      title="Pre-Book the Best Melbourne Experiences"
      subtitle="Beyond taxis — these top-rated tours, transfers and attractions sell out fast. Reserve now, pay later."
      offers={["airportTransfer", "greatOceanRoad", "phillipIsland", "yarraValley", "streetArt", "eureka"]}
    />
    <RelatedPages links={["airport", "maxi", "cbd", "victoria", "calculator"]} />
  </SEOPageLayout>
);

export default HowToBookTaxi;
