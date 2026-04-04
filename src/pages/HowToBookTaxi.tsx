import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Phone, Smartphone, MapPin, CheckCircle, Clock } from "lucide-react";

const HowToBookTaxi = () => (
  <SEOPageLayout
    title="How to Book a Taxi in Melbourne"
    subtitle="Step-by-step guide to booking a taxi in Melbourne — by app, phone, online or from a rank. All the options compared."
    bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            4 Ways to Book a Melbourne Taxi
          </h2>

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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Melbourne Taxi Companies
          </h2>
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

          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Booking Tips
          </h2>
          <ul className="space-y-3">
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
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default HowToBookTaxi;
