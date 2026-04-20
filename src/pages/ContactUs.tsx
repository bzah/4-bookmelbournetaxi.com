import { useState } from "react";
import { z } from "zod";
import SEOPageLayout from "@/components/SEOPageLayout";
import { Mail, MapPin, Clock, MessageSquare, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check your input",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: parsed.data,
      });
      if (error) throw error;
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you within 48 hours.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Failed to send",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 disabled:opacity-60"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
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
};

export default ContactUs;
