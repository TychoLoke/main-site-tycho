import Link from "next/link";

const services = [
  {
    title: "Public speaking",
    description:
      "Dynamic keynotes and panels covering cybersecurity, Microsoft cloud, GTM growth, and the future of managed services.",
    outcomes: [
      "Tailored stories crafted for your audience persona and vertical.",
      "Interactive segments that translate insights into actionable next steps.",
      "Pre- and post-event engagement assets to extend impact."
    ]
  },
  {
    title: "Training & workshops",
    description:
      "Hands-on enablement programs that elevate technical and commercial capabilities inside MSP teams.",
    outcomes: [
      "Deep dives into Microsoft 365, Azure, security baselines, and automation.",
      "Readiness assessments and maturity benchmarking.",
      "Activation kits, templates, and playbooks to sustain adoption."
    ]
  },
  {
    title: "Consultancy",
    description:
      "Strategic advisory on positioning, service design, and operational excellence that keeps MSPs future-ready.",
    outcomes: [
      "GTM strategy including messaging, packaging, and partner marketing.",
      "Security-first service blueprints with measurable value propositions.",
      "Automation roadmaps aligned to customer experience outcomes."
    ]
  }
];

const testimonials = [
  {
    quote:
      "Tycho brings a rare mix of technical depth and storytelling. Our community left with practical templates and renewed energy to evolve their Microsoft services.",
    author: "Community Director",
    company: "European MSP Collective"
  },
  {
    quote:
      "The workshop Tycho delivered transformed our GTM conversations. He helped us reframe value and launch a new security bundle in six weeks.",
    author: "CEO",
    company: "Growth-focused MSP"
  }
];

export default function ServicesPage() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="badge">Services</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          With a passion for technology and strategy, I deliver experiences that
          inspire, empower, and create results.
        </h1>
        <p className="section-lead">
          From keynotes and panels to immersive training and advisory, each
          engagement is intentionally designed to shift mindsets and unlock
          tangible outcomes for MSPs, vendors, and IT teams.
        </p>

        <div className="grid grid--two">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="rich-text">
                <ul>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="divider" />

        <div className="grid grid--two">
          <div className="card">
            <h3>Why work with me?</h3>
            <div className="rich-text">
              <ul>
                <li>Sharp, practical insights that cut through complexity.</li>
                <li>Balance between business strategy and technical execution.</li>
                <li>Trusted by leading MSPs, vendors, and platforms across Europe.</li>
                <li>Engaging, interactive style that sparks meaningful action.</li>
                <li>Every engagement is customized to your desired outcomes.</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3>Signature programs</h3>
            <div className="rich-text">
              <ul>
                <li>Above The Stack — monthly MSP GTM and security intelligence sessions.</li>
                <li>Modern Work Momentum — hybrid training sprint for Microsoft 365 adoption.</li>
                <li>Security Storytelling Lab — messaging accelerator for technical founders.</li>
                <li>Automation Catalyst — blueprinting repeatable onboarding flows.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider" />

        <h2 className="section-title">What clients say</h2>
        <div className="grid grid--two">
          {testimonials.map((testimonial) => (
            <blockquote className="testimonial" key={testimonial.quote}>
              <p>“{testimonial.quote}”</p>
              <p>
                <strong>{testimonial.author}</strong>
                <br />
                {testimonial.company}
              </p>
            </blockquote>
          ))}
        </div>

        <div className="divider" />

        <div className="card" style={{ textAlign: "center", padding: "2.5rem" }}>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Ready to design your next experience?
          </h2>
          <p className="section-lead" style={{ margin: "0 auto 2rem" }}>
            Tell me about your event, team, or initiative and we’ll craft a
            session that delivers momentum and measurable value.
          </p>
          <Link href="/contact" className="button">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
