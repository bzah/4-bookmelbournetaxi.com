import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Taxi Routes", href: "/#taxi-routes" },
  { label: "Attractions", href: "/#attractions" },
  { label: "Tours", href: "/#tours" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary-foreground">
            🇦🇺 <span className="text-gradient-gold">Book</span>
            <span className="text-primary-foreground">MelbourneTaxi</span>
            <span className="text-muted-foreground text-sm">.com</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-body font-medium text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-primary font-body"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
