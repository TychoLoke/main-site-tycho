import Link from "next/link";

const pillars = [
  {
    title: "GTM intelligence",
    description:
      "Actionable positioning, packaging, and pricing strategies to help MSPs differentiate and win ideal customers."
  },
  {
    title: "Microsoft roadmap",
    description:
      "Monthly breakdown of Microsoft 365, Azure, and security updates with guidance on what to roll out, sell, or sunset."
  },
  {
    title: "Security first",
    description:
      "Threat trends, compliance insights, and human-led communication tactics to strengthen customer trust."
  },
  {
    title: "Automation & AI",
    description:
      "Playbooks that pair automation tooling and AI to streamline onboarding, support, and marketing workflows."
  }
];

const bonuses = [
  "Quarterly live briefings with interactive Q&A",
  "Template and deck drops you can co-brand",
  "Early access to Above The Stack webinars and events",
  "Partner spotlight features for community members"
];

export default function AboveTheStackPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="badge">Above The Stack</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          Your unfair advantage for MSP GTM, security, and automation
        </h1>
        <p className="section-lead">
          Above The Stack is my newsletter and community designed for MSP leaders
          and vendor teams who want the latest insights, frameworks, and
          storytelling tools to stay ahead.
        </p>

        <div className="grid grid--two">
          {pillars.map((pillar) => (
            <div className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="grid" style={{ gap: "2.5rem" }}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>What you get</h2>
            <div className="rich-text">
              <ul>
                {bonuses.map((bonus) => (
                  <li key={bonus}>{bonus}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Subscribe today</h2>
            <p style={{ color: "var(--muted)" }}>
              Join hundreds of MSP and channel leaders who receive Above The Stack
              insights every month. Expect curated research, frameworks, and
              stories you can share with your teams or clients.
            </p>
            <form
              className="newsletter"
              action="https://formspree.io/f/xeojawgy"
              method="post"
            >
              <label className="sr-only" htmlFor="ats-email">
                Email address
              </label>
              <input
                id="ats-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
              <label className="sr-only" htmlFor="ats-role">
                Role
              </label>
              <input
                id="ats-role"
                name="role"
                placeholder="Role"
                required
              />
              <button type="submit" className="button">
                Get Above The Stack
              </button>
            </form>
          </div>
        </div>

        <div className="divider" />

        <div className="card" style={{ textAlign: "center", padding: "2.5rem" }}>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Want Above The Stack live at your event?
          </h2>
          <p className="section-lead" style={{ margin: "0 auto 2rem" }}>
            Book Tycho to deliver a keynote or workshop tailored to your
            community and walk away with co-branded resources for attendees.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/services" className="button">
              Explore booking options
            </Link>
            <Link href="/contact" className="button button--ghost">
              Talk to Tycho
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
