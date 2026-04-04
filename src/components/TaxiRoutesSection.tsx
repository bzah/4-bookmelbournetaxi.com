import { Car, Plane, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const routes = [
  {
    icon: Plane,
    title: "Melbourne Airport to CBD",
    distance: "~23 km",
    time: "25–40 min",
    fare: "$55–$75 AUD",
    description:
      "The most popular taxi route in Melbourne. Taxis are available 24/7 at Melbourne Airport (Tullamarine). Fixed-fare options available.",
  },
  {
    icon: MapPin,
    title: "CBD to St Kilda",
    distance: "~7 km",
    time: "15–25 min",
    fare: "$20–$30 AUD",
    description:
      "Head to St Kilda Beach, Luna Park and the famous Acland Street cafés. A quick taxi ride from the city centre.",
  },
  {
    icon: MapPin,
    title: "CBD to South Melbourne Market",
    distance: "~3 km",
    time: "8–15 min",
    fare: "$12–$18 AUD",
    description:
      "Visit one of Melbourne's best markets for fresh produce, dim sims, and artisan goods. Short taxi ride from Flinders Street.",
  },
  {
    icon: Car,
    title: "CBD to Melbourne Cricket Ground",
    distance: "~2 km",
    time: "5–10 min",
    fare: "$10–$15 AUD",
    description:
      "Catch the footy, cricket, or a concert at the iconic MCG. Walking distance but a quick cab for convenience.",
  },
  {
    icon: Plane,
    title: "Melbourne Airport to Geelong",
    distance: "~85 km",
    time: "55–75 min",
    fare: "$120–$160 AUD",
    description:
      "Direct taxi transfer from Tullamarine to Geelong, gateway to the Great Ocean Road. Pre-booking recommended.",
  },
  {
    icon: MapPin,
    title: "CBD to Brighton Beach",
    distance: "~12 km",
    time: "20–30 min",
    fare: "$30–$45 AUD",
    description:
      "See the iconic colourful bathing boxes at Brighton Beach. A scenic taxi ride along the bay.",
  },
];

const TaxiRoutesSection = () => (
  <section id="taxi-routes" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Melbourne Taxi Routes & Fares
        </h2>
        <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
          Estimated taxi fares for popular routes in Melbourne, Victoria.
          Prices may vary based on traffic, time of day, and taxi company.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route) => (
          <div
            key={route.title}
            className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center">
                <route.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {route.title}
              </h3>
            </div>
            <div className="flex gap-4 mb-3 text-sm font-body text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {route.distance}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {route.time}
              </span>
            </div>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {route.fare}
            </p>
            <p className="text-sm font-body text-muted-foreground">
              {route.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TaxiRoutesSection;
