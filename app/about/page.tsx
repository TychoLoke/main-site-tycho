import Link from 'next/link';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { EXPERIENCE } from '../../data/experience';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Tycho"
        title="Trainer, storyteller, and enabler of modern work"
        description="I help teams unlock Microsoft technology with programmes that blend human-centred design, inclusive storytelling, and pragmatic technical depth."
        actions={
          <Link href="/contact" className="button primary">
            Start a project
          </Link>
        }
      />

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader
            eyebrow="Philosophy"
            title="Enablement should feel like a shared win"
            description="From the first discovery call to the final retro, my work is anchored in co-creation. We align on the change you need, co-design the experience, and measure the momentum afterwards."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <article className="card" style={{ display: 'grid', gap: '0.75rem' }}>
              <h3>Inclusive by design</h3>
              <p>
                Every session is crafted to be accessible for neurodiverse audiences, with multiple interaction modes, varied pace, and assets that work online or offline.
              </p>
            </article>
            <article className="card" style={{ display: 'grid', gap: '0.75rem' }}>
              <h3>Technology with context</h3>
              <p>
                Demos and labs mirror your tenant, policies, and frontline realities so attendees can apply what they learn as soon as they leave the room.
              </p>
            </article>
            <article className="card" style={{ display: 'grid', gap: '0.75rem' }}>
              <h3>Momentum beyond the day</h3>
              <p>
                You receive toolkits, messaging, and measurement frameworks that help leaders sustain the change long after the keynote or workshop ends.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader eyebrow="Experience" title="Snapshots from the journey so far" />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {EXPERIENCE.map((item) => (
              <article key={item.year} className="card" style={{ display: 'grid', gap: '0.65rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>
                  {item.year}
                </span>
                <h3 style={{ margin: 0 }}>{item.role}</h3>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{item.organisation}</span>
                <ul className="list-reset" style={{ display: 'grid', gap: '0.45rem' }}>
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
