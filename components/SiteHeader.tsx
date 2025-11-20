"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/experiences", label: "Experiences" },
  { href: "/contact", label: "Contact" }
];

const primaryCta = { href: "/contact", label: "Start a project" };

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggle = () => setOpen((previous) => !previous);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo-mark">
          Tycho Loke
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </span>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={clsx("nav-links", open && "nav-links--open")}
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx("nav-link", isActive && "nav-link--active")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href={primaryCta.href} className="button button--small nav-cta">
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
