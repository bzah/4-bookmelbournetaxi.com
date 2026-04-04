const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading font-bold text-lg text-primary-foreground mb-3">
            🇦🇺 BookMelbourneTaxi.com
          </h3>
          <p className="font-body text-sm text-primary-foreground/60">
            Your complete guide to taxis, transport, tours and attractions in Melbourne, Victoria, Australia.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            <li><a href="#taxi-routes" className="hover:text-primary transition-colors">Taxi Routes & Fares</a></li>
            <li><a href="#attractions" className="hover:text-primary transition-colors">Melbourne Attractions</a></li>
            <li><a href="#tours" className="hover:text-primary transition-colors">Book Tours</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Popular Searches</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            <li><a href="/taxi-melbourne-airport-to-cbd" className="hover:text-primary transition-colors">Melbourne Airport to CBD Taxi</a></li>
            <li><a href="/maxi-taxi-melbourne" className="hover:text-primary transition-colors">Maxi Taxi Melbourne</a></li>
            <li><a href="/taxis-melbourne-victoria" className="hover:text-primary transition-colors">Taxis Melbourne Victoria</a></li>
            <li><a href="/" className="hover:text-primary transition-colors">Taxi Melbourne</a></li>
            <li><a href="#taxi-routes" className="hover:text-primary transition-colors">Melbourne Taxi Fares</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} BookMelbourneTaxi.com — All rights reserved.
          This site contains affiliate links. We may earn a commission when you book through our partners.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
