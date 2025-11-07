export default function ContactPage() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="badge">Contact</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          Reach out for bookings, collaborations, or a friendly hello
        </h1>
        <p className="section-lead">
          Whether you’re planning a conference keynote, launching a training
          program, or shaping your MSP GTM, I’d love to support your journey.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Details</h3>
            <p style={{ color: "var(--muted)" }}>
              <strong style={{ color: "var(--accent)" }}>Address:</strong>
              <br />
              Milhezerweg 34-A, 5752BC Deurne, The Netherlands
            </p>
            <p style={{ color: "var(--muted)" }}>
              <strong style={{ color: "var(--accent)" }}>Phone:</strong>
              <br />
              <a href="tel:+31639413665">+31 6 39 41 36 65</a>
            </p>
            <p style={{ color: "var(--muted)" }}>
              <strong style={{ color: "var(--accent)" }}>Email:</strong>
              <br />
              <a href="mailto:info@tycholoke.com">info@tycholoke.com</a>
            </p>
            <p style={{ color: "var(--muted)" }}>
              <strong style={{ color: "var(--accent)" }}>FAQ:</strong>
              <br />
              Looking for quick answers? Check the FAQ below or send a message.
            </p>
            <div className="divider" />
            <h3>Connect</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              <li>
                <a href="https://www.linkedin.com/in/tycholoke/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tycholoke/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tycholoke" target="_blank" rel="noreferrer">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2 style={{ marginTop: 0 }}>Let’s build something remarkable</h2>
            <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
              Tell me about your project or event and I’ll respond within two
              business days.
            </p>
            <form
              className="form-grid"
              action="https://formspree.io/f/meoqyoww"
              method="post"
            >
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
                  <label className="sr-only" htmlFor="contact-reason">
                    Contact reason
                  </label>
                  <select id="contact-reason" name="reason" required defaultValue="">
                    <option value="" disabled>
                      What is your contact reason?
                    </option>
                    <option value="training">Training</option>
                    <option value="speaking">Speaking</option>
                    <option value="consulting">Consulting</option>
                    <option value="partnership">Partnership</option>
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
                  rows={4}
                  placeholder="Share your goals, timeline, and audience."
                  required
                />
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
