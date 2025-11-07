import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';

export const metadata = {
  title: 'Portfolio'
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Stories of impact"
        description="A sample of recent programmes and the outcomes they delivered for partners and enterprises."
      />

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <SectionHeader
            eyebrow="In the field"
            title="Selected engagements"
            description="Each project is designed to align with strategic goals while energising the people who make change happen."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {PORTFOLIO_ITEMS.map((item) => (
              <article key={item.title} className="card" style={{ display: 'grid', gap: '0.75rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>{item.client}</span>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: 0 }}>{item.description}</p>
                <p style={{ margin: 0, color: 'var(--accent-secondary)', fontWeight: 600 }}>Impact</p>
                <p style={{ margin: 0 }}>{item.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
