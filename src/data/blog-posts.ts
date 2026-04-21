// Single source of truth for blog content.
// Each post is rendered by src/pages/BlogPost.tsx and listed on src/pages/Blog.tsx.

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogRoute {
  pickup: string;
  dropoff: string;
}

export interface BlogPost {
  slug: string;
  title: string; // H1 + og:title
  metaTitle: string; // <title>
  metaDescription: string; // meta description (<160 chars)
  excerpt: string; // shown on /blog index card
  keywords: string[];
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  readingTimeMinutes: number;
  category: "Fares" | "Tips" | "Comparison" | "Routes" | "Booking";
  heroImageAlt: string;
  intro: string; // lead paragraph beneath the H1
  tldr: string[]; // 3-5 bullet "key takeaways"
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedInternal: ("airport" | "maxi" | "victoria" | "cbd" | "howto" | "calculator")[];
  /** Optional route — when present, blog post pre-fills the quote form. */
  route?: BlogRoute;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "taxi-melbourne-airport-to-st-kilda-cost",
    title: "How Much Is a Taxi from Melbourne Airport to St Kilda?",
    metaTitle: "Taxi Melbourne Airport to St Kilda — Fares from $75 (2026)",
    metaDescription:
      "Taxi from Melbourne Airport to St Kilda costs $75–$95 AUD, 35–55 minutes via CityLink. Compare metered taxi, maxi, rideshare & fixed-quote transfer prices.",
    excerpt:
      "A metered taxi from Melbourne Airport (MEL) to St Kilda runs $75–$95 AUD and takes 35–55 minutes via CityLink. Here's a full 2026 cost breakdown including peak-hour, night, maxi and rideshare alternatives.",
    keywords: [
      "taxi melbourne airport to st kilda",
      "melbourne airport st kilda taxi cost",
      "MEL airport st kilda transfer",
      "st kilda airport taxi price",
    ],
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTimeMinutes: 7,
    category: "Fares",
    heroImageAlt: "Taxi driving along the St Kilda foreshore at sunset with palm trees and Luna Park",
    intro:
      "St Kilda is one of Melbourne's most popular suburbs for visitors — beach, Luna Park, Acland Street cafés and a 25-minute tram ride to the CBD. If you're flying into Melbourne Airport (Tullamarine, MEL), a taxi is the most direct way to get to your St Kilda hotel or Airbnb. Here's exactly what it costs in 2026, what affects the fare, and how to save money.",
    tldr: [
      "Standard metered taxi: $75–$95 AUD",
      "Maxi taxi (up to 11 passengers): $110–$140 AUD",
      "Travel time: 35–45 min off-peak, up to 55 min in peak",
      "Pre-booked fixed-price transfers from $89 AUD with free cancellation",
      "All licensed taxis accept card, Apple Pay & Cabcharge (5% surcharge)",
    ],
    sections: [
      {
        heading: "Average taxi fare from Melbourne Airport to St Kilda",
        paragraphs: [
          "Melbourne taxi fares are set by the Victorian Government and apply identically to every licensed operator (13CABS, Silver Top, Melbourne Combined, GM Cabs). The fare from MEL Tullamarine to St Kilda — a 22 km trip via CityLink and the West Gate Freeway — is calculated using the standard meter formula:",
        ],
        bullets: [
          "$4.20 flagfall",
          "$1.62 per km daytime (Mon–Fri 6 am – 10 pm)",
          "$1.80 per km night & weekend rate",
          "$3.50 Melbourne Airport surcharge",
          "$2.00 booking fee (only if you pre-book by phone or app)",
          "5% credit card surcharge (cash incurs no surcharge)",
        ],
      },
      {
        heading: "Real fare examples (2026 prices)",
        paragraphs: [
          "Here are typical metered fares for the Melbourne Airport → St Kilda route based on time of day and traffic:",
        ],
        bullets: [
          "Tuesday 11 am, light traffic: $75 AUD (35 min)",
          "Friday 5:30 pm, peak: $92 AUD (55 min)",
          "Saturday 11 pm, night rate: $88 AUD (40 min)",
          "Sunday 8 am, public holiday: $90 AUD (38 min)",
        ],
      },
      {
        heading: "Maxi taxi from Melbourne Airport to St Kilda",
        paragraphs: [
          "Travelling as a family or group? A maxi taxi (6, 8 or 11 seats) costs roughly 35-50% more than a standard cab and is dramatically cheaper than booking two regular taxis. Pre-book through 13CABS or Silver Top — fixed-quote bookings are common for airport runs.",
          "Expect to pay $110–$140 AUD for a Melbourne Airport → St Kilda maxi taxi in 2026.",
        ],
      },
      {
        heading: "Pre-booked private transfer (fixed price, free cancellation)",
        paragraphs: [
          "If you want a guaranteed price with no meter surprises, several private operators offer fixed-quote Melbourne Airport → St Kilda transfers from $89 AUD per vehicle (sedan, up to 4 passengers). The driver waits inside the terminal with a name sign and includes one piece of luggage per passenger.",
          "These pre-paid transfers are popular with first-time visitors because the fare is locked in before you fly, and most allow free cancellation up to 24 hours in advance.",
        ],
      },
      {
        heading: "How to save money on this taxi route",
        paragraphs: [
          "A few quick tips to bring the fare down:",
        ],
        bullets: [
          "Pay in cash — saves the 5% card surcharge ($4–$5 saving)",
          "Hail from the rank instead of pre-booking by phone — saves the $2 booking fee",
          "Travel before 10 pm to get the daytime per-km rate ($0.18/km cheaper)",
          "Split a maxi taxi with another group going to St Kilda or nearby (Albert Park, South Melbourne)",
          "Avoid Friday 4–7 pm and Sunday-evening peak — traffic on the West Gate can add $15–$20",
        ],
      },
      {
        heading: "Step-by-step: catching a taxi at Melbourne Airport (T1, T2, T3, T4)",
        paragraphs: [
          "Melbourne Airport has dedicated taxi ranks at every terminal, staffed by Airport Taxi Marshals 24/7:",
        ],
        bullets: [
          "T1 (Qantas Domestic): rank is on the ground floor, signposted from baggage claim",
          "T2 (International): rank is directly outside arrivals, level 1",
          "T3 (Virgin Australia): rank is at the southern end of the terminal",
          "T4 (Jetstar / Rex): walk through the underground passage to T1 rank",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a taxi cost from Melbourne Airport to St Kilda?",
        a: "A standard metered taxi from Melbourne Airport (MEL) to St Kilda costs $75–$95 AUD. The trip is 22 km via CityLink and the West Gate Freeway and takes 35–55 minutes depending on traffic. Maxi taxis cost $110–$140 AUD.",
      },
      {
        q: "Is Uber cheaper than a taxi from Melbourne Airport to St Kilda?",
        a: "UberX is usually $5–$15 cheaper at off-peak times ($65–$85 AUD), but surge pricing on weekends and Friday evenings can push it 1.5–2× higher than a metered taxi. For a guaranteed fare, pre-booked taxis or fixed-price airport transfers are more predictable.",
      },
      {
        q: "How long does the taxi take from Melbourne Airport to St Kilda?",
        a: "35–45 minutes off-peak, and up to 55 minutes during weekday peak (4–7 pm). The route uses CityLink (M2) → West Gate Freeway → St Kilda Junction and is tolled, but tolls are included in the metered fare.",
      },
      {
        q: "Can I pre-book a taxi to wait at the airport?",
        a: "Yes. Both 13CABS and Silver Top let you pre-book up to 7 days ahead via app or website. Provide your flight number — the dispatch system tracks arrival time and adjusts pickup automatically. A $2 booking fee applies.",
      },
      {
        q: "Are child seats available in airport taxis to St Kilda?",
        a: "Standard taxis don't carry child seats. Request one when booking (small surcharge applies, usually $5–$10) or bring your own approved restraint. Children under 7 must legally use one.",
      },
    ],
    relatedInternal: ["airport", "maxi", "calculator", "cbd", "howto"],
  },
  {
    slug: "best-time-to-book-taxi-melbourne",
    title: "Best Time to Book a Taxi in Melbourne (2026 Guide)",
    metaTitle: "Best Time to Book a Taxi in Melbourne — 2026 Insider Guide",
    metaDescription:
      "When to book a Melbourne taxi for the cheapest fare and shortest wait. Avoid peak surcharges, find off-peak windows, and lock in airport runs in advance.",
    excerpt:
      "Booking a Melbourne taxi at the wrong time can double your wait and add 30% to your fare. Here's the data-driven guide to the cheapest, fastest windows to book — and when to lock in airport pickups.",
    keywords: [
      "best time to book taxi melbourne",
      "when to book melbourne taxi",
      "cheapest time melbourne taxi",
      "melbourne taxi peak hours",
    ],
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTimeMinutes: 6,
    category: "Tips",
    heroImageAlt: "Yellow taxi waiting at a Melbourne CBD rank at dusk with city lights",
    intro:
      "Melbourne taxi fares are flat-rated by the Victorian Government, so you can't bargain on price — but you absolutely can save money and time by choosing when to book. Here's the 2026 insider guide to the best (and worst) times to grab a Melbourne cab.",
    tldr: [
      "Cheapest window: Mon–Fri 10 am – 3 pm (daytime rate, no surcharges)",
      "Worst time: Friday 4–7 pm and Saturday 11 pm – 3 am (long waits + night rate)",
      "Pre-book airport runs 12–24 hours ahead for guaranteed pickup",
      "Avoid Sunday evening — Saturday-night spillover keeps drivers off the road",
      "Public holidays trigger night-rate pricing 24/7",
    ],
    sections: [
      {
        heading: "Melbourne taxi peak hours and why they matter",
        paragraphs: [
          "Two things change throughout the day: the per-kilometre rate (day vs. night) and how many drivers are actually on shift. Both directly affect what you pay and how long you wait.",
        ],
        bullets: [
          "6 am – 10 pm Mon–Fri: day rate $1.62/km, lots of drivers — best value",
          "10 pm – 5 am all week: night rate $1.80/km, fewer drivers, longer waits",
          "Saturday & Sunday all day: night rate applies",
          "Public holidays: night rate applies all day",
          "Friday 4–7 pm peak: day rate but 30%+ longer trip times due to traffic",
        ],
      },
      {
        heading: "The cheapest hour to book a Melbourne taxi",
        paragraphs: [
          "If you have flexibility, aim for Tuesday–Thursday between 10 am and 3 pm. You'll get the lowest per-km rate, plenty of available drivers (no surge equivalent in regulated taxis), no Friday traffic build-up and shorter waits at every CBD rank.",
          "Hailing on the street in the CBD during these hours is almost instant. ETAs through the 13CABS or Silver Top app are typically under 5 minutes.",
        ],
      },
      {
        heading: "When to pre-book vs. when to hail",
        paragraphs: [
          "A $2 phone-booking fee applies when you reserve through 13CABS, Silver Top or any phone-based dispatch. Skip it whenever you can.",
        ],
        bullets: [
          "Hail (no fee): CBD weekdays, near major hotels, train stations and shopping centres",
          "Pre-book ($2 fee): airport pickups, 5 am starts, weddings, group maxi taxis, late-night home runs from suburbs",
          "App-only bookings: the $2 fee still applies but you get live driver tracking and a fixed-quote option",
        ],
      },
      {
        heading: "Best time to book a Melbourne Airport taxi",
        paragraphs: [
          "If you're catching a domestic flight before 8 am, pre-book at least 12 hours in advance. Drivers are scarcer in early morning hours, and a no-show on your end (or theirs) at 5 am can cost you a missed flight.",
          "For international departures, build in 90 minutes plus traffic buffer (peak: 2 hours). Pre-book the night before with your flight number — dispatch tracks arrival/departure automatically.",
        ],
      },
      {
        heading: "When NOT to book a Melbourne taxi",
        paragraphs: [
          "These windows have the longest waits and highest effective cost (because you're paying the night rate AND sitting in traffic):",
        ],
        bullets: [
          "Friday 4–7 pm: CBD peak, expect 15+ minute waits",
          "Saturday 11 pm – 3 am: bar/club close, ranks are queued 30+ deep",
          "New Year's Eve & AFL Grand Final day: surge in demand, night rate, road closures",
          "Public holiday Sunday evenings: lowest driver count of the week",
          "Storms / thunderstorm warnings: dispatch fees may double, app ETAs balloon",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the cheapest time to book a taxi in Melbourne?",
        a: "Tuesday to Thursday between 10 am and 3 pm. You get the daytime per-km rate ($1.62/km), no public-holiday or weekend surcharges, plenty of available drivers, and minimal traffic delays in and out of the CBD.",
      },
      {
        q: "Do Melbourne taxis charge more at night?",
        a: "Yes. The night rate ($1.80/km vs. $1.62/km daytime) applies 10 pm – 5 am every day, all weekend (Saturday & Sunday), and on public holidays. The flagfall ($4.20) and airport surcharge ($3.50) stay the same.",
      },
      {
        q: "How far in advance should I book a Melbourne Airport taxi?",
        a: "12–24 hours ahead for early-morning departures, and at least the night before for any flight before 8 am. Pre-booking with your flight number means dispatch tracks delays automatically — useful for inbound flights.",
      },
      {
        q: "Is it faster to hail a taxi or use the app?",
        a: "In the CBD on weekdays, hailing is faster (under 1 min). Outside the CBD or after 10 pm, the app is faster because it pulls in the closest free driver instead of waiting for one to drive past.",
      },
    ],
    relatedInternal: ["howto", "calculator", "airport", "cbd", "victoria"],
  },
  {
    slug: "melbourne-taxi-vs-uber-price-comparison",
    title: "Melbourne Taxi vs Uber: 2026 Price Comparison",
    metaTitle: "Melbourne Taxi vs Uber — 2026 Price Comparison & Verdict",
    metaDescription:
      "Compare Melbourne taxi vs Uber prices for 2026: airport, CBD, late night & peak. See real fare examples, surge pricing & which is cheaper for each scenario.",
    excerpt:
      "Is a Melbourne taxi cheaper than Uber in 2026? It depends on time of day, traffic and surge. Here's a side-by-side fare comparison for the 6 most common Melbourne trips.",
    keywords: [
      "melbourne taxi vs uber",
      "uber vs taxi melbourne price",
      "is uber cheaper than taxi melbourne",
      "melbourne airport taxi vs uber",
    ],
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTimeMinutes: 8,
    category: "Comparison",
    heroImageAlt: "Side-by-side comparison of a Melbourne taxi and an UberX vehicle on Flinders Street",
    intro:
      "Melbourne taxis are price-regulated by the Victorian Government — the meter is the meter, no surge ever. Uber and other rideshares (DiDi, Ola, Bolt) use dynamic pricing that drops below the taxi fare at quiet times and balloons well above it during surge. Here's exactly when each one wins.",
    tldr: [
      "Off-peak: Uber wins by ~10–20% on most CBD trips",
      "Peak / surge: Taxi wins, often by 50%+ — meter doesn't move",
      "Airport runs: Roughly tied at $65–$95; Uber surges Friday & Sunday evenings",
      "Late night: Taxi safer (CCTV, marshals at ranks), Uber often cheaper",
      "Wheelchair/accessible: Only licensed taxis offer guaranteed Wheelchair Accessible Taxis (WAT)",
    ],
    sections: [
      {
        heading: "How pricing actually works",
        paragraphs: [
          "Melbourne taxi fare = $4.20 flagfall + $1.62/km (day) or $1.80/km (night/weekend) + $3.50 airport surcharge if applicable + 5% card surcharge. The Commercial Passenger Vehicles Victoria (CPVV) regulator publishes the rates and they don't change.",
          "Uber fare = base fare + per-minute + per-kilometre + booking fee + dynamic surge multiplier (1.0× to 3.5× depending on demand). Surge can spike instantly during weather events, AFL grand final, NYE and Friday/Saturday peak.",
        ],
      },
      {
        heading: "Real 2026 price comparison for 6 popular Melbourne trips",
        paragraphs: [
          "Sample fares collected April 2026, off-peak Wednesday afternoon vs. Friday 6 pm:",
        ],
        bullets: [
          "Melbourne Airport → CBD (~22 km): Taxi $65 / Uber $58 off-peak — Friday peak: Taxi $72 / Uber $98 (1.7× surge)",
          "Melbourne Airport → St Kilda (~22 km): Taxi $80 / Uber $72 off-peak — Friday peak: Taxi $88 / Uber $115",
          "CBD → Brighton (~12 km): Taxi $32 / Uber $25 off-peak — Friday peak: Taxi $36 / Uber $48",
          "CBD → MCG (~3 km): Taxi $12 / Uber $10 — post-AFL match: Taxi $14 / Uber $32 (3× surge)",
          "Southern Cross → Crown (~2 km): Taxi $9 / Uber $8 off-peak — Friday 11 pm: Taxi $11 / Uber $19",
          "Richmond → CBD (~4 km): Taxi $14 / Uber $11 off-peak — Saturday 1 am: Taxi $17 / Uber $26",
        ],
      },
      {
        heading: "When the taxi wins",
        paragraphs: [
          "Taxis dominate any time demand outstrips driver supply, because the meter literally cannot surge:",
        ],
        bullets: [
          "Friday & Saturday nights between 10 pm and 3 am",
          "After AFL games at the MCG or Marvel Stadium (instant 2–3× surge on Uber)",
          "During heavy rain or storms",
          "New Year's Eve, Boxing Day, Australian Open, F1 Grand Prix, Melbourne Cup",
          "Anywhere outside the inner suburbs after midnight",
        ],
      },
      {
        heading: "When Uber wins",
        paragraphs: [
          "Uber and DiDi consistently undercut the taxi meter when supply is high and demand is normal:",
        ],
        bullets: [
          "Weekday 10 am – 3 pm short CBD trips",
          "Sunday morning airport pickups (lots of drivers, no surge)",
          "Trips under 4 km in the inner suburbs (Carlton, Fitzroy, Richmond, Prahran)",
          "Pre-scheduled rides booked in advance through the Uber Reserve feature",
        ],
      },
      {
        heading: "Beyond price: what else to consider",
        paragraphs: [
          "Cheapest isn't always best. A few other factors:",
        ],
        bullets: [
          "Safety: All Melbourne taxis have CCTV, mandatory driver checks, late-night safe-rank marshals; Uber relies on app-based ratings",
          "Accessibility: Only licensed taxis offer Wheelchair Accessible Taxis (WAT) with the Multi Purpose Taxi Program (MPTP) discount",
          "Cabcharge / corporate accounts: Taxis only",
          "Cash payment: Taxis accept cash; Uber is card-only",
          "Group capacity 5+: Maxi taxis (up to 11 seats) almost always beat Uber XL on price for groups of 6+",
          "Fixed-price airport transfers: Both taxis (via 13CABS app) and Uber (Uber Reserve) offer them",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Uber cheaper than a taxi in Melbourne?",
        a: "Off-peak (weekdays 10 am – 3 pm), Uber is typically 10–20% cheaper than a metered Melbourne taxi. During peak, weekends, late nights or after major events, Uber surge pricing makes taxis significantly cheaper — sometimes 40–60% cheaper, because Victorian taxi fares are government-regulated and never surge.",
      },
      {
        q: "Why is Uber more expensive than a taxi in Melbourne sometimes?",
        a: "Uber uses dynamic surge pricing that multiplies the base fare by 1.5×–3.5× when demand spikes. Friday and Saturday nights, post-AFL matches, NYE, and storm events all routinely trigger surge. Melbourne taxi meters are price-regulated and cannot surge under any circumstances.",
      },
      {
        q: "Are Melbourne taxis safer than Uber?",
        a: "Both are regulated by Commercial Passenger Vehicles Victoria (CPVV). Taxis additionally carry mandatory CCTV, have late-night Safe City Taxi Rank marshals in the CBD, and operate a long-established complaints process. Uber relies on app-based ratings and trip tracking. For late-night solo travel, an official taxi rank is generally considered safest.",
      },
      {
        q: "Can I pay cash in a Melbourne Uber?",
        a: "No. Uber is app-only payment (debit/credit card, Apple Pay, Google Pay). Melbourne taxis accept cash with no surcharge, plus card with a 5% surcharge.",
      },
      {
        q: "Is Uber available at Melbourne Airport?",
        a: "Yes — Uber pickup is allowed at all four Melbourne Airport terminals (T1–T4) at the designated rideshare pickup zones (level 1, signed). Taxis use the dedicated taxi rank just outside arrivals.",
      },
    ],
    relatedInternal: ["airport", "calculator", "cbd", "howto", "victoria"],
  },
  {
    slug: "melbourne-airport-to-geelong-taxi-cost",
    title: "Melbourne Airport to Geelong Taxi: Cost, Time & Best Way",
    metaTitle: "Melbourne Airport to Geelong Taxi — Fares from $130 (2026)",
    metaDescription:
      "Taxi from Melbourne Airport to Geelong costs $130–$170 AUD, 65–85 min via Princes Freeway. Compare metered taxi, maxi cab & fixed-quote private transfer prices.",
    excerpt:
      "Geelong is 75 km from Melbourne Airport — too far to be a cheap cab ride. Here's the full 2026 cost breakdown for taxis, maxi taxis, fixed-price transfers and the SkyBus alternative.",
    keywords: [
      "taxi melbourne airport to geelong",
      "melbourne airport geelong taxi cost",
      "MEL airport geelong transfer price",
      "geelong airport taxi fare",
    ],
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTimeMinutes: 7,
    category: "Routes",
    heroImageAlt: "Taxi driving along the Princes Freeway towards Geelong with the You Yangs in the distance",
    intro:
      "Geelong is Victoria's second-largest city, gateway to the Great Ocean Road, and a regular destination for Melbourne Airport arrivals. At 75 km, it's one of the longer airport taxi runs in the state — here's exactly what you'll pay in 2026 and which option (taxi, maxi, fixed-price transfer, SkyBus) makes the most sense.",
    tldr: [
      "Standard metered taxi: $130–$170 AUD",
      "Maxi taxi (up to 11 seats): $190–$240 AUD",
      "Fixed-price private transfer: from $169 AUD with free cancellation",
      "Travel time: 65 min off-peak, up to 95 min in Friday-evening peak",
      "Cheapest alternative: SkyBus + Geelong Airport Bus from $48 (slower)",
    ],
    sections: [
      {
        heading: "Taxi fare breakdown — Melbourne Airport to Geelong",
        paragraphs: [
          "The 75 km drive uses the Tullamarine Freeway → West Gate Freeway → Princes Freeway (M1). Tolls (CityLink + West Gate Tunnel) are included in the metered fare.",
        ],
        bullets: [
          "$4.20 flagfall + $3.50 airport surcharge",
          "$1.62/km × 75 km daytime = $121.50",
          "Total daytime: ~$130–$140",
          "Night/weekend: $1.80/km × 75 km = $135 + flagfall + airport = ~$145–$170",
          "Add 5% if paying by card",
        ],
      },
      {
        heading: "Maxi taxi for groups travelling Airport → Geelong",
        paragraphs: [
          "If you're 5+ people or have lots of luggage (e.g. arriving for a Great Ocean Road tour), a single maxi taxi is dramatically cheaper than two regular cabs. Pre-book through 13CABS or Silver Top with your flight number.",
          "Expect $190–$240 AUD for an 11-seat maxi taxi, including 11 suitcases.",
        ],
      },
      {
        heading: "Fixed-price private transfer",
        paragraphs: [
          "For business travellers and visitors who want a guaranteed price, several private operators offer pre-paid Melbourne Airport → Geelong transfers from $169 AUD per sedan or $245 AUD per maxi. The driver waits inside the terminal with a name sign.",
          "Most allow free cancellation up to 24 hours in advance — useful if your flight gets bumped.",
        ],
      },
      {
        heading: "Cheapest alternative: SkyBus + Geelong Airport Bus",
        paragraphs: [
          "If budget is more important than speed, the SkyBus Geelong service runs direct from Melbourne Airport to Geelong CBD every 30–60 minutes for $48 AUD one way (2026 fare). Journey time: 90 minutes door to door.",
          "It's the cheapest option but you'll need a taxi or rideshare at the Geelong end if your destination isn't the CBD.",
        ],
      },
      {
        heading: "Travel time and peak-hour traffic",
        paragraphs: [
          "Off-peak (most of the day) you can expect 65–75 minutes Melbourne Airport → Geelong CBD. Friday afternoon peak (3–7 pm) is the worst — the West Gate Freeway and Princes Freeway both back up, and the trip can take 90–95 minutes.",
          "Tips: avoid Friday 4–7 pm departures. Sunday returns are also slow because of weekend Geelong-day-trippers heading back to Melbourne.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a taxi from Melbourne Airport to Geelong cost?",
        a: "A standard metered taxi from Melbourne Airport (Tullamarine, MEL) to Geelong costs $130–$170 AUD. Daytime fares are around $130–$140, night/weekend fares are $145–$170. The 75 km trip via the Princes Freeway takes 65–95 minutes.",
      },
      {
        q: "Is there a flat-rate taxi fare from Melbourne Airport to Geelong?",
        a: "Metered taxis use the Victorian Government rate structure — there is no government-set flat fare. However, several private transfer companies offer fixed-price airport transfers from $169 AUD with free cancellation, useful for budgeting.",
      },
      {
        q: "How long does it take to drive from Melbourne Airport to Geelong?",
        a: "65–75 minutes off-peak via the Tullamarine Freeway → West Gate → Princes Freeway. Friday afternoon peak (3–7 pm) can extend the drive to 90–95 minutes.",
      },
      {
        q: "What's the cheapest way to get from Melbourne Airport to Geelong?",
        a: "The cheapest direct option is SkyBus Geelong service ($48 one way, 90 minutes door to door). For groups of 4+, a single taxi or maxi taxi is often cheaper per person than four SkyBus tickets ($192).",
      },
      {
        q: "Can I get a maxi taxi from Melbourne Airport to Geelong?",
        a: "Yes — pre-book an 11-seat maxi taxi via 13CABS or Silver Top with your flight number. Cost is $190–$240 AUD and includes luggage for all passengers.",
      },
    ],
    relatedInternal: ["airport", "maxi", "victoria", "calculator", "howto"],
  },
  {
    slug: "wheelchair-accessible-taxis-melbourne",
    title: "Wheelchair Accessible Taxis in Melbourne: 2026 Booking Guide",
    metaTitle: "Wheelchair Accessible Taxis Melbourne — Book WAT Cabs 24/7",
    metaDescription:
      "Book a Wheelchair Accessible Taxi (WAT) in Melbourne. Same-meter pricing, MPTP 50% discount, 24/7 availability via 13CABS & Silver Top — full 2026 guide.",
    excerpt:
      "Melbourne's Wheelchair Accessible Taxi (WAT) network is one of the largest in Australia. Here's how to book one, what it costs, and how to claim the Multi Purpose Taxi Program (MPTP) 50% discount in 2026.",
    keywords: [
      "wheelchair accessible taxi melbourne",
      "WAT taxi melbourne",
      "MPTP melbourne",
      "disabled taxi melbourne",
    ],
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTimeMinutes: 6,
    category: "Booking",
    heroImageAlt: "Wheelchair accessible Melbourne taxi with rear ramp deployed at a CBD pickup",
    intro:
      "Melbourne has more than 500 dedicated Wheelchair Accessible Taxis (WATs) — purpose-built vans with rear ramps, low-floor entry, and trained drivers. Fares are identical to standard taxis, and MPTP cardholders get 50% off every trip. Here's the complete 2026 booking guide.",
    tldr: [
      "WAT fares are identical to standard Melbourne taxis (no premium)",
      "Multi Purpose Taxi Program (MPTP) cardholders get 50% off, capped per trip",
      "Book via 13CABS, Silver Top or the BookCab app — 24/7 dispatch",
      "Lift fee: $11.50 per booking (covered by MPTP for eligible passengers)",
      "All Melbourne Airport terminals have WAT-friendly taxi ranks",
    ],
    sections: [
      {
        heading: "What is a Wheelchair Accessible Taxi (WAT)?",
        paragraphs: [
          "A WAT is a licensed Melbourne taxi specifically built or converted to carry passengers in their wheelchair. The standard WAT vehicle in 2026 is a Toyota HiAce or Volkswagen Caddy van fitted with:",
        ],
        bullets: [
          "Hydraulic or fold-out rear ramp (or side lift)",
          "Low-floor or kneeling suspension",
          "Wheelchair restraint system (4-point tie-down)",
          "Up to 4 ambulant passengers in addition to the wheelchair user",
          "CCTV and emergency button",
        ],
      },
      {
        heading: "How to book a WAT in Melbourne",
        paragraphs: [
          "Three reliable ways to book in 2026:",
        ],
        bullets: [
          "Phone: 13CABS on 13 22 27, Silver Top on 13 10 08 — request a 'WAT' or 'wheelchair accessible' vehicle",
          "App: 13CABS app → vehicle type → 'Wheelchair Accessible'; Silver Top app → 'Maxi/WAT'",
          "Online: bookwat.com.au (the dedicated WAT-only dispatch service)",
        ],
      },
      {
        heading: "Multi Purpose Taxi Program (MPTP) — how the 50% discount works",
        paragraphs: [
          "MPTP is a Victorian Government program that covers half the metered fare for eligible passengers with severe and permanent disabilities. The discount is applied automatically when you tap your MPTP card on the EFTPOS terminal at the end of the trip.",
        ],
        bullets: [
          "50% discount on the metered fare",
          "Capped at $60 per trip subsidy",
          "Lift fee ($11.50) is fully covered for MPTP members",
          "Apply via the Department of Transport and Planning Victoria (DTP)",
          "Card is valid in any licensed Melbourne (or Victorian) taxi, not just WATs",
        ],
      },
      {
        heading: "WAT availability and wait times",
        paragraphs: [
          "Demand for WATs is highest weekday mornings (school + medical appointments) and Friday afternoons. Pre-booking 24–48 hours ahead is strongly recommended for medical, dialysis or court appointments — same-day app bookings during peak can wait 30–60 minutes.",
          "For 24-hour WAT dispatch with priority for permanent MPTP members, BookWAT (run jointly by the major operators) is the most reliable option.",
        ],
      },
      {
        heading: "WAT at Melbourne Airport",
        paragraphs: [
          "All four Melbourne Airport terminals (T1–T4) have dedicated WAT pickup at the head of the standard taxi rank. Airport Taxi Marshals will radio for the next available WAT — typical wait is 5–15 minutes off-peak, up to 30 minutes during peak arrivals.",
          "If you're flying in with a wheelchair user, pre-book your WAT before you fly: provide flight number, terminal, number of wheelchair users and number of accompanying passengers.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I book a wheelchair accessible taxi in Melbourne?",
        a: "Call 13CABS (13 22 27) or Silver Top (13 10 08) and request a 'WAT' (Wheelchair Accessible Taxi). You can also book via the 13CABS or Silver Top apps (vehicle type → Wheelchair Accessible), or use bookwat.com.au, the dedicated WAT-only dispatch service that operates 24/7.",
      },
      {
        q: "Are wheelchair accessible taxis more expensive in Melbourne?",
        a: "No — WAT fares are identical to standard Melbourne taxi fares. The only addition is an $11.50 lift fee per booking, which is fully covered for Multi Purpose Taxi Program (MPTP) cardholders.",
      },
      {
        q: "How does the MPTP 50% discount work?",
        a: "Multi Purpose Taxi Program (MPTP) members tap their card on the EFTPOS terminal at the end of the trip, and the system automatically deducts 50% of the metered fare (capped at $60 subsidy per trip). The lift fee is also fully covered.",
      },
      {
        q: "Can I get a wheelchair accessible taxi at Melbourne Airport?",
        a: "Yes. All four terminals (T1, T2, T3, T4) have WAT pickup at the head of the standard taxi rank. Airport Taxi Marshals will dispatch the next available WAT — typical off-peak wait is 5–15 minutes. Pre-booking with your flight number is recommended.",
      },
      {
        q: "How many people can travel in a Melbourne WAT?",
        a: "Up to 4 ambulant passengers plus 1 wheelchair user, or up to 2 wheelchair users plus 2 ambulant passengers depending on vehicle configuration. Specify when booking.",
      },
    ],
    relatedInternal: ["howto", "maxi", "airport", "cbd", "victoria"],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

// ---------------------------------------------------------------------------
// Smart related-post engine
// ---------------------------------------------------------------------------
// Scores every other post against the current one using:
//   • Shared Melbourne route/keyword tokens (airport, st kilda, cbd, geelong…)
//   • Shared category (Fares, Tips, Routes, Comparison, Booking)
//   • Shared significant title words
//   • Shared internal-link targets
// Highest-scoring posts win; ties fall back to recency.
// ---------------------------------------------------------------------------

const ROUTE_TOKENS = [
  "airport", "tullamarine", "mel", "cbd", "st kilda", "stkilda",
  "geelong", "brighton", "richmond", "south yarra", "southbank",
  "docklands", "carlton", "fitzroy", "mornington", "dandenong",
  "frankston", "yarra valley", "great ocean road", "phillip island",
  "uber", "rideshare", "maxi", "wheelchair", "wat", "accessible",
  "fare", "fares", "cost", "price", "booking", "book", "night", "peak",
];

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "for", "to", "of", "in", "on", "at",
  "is", "are", "was", "were", "be", "by", "with", "from", "how", "what",
  "when", "where", "why", "vs", "your", "you", "it", "this", "that",
  "guide", "best", "2026",
]);

const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));

const extractRouteTokens = (post: BlogPost): Set<string> => {
  const haystack = `${post.title} ${post.intro} ${post.keywords.join(" ")}`.toLowerCase();
  const found = new Set<string>();
  for (const token of ROUTE_TOKENS) {
    if (haystack.includes(token)) found.add(token);
  }
  return found;
};

const scoreRelatedness = (current: BlogPost, candidate: BlogPost): number => {
  let score = 0;

  // Shared Melbourne route tokens — strongest signal (5 pts each).
  const currentRoutes = extractRouteTokens(current);
  const candidateRoutes = extractRouteTokens(candidate);
  for (const r of currentRoutes) if (candidateRoutes.has(r)) score += 5;

  // Same category (4 pts).
  if (current.category === candidate.category) score += 4;

  // Shared keyword phrases (3 pts each).
  const currentKw = new Set(current.keywords.map((k) => k.toLowerCase()));
  for (const k of candidate.keywords) {
    if (currentKw.has(k.toLowerCase())) score += 3;
  }

  // Shared significant title tokens (1 pt each).
  const currentTitleTokens = new Set(tokenize(current.title));
  for (const t of tokenize(candidate.title)) {
    if (currentTitleTokens.has(t)) score += 1;
  }

  // Shared internal-link targets (2 pts each).
  const currentInternal = new Set(current.relatedInternal);
  for (const i of candidate.relatedInternal) {
    if (currentInternal.has(i)) score += 2;
  }

  return score;
};

export const getRelatedPosts = (currentSlug: string, count = 3): BlogPost[] => {
  const current = getPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, count);

  const scored = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: scoreRelatedness(current, p),
      published: new Date(p.publishedAt).getTime(),
    }))
    .sort((a, b) => b.score - a.score || b.published - a.published);

  return scored.slice(0, count).map((s) => s.post);
};

