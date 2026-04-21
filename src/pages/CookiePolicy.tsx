import SEOPageLayout from "@/components/SEOPageLayout";
import {
  sitewideLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo-schemas";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home" },
  { name: "Cookie Policy", slug: "cookie-policy" },
]);

const CookiePolicy = () => (
  <SEOPageLayout
    title="Cookie Policy"
    subtitle="How BookMelbourneTaxi.com uses cookies and similar technologies."
    metaTitle="Cookie Policy — BookMelbourneTaxi.com"
    metaDescription="Learn how BookMelbourneTaxi.com uses cookies to improve your experience. Manage your cookie preferences and understand what data is collected."
    slug="cookie-policy"
    jsonLd={[sitewideLocalBusinessSchema, breadcrumbSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-sm mb-8">Last updated: April 4, 2026</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">What Are Cookies?</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their sites are used.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Types of Cookies We Use</h2>
          <div className="space-y-4 mb-6">
            {[
              { type: "Essential Cookies", desc: "Required for the website to function properly. These cannot be disabled. They handle basic functions like page navigation and access to secure areas." },
              { type: "Analytics Cookies", desc: "We use Google Analytics to understand how visitors interact with our website. These cookies collect information about pages visited, time spent on pages, and traffic sources. All data is anonymised." },
              { type: "Advertising/Affiliate Cookies", desc: "Our affiliate partners (such as GetYourGuide) may place cookies to track referrals. These cookies help us earn commissions when you book services through our links, at no extra cost to you." },
              { type: "Preference Cookies", desc: "These cookies remember your settings and preferences (such as language or region) to provide a more personalised experience on return visits." },
            ].map((c) => (
              <div key={c.type} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-heading font-semibold text-foreground mb-2">{c.type}</h3>
                <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Managing Cookies</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete cookies, or alert you when a cookie is being placed. Please note that disabling cookies may affect the functionality of some parts of our website. For more information on managing cookies, visit <strong>aboutcookies.org</strong>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Third-Party Cookies</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Some cookies on our site are placed by third-party services including Google Analytics, Google AdSense, and GetYourGuide. These third parties have their own privacy and cookie policies which we encourage you to review.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Updates to This Policy</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with a revised date.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default CookiePolicy;
