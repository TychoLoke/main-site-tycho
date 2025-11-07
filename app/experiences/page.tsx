import Image from "next/image";

const experiences = [
  {
    role: "Channel Pre-Sales Solutions Engineer",
    org: "AvePoint",
    period: "Aug 2025 - Current",
    summary:
      "Driving intelligent transformation across the IT channel by aligning automation, Microsoft 365 governance, and secure service delivery with scalable go-to-market plays for partners.",
    highlights: [
      "Translate complex tenant management and compliance frameworks into MSP-ready offerings.",
      "Design onboarding blueprints that accelerate partner time-to-value.",
      "Coach pre-sales teams on storytelling that connects technical depth to outcomes."
    ],
    logo: {
      fileName: "avepoint.svg",
      alt: "AvePoint logo"
    }
  },
  {
    role: "Pre-Sales Consultant",
    org: "PeopleRock",
    period: "Oct 2024 - Jul 2025",
    summary:
      "Tailored Microsoft ecosystem solutions, workshops, and ROI narratives that bridged technical vision with customer impact across Europe.",
    highlights: [
      "Delivered immersive demos showcasing security and automation best practices.",
      "Co-created modern workplace roadmaps with C-level stakeholders.",
      "Enabled sales teams with repeatable proof-of-concept playbooks."
    ],
    logo: {
      fileName: "peoplerock.svg",
      alt: "PeopleRock logo"
    }
  },
  {
    role: "Technical Consultant",
    org: "PeopleRock",
    period: "Dec 2021 - Oct 2024",
    summary:
      "Customized infrastructures, enhanced cybersecurity readiness, and optimized cloud integrations for ambitious MSPs and mid-market teams.",
    highlights: [
      "Implemented Microsoft 365 and Azure architectures tailored to industry compliance.",
      "Led automation initiatives that reduced onboarding effort by up to 40%.",
      "Championed managed security services rooted in Zero Trust principles."
    ],
    logo: {
      fileName: "peoplerock.svg",
      alt: "PeopleRock logo"
    }
  },
  {
    role: "Operations Manager",
    org: "Skynode",
    period: "Mar 2020 - Current",
    summary:
      "Built resilient operational processes and infrastructure for a global gaming server provider while elevating support excellence.",
    highlights: [
      "Scaled technical teams and 24/7 support operations globally.",
      "Optimized cost structures through automation and vendor partnerships.",
      "Championed customer success initiatives that drove retention."
    ],
    logo: {
      fileName: "skynode.svg",
      alt: "Skynode logo"
    }
  }
];

const leadership = [
  {
    role: "Vice Chair Benelux Cyber Security Interest Group",
    org: "CompTIA",
    period: "Jan 2025 - Current"
  },
  {
    role: "Executive Council Member Benelux Community",
    org: "CompTIA",
    period: "Jan 2025 - Current"
  },
  {
    role: "Industry Education SME & Instructor",
    org: "CompTIA",
    period: "Jan 2025 - Current"
  }
];

export default function ExperiencesPage() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="badge">Experience</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          Proven impact across consulting, pre-sales, and community leadership
        </h1>

        <div className="timeline" style={{ marginTop: "3rem" }}>
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.role}>
              <span>
                {experience.period} · {experience.org}
              </span>
              {experience.logo ? (
                <figure className="experience-logo-slot">
                  <Image
                    src={`/logos/${experience.logo.fileName}`}
                    alt={experience.logo.alt ?? `${experience.org} logo`}
                    width={320}
                    height={120}
                    sizes="(max-width: 640px) 220px, 320px"
                  />
                  <figcaption className="image-note">
                    Save a horizontal logo as <code>{experience.logo.fileName}</code> (recommended 320×120) in <code>public/logos</code> to
                    replace this placeholder.
                  </figcaption>
                </figure>
              ) : null}
              <h3>{experience.role}</h3>
              <p>{experience.summary}</p>
              <div className="rich-text">
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="divider" />

        <h2 className="section-title" style={{ fontSize: "2rem" }}>
          Community roles & leadership
        </h2>
        <div className="grid grid--two" style={{ marginTop: "2rem" }}>
          {leadership.map((item) => (
            <div className="card" key={item.role}>
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                {item.period}
              </span>
              <h3 style={{ marginTop: "0.75rem" }}>{item.role}</h3>
              <p style={{ color: "var(--muted)" }}>{item.org}</p>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="alert">
          Download the full resume for a detailed view of client work, speaking
          engagements, and certifications.
          <br />
          <a
            href="mailto:info@tycholoke.com?subject=Tycho%20Loke%20Resume%20Request"
            className="button"
            style={{ marginTop: "1rem", display: "inline-flex" }}
          >
            Request full resume
          </a>
        </div>
      </div>
    </section>
  );
}
