import { ExternalLink } from "lucide-react";

const GYG = "0IQTGX8";

const tours = [
  {
    title: "Great Ocean Road & 12 Apostles Day Trip",
    duration: "Full day",
    rating: "4.7",
    link: `https://www.getyourguide.com/melbourne-l169/great-ocean-road-12-apostles-day-trip-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
  },
  {
    title: "Phillip Island Penguin Parade Tour",
    duration: "Half day",
    rating: "4.6",
    link: `https://www.getyourguide.com/melbourne-l169/phillip-island-penguin-parade-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
  },
  {
    title: "Yarra Valley Wine & Food Tour",
    duration: "Full day",
    rating: "4.8",
    link: `https://www.getyourguide.com/melbourne-l169/yarra-valley-wine-tour-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
  },
  {
    title: "Melbourne City Laneways & Street Art Tour",
    duration: "3 hours",
    rating: "4.9",
    link: `https://www.getyourguide.com/melbourne-l169/street-art-walking-tour-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
  },
  {
    title: "Puffing Billy Steam Train & Dandenong Ranges",
    duration: "Full day",
    rating: "4.5",
    link: `https://www.getyourguide.com/melbourne-l169/puffing-billy-dandenong-ranges-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
  },
  {
    title: "Melbourne Airport Taxi Transfer (Private)",
    duration: "40 min",
    rating: "4.7",
    link: `https://www.getyourguide.com/melbourne-l169/airport-transfer-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
  },
];

const ToursSection = () => (
  <section id="tours" className="py-20 bg-navy-gradient">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Popular Melbourne Tours & Activities
        </h2>
        <p className="text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto">
          Book the best experiences in Melbourne through GetYourGuide. Free cancellation on most tours.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((t) => (
          <a
            key={t.title}
            href={t.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-primary-foreground/15 transition-colors group"
          >
            <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
              {t.title}
            </h3>
            <div className="flex items-center gap-4 text-sm font-body text-primary-foreground/60 mb-3">
              <span>⏱ {t.duration}</span>
              <span>⭐ {t.rating}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-primary font-body font-semibold text-sm">
              Book Now <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href={`https://www.getyourguide.com/melbourne-l169/?partner_id=${GYG}&utm_medium=online_publisher`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          View All Melbourne Activities <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default ToursSection;
