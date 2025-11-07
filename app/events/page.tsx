const events = [
  {
    name: "CloudFest",
    dates: "17 - 20 March 2025",
    location: "Europa Park, Germany",
    description:
      "The #1 internet infrastructure event, gathering the global cloud ecosystem for innovation, partnership, and celebration.",
    attending: "Attending all days",
    status: "Upcoming",
    registration: "https://cloudfest.com/",
    ctaLabel: "Get tickets"
  },
  {
    name: "CompTIA Community Meetings",
    dates: "Q2 2025 (TBA)",
    location: "Benelux Region",
    description:
      "Facilitating cybersecurity and MSP growth conversations as part of the Benelux executive council.",
    attending: "Hosting breakout",
    status: "Save the date",
    registration: "https://connect.comptia.org/communities/benelux",
    ctaLabel: "Join the community"
  },
  {
    name: "Above The Stack Live Webinar",
    dates: "Monthly",
    location: "Virtual",
    description:
      "Exclusive briefing for MSP leaders covering GTM plays, Microsoft roadmap updates, and security intelligence.",
    attending: "Hosting",
    status: "Registration open",
    registration: "https://tycholoke.com/abovethestack",
    ctaLabel: "Reserve your seat"
  }
];

const pastHighlights = [
  {
    title: "Managed Services Summit Benelux 2024",
    takeaway: "Hosted a panel on sustainable MSP growth and launched the Security Storytelling Lab preview.",
    link: "https://managedservicessummit.com/benelux",
    label: "Summit recap"
  },
  {
    title: "Cloud Expo Netherlands Main Stage",
    takeaway: "Delivered the Power Trio talk — data classification, access control, and AI for modern MSPs.",
    link: "https://www.cloudexpoeurope.nl/",
    label: "Event site"
  },
  {
    title: "Pax8 Beyond EMEA",
    takeaway: "Led partner enablement sessions on storefront best practices and automation",
    link: "https://www.pax8.com/en-uk/blog/beyond-emea-people-rock-case-study/",
    label: "Case study"
  }
];

const formats = [
  {
    name: "Keynotes & fireside chats",
    details: "45-60 minute sessions with bespoke visuals and audience interaction."
  },
  {
    name: "Workshops & masterclasses",
    details: "Half-day to multi-day trainings with labs, worksheets, and playbooks."
  },
  {
    name: "Roundtables & moderation",
    details: "Curated conversations for executive groups or partner advisory councils."
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
              <div className="event-card-status">{event.status}</div>
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
                {event.ctaLabel ?? "Registration & info"}
              </a>
            </article>
          ))}
        </div>

        <div className="divider" />

        <h2 className="section-title">Recent highlights</h2>
        <div className="grid grid--three">
          {pastHighlights.map((highlight) => (
            <article className="card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.takeaway}</p>
              <div style={{ marginTop: "1.25rem" }}>
                <a className="button button--ghost" href={highlight.link} target="_blank" rel="noreferrer">
                  {highlight.label}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="divider" />

        <div className="grid grid--three">
          {formats.map((format) => (
            <article className="card" key={format.name}>
              <h3>{format.name}</h3>
              <p>{format.details}</p>
            </article>
          ))}
        </div>

        <div className="alert" style={{ marginTop: "2.5rem" }}>
          Looking for promotional assets? Ask for the event media kit with headshots, bios, and AV requirements.
        </div>

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
