import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

type ContactRequest = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  reason?: string;
  timeline?: string;
  phone?: string;
  budget?: string;
  message?: string;
};

const reasonLabels: Record<string, string> = {
  training: "Training or enablement",
  speaking: "Keynote or speaking",
  consulting: "Advisory or consultancy",
  partnership: "Partnership or campaign"
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatMultiline(input: string) {
  return escapeHtml(input).replace(/\n/g, "<br />");
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const { firstName, lastName, email, company, reason, timeline, phone, budget, message } = payload;

  if (!firstName || !lastName || !email || !reason || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const trimmedMessage = message.trim();

  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.SENDGRID_TO_EMAIL ?? fromEmail;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("SendGrid configuration missing.", {
      hasApiKey: Boolean(apiKey),
      hasFrom: Boolean(fromEmail),
      hasTo: Boolean(toEmail)
    });

    return NextResponse.json(
      { error: "Mail service is not configured. Please email info@tycholoke.com instead." },
      { status: 500 }
    );
  }

  sendgrid.setApiKey(apiKey);

  const readableReason = reasonLabels[reason ?? ""] ?? reason;
  const fields = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    readableReason ? `Reason: ${readableReason}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    budget ? `Budget: ${budget}` : null
  ].filter(Boolean) as string[];

  const plainBody = `${fields.join("\n")}\n\nMessage:\n${trimmedMessage}`;
  const htmlFields = fields.map((item) => escapeHtml(item));
  const htmlBody = `
    <h2 style="margin:0 0 12px">New enquiry from ${firstName} ${lastName}</h2>
    <ul style="margin:0 0 16px;padding:0;list-style:none;font-size:14px;line-height:1.5;color:#1f2937;">
      ${htmlFields
        .map((item) => `<li style=\"margin:4px 0;color:#111827;\">${item}</li>`)
        .join("")}
    </ul>
    <p style="margin:0 0 8px;font-weight:600;color:#111827;">Message</p>
    <p style="margin:0;color:#1f2937;line-height:1.6;">${formatMultiline(trimmedMessage)}</p>
  `;

  try {
    await sendgrid.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `New website enquiry: ${readableReason ?? "General"}`,
      text: plainBody,
      html: htmlBody
    });
  } catch (error) {
    console.error("Failed to send enquiry email", error);
    return NextResponse.json(
      { error: "We couldn’t deliver your message. Please try again shortly." },
      { status: 502 }
    );
  }

  const confirmationText = `Hi ${firstName},\n\nThanks for reaching out to Tycho Loke. This is a quick confirmation that your message was received. I'll respond within two business days with next steps.\n\nIf your request is urgent, feel free to call +31 6 39 41 36 65.\n\n— Tycho`;
  const confirmationHtml = `
    <p style="margin:0 0 16px;">Hi ${firstName},</p>
    <p style="margin:0 0 16px;">Thanks for reaching out to Tycho Loke. This is a quick confirmation that your message was received.</p>
    <p style="margin:0 0 16px;">I'll respond within two business days with next steps. If your request is urgent, call or WhatsApp <a href="tel:+31639413665">+31 6 39 41 36 65</a>.</p>
    <p style="margin:0;">— Tycho</p>
  `;

  try {
    await sendgrid.send({
      to: email,
      from: fromEmail,
      subject: "Thanks for contacting Tycho Loke",
      text: confirmationText,
      html: confirmationHtml
    });
  } catch (error) {
    console.error("Failed to send confirmation email", error);
    // Do not fail the request if the confirmation email fails.
  }

  return NextResponse.json({ success: true });
}
