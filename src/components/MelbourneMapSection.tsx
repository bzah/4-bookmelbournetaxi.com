import { lazy, Suspense, Component, type ReactNode } from "react";
import { Loader2, MapPin } from "lucide-react";

const LazyMap = lazy(() => import("./MelbourneMapInner"));

class MapErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8" style={{ height: 400 }}>
          <MapPin className="w-10 h-10 text-primary mb-3" />
          <p className="font-heading font-semibold text-foreground mb-1">Interactive Map</p>
          <p className="text-sm font-body text-muted-foreground text-center">The map could not be loaded. Please refresh the page to try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

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
      <MapErrorBoundary>
        <Suspense
          fallback={
            <div className="flex items-center justify-center rounded-lg border border-border bg-card" style={{ height: 500 }}>
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          }
        >
          <LazyMap />
        </Suspense>
      </MapErrorBoundary>
    </div>
  </section>
);

export default MelbourneMapSection;
