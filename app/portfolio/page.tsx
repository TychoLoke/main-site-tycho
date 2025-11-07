import Link from "next/link";

const mediaReels = [
  {
    title: "ESET · Partners in Security",
    description: "Highlighting the human side of cybersecurity and awareness programs.",
    embedUrl: "https://www.youtube.com/embed/tKrXQhlzTOo",
    cta: "Watch on YouTube",
    href: "https://youtu.be/tKrXQhlzTOo?list=TLGGs3T-M0BINnowNzExMjAyNQ"
  },
  {
    title: "Pax8 StoreFronts",
    description: "Marketplace storytelling and storefront strategies that convert.",
    embedUrl: "https://player.vimeo.com/video/1016152554?h=2b87157fc0",
    cta: "View on Vimeo",
    href: "https://vimeo.com/1016152554/2b87157fc0?fl=pl&fe=vl"
  },
  {
    title: "AvePoint Baseline Management Webinar",
    description: "Live enablement for partners rolling out Microsoft 365 baselines.",
    embedUrl: "https://www.youtube.com/embed/8DJX_4rvjJQ",
    cta: "Watch webinar",
    href: "https://www.youtube.com/watch?v=8DJX_4rvjJQ"
  }
];

const portfolioSections = [
  {
    title: "Stages & events",
    summary:
      "Keynotes and panels that translate Microsoft, security, and AI into action for MSP leaders.",
    items: [
      {
        name: "Cloud Expo Netherlands",
        description: "Main-stage talk on the power trio: data classification, access control, and AI.",
        href: "https://www.cloudexpoeurope.nl/",
        action: "Explore event"
      },
      {
        name: "Managed Services Summit Benelux",
        description: "Session on building repeatable service blueprints and high-trust GTM motions.",
        href: "https://managedservicessummit.com/benelux",
        action: "Summit site"
      },
      {
        name: "GTIA Mechelen Meetup",
        description: "Community workshop on security storytelling and Microsoft 365 governance.",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7168835632559519744/",
        action: "View recap"
      },
      {
        name: "CloudFest",
        description: "Delivered the AI & security track for MSPs embracing data-driven services.",
        href: "https://www.cloudfest.com/",
        action: "Event overview"
      }
    ]
  },
  {
    title: "Media & storytelling",
    summary:
      "Podcasts, case studies, and editorial features amplifying partner impact.",
    items: [
      {
        name: "Partners in Security Podcast (ESET)",
        description: "Discussed human-centric security and community activation.",
        href: "https://www.youtube.com/watch?v=XGJdht8OVno",
        action: "Watch episode"
      },
      {
        name: "Pax8 Beyond EMEA Case Study",
        description: "Showcased PeopleRock’s marketplace growth with Pax8.",
        href: "https://www.pax8.com/en-uk/blog/beyond-emea-people-rock-case-study/",
        action: "Read case study"
      },
      {
        name: "MSP Global Social Spotlight",
        description: "Featured insights on channel collaboration and enablement.",
        href: "https://mspglobal.com/",
        action: "Visit MSP Global"
      },
      {
        name: "Tech Degenerates Podcast",
        description: "Shared stories on automation, AI, and the future of MSP marketing.",
        href: "https://techdegen.com/",
        action: "Show page"
      }
    ]
  },
  {
    title: "Advisory & enablement",
    summary:
      "Programs and workshops helping MSPs modernise delivery, GTM, and partner success.",
    items: [
      {
        name: "AvePoint Partner Academy",
        description: "Recurring enablement on Microsoft 365 baselines, automation, and co-sell readiness.",
        href: "https://www.avepoint.com/",
        action: "AvePoint"
      },
      {
        name: "Acronis MSP All-Star Webinar",
        description: "Playbooks for bundling security, backup, and Microsoft 365 protection.",
        href: "https://www.acronis.com/en-us/events/webinar/",
        action: "Request on-demand"
      },
      {
        name: "Portland Den Expert Sessions",
        description: "Live demos and Q&A for MSPs levelling up Microsoft 365 experiences.",
        href: "https://portland.eu/",
        action: "Visit Portland"
      },
      {
        name: "Above The Stack Workshops",
        description: "Community programs blending strategy sprints with AI-driven templates.",
        href: "https://abovethestack.com/",
        action: "Learn more"
      }
    ]
  }
];

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="badge">Portfolio</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          A snapshot of talks, collaborations, and media features
        </h1>
        <p className="section-lead">
          From global stages and community meetups to case studies and podcasts,
          here’s a glimpse into how I help MSPs and tech leaders embrace modern
          work, security, and GTM excellence. Browse the reels, explore themed
          collections, and reach out for a tailored media pack.
        </p>

        <div className="video-grid">
          {mediaReels.map((media) => (
            <article className="video-card" key={media.title}>
              <div className="video-frame">
                <iframe
                  src={media.embedUrl}
                  title={media.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="video-card-body">
                <h3>{media.title}</h3>
                <p>{media.description}</p>
                <Link href={media.href} className="button" target="_blank" rel="noreferrer">
                  {media.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-sections">
          {portfolioSections.map((section) => (
            <section key={section.title} className="portfolio-section">
              <div className="portfolio-section-header">
                <h2>{section.title}</h2>
                <p>{section.summary}</p>
              </div>
              <div className="portfolio-section-grid">
                {section.items.map((item) => (
                  <article className="card" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div style={{ marginTop: "1.25rem" }}>
                      <Link href={item.href} className="button button--ghost" target="_blank" rel="noreferrer">
                        {item.action}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="card" style={{ marginTop: "3rem", padding: "2.5rem" }}>
          <h2 style={{ marginTop: 0 }}>Need proof points for your audience?</h2>
          <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
            I can share tailored clips, session abstracts, and outcome metrics to
            help you pitch internally or promote your event.
          </p>
          <div className="hero-actions">
            <Link href="mailto:info@tycholoke.com?subject=Media%20pack%20request" className="button" target="_blank">
              Request media pack
            </Link>
            <Link href="/events" className="button button--ghost">
              View upcoming events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
