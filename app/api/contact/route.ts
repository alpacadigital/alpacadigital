import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Replace with your verified "from" domain email in Resend dashboard
const FROM_EMAIL = "contact@alpacadigital.co";

// TODO: Replace with the email address where you want to receive inquiries
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "your@email.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, business, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: `Alpaca Digital Contact Form <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName}${business ? ` — ${business}` : ""}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Business: ${business || "Not provided"}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <div style="background: #4f46e5; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Project Inquiry</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Via Alpaca Digital website</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
              </tr>
              ${business ? `<tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Business</td>
                <td style="padding: 8px 0; font-size: 14px;">${business}</td>
              </tr>` : ""}
            </table>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 6px; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 24px 0 0; font-size: 12px; color: #94a3b8;">Reply directly to this email to respond to ${firstName}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
