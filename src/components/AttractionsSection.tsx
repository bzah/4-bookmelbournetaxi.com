import greatOceanRoad from "@/assets/great-ocean-road.jpg";
import flindersStation from "@/assets/flinders-station.jpg";
import brightonBeach from "@/assets/brighton-beach.jpg";

const GYG = "0IQTGX8";

const attractions = [
  {
    image: greatOceanRoad,
    title: "Great Ocean Road",
    description:
      "One of the world's most scenic coastal drives. See the Twelve Apostles, Loch Ard Gorge, and lush rainforest. Day tours depart daily from Melbourne CBD.",
    link: `https://www.getyourguide.com/melbourne-l169/great-ocean-road-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
    cta: "Book Day Tour",
  },
  {
    image: flindersStation,
    title: "Flinders Street Station & CBD",
    description:
      "Melbourne's iconic yellow railway station is the heart of the city. Explore Federation Square, Hosier Lane street art, and world-class dining in the laneways.",
    link: `https://www.getyourguide.com/melbourne-l169/walking-tour-t1/?partner_id=${GYG}&utm_medium=online_publisher`,
    cta: "Book Walking Tour",
  },
  {
    image: brightonBeach,
    title: "Brighton Beach Bathing Boxes",
    description:
      "The colourful bathing boxes at Brighton Beach are one of Melbourne's most photographed landmarks. A short taxi ride from the CBD along the bay.",
    link: `https://www.getyourguide.com/melbourne-l169/?partner_id=${GYG}&utm_medium=online_publisher`,
    cta: "Explore Activities",
  },
];

const AttractionsSection = () => (
  <section id="attractions" className="py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Top Melbourne Attractions
        </h2>
        <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
          Discover why Melbourne is Australia's cultural capital. From coastal wonders to vibrant street art,
          there's something for every traveller.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {attractions.map((a) => (
          <div
            key={a.title}
            className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow group"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm font-body text-muted-foreground mb-4">{a.description}</p>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {a.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AttractionsSection;
