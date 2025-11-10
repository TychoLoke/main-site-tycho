import Image from "next/image";
import Link from "next/link";

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
    role: "Co-Founder & Operations Manager",
    org: "Serverwave",
    period: "Mar 2020 - Current",
    summary:
      "Co-founded Serverwave, steering operations, partnerships, and service innovation for a global infrastructure provider serving modern gaming communities.",
    highlights: [
      "Architected scalable provisioning pipelines that delivered consistent customer experiences.",
      "Led cross-functional operations teams across support, finance, and vendor management.",
      "Cultivated community partnerships that accelerated Serverwave's growth and reach."
    ],
    logo: {
      fileName: "serverwave.svg",
      alt: "Serverwave logo"
    }
  }
];

const leadership = [
  {
    role: "Vice Chair Benelux Cyber Security Interest Group",
    org: "GTIA",
    period: "Jan 2025 - Current"
  },
  {
    role: "Executive Council Member Benelux Community",
    org: "GTIA",
    period: "Jan 2025 - Current"
  },
  {
    role: "Industry Education SME & Instructor",
    org: "GTIA",
    period: "Jan 2025 - Current"
  }
];

const communityPlatforms = [
  {
    title: "Hackers Love",
    role: "Co-Founder",
    description:
      "Global collective of security storytellers and creators championing human-first cyber education.",
    href: "https://www.hackerslove.com",
    cta: "Visit Hackers Love"
  },
  {
    title: "Above The Stack",
    role: "Founder",
    description:
      "Channel enablement platform helping MSP leaders ship smarter GTM plays and partnerships.",
    href: "/abovethestack",
    cta: "Explore Above The Stack"
  }
];

export default function ExperiencesPage() {
  return (
    <section className="section section--alt section--beam">
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
              <span className="text-accent" style={{ fontWeight: 600 }}>{item.period}</span>
              <h3 style={{ marginTop: "0.75rem" }}>{item.role}</h3>
              <p style={{ color: "var(--muted)" }}>{item.org}</p>
            </div>
          ))}
        </div>

        <div className="divider" />

        <h2 className="section-title" style={{ fontSize: "2rem" }}>
          Community platforms & programs
        </h2>
        <p className="section-lead" style={{ marginTop: "1rem", maxWidth: "58ch" }}>
          Beyond client delivery I invest in communities that activate cybersecurity
          storytelling and operational excellence for MSPs worldwide.
        </p>
        <div className="grid grid--two" style={{ marginTop: "2.5rem" }}>
          {communityPlatforms.map((platform) => (
            <article className="card" key={platform.title}>
              <h3>{platform.title}</h3>
              <p className="badge" style={{ margin: "0.75rem 0" }}>
                {platform.role}
              </p>
              <p>{platform.description}</p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link
                  href={platform.href}
                  className="button"
                  target={platform.href.startsWith("http") ? "_blank" : undefined}
                  rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {platform.cta}
                </Link>
              </div>
            </article>
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
