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
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-mark">
              Tycho Loke
            </Link>
            <p>
              Helping MSPs and vendors find calm, confident momentum with Microsoft-first strategy, security clarity, and
              storytelling that resonates.
            </p>
          </div>

          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="footer-nav-group">
              <h3>{section.title}</h3>
              <ul>
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

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe for Above The Stack insights on GTM, security, and automation — delivered with practical next steps.</p>
            <form className="newsletter" action="https://formspree.io/f/mwkgygaw" method="post">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input id="footer-email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
              <button type="submit" className="button button--small">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tycho Loke. All rights reserved.</span>
          <div className="footer-bottom-links">
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
