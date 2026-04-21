import SEOPageLayout from "@/components/SEOPageLayout";
import { Shield, Eye, Heart, CheckCircle } from "lucide-react";
import RelatedPages from "@/components/RelatedPages";
import {
  sitewideLocalBusinessSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo-schemas";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home" },
  { name: "Parents Info", slug: "parents-info" },
]);

const ParentsInfo = () => (
  <SEOPageLayout
    title="Parents Info"
    subtitle="Information for parents about how BookMelbourneTaxi.com protects children's safety and privacy online."
    metaTitle="Parents Info — Child Safety & Privacy | BookMelbourneTaxi.com"
    metaDescription="Learn how BookMelbourneTaxi.com ensures child safety online. No data collection from minors, safe content, and COPPA-compliant practices."
    slug="parents-info"
    jsonLd={[sitewideLocalBusinessSchema, breadcrumbSchema]}
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: Shield, label: "COPPA Compliant", desc: "We comply with the Children's Online Privacy Protection Act" },
            { icon: Eye, label: "No Tracking of Minors", desc: "We do not knowingly collect data from children under 13" },
            { icon: Heart, label: "Family-Safe Content", desc: "All content is appropriate for visitors of all ages" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">A Safe Website for All Ages</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              BookMelbourneTaxi.com is a travel information website that provides guides to taxi services, tours, and attractions in Melbourne. Our content is factual, educational, and suitable for visitors of all ages. We do not display any content that could be harmful to children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Children's Privacy Protection</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              We take children's privacy seriously and comply with the Children's Online Privacy Protection Act (COPPA) and equivalent Australian regulations:
            </p>
            <ul className="space-y-3">
              {[
                "We do not knowingly collect personal information from children under the age of 13",
                "Our contact forms and interactive features are intended for adult users only",
                "We do not use targeted advertising directed at children",
                "If we discover that a child has provided personal information, we will delete it immediately",
                "We encourage parents to supervise their children's internet activity",
                "Parents or guardians may contact us to request deletion of any data inadvertently collected from a minor",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-body text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Travelling with Children in Melbourne</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Melbourne is a fantastic family-friendly destination. When taking taxis with children, remember that child restraints are legally required in Victoria for children under 7 years old. Most taxi companies can arrange a vehicle with a child seat if you request one when booking. For family groups, consider a <a href="/maxi-taxi-melbourne" className="text-primary hover:underline">maxi taxi</a> for extra space and comfort.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              If you have any concerns about your child's privacy or safety on our website, please contact us at <strong>info@bookmelbournetaxi.com</strong>. We take all reports seriously and will respond within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
    <RelatedPages links={["maxi", "airport", "calculator", "howto"]} />
  </SEOPageLayout>
);

export default ParentsInfo;
