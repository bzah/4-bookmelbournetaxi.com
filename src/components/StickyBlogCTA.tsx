import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Calculator, Phone, X } from "lucide-react";
import { affiliateOffers } from "@/components/AffiliateCards";
import { Button } from "@/components/ui/button";

/**
 * Sticky "Book a taxi" bar that appears while scrolling through blog posts.
 * Shows after scrolling past the hero (600px) and hides when near bottom.
 * Auto-hides if user clicks X (dismissed for session).
 */

const StickyBlogCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show after scrolling past hero section (~600px)
      const shouldShow = scrollY > 600;

      // Hide when within 800px of bottom to not overlap footer CTAs
      const nearBottom = scrollY + windowHeight > docHeight - 800;
      setIsAtBottom(nearBottom);

      setIsVisible(shouldShow && !nearBottom);
    };

    // Check session dismissal
    const dismissed = sessionStorage.getItem("sticky-cta-dismissed");
    if (dismissed) {
      setIsDismissed(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem("sticky-cta-dismissed", "true");
  };

  if (!isVisible || isDismissed) return null;

  const bookLink = affiliateOffers.airportTransfer.link;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg transition-transform duration-300 ${
        isAtBottom ? "translate-y-full" : "translate-y-0"
      }`}
      aria-label="Book or quote a Melbourne taxi"
    >
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between gap-4 py-3 px-4 sm:px-6">
          {/* Left: Label (hidden on very small screens) */}
          <div className="hidden sm:block shrink-0">
            <span className="text-sm font-body font-medium text-muted-foreground">
              Ready to ride?
            </span>
          </div>

          {/* Center: CTA Buttons */}
          <div className="flex-1 flex items-center justify-center sm:justify-start gap-3">
            <a
              href={bookLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book a taxi</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <Link
              to="/taxi-fare-calculator-melbourne"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              <Calculator className="w-4 h-4" />
              <span className="sm:hidden">Quote</span>
              <span className="hidden sm:inline">Get a quote</span>
            </Link>
          </div>

          {/* Right: Dismiss button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="shrink-0 h-9 w-9 text-muted-foreground hover:text-foreground"
            aria-label="Dismiss booking bar"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBlogCTA;
