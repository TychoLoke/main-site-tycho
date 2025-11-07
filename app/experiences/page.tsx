import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { EXPERIENCE } from '../../data/experience';

export const metadata = {
  title: 'Experience'
};

const SIGNATURE_MOMENTS = [
  {
    title: 'Keep Secure Tour',
    description: 'Designed and hosted a multi-country security roadshow that blended executive briefings with hands-on labs.'
  },
  {
    title: 'Microsoft Inspire Keynotes',
    description: 'Delivered high-energy keynotes and coached partner speakers to land their AI go-to-market stories with confidence.'
  },
  {
    title: 'European Cyber Game Day',
    description: 'Produced a cross-government tabletop exercise combining threat simulations with communications drills.'
  }
];

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Track record"
        title="Experience that spans technology, storytelling, and community"
        description="A snapshot of programmes, tours, and engagements that have shaped how organisations adopt modern work and security capabilities."
      />

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.2rem' }}>
          <SectionHeader
            eyebrow="Highlights"
            title="Signature moments"
            description="Curated examples of engagements that demonstrate the blend of energy, empathy, and technical fluency Tycho brings."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {SIGNATURE_MOMENTS.map((moment) => (
              <article key={moment.title} className="card" style={{ display: 'grid', gap: '0.75rem' }}>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader eyebrow="Timeline" title="Previous roles & programmes" />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {EXPERIENCE.map((item) => (
              <article key={item.year + item.role} className="card" style={{ display: 'grid', gap: '0.7rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>{item.year}</span>
                <h3 style={{ margin: 0 }}>{item.role}</h3>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{item.organisation}</span>
                <ul className="list-reset" style={{ display: 'grid', gap: '0.5rem' }}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
