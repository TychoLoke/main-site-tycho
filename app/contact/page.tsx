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
    <section className="section section--alt">
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
          <div className="card contact-form-card">
            <h2 style={{ marginTop: 0 }}>Let’s design an outstanding experience</h2>
            <p style={{ color: "var(--muted)", margin: "0", maxWidth: "52ch" }}>
              Fill out the form and I’ll return with a tailored proposal, dates,
              and the assets we can co-create together.
            </p>
            <form
              className="form-grid"
              action="https://formspree.io/f/meoqyoww"
              method="post"
            >
              <input type="hidden" name="_subject" value="Tycho Loke website inquiry" />
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
                  All submissions receive a confirmation email. Your details are
                  only used to respond to this enquiry.
                </p>
              </div>
              <button type="submit" className="button">
                Send message
              </button>
              <p className="form-hint">
                Prefer email? Contact <a href="mailto:info@tycholoke.com">info@tycholoke.com</a>.
              </p>
            </form>
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
