import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much is a taxi from Melbourne Airport to CBD?",
    a: "A taxi from Melbourne Airport (Tullamarine) to Melbourne CBD typically costs between $55 and $75 AUD, depending on traffic and time of day. The journey takes approximately 25–40 minutes. Some taxi companies offer fixed-fare airport transfers that you can pre-book for peace of mind.",
  },
  {
    q: "How do I book a taxi in Melbourne?",
    a: "You can book a Melbourne taxi by calling 13CABS (13 2227) or Silver Top Taxis (131 008), using their apps, or hailing one on the street. Rideshare services like Uber and Ola are also widely available. At Melbourne Airport, taxis are available at designated taxi ranks outside the terminals.",
  },
  {
    q: "What is the taxi fare structure in Melbourne?",
    a: "Melbourne taxis charge a flagfall (starting fee) of approximately $4.20 AUD, plus a per-kilometre rate of around $1.62 during the day. Rates increase at night (after 10pm), on weekends, and during public holidays. There's also a booking fee of about $2.00 if you pre-book by phone or app.",
  },
  {
    q: "Are taxis available 24/7 in Melbourne?",
    a: "Yes, Melbourne taxis operate 24 hours a day, 7 days a week. They are readily available in the CBD, at taxi ranks near major hotels, shopping centres and train stations, and at Melbourne Airport. Late-night and early-morning availability is best with pre-booking.",
  },
  {
    q: "How much is a taxi from Melbourne Airport to Geelong?",
    a: "A taxi from Melbourne Airport to Geelong costs approximately $120–$160 AUD. The journey takes about 55–75 minutes depending on traffic. Pre-booking is recommended for this longer route. Alternatively, SkyBus operates an airport shuttle to Geelong's city centre.",
  },
  {
    q: "What are the best things to do in Melbourne?",
    a: "Melbourne is famous for its vibrant laneways and street art, world-class dining, the Great Ocean Road, Phillip Island penguins, Yarra Valley wineries, Brighton Beach bathing boxes, Melbourne Cricket Ground (MCG), Queen Victoria Market, and the Royal Botanic Gardens. Day trips to the Dandenong Ranges and Mornington Peninsula are also highly recommended.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Melbourne Taxi FAQ
        </h2>
        <p className="text-lg font-body text-muted-foreground">
          Common questions about taxis, fares, and getting around Melbourne.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
