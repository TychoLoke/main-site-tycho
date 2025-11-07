import Link from 'next/link';
import { NAV_LINKS } from '../data/navigation';

export function SiteFooter() {
  return (
    <footer
      style={{
        padding: '3rem 1.5rem 4rem',
        background: 'rgba(10, 6, 30, 0.85)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '40rem' }}>
          <span className="tag">Let’s collaborate</span>
          <h2 style={{ margin: 0 }}>Ready to energise your next enablement moment?</h2>
          <p>
            Whether you need a Copilot pilot, a security awareness experience, or a keynote that lands, Tycho brings
            actionable energy and inclusive storytelling to every engagement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="mailto:hello@tycholoke.com" className="button primary">
              hello@tycholoke.com
            </Link>
            <Link href="https://www.linkedin.com/in/tych0" className="button secondary" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </Link>
          </div>
        </div>
        <div style={{ display: 'grid', gap: '1.2rem' }}>
          <h3 style={{ margin: 0 }}>Explore</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 2rem' }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p style={{ color: 'rgba(245, 246, 255, 0.45)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Tycho Loke. Crafted with care using Next.js &amp; React, deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
