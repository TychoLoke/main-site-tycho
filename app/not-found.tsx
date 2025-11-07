import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <div className="container card" style={{ display: 'grid', gap: '1.2rem', textAlign: 'center' }}>
        <span className="tag" style={{ justifySelf: 'center' }}>404</span>
        <h1 style={{ margin: 0 }}>The page you’re looking for has moved.</h1>
        <p>
          Let’s get you back to the work that matters. Explore the latest services, events, and resources designed by Tycho Loke.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/" className="button primary">
            Return home
          </Link>
          <Link href="/contact" className="button secondary">
            Talk to Tycho
          </Link>
        </div>
      </div>
    </section>
  );
}
