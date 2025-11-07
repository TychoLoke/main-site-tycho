import Link from 'next/link';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { StatHighlights } from '../components/StatHighlights';
import { EVENTS } from '../data/events';
import { EXPERIENCE } from '../data/experience';
import { HIGHLIGHTS } from '../data/highlights';
import { SERVICES } from '../data/services';

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Microsoft Certified Trainer"
        title="Elevate every workshop, keynote, and enablement moment"
        description="Tycho Loke helps organisations adopt Microsoft 365 and Copilot, build cyber resilience, and tell technology stories that spark action."
        actions={
          <>
            <Link href="/contact" className="button primary">
              Plan your session
            </Link>
            <Link href="/services" className="button secondary">
              Explore services
            </Link>
          </>
        }
      />

      <section>
        <div className="container">
          <StatHighlights items={HIGHLIGHTS} />
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader
            eyebrow="How we help"
            title="Training, speaking, and consulting designed for momentum"
            description="Purpose-built experiences that blend technical expertise with storytelling that lands, so your teams act on what they learn."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {SERVICES.map((service) => (
              <article key={service.title} className="card" style={{ display: 'grid', gap: '0.9rem' }}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="list-reset" style={{ display: 'grid', gap: '0.65rem' }}>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-secondary)' }}>•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader
            eyebrow="Recent highlights"
            title="Where Tycho has been creating impact"
            description="From enterprise bootcamps to community conferences, every engagement is built to be inclusive, actionable, and energising."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {EXPERIENCE.map((item) => (
              <article key={item.year + item.role} className="card" style={{ display: 'grid', gap: '0.75rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>
                  {item.year}
                </span>
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  <h3 style={{ margin: 0 }}>{item.role}</h3>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{item.organisation}</span>
                </div>
                <ul className="list-reset" style={{ display: 'grid', gap: '0.5rem' }}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight} style={{ color: 'var(--text-muted)' }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container card" style={{ display: 'grid', gap: '2rem' }}>
          <SectionHeader
            eyebrow="Upcoming"
            title="Events and programmes on the calendar"
            description="Secure your seats early or co-create a private stop tailored to your audience."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {EVENTS.map((event) => (
              <article key={event.title} style={{ display: 'grid', gap: '0.6rem' }}>
                <h3 style={{ margin: 0 }}>{event.title}</h3>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{event.date}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{event.location}</span>
                <p style={{ margin: 0 }}>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '1.5rem', textAlign: 'center' }}>
          <SectionHeader
            align="center"
            eyebrow="Trusted by leaders"
            title="“Tycho brings the energy of a keynote and the rigour of a consultant.”"
            description="Feedback from CIOs, communications directors, and MCT peers consistently highlights how Tycho turns complex technology into compelling action."
          />
          <Link href="/portfolio" className="button secondary" style={{ justifySelf: 'center' }}>
            View case studies
          </Link>
        </div>
      </section>
    </>
  );
}
