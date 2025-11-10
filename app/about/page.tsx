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
    <section className="section section--halo">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-copy">
            <span className="badge">About Tycho</span>
            <h1 className="section-title">
              A passion for IT, innovation, and helping MSPs grow
            </h1>
            <p className="about-lead">
              Channel strategist, solutions engineer, and speaker helping MSPs build resilient Microsoft practices with clarity,
              creativity, and heart.
            </p>
            <div className="stat-grid about-stats">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <figure className="about-portrait">
            <Image
              src="/images/tycho-hero.jpg"
              alt="Tycho Loke in front of a keynote backdrop"
              width={900}
              height={1125}
              sizes="(max-width: 768px) 320px, 420px"
              priority
            />
          </figure>
        </div>

        <div className="about-content">
          <div className="rich-text about-rich-text">
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
              can find me on stage across Europe, leading community initiatives
              as the owner of Above The Stack, co-founding the {" "}
              <Link href="https://www.hackerslove.com" target="_blank">
                Hackers Love Community
              </Link>
              , and collaborating within GTIA councils, podcasts, and case studies.
            </p>
            <p>
              Outside the professional arena I’m an avid traveler, Formula 1
              enthusiast, gamer, and BBQ master — passions that teach me balance,
              focus, and curiosity.
            </p>
          </div>
          <div className="card card--spotlight about-card">
            <h2>Let’s connect & elevate IT together</h2>
            <p>
              Want to explore how I can help your MSP or IT business thrive?
              Let’s talk and tailor a program built around your goals.
            </p>
            <div className="hero-actions about-card-actions">
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
