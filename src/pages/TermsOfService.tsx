import SEOPageLayout from "@/components/SEOPageLayout";

const TermsOfService = () => (
  <SEOPageLayout
    title="Terms of Service"
    subtitle="Terms and conditions governing your use of BookMelbourneTaxi.com."
    metaTitle="Terms of Service — BookMelbourneTaxi.com"
    metaDescription="Read the terms of service for BookMelbourneTaxi.com. Understand your rights and responsibilities when using our Melbourne taxi guide and booking resources."
    slug="terms-of-service"
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-sm mb-8">Last updated: April 4, 2026</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            By accessing and using BookMelbourneTaxi.com ("the Website"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Nature of Service</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            BookMelbourneTaxi.com is an informational website providing guides, fare estimates, and booking links for taxi services and tours in Melbourne, Victoria. We are <strong>not a taxi company</strong> and do not operate any vehicles. We provide information and links to third-party service providers. All bookings are made directly with third-party providers and are subject to their terms and conditions.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Accuracy of Information</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            We strive to provide accurate and up-to-date information about taxi fares, routes, and services in Melbourne. However, fares and services may change without notice. Fare estimates on this website are approximations only and actual fares may differ. We are not liable for any discrepancies between estimated and actual fares.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Affiliate Links</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Our website contains affiliate links to third-party services such as GetYourGuide. When you click these links and make a purchase, we may earn a commission at no additional cost to you. This does not influence our recommendations. We only promote services we believe will benefit our visitors.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Intellectual Property</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            All content on this website, including text, graphics, logos, and images, is the property of BookMelbourneTaxi.com or its content suppliers and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Limitation of Liability</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            To the maximum extent permitted by law, BookMelbourneTaxi.com shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Website or reliance on any information provided herein. This includes, but is not limited to, loss arising from incorrect fare estimates, missed bookings, or third-party service failures.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. User Conduct</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            You agree not to: use the Website for any unlawful purpose, attempt to gain unauthorised access to any part of the Website, scrape, copy, or redistribute content without permission, or interfere with the proper functioning of the Website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Governing Law</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            These Terms of Service are governed by the laws of the State of Victoria, Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Victoria.
          </p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Changes to Terms</h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website constitutes acceptance of the revised terms.
          </p>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default TermsOfService;
