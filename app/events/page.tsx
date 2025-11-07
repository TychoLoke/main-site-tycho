const events = [
  {
    name: "Interstellar Fusion Forward",
    dates: "12 November 2024",
    location: "Virtual Broadcast",
    description:
      "A futurist look at AI, automation, and space-inspired resilience for MSPs planning their next wave of services.",
    attending: "Delivering keynote",
    status: "Upcoming",
    registration: "/contact",
    ctaLabel: "Request invite"
  },
  {
    name: "DIWUG User Group at AvePoint",
    dates: "27 November 2024",
    location: "AvePoint Office, The Hague",
    description:
      "Community deep dive into Microsoft 365 governance and Copilot adoption with the Dutch Information Worker User Group.",
    attending: "Co-hosting & speaking",
    status: "Upcoming",
    registration: "https://diwug.nl/",
    ctaLabel: "Join DIWUG"
  },
  {
    name: "Cloud Expo",
    dates: "3 – 4 December 2024",
    location: "Expo Houten, Netherlands",
    description:
      "Two days of channel strategy, security, and automation sessions tailored for MSP executives and vendors.",
    attending: "Speaking & moderating",
    status: "Upcoming",
    registration: "https://www.cloudexpoeurope.nl/",
    ctaLabel: "Event details"
  },
  {
    name: "GTIA Benelux Community Meeting",
    dates: "5 February 2025",
    location: "Ghent, Belgium",
    description:
      "Bringing together Benelux partners to exchange playbooks on channel collaboration, cyber resilience, and AI adoption.",
    attending: "Facilitating roundtable",
    status: "Save the date",
    registration: "/contact",
    ctaLabel: "Partner with Tycho"
  }
];

const pastHighlights = [
  {
    title: "MSP Global 2025 · Barcelona",
    takeaway: "Shared growth frameworks for scaling Microsoft-led services across Europe’s leading MSP mainstage.",
    link: "https://mspglobal.com/",
    label: "Conference site"
  },
  {
    title: "Pax8 Beyond EMEA 2025",
    takeaway: "Led enablement labs on storefront excellence, co-sell alignment, and automation for MSP partners.",
    link: "https://www.pax8.com/",
    label: "Pax8 overview"
  },
  {
    title: "AvePoint OnPoint 2025 · Scheveningen",
    takeaway: "Unpacked Copilot governance, data residency, and partner playbooks for AvePoint’s community summit.",
    link: "https://www.avepoint.com/",
    label: "AvePoint website"
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
