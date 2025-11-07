"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://abovethestack.com",
    label: "Above The Stack",
    external: true
  }
];

const primaryCta = { href: "/contact", label: "Book Tycho" };

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  const desktopNav = navItems.filter((item) => item.href !== primaryCta.href);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo-mark" onClick={close}>
          <span className="logo-icon">TL</span>
          <span>Tycho Loke</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {desktopNav.map((item) => {
            const isActive = !item.external && pathname === item.href;

            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx("nav-link", isActive && "nav-link--active")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link href={primaryCta.href} className="button button--outline button--small">
            {primaryCta.label}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            <span aria-hidden>
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="mobile-nav" role="dialog" aria-modal>
          <div className="mobile-nav-inner">
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Menu</span>
              <button type="button" className="nav-toggle nav-toggle--close" onClick={close}>
                <span aria-hidden>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="sr-only">Close navigation</span>
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-nav-link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <Link href={primaryCta.href} className="button mobile-nav-cta" onClick={close}>
              {primaryCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
