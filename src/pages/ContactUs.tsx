import SEOPageLayout from "@/components/SEOPageLayout";
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const ContactUs = () => (
  <SEOPageLayout
    title="Contact Us"
    subtitle="Have a question or suggestion? Get in touch with the BookMelbourneTaxi.com team."
    metaTitle="Contact Us — BookMelbourneTaxi.com"
    metaDescription="Contact BookMelbourneTaxi.com for questions about Melbourne taxi fares, routes, airport transfers, or partnership enquiries."
    slug="contact"
  >
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: Mail, label: "Email", value: "info@bookmelbournetaxi.com" },
            { icon: MapPin, label: "Location", value: "Melbourne, VIC, Australia" },
            { icon: Clock, label: "Response Time", value: "Within 48 hours" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-body text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-lg font-heading font-bold text-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              We'd love to hear from you! Whether you have a question about Melbourne taxi fares, want to suggest a correction, or are interested in partnering with us, feel free to reach out.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-heading font-bold text-foreground">Send Us a Message</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Name</label>
                <input type="text" className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Email</label>
                <input type="email" className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                <textarea rows={5} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help?" />
              </div>
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Partnership & Advertising</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Interested in advertising on BookMelbourneTaxi.com or partnering with us? We work with taxi companies, tour operators, and travel businesses across Melbourne and Victoria. Contact us at <strong>info@bookmelbournetaxi.com</strong> for rates and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  </SEOPageLayout>
);

export default ContactUs;
