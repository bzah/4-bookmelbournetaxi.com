import SEOPageLayout from "@/components/SEOPageLayout";

const DMCA = () => (
  <SEOPageLayout
    title="DMCA Policy"
    subtitle="Digital Millennium Copyright Act notice and takedown procedures for BookMelbourneTaxi.com."
    metaTitle="DMCA Policy — BookMelbourneTaxi.com"
    metaDescription="BookMelbourneTaxi.com DMCA policy. Learn how to report copyright infringement and request content removal."
    slug="dmca"
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-sm mb-8">Last updated: April 4, 2026</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Copyright Infringement Notice</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            BookMelbourneTaxi.com respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond promptly to claims of copyright infringement committed using our website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Filing a DMCA Notice</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            If you believe that content on our website infringes upon your copyright, please send a written notification to our designated copyright agent with the following information:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "A physical or electronic signature of the copyright owner or authorised agent",
              "Identification of the copyrighted work claimed to have been infringed",
              "Identification of the material that is claimed to be infringing, with sufficient detail to allow us to locate it on the website",
              "Your contact information (address, telephone number, and email address)",
              "A statement that you have a good faith belief that the disputed use is not authorised by the copyright owner",
              "A statement, under penalty of perjury, that the information in the notification is accurate and that you are the copyright owner or authorised to act on behalf of the owner",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="font-body text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Contact for DMCA Notices</h2>
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="font-body text-muted-foreground">
              <strong className="text-foreground">Email:</strong> dmca@bookmelbournetaxi.com
            </p>
            <p className="font-body text-muted-foreground mt-2">
              <strong className="text-foreground">Subject Line:</strong> DMCA Takedown Request
            </p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Counter-Notification</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            If you believe that your content was wrongly removed due to a DMCA notice, you may file a counter-notification. The counter-notification must include your contact information, identification of the removed material, a statement under penalty of perjury that you believe the material was removed by mistake, and your consent to the jurisdiction of the relevant court.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Repeat Infringers</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            BookMelbourneTaxi.com will terminate access for users who are found to be repeat infringers of copyrighted material, in appropriate circumstances.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default DMCA;
