import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { FAQ_ITEMS } from '../../data/faq';

export const metadata = {
  title: 'FAQ'
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Your questions, answered"
        description="The essentials on working with Tycho. Need something else? Reach out and we’ll start the conversation."
      />

      <section>
        <div className="container card" style={{ display: 'grid', gap: '1.5rem' }}>
          <SectionHeader
            eyebrow="Good to know"
            title="What clients ask before we kick off"
            description="Transparency matters. Here are the questions we cover most often during chemistry calls."
          />
          <div className="grid" style={{ gap: '1.25rem' }}>
            {FAQ_ITEMS.map((item) => (
              <article key={item.question} style={{ display: 'grid', gap: '0.45rem' }}>
                <h3 style={{ margin: 0 }}>{item.question}</h3>
                <p style={{ margin: 0 }}>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
