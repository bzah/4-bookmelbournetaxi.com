import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = (await req.json()) as ContactPayload;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (name.length > 100 || message.length > 2000 || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid input" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const password = Deno.env.get("GMAIL_APP_PASSWORD");
    if (!password) {
      console.error("Missing GMAIL_APP_PASSWORD");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: "soaf.baz@gmail.com",
          password,
        },
      },
    });

    const safe = (s: string) =>
      s.replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
      );

    const html = `
      <h2>New contact message — BookMelbourneTaxi.com</h2>
      <p><strong>Name:</strong> ${safe(name)}</p>
      <p><strong>Email:</strong> ${safe(email)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${safe(message)}</p>
    `;

    await client.send({
      from: "BookMelbourneTaxi <soaf.baz@gmail.com>",
      to: "contact@bookmelbournetaxi.com",
      replyTo: email,
      subject: `New contact: ${name}`,
      content: `From: ${name} <${email}>\n\n${message}`,
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message ?? "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
