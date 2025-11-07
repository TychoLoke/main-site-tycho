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
  { href: "/abovethestack", label: "AboveTheStack" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo-mark" onClick={close}>
          <span className="logo-icon">TL</span>
          <span>Tycho Loke</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "nav-link",
                pathname === item.href && "nav-link--active"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="button button--ghost"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="mobile-nav" role="dialog" aria-modal>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
          <button type="button" className="button button--ghost" onClick={close}>
            Close
          </button>
        </div>
      ) : null}
    </header>
  );
}
