import heroImg from "@/assets/melbourne-hero.jpg";

const GYG_PARTNER = "0IQTGX8";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Melbourne skyline at sunset with Flinders Street Station and Yarra River"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
        Taxi Melbourne
      </h1>
      <p className="text-xl md:text-2xl font-heading text-primary-foreground/90 mb-3">
        Your Complete Guide to Getting Around Melbourne
      </p>
      <p className="text-base md:text-lg font-body text-primary-foreground/75 mb-8 max-w-2xl mx-auto">
        Book taxis, discover airport transfers, explore top attractions and find the best tours
        in Melbourne, Victoria. From Melbourne Airport to CBD and beyond.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#taxi-routes"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Taxi Routes & Fares
        </a>
        <a
          href={`https://www.getyourguide.com/melbourne-l169/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/50 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
        >
          Book Tours
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
