import Link from 'next/link';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { EVENTS } from '../../data/events';

export const metadata = {
  title: 'Events'
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="On tour"
        title="Workshops, keynotes, and community events"
        description="Secure a spot at an upcoming activation or invite Tycho to design a private stop for your organisation."
        actions={
          <Link href="/contact" className="button primary">
            Partner on an event
          </Link>
        }
      />

      <section>
        <div className="container card" style={{ display: 'grid', gap: '2rem' }}>
          <SectionHeader
            eyebrow="Calendar"
            title="Upcoming engagements"
            description="Public and partner-hosted moments you can join or sponsor."
          />
          <div className="grid" style={{ gap: '1.8rem' }}>
            {EVENTS.map((event) => (
              <article key={event.title} style={{ display: 'grid', gap: '0.65rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: 0 }}>{event.title}</h3>
                  <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{event.date}</span>
                </div>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{event.location}</span>
                <p style={{ margin: 0 }}>{event.description}</p>
                {event.link ? (
                  <Link href={event.link} className="button secondary" target="_blank" rel="noreferrer">
                    Reserve seats
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
