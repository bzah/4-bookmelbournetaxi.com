import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

const LazyMap = lazy(() => import("./MelbourneMapInner"));

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
      <Suspense
        fallback={
          <div className="flex items-center justify-center rounded-lg border border-border bg-card" style={{ height: 500 }}>
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        }
      >
        <LazyMap />
      </Suspense>
    </div>
  </section>
);

export default MelbourneMapSection;
