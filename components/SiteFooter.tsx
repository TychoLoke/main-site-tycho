import Link from "next/link";

const NAV_SECTIONS = [
  {
    title: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Experiences", href: "/experiences" },
      { label: "Portfolio", href: "/portfolio" }
    ]
  },
  {
    title: "Engage",
    items: [
      { label: "Services", href: "/services" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },
      { label: "Above The Stack", href: "https://abovethestack.com", external: true }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo-mark" aria-label="Tycho Loke">
              <span className="logo-icon">TL</span>
              <span>Tycho Loke</span>
            </div>
            <p style={{ color: "rgba(226, 232, 240, 0.7)", marginTop: "1rem" }}>
              Helping MSPs innovate faster, protect smarter, and build remarkable
              customer experiences across Microsoft, security, and automation.
            </p>
          </div>

          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="section-title" style={{ fontSize: "1.1rem" }}>
                {section.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(226,232,240,0.7)", display: "grid", gap: "0.6rem" }}>
                {section.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="section-title" style={{ fontSize: "1.1rem" }}>
              Newsletter
            </h3>
            <p className="section-lead" style={{ fontSize: "0.95rem" }}>
              Subscribe for Above The Stack insights on GTM, security, and the
              future of managed services.
            </p>
            <form className="newsletter" action="https://formspree.io/f/mwkgygaw" method="post">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
              <button type="submit" className="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tycho Loke. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="mailto:info@tycholoke.com">info@tycholoke.com</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://abovethestack.com" target="_blank" rel="noreferrer">
              Above The Stack
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
