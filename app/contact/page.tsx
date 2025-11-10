import ContactForm from "../../components/ContactForm";

const faqs = [
  {
    question: "How quickly do you reply?",
    answer:
      "Expect a personal reply within two business days. Event organisers working against a tight deadline can mark the request as urgent in the form or call the direct line after submitting."
  },
  {
    question: "Do you offer virtual and onsite sessions?",
    answer:
      "Yes — programmes can be delivered virtually, onsite, or in hybrid formats that mix live sessions with digital assets."
  },
  {
    question: "Can we co-create content or campaigns?",
    answer:
      "Absolutely. I regularly collaborate on co-branded webinars, launch campaigns, and customer storytelling. Include the scope and timeline so we can map the next steps."
  }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tycholoke/" },
  { label: "Instagram", href: "https://www.instagram.com/tycholoke/" },
  { label: "X (Twitter)", href: "https://twitter.com/tycholoke" },
  { label: "Above The Stack", href: "https://abovethestack.com" }
];

const serviceFocus = [
  "Keynotes & summits",
  "MSP enablement programmes",
  "Microsoft & security strategy",
  "Go-to-market storytelling"
];

export default function ContactPage() {
  return (
    <section className="section section--alt section--beam">
      <div className="container">
        <span className="badge">Contact</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          Partner with Tycho Loke for your next initiative
        </h1>
        <p className="section-lead">
          Share a few details about your event, team, or programme. I’ll respond
          with availability, next steps, and any resources you might need to
          make a confident decision.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Direct contact</h3>
            <p className="contact-card-subtitle">
              Prefer a direct introduction? Feel free to reach out using any of
              the channels below.
            </p>
            <dl className="contact-card-list">
              <div>
                <dt>Address</dt>
                <dd>Milhezerweg 34-A, 5752BC Deurne, The Netherlands</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+31639413665">+31 6 39 41 36 65</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:info@tycholoke.com">info@tycholoke.com</a>
                </dd>
              </div>
            </dl>
            <ul className="contact-pill-list">
              {serviceFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="divider" />
            <h3>Connect</h3>
            <ul className="contact-links">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="card card--spotlight contact-form-card">
            <h2 style={{ marginTop: 0 }}>Let’s design an outstanding experience</h2>
            <p style={{ color: "var(--muted)", margin: "0", maxWidth: "52ch" }}>
              Fill out the form and I’ll return with a tailored proposal, dates,
              and the assets we can co-create together.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="divider" />

        <div className="grid grid--two">
          <div className="card">
            <h3>Response timeline</h3>
            <p style={{ color: "var(--muted)" }}>
              You’ll receive a confirmation email instantly. Expect a tailored
              reply within two business days that includes next steps, available
              dates, and any materials I might need from you.
            </p>
            <p style={{ color: "var(--muted)", marginTop: "1rem" }}>
              For urgent event requests (within 7 days), call or WhatsApp the
              number above after submitting the form so I can prioritise it.
            </p>
          </div>
          <div className="card">
            <h3>FAQs</h3>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
