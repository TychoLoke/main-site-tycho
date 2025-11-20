import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    title: "Vision to velocity",
    description:
      "Translate ambition into an operating rhythm — GTM positioning, pricing, and a cadence that keeps everyone accountable."
  },
  {
    title: "Operational calm",
    description:
      "Blueprints for delivery, governance, and security that reduce chaos while making your customer experience feel effortless."
  },
  {
    title: "Intelligence-led services",
    description:
      "Activate AI copilots, automation, and analytics with guardrails so you launch smart offers without risking trust."
  },
  {
    title: "Narratives that convert",
    description:
      "Story-first workshops that teach technical teams to speak value, not features — for keynotes, sales desks, and campaigns."
  }
];

const workshopOutcomes = [
  "Clear service menus and pricing stories that sales and delivery can repeat",
  "Co-branded assets: decks, playbooks, and templates ready to ship",
  "Labs crafted around your stack, not a generic slide deck",
  "Momentum metrics so wins stay visible across leadership"
];

const heroImage = {
  src: "/images/tycho-hero.jpg",
  alt: "Tycho Loke smiling while speaking on stage"
};

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
              <span className="badge badge--pulse">Calm, confident growth</span>
            </div>
            <h1 className="hero-title">
              Strategic enablement for modern MSPs — without the noise.
            </h1>
            <p className="hero-subtitle">
              I’m <span className="text-accent">Tycho Loke</span>, a channel strategist and speaker who mixes
              Microsoft expertise with story-first enablement. Together we’ll
              simplify your offer, build secure foundations, and ship experiences
              your customers remember.
            </p>
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
          </div>
        </div>
      </section>

      <section className="section section--halo">
        <div className="container">
          <div className="grid grid--two" style={{ alignItems: "center" }}>
            <div className="section-annotation">
              <span className="badge">Signal over noise</span>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
                The calm operating system for bold MSPs
              </h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                Every engagement is designed to remove clutter, give your team a
                repeatable rhythm, and make customers feel the difference.
              </p>
            </div>
            <div className="card card--spotlight">
              <h3 style={{ marginTop: 0 }}>What partners lean on</h3>
              <ul className="checklist" style={{ marginTop: "0.75rem" }}>
                <li>Trusted facilitation for summits, keynotes, and leadership offsites.</li>
                <li>Modern Microsoft playbooks that balance security, automation, and experience.</li>
                <li>Clear GTM stories that move prospects without jargon.</li>
                <li>Templates, prompts, and visuals you can reuse instantly.</li>
              </ul>
              <div className="hero-actions" style={{ marginTop: "0.5rem" }}>
                <Link href="/services" className="button">
                  Explore services
                </Link>
                <Link href="/about" className="button button--ghost">
                  Meet Tycho
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt section--beam">
        <div className="container">
          <div className="hero-eyebrow" style={{ marginBottom: "0.75rem" }}>
            <span className="badge">Enablement, simplified</span>
          </div>
          <h2 className="section-title">Frameworks you can actually use</h2>
          <p className="section-lead">
            Workshops, advisory sprints, and keynotes that swap hype for
            practicality. We co-design the assets, train your team to present
            them, and give you clarity on the next move.
          </p>
          <div className="workshop-layout">
            <article className="card workshop-summary">
              <span className="badge">What we ship</span>
              <p className="workshop-summary__lead">
                A calm plan for the next 90 days, a modular story your team can
                deliver, and automation guardrails that protect trust.
              </p>
              <ul className="checklist">
                {workshopOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <div className="workshop-summary__actions">
                <Link href="/services" className="button">
                  See the menu
                </Link>
                <Link href="/contact" className="button button--ghost">
                  Plan a session
                </Link>
              </div>
            </article>
            <div className="workshop-grid">
              {focusAreas.map((item) => (
                <article className="card workshop-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--halo">
        <div className="container">
            <div className="trusted-layout">
              <div className="trusted-copy">
                <div className="badge">Trusted by leading teams</div>
              <h2 className="section-title">Brands that bring me in</h2>
              <p className="section-lead">
                Global vendors, fast-moving MSPs, and communities rely on me to
                keep sessions sharp, actionable, and human.
              </p>
              </div>
            <div className="logo-grid">
              {trustedCompanies.map((company) => (
                <figure key={company.file} className="logo-tile">
                  <Image
                    src={`/logos/${company.file}`}
                    alt={`${company.name} logo`}
                    width={420}
                    height={180}
                    sizes="(max-width: 900px) 320px, 420px"
                    className="logo-tile__image"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt section--beam">
        <div className="container">
          <div className="hero-eyebrow" style={{ marginBottom: "0.75rem" }}>
            <span className="badge">On stage & on camera</span>
          </div>
          <h2 className="section-title">Talks that make complex topics feel simple</h2>
          <p className="section-lead">
            I combine high-energy storytelling with playbooks audiences can
            deploy the same week. Expect clarity, interaction, and resources
            that keep the conversation moving.
          </p>
          <div className="grid grid--two">
            <div className="card">
              <h3>Signature keynotes</h3>
              <div className="rich-text">
                <ul>
                  <li>Modern MSP GTM: positioning, packaging, and recurring revenue plays.</li>
                  <li>Security-first service design built on Microsoft cloud.</li>
                  <li>The power trio: data classification, access control, and AI.</li>
                  <li>Human-led cybersecurity culture and communication.</li>
                </ul>
              </div>
              <div style={{ marginTop: "1.25rem" }}>
                <Link href="/services" className="button">
                  Speaking menu
                </Link>
              </div>
            </div>
            <div className="card card--spotlight">
              <h3>How we prepare</h3>
              <ul className="checklist">
                <li>Audience interviews to tune every example.</li>
                <li>Run of show planning with your production crew.</li>
                <li>Accessible visuals, captions, and promo clips.</li>
                <li>Follow-up prompts and resources for attendees.</li>
              </ul>
              <div style={{ marginTop: "0.5rem" }}>
                <Link href="/events" className="button button--ghost">
                  See events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--halo">
        <div className="container">
          <div className="badge">Case studies & spotlights</div>
          <h2 className="section-title">Recent sessions & media moments</h2>
          <p className="section-lead">
            A snapshot of keynotes, webinars, and enablement projects. Each one
            blends strategy, storytelling, and technical depth your audience can
            apply.
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

      <section className="section section--alt section--beam">
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

      <section className="section section--halo">
        <div className="container">
          <div className="card card--spotlight" style={{ textAlign: "center", padding: "3rem" }}>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Ready to simplify, sharpen, and ship?
            </h2>
            <p className="section-lead" style={{ margin: "0 auto 2rem" }}>
              Let’s co-design your next keynote, enablement sprint, or
              automation initiative. I bring structure, storytelling, and
              Microsoft-first expertise so your team can lead with confidence.
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
