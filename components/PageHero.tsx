import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section style={{ paddingTop: '4.5rem', paddingBottom: '3rem' }}>
      <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '60rem' }}>
        {eyebrow && <span className="tag">{eyebrow}</span>}
        <h1 style={{ marginBottom: '0.25rem' }}>{title}</h1>
        {description && <p className="lead">{description}</p>}
        {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>{actions}</div>}
      </div>
    </section>
  );
}
