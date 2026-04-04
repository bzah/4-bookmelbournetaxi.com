import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in webpack/vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MELBOURNE_CENTER: [number, number] = [-37.8136, 144.9631];

const locations: { name: string; pos: [number, number]; type: string; desc: string }[] = [
  {
    name: "Melbourne Airport (Tullamarine)",
    pos: [-37.6733, 144.8433],
    type: "🛫 Airport",
    desc: "Main international airport. Taxis available 24/7 at terminal ranks. Fare to CBD: $55–$75.",
  },
  {
    name: "Flinders Street Station",
    pos: [-37.8183, 144.9671],
    type: "🚉 Train Station",
    desc: "Melbourne's busiest station and iconic landmark. Major taxi rank outside on Flinders Street.",
  },
  {
    name: "Southern Cross Station",
    pos: [-37.8184, 144.9525],
    type: "🚉 Train Station",
    desc: "Regional and interstate train hub. Taxi rank on Spencer Street. SkyBus airport shuttle terminal.",
  },
  {
    name: "Federation Square",
    pos: [-37.8180, 144.9691],
    type: "📍 Landmark",
    desc: "Cultural hub with galleries, restaurants and events. Taxis available on Swanston Street.",
  },
  {
    name: "Melbourne Cricket Ground (MCG)",
    pos: [-37.8200, 144.9834],
    type: "🏟️ Stadium",
    desc: "Home of Australian football and cricket. Taxi pickup on Brunton Avenue after events.",
  },
  {
    name: "Crown Melbourne",
    pos: [-37.8228, 144.9587],
    type: "🎰 Entertainment",
    desc: "Casino, hotels and dining complex on Southbank. Dedicated taxi rank at main entrance.",
  },
  {
    name: "Queen Victoria Market",
    pos: [-37.8076, 144.9568],
    type: "🛍️ Market",
    desc: "Melbourne's famous open-air market. Taxi pickup on Queen Street and Victoria Street.",
  },
  {
    name: "St Kilda Beach",
    pos: [-37.8679, 144.9743],
    type: "🏖️ Beach",
    desc: "Popular beachside suburb. Taxi rank on the Esplanade. Fare from CBD: $20–$30.",
  },
  {
    name: "Brighton Beach",
    pos: [-37.9167, 144.9856],
    type: "🏖️ Beach",
    desc: "Famous colourful bathing boxes. Taxis on Esplanade. Fare from CBD: $30–$45.",
  },
  {
    name: "Melbourne Convention Centre",
    pos: [-37.8255, 144.9534],
    type: "🏢 Convention",
    desc: "Major events and exhibitions venue on South Wharf. Taxi rank at main entrance.",
  },
];

const MelbourneMapSection = () => (
  <section id="map" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Melbourne Taxi Pickup Locations
        </h2>
        <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
          Find major taxi ranks, landmarks and transport hubs across Melbourne. Tap a marker for details.
        </p>
      </div>
      <div className="rounded-lg overflow-hidden border border-border shadow-lg" style={{ height: 500 }}>
        <MapContainer
          center={MELBOURNE_CENTER}
          zoom={12}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc) => (
            <Marker key={loc.name} position={loc.pos}>
              <Popup>
                <div style={{ minWidth: 200 }}>
                  <strong style={{ fontSize: 14 }}>{loc.type} {loc.name}</strong>
                  <p style={{ fontSize: 12, marginTop: 4, color: "#555" }}>{loc.desc}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Location list for SEO */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {locations.slice(0, 6).map((loc) => (
          <div key={loc.name} className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm font-heading font-semibold text-foreground">{loc.type} {loc.name}</p>
            <p className="text-xs font-body text-muted-foreground mt-1">{loc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MelbourneMapSection;
