import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const GYG = "0IQTGX8";
const BASE = "https://bookmelbournetaxi.com";

interface SEOPageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  bookLink?: string;
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  jsonLd?: object[];
}

const SEOPageLayout = ({ title, subtitle, children, bookLink, metaTitle, metaDescription, slug, jsonLd }: SEOPageLayoutProps) => (
  <>
    <SEOHead
      title={metaTitle || `${title} | BookMelbourneTaxi.com`}
      description={metaDescription || subtitle}
      canonical={slug ? `${BASE}/${slug}` : BASE}
      jsonLd={jsonLd}
    />
    <Navbar />
    <main>
      <section className="pt-24 pb-16 bg-navy-gradient">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">{title}</h1>
          <p className="text-lg md:text-xl font-body text-primary-foreground/75 max-w-2xl mx-auto mb-6">{subtitle}</p>
          {bookLink && (
            <a
              href={bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Book Now →
            </a>
          )}
        </div>
      </section>
      {children}
    </main>
    <Footer />
  </>
);

export { GYG, BASE };
export default SEOPageLayout;
