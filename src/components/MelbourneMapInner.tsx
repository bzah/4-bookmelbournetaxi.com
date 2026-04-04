import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MELBOURNE_CENTER: [number, number] = [-37.8136, 144.9631];

const locations = [
  { name: "Melbourne Airport (Tullamarine)", pos: [-37.6733, 144.8433] as [number, number], type: "🛫 Airport", desc: "Main international airport. Taxis available 24/7 at terminal ranks. Fare to CBD: $55–$75." },
  { name: "Flinders Street Station", pos: [-37.8183, 144.9671] as [number, number], type: "🚉 Train Station", desc: "Melbourne's busiest station. Major taxi rank outside on Flinders Street." },
  { name: "Southern Cross Station", pos: [-37.8184, 144.9525] as [number, number], type: "🚉 Train Station", desc: "Regional and interstate train hub. Taxi rank on Spencer Street." },
  { name: "Federation Square", pos: [-37.8180, 144.9691] as [number, number], type: "📍 Landmark", desc: "Cultural hub. Taxis available on Swanston Street." },
  { name: "Melbourne Cricket Ground (MCG)", pos: [-37.8200, 144.9834] as [number, number], type: "🏟️ Stadium", desc: "Home of Australian football and cricket. Taxi pickup on Brunton Avenue." },
  { name: "Crown Melbourne", pos: [-37.8228, 144.9587] as [number, number], type: "🎰 Entertainment", desc: "Casino and dining complex. Dedicated taxi rank at main entrance." },
  { name: "Queen Victoria Market", pos: [-37.8076, 144.9568] as [number, number], type: "🛍️ Market", desc: "Famous open-air market. Taxi pickup on Queen Street." },
  { name: "St Kilda Beach", pos: [-37.8679, 144.9743] as [number, number], type: "🏖️ Beach", desc: "Popular beachside suburb. Taxi rank on the Esplanade. Fare from CBD: $20–$30." },
  { name: "Brighton Beach", pos: [-37.9167, 144.9856] as [number, number], type: "🏖️ Beach", desc: "Famous bathing boxes. Fare from CBD: $30–$45." },
  { name: "Melbourne Convention Centre", pos: [-37.8255, 144.9534] as [number, number], type: "🏢 Convention", desc: "Major events venue on South Wharf. Taxi rank at main entrance." },
];

const MelbourneMapInner = () => (
  <>
    <div className="rounded-lg overflow-hidden border border-border shadow-lg" style={{ height: 500 }}>
      <MapContainer center={MELBOURNE_CENTER} zoom={12} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {locations.slice(0, 6).map((loc) => (
        <div key={loc.name} className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm font-heading font-semibold text-foreground">{loc.type} {loc.name}</p>
          <p className="text-xs font-body text-muted-foreground mt-1">{loc.desc}</p>
        </div>
      ))}
    </div>
  </>
);

export default MelbourneMapInner;
