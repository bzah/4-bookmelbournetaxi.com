import { useState } from "react";
import { z } from "zod";
import { ExternalLink, MapPin, Users, Calendar } from "lucide-react";
import { affiliateOffers } from "@/components/AffiliateCards";
import { useToast } from "@/hooks/use-toast";

/**
 * Short "Get a quote" form.
 * Pre-fills pickup + drop-off from blog-post route data.
 * Validates with zod, then deep-links to the GetYourGuide affiliate
 * page (partner_id=0IQTGX8) with the route encoded in the URL.
 *
 * No data is stored or sent server-side — purely a client-side
 * conversion helper that keeps users on a single click-to-book flow.
 */

interface QuoteFormProps {
  pickup?: string;
  dropoff?: string;
  heading?: string;
}

const quoteSchema = z.object({
  pickup: z
    .string()
    .trim()
    .nonempty({ message: "Pickup location is required" })
    .max(120, { message: "Pickup must be under 120 characters" }),
  dropoff: z
    .string()
    .trim()
    .nonempty({ message: "Drop-off location is required" })
    .max(120, { message: "Drop-off must be under 120 characters" }),
  passengers: z.coerce
    .number()
    .int()
    .min(1, { message: "At least 1 passenger" })
    .max(11, { message: "Maximum 11 passengers (book a maxi)" }),
  date: z
    .string()
    .trim()
    .max(20, { message: "Invalid date" })
    .optional()
    .or(z.literal("")),
});

type QuoteErrors = Partial<Record<keyof z.infer<typeof quoteSchema>, string>>;

const QuoteForm = ({
  pickup: defaultPickup = "",
  dropoff: defaultDropoff = "",
  heading = "Get a quote for this route",
}: QuoteFormProps) => {
  const { toast } = useToast();
  const [pickup, setPickup] = useState(defaultPickup);
  const [dropoff, setDropoff] = useState(defaultDropoff);
  const [passengers, setPassengers] = useState(2);
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<QuoteErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = quoteSchema.safeParse({ pickup, dropoff, passengers, date });

    if (!result.success) {
      const fieldErrors: QuoteErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof QuoteErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please check your details",
        description: Object.values(fieldErrors)[0] ?? "Some fields are invalid.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});

    // Build affiliate deep-link with encoded route
    const base = affiliateOffers.airportTransfer.link;
    const params = new URLSearchParams({
      q: `${result.data.pickup} to ${result.data.dropoff}`,
      pax: String(result.data.passengers),
      ...(result.data.date ? { date: result.data.date } : {}),
    });
    const url = `${base}&${params.toString()}`;

    toast({
      title: "Opening quote page",
      description: `${result.data.pickup} → ${result.data.dropoff}`,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside
      className="my-10 rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm"
      aria-labelledby="quote-form-heading"
    >
      <h3
        id="quote-form-heading"
        className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1.5"
      >
        {heading}
      </h3>
      <p className="font-body text-sm text-muted-foreground mb-5">
        Pre-filled from this article. Free cancellation, fixed price.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="qf-pickup"
              className="block text-xs font-body font-semibold text-foreground uppercase tracking-wide mb-1.5"
            >
              <MapPin className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-primary" />
              Pickup
            </label>
            <input
              id="qf-pickup"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              maxLength={120}
              placeholder="e.g. Melbourne Airport"
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-input text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-invalid={!!errors.pickup}
              aria-describedby={errors.pickup ? "qf-pickup-err" : undefined}
            />
            {errors.pickup && (
              <p id="qf-pickup-err" className="text-xs text-destructive font-body mt-1">
                {errors.pickup}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="qf-dropoff"
              className="block text-xs font-body font-semibold text-foreground uppercase tracking-wide mb-1.5"
            >
              <MapPin className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-primary" />
              Drop-off
            </label>
            <input
              id="qf-dropoff"
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              maxLength={120}
              placeholder="e.g. St Kilda"
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-input text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-invalid={!!errors.dropoff}
              aria-describedby={errors.dropoff ? "qf-dropoff-err" : undefined}
            />
            {errors.dropoff && (
              <p id="qf-dropoff-err" className="text-xs text-destructive font-body mt-1">
                {errors.dropoff}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="qf-pax"
              className="block text-xs font-body font-semibold text-foreground uppercase tracking-wide mb-1.5"
            >
              <Users className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-primary" />
              Passengers
            </label>
            <input
              id="qf-pax"
              type="number"
              min={1}
              max={11}
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-input text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-invalid={!!errors.passengers}
              aria-describedby={errors.passengers ? "qf-pax-err" : undefined}
            />
            {errors.passengers && (
              <p id="qf-pax-err" className="text-xs text-destructive font-body mt-1">
                {errors.passengers}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="qf-date"
              className="block text-xs font-body font-semibold text-foreground uppercase tracking-wide mb-1.5"
            >
              <Calendar className="w-3.5 h-3.5 inline -mt-0.5 mr-1 text-primary" />
              Date <span className="font-normal text-muted-foreground normal-case">(optional)</span>
            </label>
            <input
              id="qf-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-input text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
        >
          Get my quote
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </button>
        <p className="text-xs font-body text-muted-foreground text-center">
          Opens GetYourGuide affiliate booking page in a new tab.
        </p>
      </form>
    </aside>
  );
};

export default QuoteForm;
