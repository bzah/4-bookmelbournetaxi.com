import SEOPageLayout from "@/components/SEOPageLayout";
import {
  sitewideLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo-schemas";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home" },
  { name: "Legal Notice", slug: "legal-notice" },
]);

const LegalNotice = () => (
  <SEOPageLayout
    title="Legal Notice"
    subtitle="Legal information and disclaimers for BookMelbourneTaxi.com."
    metaTitle="Legal Notice — BookMelbourneTaxi.com"
    metaDescription="Legal notice and disclaimers for BookMelbourneTaxi.com. Information about our website operator, liability, and applicable laws."
    slug="legal-notice"
    jsonLd={[sitewideLocalBusinessSchema, breadcrumbSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-sm mb-8">Last updated: April 4, 2026</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Website Operator</h2>
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="font-body text-muted-foreground"><strong className="text-foreground">Website:</strong> BookMelbourneTaxi.com</p>
            <p className="font-body text-muted-foreground mt-2"><strong className="text-foreground">Location:</strong> Melbourne, Victoria, Australia</p>
            <p className="font-body text-muted-foreground mt-2"><strong className="text-foreground">Email:</strong> legal@bookmelbournetaxi.com</p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Disclaimer</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            BookMelbourneTaxi.com is an independent informational website. We are <strong>not a taxi operator, transport company, or booking agent</strong>. All information on this website, including taxi fares, routes, and travel times, is provided as general guidance only. Actual fares, availability, and services may vary. We do not guarantee the accuracy, completeness, or reliability of any information on this website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Limitation of Liability</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Under no circumstances shall BookMelbourneTaxi.com, its owners, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use this website, including reliance on any information obtained through the website. This limitation applies to damages arising from loss of data, loss of revenue, or any other losses, whether in contract, tort, or otherwise.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">External Links</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            This website contains links to external third-party websites. We have no control over the content, privacy policies, or practices of these websites and accept no responsibility for them. The inclusion of any link does not imply endorsement of the linked website. Use of any external website linked from BookMelbourneTaxi.com is at the user's own risk.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Applicable Law</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            This legal notice and all matters relating to this website are governed by the laws of the State of Victoria, Australia. Any legal proceedings arising out of or relating to this website shall be brought exclusively in the courts of Victoria, Australia.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Copyright</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            All content on BookMelbourneTaxi.com, including text, images, design, and code, is protected by copyright under Australian and international law. Reproduction, distribution, or modification without prior written consent is prohibited. For permissions, contact legal@bookmelbournetaxi.com.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default LegalNotice;
