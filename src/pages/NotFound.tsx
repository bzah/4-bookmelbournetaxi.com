import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found — BookMelbourneTaxi.com"
        description="The page you're looking for doesn't exist. Browse our Melbourne taxi guides, fare calculator, and tours."
        canonical="https://bookmelbournetaxi.com"
      />
      <Navbar />
      <main className="pt-16">
        <section className="min-h-[70vh] flex items-center justify-center bg-background">
          <div className="container max-w-2xl text-center py-20">
            <p className="text-8xl font-heading font-bold text-primary mb-4">404</p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Sorry, the page <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code> doesn't exist. It may have been moved or removed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
              >
                <Home className="w-4 h-4" />
                Go to Homepage
              </a>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body font-semibold hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>

            <div className="text-left bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-primary" />
                <h2 className="font-heading font-semibold text-foreground">Popular Pages</h2>
              </div>
              <ul className="space-y-2 font-body text-sm">
                {[
                  { href: "/taxi-melbourne-airport-to-cbd", label: "Melbourne Airport to CBD Taxi" },
                  { href: "/taxi-fare-calculator-melbourne", label: "Taxi Fare Calculator" },
                  { href: "/maxi-taxi-melbourne", label: "Maxi Taxi Melbourne" },
                  { href: "/how-to-book-taxi-melbourne", label: "How to Book a Taxi" },
                  { href: "/taxis-melbourne-victoria", label: "Taxis Melbourne Victoria" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-primary hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
