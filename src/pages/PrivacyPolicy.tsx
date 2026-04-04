import SEOPageLayout from "@/components/SEOPageLayout";

const PrivacyPolicy = () => (
  <SEOPageLayout
    title="Privacy Policy"
    subtitle="How BookMelbourneTaxi.com collects, uses, and protects your personal information."
    metaTitle="Privacy Policy — BookMelbourneTaxi.com"
    metaDescription="Read BookMelbourneTaxi.com's privacy policy. Learn how we collect, use, and protect your personal data when you visit our Melbourne taxi guide website."
    slug="privacy-policy"
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <p className="font-body text-muted-foreground text-sm mb-8">Last updated: April 4, 2026</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Information We Collect</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide when using our website, including your name, email address, and any messages you send through our contact form. We also automatically collect certain technical information such as your IP address, browser type, device information, and pages visited through cookies and similar technologies.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. How We Use Your Information</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to: respond to your enquiries, improve our website content and user experience, analyse website traffic and usage patterns, send relevant updates if you opt in, and comply with legal obligations. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Cookies & Tracking</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Our website uses cookies to enhance your browsing experience. These include essential cookies for site functionality, analytics cookies (such as Google Analytics) to understand how visitors use our site, and advertising cookies from affiliate partners. You can manage cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Third-Party Services</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            We use third-party services including Google Analytics for website analytics, GetYourGuide for tour bookings (affiliate), and hosting providers. These services may collect data according to their own privacy policies. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Data Security</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Your Rights</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Under the Australian Privacy Act 1988 and GDPR (for EU visitors), you have the right to: access your personal data, request correction or deletion of your data, opt out of marketing communications, and lodge a complaint with the relevant data protection authority. Contact us at info@bookmelbournetaxi.com to exercise these rights.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Children's Privacy</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Changes to This Policy</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default PrivacyPolicy;
