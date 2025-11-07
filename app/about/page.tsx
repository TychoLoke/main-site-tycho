import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Years in the channel", value: "5+" },
  { label: "Global stages", value: "25" },
  { label: "MSP teams enabled", value: "120+" },
  { label: "Countries collaborated", value: "8" }
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="badge">About Tycho</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          A passion for IT, innovation, and helping MSPs grow
        </h1>
        <div className="about-hero">
          <figure className="about-portrait">
            <Image
              src="/images/tycho-about-placeholder.svg"
              alt="Placeholder portrait for Tycho Loke"
              width={600}
              height={750}
            />
            <figcaption className="image-note">
              Upload a 1200×1500 JPG named <code>tycho-about.jpg</code> inside <code>public/images</code> to replace this image.
            </figcaption>
          </figure>
        </div>

        <div className="stat-grid" style={{ margin: "2.5rem 0" }}>
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span style={{ color: "rgba(226,232,240,0.7)", fontWeight: 500 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="grid" style={{ gap: "3rem" }}>
          <div className="rich-text" style={{ fontSize: "1.05rem", color: "rgba(226,232,240,0.8)" }}>
            <p>
              Technology has always been at the core of my journey. Over the past
              five years in the channel I’ve gone from hands-on engineer to
              trusted advisor for MSPs, ISVs, and vendor communities looking to
              build resilient, profitable practices.
            </p>
            <p>
              Today, I serve as Channel Pre-Sales Solutions Engineer at AvePoint
              where I guide partners through automation, security baselines, and
              Microsoft 365 excellence. Previously at PeopleRock, I blended
              consulting and pre-sales strategy to transform cloud adoption and
              customer experience.
            </p>
            <p>
              Beyond architecture and process, I love connecting with people. You
              can find me on stage across Europe, inside community councils at
              CompTIA, or collaborating on industry podcasts and case studies.
            </p>
            <p>
              Outside the professional arena I’m an avid traveler, Formula 1
              enthusiast, gamer, and BBQ master — passions that teach me balance,
              focus, and curiosity.
            </p>
          </div>
          <div className="card" style={{ alignSelf: "start" }}>
            <h2 style={{ marginTop: 0 }}>Let’s connect & elevate IT together</h2>
            <p style={{ color: "var(--muted)" }}>
              Want to explore how I can help your MSP or IT business thrive?
              Let’s talk and tailor a program built around your goals.
            </p>
            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <Link href="https://www.linkedin.com/in/tycholoke/" className="button" target="_blank">
                Visit LinkedIn
              </Link>
              <Link href="/contact" className="button button--ghost">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="grid grid--two">
          <div className="card">
            <h3>What drives my work</h3>
            <div className="rich-text">
              <ul>
                <li>Demystifying Microsoft cloud and security for business leaders.</li>
                <li>Designing MSP GTM motions that scale beyond founders.</li>
                <li>Translating technical capability into compelling stories.</li>
                <li>Building communities that uplift the entire channel.</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3>Values I bring to every engagement</h3>
            <div className="rich-text">
              <ul>
                <li>Clarity before complexity — always align on outcomes first.</li>
                <li>Partnership over performance — we win together.</li>
                <li>Curiosity and experimentation — test, learn, iterate.</li>
                <li>Human-centric communication — empathy powers change.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
