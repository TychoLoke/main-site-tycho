import Image from "next/image";
import Link from "next/link";

const trainingHighlights = [
  {
    title: "Become a better MSP",
    description:
      "Leadership and operational training that matures your service catalogue, elevates CX, and readies your team for enterprise expectations."
  },
  {
    title: "MSP to Microsoft AI Cloud Partner (MIP)",
    description:
      "Roadmaps, compliance checklists, and sales enablement to unlock solution partner designations and co-sell benefits."
  },
  {
    title: "AI + Automation enablement",
    description:
      "Build repeatable AI copilots, process automation, and marketing workflows that scale your delivery without adding headcount."
  },
  {
    title: "Go-to-market accelerator",
    description:
      "Positioning, packaging, and storytelling labs that help your team sell modern Microsoft, security, and managed services confidently."
  }
];

const workshopOutcomes = [
  "Executive-ready roadmaps aligned to revenue targets",
  "Playbooks, templates, and slide decks you can co-brand",
  "Hands-on labs tailored to your tools and stack",
  "Performance metrics so improvements stay measurable"
];

const heroImage = {
  src: "/images/tycho-hero.jpg",
  alt: "Tycho Loke smiling while speaking on stage"
};

const heroHighlights = [
  {
    value: "120+",
    label: "MSP leaders mentored each year"
  },
  {
    value: "15",
    label: "Countries hosted workshops in"
  },
  {
    value: "4.9/5",
    label: "Average post-session rating"
  }
];

const trustedCompanies = [
  { name: "AvePoint", file: "avepoint.svg" },
  { name: "GTIA", file: "gtia.svg" },
  { name: "Pax8", file: "pax8.svg" },
  { name: "PeopleRock", file: "peoplerock.svg" },
  { name: "Portland", file: "portland.svg" },
  { name: "Cloud Expo", file: "CloudExpo.svg" },
  { name: "CloudFest", file: "cloudfest.svg" },
  { name: "Managed Services Summit Benelux", file: "ManagedServiceSummitBenelux.svg" },
  { name: "ESET", file: "eset.svg" },
  { name: "Hackers Love", file: "HackersLove.svg" },
  { name: "QCyber", file: "qcyber.svg" },
  { name: "MKB-IT", file: "mkbit.svg" },
  { name: "MSP Global", file: "mspglobal.svg" },
  { name: "MSP Channel Insights", file: "mspchannelinsights.svg" },
  { name: "The Tech Degenerates", file: "thetechdegenerates.svg" }
];

const videoShowcase = [
  {
    title: "ESET · Partners in Security",
    description: "Human-first cybersecurity storytelling with Ashley Schut.",
    embedUrl: "https://www.youtube.com/embed/tKrXQhlzTOo",
    cta: "Watch on YouTube",
    href: "https://youtu.be/tKrXQhlzTOo?list=TLGGs3T-M0BINnowNzExMjAyNQ"
  },
  {
    title: "Pax8 StoreFronts",
    description: "Walkthrough of marketplace storefront strategies for MSP success.",
    embedUrl: "https://player.vimeo.com/video/1016152554?h=2b87157fc0",
    cta: "View on Vimeo",
    href: "https://vimeo.com/1016152554/2b87157fc0?fl=pl&fe=vl"
  },
  {
    title: "AvePoint Baseline Management",
    description: "Practical demo on Microsoft 365 baselines and automation for partners.",
    embedUrl: "https://www.youtube.com/embed/8DJX_4rvjJQ",
    cta: "Watch webinar",
    href: "https://www.youtube.com/watch?v=8DJX_4rvjJQ"
  }
];

const leadershipHighlights = [
  {
    title: "Community Hackers Love",
    role: "Co-Founder",
    description:
      "Building a global collective of security storytellers and creators who champion human-first cyber education.",
    href: "https://www.hackerslove.com",
    cta: "Visit Hackers Love"
  },
  {
    title: "Above The Stack",
    role: "Founder",
    description:
      "Designing the channel enablement platform that helps MSP leaders ship smarter GTM plays and partnerships.",
    href: "/abovethestack",
    cta: "Explore Above The Stack"
  }
];

const testimonials = [
  {
    quote:
      "Tycho’s session on data classification and AI at CloudFest was eye-opening. He translated complex topics into clear, actionable strategies — one of the most engaging talks of the event.",
    author: "Program Director",
    company: "CloudFest"
  },
  {
    quote:
      "Tycho was a guest on our podcast and delivered an inspiring discussion on the human aspect of cybersecurity. His real-world examples and engaging style made it one of our most valuable episodes.",
    author: "Regional Manager",
    company: "ESET"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="badge badge--pulse">Innovate · Strategize · Transform</span>
              <span className="hero-meta">Microsoft AI Cloud Partner advisor</span>
            </div>
            <h1 className="hero-title">
              Expert-led enablement for MSPs ready to grow, secure, and scale.
            </h1>
            <p className="hero-subtitle">
              I’m Tycho Loke — channel strategist, Microsoft advisor, and speaker
              empowering managed service providers to evolve into modern solution
              partners. From AI-infused service delivery to GTM storytelling and
              security baselines, I help you build confidence across the entire
              customer journey.
            </p>
            <ul className="hero-highlights" role="list">
              {heroHighlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link href="/contact" className="button">
                Book Tycho
              </Link>
              <Link href="/portfolio" className="button button--ghost">
                See recent work
              </Link>
            </div>
          </div>
          <div className="hero-media" role="presentation">
            <figure className="hero-portrait">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={900}
                height={1125}
                priority
              />
            </figure>
            <div className="hero-stat-card">
              <h3>On-stage impact</h3>
              <p>
                Keynotes and enablement sprints designed for MSP, ISV, and
                cybersecurity audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Community leadership</h2>
          <p className="section-lead">
            Beyond the stage, I invest in platforms that elevate cybersecurity and channel innovators through collaboration and storytelling.
          </p>
          <div className="grid grid--two">
            {leadershipHighlights.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="badge" style={{ margin: "0.75rem 0" }}>
                  {item.role}
                </p>
                <p>{item.description}</p>
                <div style={{ marginTop: "1.5rem" }}>
                  <Link href={item.href} className="button" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Expert-led training & workshops</h2>
          <div className="workshop-layout">
            <div>
              <p className="section-lead">
                Build the muscle memory to become a better MSP, transition to a
                Microsoft AI Cloud Partner, and operationalize AI across your
                services. Every engagement blends strategy, storytelling, and
                hands-on labs tailored to your stack.
              </p>
              <ul className="checklist">
                {workshopOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid--two">
              {trainingHighlights.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: "2.5rem" }}>
            <Link href="/services" className="button">
              View training menu
            </Link>
            <Link href="/contact" className="button button--ghost">
              Plan your workshop
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="badge">Trusted by leading teams</div>
          <h2 className="section-title" style={{ marginTop: "1rem" }}>
            Companies that trusted my service
          </h2>
          <p className="section-lead" style={{ maxWidth: "720px" }}>
            From global vendors to high-growth MSPs, these brands have partnered
            with me for strategy, enablement, and unforgettable event moments.
          </p>
          <div className="logo-grid">
            {trustedCompanies.map((company) => (
              <figure key={company.file} className="logo-tile">
                <Image
                  src={`/logos/${company.file}`}
                  alt={`${company.name} logo`}
                  width={240}
                  height={96}
                  sizes="(max-width: 640px) 160px, 240px"
                />
                <figcaption>{company.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="logo-note">
            For crisp results, save each partner logo as a transparent PNG or SVG sized
            240×96 inside <code>public/logos</code> using the filenames shown above.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Strategic speaking engagements</h2>
          <p className="section-lead">
            Inspire and empower your MSP or IT community with talks on Microsoft
            technologies, tech marketing, automation, and security. I bring
            high-energy storytelling with practical playbooks you can activate the
            next day.
          </p>
          <div className="card">
            <h3>Signature keynotes & panels</h3>
            <div className="rich-text">
              <ul>
                <li>Modern MSP GTM: from positioning to recurring revenue plays.</li>
                <li>Security-first service design built on Microsoft cloud.</li>
                <li>The power trio: data classification, access control, and AI.</li>
                <li>Human-led cybersecurity culture and communication.</li>
              </ul>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/services" className="button">
                View speaking menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="badge">Case studies & spotlights</div>
          <h2 className="section-title">Take a look at my work</h2>
          <p className="section-lead">
            Dive into a sample of keynotes, webinars, and marketplace enablement
            projects. Each story highlights the blend of strategy, storytelling,
            and technical depth your audience can expect.
          </p>
          <div className="video-grid">
            {videoShowcase.map((item) => (
              <article className="video-card" key={item.title}>
                <div className="video-frame">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="video-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href} className="button" target="_blank" rel="noreferrer">
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/portfolio" className="button button--ghost">
              Discover more
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">What partners say</h2>
          <div className="grid grid--two">
            {testimonials.map((item) => (
              <div className="testimonial" key={item.author}>
                <p>“{item.quote}”</p>
                <p>
                  <strong>{item.author}</strong>
                  <br />
                  {item.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: "center", padding: "3rem" }}>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Ready to elevate your MSP brand and delivery?
            </h2>
            <p className="section-lead" style={{ margin: "0 auto 2rem" }}>
              Let’s collaborate on your next keynote, training program, or
              automation initiative. I create experiences that combine strategic
              clarity with technical excellence.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="button">
                Book a call
              </Link>
              <Link href="/services" className="button button--ghost">
                Download services guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
