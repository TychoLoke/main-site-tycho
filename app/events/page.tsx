const events = [
  {
    name: "CloudFest",
    dates: "17 - 20 March 2025",
    location: "Europa Park, Germany",
    description:
      "The #1 internet infrastructure event, gathering the global cloud ecosystem for innovation, partnership, and celebration.",
    attending: "Attending all days",
    registration: "https://cloudfest.com/"
  },
  {
    name: "CompTIA Community Meetings",
    dates: "Q2 2025 (TBA)",
    location: "Benelux Region",
    description:
      "Facilitating cybersecurity and MSP growth conversations as part of the Benelux executive council.",
    attending: "Hosting breakout",
    registration: "https://connect.comptia.org/communities/benelux"
  },
  {
    name: "Above The Stack Live Webinar",
    dates: "Monthly",
    location: "Virtual",
    description:
      "Exclusive briefing for MSP leaders covering GTM plays, Microsoft roadmap updates, and security intelligence.",
    attending: "Hosting",
    registration: "https://tycholoke.com/abovethestack"
  }
];

export default function EventsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="badge">Events</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          Where I’ll be and how you can engage
        </h1>
        <p className="section-lead">
          I regularly speak, host, and contribute to events that elevate MSP and
          IT communities. Explore upcoming appearances and suggest where I should
          go next.
        </p>

        <div className="grid grid--two">
          {events.map((event) => (
            <article className="event-card" key={event.name}>
              <span>{event.dates}</span>
              <strong>{event.name}</strong>
              <p>{event.description}</p>
              <p style={{ color: "var(--muted)" }}>
                <strong style={{ color: "var(--accent)" }}>Location:</strong> {event.location}
              </p>
              <p style={{ color: "var(--muted)" }}>
                <strong style={{ color: "var(--accent)" }}>Tycho:</strong> {event.attending}
              </p>
              <a className="button" href={event.registration} target="_blank" rel="noreferrer">
                Registration & info
              </a>
            </article>
          ))}
        </div>

        <div className="divider" />

        <div className="card">
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Know an event I should attend?
          </h2>
          <p className="section-lead" style={{ marginBottom: "2rem" }}>
            Share the details below and I’ll be in touch within two business days.
          </p>
          <form
            className="form-grid"
            action="https://formspree.io/f/xpwzkbgr"
            method="post"
          >
            <div className="form-row form-row--split">
              <div>
                <label className="sr-only" htmlFor="event-first-name">
                  First name
                </label>
                <input
                  id="event-first-name"
                  name="firstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="event-last-name">
                  Last name
                </label>
                <input
                  id="event-last-name"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="form-row form-row--split">
              <div>
                <label className="sr-only" htmlFor="event-email">
                  Email
                </label>
                <input
                  id="event-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="event-org">
                  Organization
                </label>
                <input
                  id="event-org"
                  name="organization"
                  placeholder="Organization"
                  required
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="event-message">
                Message
              </label>
              <textarea
                id="event-message"
                name="message"
                rows={4}
                placeholder="Tell me about the event, format, and audience."
                required
              />
            </div>
            <button type="submit" className="button">
              Submit event suggestion
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
