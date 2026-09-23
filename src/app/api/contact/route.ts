// Sends contact form submissions to your inbox via Resend (https://resend.com).
// Set RESEND_API_KEY in Vercel → Project → Settings → Environment Variables.
// CONTACT_FROM_EMAIL must use a domain you've verified in Resend.

const TO = process.env.CONTACT_TO_EMAIL ?? "hello@alpacadigital.co";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Alpaca Digital Website <contact@alpacadigital.co>";

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill in the hidden field; pretend it worked and drop it.
  if (str(body.company_url)) return Response.json({ ok: true });

  const lead = {
    name: str(body.name, 120),
    business: str(body.business, 160),
    phone: str(body.phone, 40),
    email: str(body.email, 200),
    website: str(body.website, 300),
    interests: Array.isArray(body.interests) ? body.interests.map((i) => str(i, 60)).filter(Boolean) : [],
    message: str(body.message, 5000),
  };

  if (!lead.name || !lead.business || !lead.phone || !/^\S+@\S+\.\S+$/.test(lead.email)) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; lead was not delivered:", lead);
    return Response.json({ error: "Email is not configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Business", lead.business],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Website", lead.website || "—"],
    ["Interested in", lead.interests.join(", ") || "—"],
    ["Message", lead.message || "—"],
  ];

  const html = `<h2>New free-audit request</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escape(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: lead.email,
      subject: `New lead: ${lead.business} (${lead.name})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return Response.json({ error: "Could not send message" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
