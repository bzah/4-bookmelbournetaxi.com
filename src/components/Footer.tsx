const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
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
            <li><a href="/taxi-melbourne-airport-to-cbd" className="hover:text-primary transition-colors">Airport to CBD Taxi</a></li>
            <li><a href="/maxi-taxi-melbourne" className="hover:text-primary transition-colors">Maxi Taxi Melbourne</a></li>
            <li><a href="/taxis-melbourne-victoria" className="hover:text-primary transition-colors">Taxis Melbourne Victoria</a></li>
            <li><a href="/melbourne-taxi-cbd" className="hover:text-primary transition-colors">Melbourne Taxi CBD</a></li>
            <li><a href="/how-to-book-taxi-melbourne" className="hover:text-primary transition-colors">How to Book a Taxi</a></li>
            <li><a href="/taxi-fare-calculator-melbourne" className="hover:text-primary transition-colors">Taxi Fare Calculator</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Company</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="/parents-info" className="hover:text-primary transition-colors">Parents Info</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Legal</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            <li><a href="/dmca" className="hover:text-primary transition-colors">DMCA</a></li>
            <li><a href="/legal-notice" className="hover:text-primary transition-colors">Legal Notice</a></li>
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
