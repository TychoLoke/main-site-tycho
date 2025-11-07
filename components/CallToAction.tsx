import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CallToAction({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CallToActionProps) {
  return (
    <section>
      <div
        className="container card"
        style={{
          display: 'grid',
          gap: '1.5rem',
          background: 'linear-gradient(140deg, rgba(127, 90, 240, 0.28), rgba(44, 177, 188, 0.18))',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
      >
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <p>{description}</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href={primaryHref} className="button primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link href={secondaryHref} className="button secondary">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
