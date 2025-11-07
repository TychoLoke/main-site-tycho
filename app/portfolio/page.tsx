import Link from "next/link";

const features = [
  {
    title: "ESET Cyber Security Podcast 2025",
    description:
      "Together with Ashley Schut, I explored the human aspect of cybersecurity and practical awareness programs.",
    href: "https://www.youtube.com/watch?v=XGJdht8OVno",
    action: "Watch episode"
  },
  {
    title: "GTIA Mechelen Meetup",
    description:
      "Delivered insights on data classification and security to the Benelux community, blending strategy with live demos.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7168835632559519744/",
    action: "View recap"
  },
  {
    title: "Cloud Expo Netherlands 2024",
    description:
      "Main-stage session covering data classification, access control, and AI for future-ready MSPs.",
    href: "https://www.cloudexpoeurope.nl/",
    action: "Explore event"
  },
  {
    title: "Expert on Stage at Portland’s Den",
    description:
      "Shared Microsoft 365 expertise and practical customer stories with a packed MSP audience.",
    href: "https://portland.eu/",
    action: "Visit Portland"
  },
  {
    title: "CompTIA EMEA Con Speaker",
    description:
      "Led a session on the Power Trio: Data Classification, Access Control, and AI.",
    href: "https://connect.comptia.org/events/view/comptia-emea-member-and-partner-conference",
    action: "Event details"
  },
  {
    title: "Pax8 Beyond EMEA Case Study",
    description:
      "Collaborated with Pax8 to showcase PeopleRock’s marketplace success at Beyond EMEA in Berlin.",
    href: "https://www.pax8.com/en-uk/blog/beyond-emea-people-rock-case-study/",
    action: "Read case study"
  },
  {
    title: "MSP Global Social Spotlight",
    description:
      "Shared experiences on MSP Global’s social channels, highlighting partner-first strategies.",
    href: "https://mspglobal.com/",
    action: "Visit MSP Global"
  },
  {
    title: "Acronis MSP All-Star Webinar",
    description:
      "Discussed revenue growth opportunities with enhanced Microsoft 365 protection.",
    href: "https://www.acronis.com/en-us/events/webinar/",
    action: "Request on-demand"
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
          work, security, and GTM excellence.
        </p>
        <div className="grid grid--two">
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href={feature.href} className="button" target="_blank" rel="noreferrer">
                  {feature.action}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="alert" style={{ marginTop: "3rem" }}>
          Looking for a specific reference or topic? <a href="mailto:info@tycholoke.com">Drop me a note</a> and I’ll share a
          tailored media pack.
        </div>
      </div>
    </section>
  );
}
