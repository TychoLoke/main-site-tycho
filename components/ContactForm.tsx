"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  reason: string;
  timeline?: string;
  phone?: string;
  budget?: string;
  message: string;
};

const initialStatusMessage = {
  success:
    "Thanks for reaching out! You’ll receive a confirmation email shortly and I’ll follow up within two business days.",
  error:
    "Something went wrong sending your message. Please try again or email info@tycholoke.com."
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: ContactFormValues = {
      firstName: (formData.get("firstName") ?? "").toString().trim(),
      lastName: (formData.get("lastName") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      company: (formData.get("company") ?? "").toString().trim() || undefined,
      reason: (formData.get("reason") ?? "").toString(),
      timeline: (formData.get("timeline") ?? "").toString() || undefined,
      phone: (formData.get("phone") ?? "").toString().trim() || undefined,
      budget: (formData.get("budget") ?? "").toString() || undefined,
      message: (formData.get("message") ?? "").toString().trim()
    };

    setStatus("loading");
    setErrorDetail(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const detail = data?.error ?? "Unable to send message at this time.";
        setStatus("error");
        setErrorDetail(detail);
        return;
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setStatus("error");
      setErrorDetail("Network error. Please try again in a moment.");
    }
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
      <div className="form-row form-row--split">
        <div>
          <label className="sr-only" htmlFor="contact-first-name">
            First name
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            placeholder="First name"
            required
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-last-name">
            Last name
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            placeholder="Last name"
            required
            autoComplete="family-name"
          />
        </div>
      </div>
      <div className="form-row form-row--split">
        <div>
          <label className="sr-only" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-company">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            placeholder="Company or organisation"
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="form-row form-row--split">
        <div>
          <label className="sr-only" htmlFor="contact-reason">
            Contact reason
          </label>
          <select id="contact-reason" name="reason" required defaultValue="">
            <option value="" disabled>
              What type of collaboration?
            </option>
            <option value="training">Training or enablement</option>
            <option value="speaking">Keynote or speaking</option>
            <option value="consulting">Advisory or consultancy</option>
            <option value="partnership">Partnership or campaign</option>
          </select>
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-timeline">
            Timeline
          </label>
          <select id="contact-timeline" name="timeline" defaultValue="">
            <option value="" disabled>
              Desired timeline
            </option>
            <option value="within-30-days">Within 30 days</option>
            <option value="one-to-three-months">1–3 months</option>
            <option value="three-plus-months">3+ months</option>
            <option value="exploratory">Exploratory chat</option>
          </select>
        </div>
      </div>
      <div className="form-row form-row--split">
        <div>
          <label className="sr-only" htmlFor="contact-phone">
            Phone number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="Phone number (optional)"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-budget">
            Budget range
          </label>
          <select id="contact-budget" name="budget" defaultValue="">
            <option value="" disabled>
              Indicative budget
            </option>
            <option value="under-2k">Under €2,000</option>
            <option value="2k-5k">€2,000 – €5,000</option>
            <option value="5k-10k">€5,000 – €10,000</option>
            <option value="10k-plus">€10,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="sr-only" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Share your goals, audience, and any key milestones."
          required
        />
        <p className="form-hint">
          All submissions receive a confirmation email. Your details are only
          used to respond to this enquiry.
        </p>
      </div>
      <button type="submit" className="button" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      <p className="form-hint">
        Prefer email? Contact <a href="mailto:info@tycholoke.com">info@tycholoke.com</a>.
      </p>
      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className="form-status form-status--success">{initialStatusMessage.success}</p>
        )}
        {status === "error" && (
          <p className="form-status form-status--error">
            {errorDetail ?? initialStatusMessage.error}
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
