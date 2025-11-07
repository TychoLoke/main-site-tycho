import Link from 'next/link';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { SERVICES } from '../../data/services';

export const metadata = {
  title: 'Services'
};

const DELIVERY_PATTERNS = [
  'Immersive in-person bootcamps and hybrid experiences',
  'Modular virtual sprints with collaborative whiteboards and labs',
  'Executive-ready storytelling assets, toolkits, and measurement frameworks'
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Offerings"
        title="Experiences engineered for clarity and change"
        description="Whether you need a keynote that sparks action or a hands-on programme that upskills teams, every engagement is crafted to deliver measurable outcomes."
      />

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader
            eyebrow="Core services"
            title="Choose the format that fits your moment"
            description="Pick from signature programmes or commission a bespoke experience."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {SERVICES.map((service) => (
              <article key={service.title} className="card" style={{ display: 'grid', gap: '0.9rem' }}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="list-reset" style={{ display: 'grid', gap: '0.5rem' }}>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container card" style={{ display: 'grid', gap: '1.5rem' }}>
          <SectionHeader
            eyebrow="Delivery playbook"
            title="How engagements come to life"
            description="A collaborative four-step process keeps momentum high and stakeholders aligned."
          />
          <ol className="list-reset" style={{ display: 'grid', gap: '1.2rem', counterReset: 'steps' }}>
            {["Discover", "Design", "Deliver", "Amplify"].map((phase, index) => (
              <li
                key={phase}
                style={{
                  display: 'grid',
                  gap: '0.35rem',
                  padding: '1.2rem 1.4rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(10, 6, 30, 0.55)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>Step {index + 1}: {phase}</span>
                <p style={{ margin: 0 }}>
                  {index === 0 &&
                    'Stakeholder interviews, telemetry reviews, and success criteria mapping to ensure we solve the right problem.'}
                  {index === 1 &&
                    'Experience blueprinting with agendas, interaction design, and communications that excite your audience before day one.'}
                  {index === 2 &&
                    'Facilitation, coaching, and delivery with co-hosting options for partner teams and executive stakeholders.'}
                  {index === 3 &&
                    'Post-engagement retros, momentum kits, and measurement dashboards so the change keeps rolling.'}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <SectionHeader
            eyebrow="Flexible formats"
            title="Select how you want to work together"
            description="Mix and match delivery patterns to suit your timeline and teams."
          />
          <ul className="badge-grid">
            {DELIVERY_PATTERNS.map((item) => (
              <li key={item} className="badge">
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="button primary" style={{ justifySelf: 'flex-start' }}>
            Request availability
          </Link>
        </div>
      </section>
    </>
  );
}
