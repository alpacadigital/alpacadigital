import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// CONTACT_FROM_EMAIL must use a domain verified in Resend.
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Alpaca Digital Website <contact@alpacadigital.co>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@alpacadigital.co";

const FIELDS = { name: 100, business: 150, email: 200, phone: 40, website: 200, message: 3000 } as const;
type Field = keyof typeof FIELDS;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "That request didn't come through right. Please try again." }, { status: 400 });
  }

  const f = Object.fromEntries(
    (Object.keys(FIELDS) as Field[]).map((k) => [k, String(body[k] ?? "").trim().slice(0, FIELDS[k])]),
  ) as Record<Field, string>;

  if (!f.name || !f.business || !f.email) {
    return NextResponse.json({ error: "Please add your name, business name, and email." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    return NextResponse.json({ error: "That email address doesn't look right. Mind checking it?" }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", f.name],
    ["Business", f.business],
    ["Email", f.email],
    ["Phone", f.phone || "Not provided"],
    ["Website", f.website || "Not provided"],
  ];

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO_EMAIL,
      replyTo: f.email,
      subject: `Free audit request: ${f.business}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nWhat they want more of:\n${f.message || "Not provided"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #13201b;">
          <div style="background: #3b2ef0; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Free audit request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">${escape(f.business)}</p>
          </div>
          <div style="background: #f4f6f2; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #c9d2c6; border-top: none;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
              ${rows
                .map(
                  ([k, v]) => `<tr>
                <td style="padding: 8px 0; color: #45544d; font-size: 13px; width: 120px;">${k}</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${escape(v)}</td>
              </tr>`,
                )
                .join("")}
            </table>
            <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #c9d2c6;">
              <p style="margin: 0 0 6px; color: #45544d; font-size: 13px; font-weight: 600;">What they want more of</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escape(f.message || "Not provided")}</p>
            </div>
            <p style="margin: 24px 0 0; font-size: 12px; color: #66756e;">Reply to this email to answer ${escape(f.name)} directly.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Your request didn't send on my end. Please email me at hello@alpacadigital.co instead." },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something broke on my end. Please email me at hello@alpacadigital.co instead." },
      { status: 500 },
    );
  }
}
