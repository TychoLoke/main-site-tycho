import Link from "next/link";

const trainingHighlights = [
  "Microsoft 365 tenant hardening and security baselines",
  "Azure landing zone strategy for MSP scale",
  "Modern Work adoption programs that unlock productivity",
  "Automation frameworks to streamline onboarding and support"
];

const logoLabels = [
  "AvePoint",
  "Pax8",
  "CompTIA",
  "ESET",
  "CloudFest",
  "Cloud Expo",
  "MSP Global",
  "Acronis"
];

const portfolioHighlights = [
  {
    title: "Partners in Security Podcast",
    description:
      "Exploring the human aspect of cybersecurity with Ashley Schut from ESET Netherlands.",
    cta: "Listen now",
    href: "https://www.youtube.com/watch?v=XGJdht8OVno"
  },
  {
    title: "Pax8 Beyond Case Study",
    description:
      "Showcasing PeopleRock’s Go-to-market excellence alongside the Pax8 marketplace.",
    cta: "View case study",
    href: "https://www.pax8.com/en-uk/blog/beyond-emea-people-rock-case-study/"
  },
  {
    title: "Cloud Expo Netherlands",
    description:
      "Main-stage talk on data classification, access control, and AI for MSPs.",
    cta: "See recap",
    href: "https://www.cloudexpoeurope.nl/"
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
        <div className="container hero-content">
          <div>
            <span className="badge">Innovate · Strategize · Transform</span>
            <h1 className="hero-title">Helping MSPs lead with clarity and confidence.</h1>
            <p className="hero-subtitle">
              I partner with managed service providers, vendors, and IT leaders to
              streamline cloud strategy, enhance security posture, and execute
              modern Go-to-market programs. Book me for keynotes, advisory, and
              hands-on enablement that moves your business forward.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">
                Work with me
              </Link>
              <Link href="/services" className="button button--ghost">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Expert-led training & workshops</h2>
          <p className="section-lead">
            Boost your team’s expertise with deep-dive sessions on Microsoft 365,
            Azure, modern work, AI, and cybersecurity. Every engagement is tailored
            to your maturity stage and desired outcomes.
          </p>
          <div className="grid grid--two">
            {trainingHighlights.map((item) => (
              <div className="card" key={item}>
                <h3>{item.split(" ")[0]} spotlight</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="badge">Trusted by leading teams</div>
          <h2 className="section-title" style={{ marginTop: "1rem" }}>
            Companies that trusted my service
          </h2>
          <div className="logo-cloud">
            {logoLabels.map((label) => (
              <div key={label} className="logo-card">
                {label}
              </div>
            ))}
          </div>
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
          <div className="grid grid--three">
            {portfolioHighlights.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{ marginTop: "1.5rem" }}>
                  <Link href={item.href} className="button" target="_blank" rel="noreferrer">
                    {item.cta}
                  </Link>
                </div>
              </div>
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
