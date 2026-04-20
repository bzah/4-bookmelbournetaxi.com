import { useState } from "react";
import SEOPageLayout, { GYG } from "@/components/SEOPageLayout";
import { Calculator, CheckCircle } from "lucide-react";
import { AffiliateCards, InlineAffiliateBanner } from "@/components/AffiliateCards";

const FLAGFALL = 4.2;
const RATE_DAY = 1.62;
const RATE_NIGHT = 1.8;
const AIRPORT_SURCHARGE = 3.5;
const BOOKING_FEE = 2.0;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bookmelbournetaxi.com" },
    { "@type": "ListItem", position: 2, name: "Taxi Fare Calculator", item: "https://bookmelbournetaxi.com/taxi-fare-calculator-melbourne" },
  ],
};

const TaxiFareCalculator = () => {
  const [distance, setDistance] = useState(15);
  const [isNight, setIsNight] = useState(false);
  const [fromAirport, setFromAirport] = useState(false);
  const [preBooked, setPreBooked] = useState(false);

  const rate = isNight ? RATE_NIGHT : RATE_DAY;
  const fare = FLAGFALL + distance * rate + (fromAirport ? AIRPORT_SURCHARGE : 0) + (preBooked ? BOOKING_FEE : 0);

  return (
    <SEOPageLayout
      title="Taxi Fare Calculator Melbourne"
      subtitle="Estimate your Melbourne taxi fare instantly. Enter your distance and conditions to get an accurate fare breakdown."
      metaTitle="Taxi Fare Calculator Melbourne — Estimate Your Cab Fare Instantly"
      metaDescription="Calculate Melbourne taxi fares online. Enter distance, time of day, and surcharges to get an instant estimate. Includes fare breakdown and common route prices."
      slug="taxi-fare-calculator-melbourne"
      bookLink={`https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`}
      jsonLd={[breadcrumbSchema]}
    >
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Calculator */}
            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-heading font-bold text-foreground">Fare Estimator</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Distance: {distance} km
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={80}
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground font-body mt-1">
                    <span>1 km</span>
                    <span>80 km</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "Night / Weekend", checked: isNight, set: setIsNight },
                    { label: "Airport pickup", checked: fromAirport, set: setFromAirport },
                    { label: "Pre-booked", checked: preBooked, set: setPreBooked },
                  ].map((opt) => (
                    <label key={opt.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={opt.checked}
                        onChange={(e) => opt.set(e.target.checked)}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm font-body text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <p className="text-sm font-body text-muted-foreground mb-1">Estimated Fare</p>
                  <p className="text-4xl font-heading font-bold text-foreground">${fare.toFixed(2)} <span className="text-lg text-muted-foreground">AUD</span></p>
                  <div className="mt-4 space-y-1 text-sm font-body text-muted-foreground">
                    <p>Flagfall: ${FLAGFALL.toFixed(2)}</p>
                    <p>{distance} km × ${rate.toFixed(2)}/km = ${(distance * rate).toFixed(2)}</p>
                    {fromAirport && <p>Airport surcharge: ${AIRPORT_SURCHARGE.toFixed(2)}</p>}
                    {preBooked && <p>Booking fee: ${BOOKING_FEE.toFixed(2)}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Common Routes */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Common Route Estimates</h2>
            <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
              <table className="w-full text-sm font-body">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 text-foreground font-semibold">Route</th>
                    <th className="text-right p-4 text-foreground font-semibold">Distance</th>
                    <th className="text-right p-4 text-foreground font-semibold">Est. Fare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { route: "Airport → CBD", km: 23, extra: AIRPORT_SURCHARGE },
                    { route: "CBD → St Kilda", km: 7, extra: 0 },
                    { route: "CBD → South Yarra", km: 5, extra: 0 },
                    { route: "CBD → Brighton", km: 12, extra: 0 },
                    { route: "CBD → Chadstone", km: 18, extra: 0 },
                    { route: "Airport → Geelong", km: 85, extra: AIRPORT_SURCHARGE },
                  ].map((r) => {
                    const est = FLAGFALL + r.km * RATE_DAY + r.extra;
                    return (
                      <tr key={r.route}>
                        <td className="p-4 text-muted-foreground">{r.route}</td>
                        <td className="p-4 text-right text-foreground">{r.km} km</td>
                        <td className="p-4 text-right text-foreground font-semibold">${est.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* How fares work */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">How Melbourne Taxi Fares Work</h2>
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              Melbourne taxi fares are regulated by the <strong>Victorian Government</strong> through the Commercial Passenger
              Vehicles Victoria (CPVV). All licensed taxis use calibrated meters that calculate fares based on a combination
              of flagfall, distance travelled, and waiting time.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `Flagfall (meter start): $${FLAGFALL.toFixed(2)}`,
                `Day rate (6am–10pm weekdays): $${RATE_DAY}/km`,
                `Night/weekend rate: $${RATE_NIGHT}/km`,
                `Airport pickup surcharge: $${AIRPORT_SURCHARGE.toFixed(2)}`,
                `Pre-booking fee: $${BOOKING_FEE.toFixed(2)}`,
                "Waiting time: ~$0.55 per minute when stationary or in traffic",
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
      <AffiliateCards
        title="Save on Melbourne Transfers & Tours"
        subtitle="Skip the meter — pre-book fixed-price transfers and top-rated Melbourne experiences. Free cancellation."
        offers={["airportTransfer", "greatOceanRoad", "phillipIsland", "yarraValley", "eureka", "river"]}
      />
    </SEOPageLayout>
  );
};

export default TaxiFareCalculator;
