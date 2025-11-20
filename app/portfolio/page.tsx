import Link from "next/link";

const mediaReels = [
  {
    title: "ESET · Partners in Security",
    description:
      "Human-first cybersecurity storytelling with Regional Manager Ashley Schut from ESET Netherlands.",
    embedUrl: "https://www.youtube.com/embed/tKrXQhlzTOo",
    cta: "Watch on YouTube",
    href: "https://youtu.be/tKrXQhlzTOo?list=TLGGs3T-M0BINnowNzExMjAyNQ"
  },
  {
    title: "Pax8 StoreFronts",
    description: "Marketplace storytelling and storefront strategies that convert for MSP partners.",
    embedUrl: "https://player.vimeo.com/video/1016152554?h=2b87157fc0",
    cta: "View on Vimeo",
    href: "https://vimeo.com/1016152554/2b87157fc0?fl=pl&fe=vl"
  },
  {
    title: "AvePoint Baselines Webinar",
    description: "Deep dive into Microsoft 365 baselines, automation, and secure service delivery for partners.",
    embedUrl: "https://www.youtube.com/embed/8DJX_4rvjJQ",
    cta: "Watch webinar",
    href: "https://www.youtube.com/watch?v=8DJX_4rvjJQ"
  }
];

const portfolioHighlights = [
  {
    title: "ESET Cyber Security Podcast 2025",
    description:
      "Together with Ashley Schut from ESET Netherlands I talk about the human aspect of cyber security.",
    href: "https://www.youtube.com/watch?v=XGJdht8OVno",
    action: "Listen to episode"
  },
  {
    title: "GTIA Mechelen Meetup February 2025",
    description:
      "Shared data classification and security insights with the GTIA Benelux community to inspire actionable change.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7168835632559519744/",
    action: "Event recap"
  },
  {
    title: "Cloud Expo Netherlands 2024",
    description:
      "Main-stage session covering data classification, access control, and AI at the largest Cloud Expo in the Netherlands.",
    href: "https://www.cloudexpoeurope.nl/",
    action: "Explore Cloud Expo"
  },
  {
    title: "Expert On Stage at Portland's Den 2024",
    description:
      "Shared Microsoft 365 experiences and best practices while engaging with a packed room of MSP innovators.",
    href: "https://portland.eu/",
    action: "Discover Portland"
  },
  {
    title: "Speaker at CompTIA EMEA Con 2024",
    description:
      "Delivered 'The Power Trio: Data Classification, Access Control, and AI' for CompTIA members in London, UK.",
    href: "https://connect.comptia.org/events/view/comptia-emea-members-and-partners-conference",
    action: "About CompTIA EMEA Con"
  },
  {
    title: "Case Study Pax8 Beyond EMEA 2024",
    description:
      "Produced a large-scale case study for Pax8 Beyond EMEA in Berlin that showcased PeopleRock's partner success story.",
    href: "https://www.pax8.com/en-uk/blog/beyond-emea-people-rock-case-study/",
    action: "View case study"
  },
  {
    title: "Social segment for MSP Global",
    description:
      "Shared MSP Global experiences through LinkedIn and Instagram interviews that captured the event's energy.",
    href: "https://mspglobal.com/",
    action: "Visit MSP Global"
  },
  {
    title: "Case Study Pax8",
    description:
      "Represented PeopleRock in a partner success story detailing our collaboration with industry leader Pax8.",
    href: "https://www.pax8.com/",
    action: "Visit Pax8"
  },
  {
    title: "AvePoint Baselines Webinar",
    description:
      "Hosted a partner enablement webinar on AvePoint Baselines to align automation, governance, and compliance.",
    href: "https://www.youtube.com/watch?v=8DJX_4rvjJQ",
    action: "Watch webinar"
  }
];

export default function PortfolioPage() {
  return (
    <section className="section section--halo">
      <div className="container">
        <span className="badge">Portfolio</span>
        <h1 className="section-title" style={{ marginTop: "1rem" }}>
          A snapshot of talks, collaborations, and media features
        </h1>
        <p className="section-lead">
          Curated reels, sessions, and collaborations that show how strategy and
          storytelling land on stage. Browse, share with your team, and if you
          need a tailored media pack just ask.
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
          <section className="portfolio-section">
            <div className="portfolio-section-header">
              <h2>Featured engagements</h2>
              <p>
                A curated collection of recent talks, collaborations, and media moments that highlight how I partner with MSPs
                and vendors.
              </p>
            </div>
            <div className="portfolio-section-grid">
              {portfolioHighlights.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.href ? (
                    <div style={{ marginTop: "1.25rem" }}>
                      <Link href={item.href} className="button button--ghost" target="_blank" rel="noreferrer">
                        {item.action ?? "Learn more"}
                      </Link>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="card card--spotlight" style={{ marginTop: "3rem", padding: "2.5rem" }}>
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
