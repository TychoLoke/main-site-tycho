'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS } from '../data/navigation';

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        background: 'rgba(10, 6, 30, 0.75)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1.25rem', gap: '1.5rem' }}>
        <Link href="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 700 }}>
          <span
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(127, 90, 240, 0.9), rgba(44, 177, 188, 0.9))',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}
          >
            TL
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span>Tycho Loke</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Trainer · Speaker · Consultant</span>
          </span>
        </Link>
        <button
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="button secondary"
          style={{ display: 'none' }}
        >
          Menu
        </button>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className={clsx('desktop-nav', { open: isOpen })}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx('nav-link', {
                active: pathname === link.href
              })}
              style={{
                fontSize: '0.98rem',
                color: pathname === link.href ? 'var(--accent-secondary)' : 'var(--text-muted)',
                fontWeight: pathname === link.href ? 600 : 500,
                transition: 'color 150ms ease'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="button primary" style={{ paddingInline: '1.4rem' }}>
            Book a session
          </Link>
        </nav>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .site-header .container {
            flex-wrap: wrap;
          }

          .site-header button.button {
            display: inline-flex !important;
            margin-left: auto;
          }

          .site-header nav.desktop-nav {
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding-top: 1rem;
            gap: 1rem;
          }

          .site-header nav.desktop-nav .button.primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
