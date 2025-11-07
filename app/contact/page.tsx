import Link from 'next/link';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';

export const metadata = {
  title: 'Contact'
};

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: 'hello@tycholoke.com',
    href: 'mailto:hello@tycholoke.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tych0',
    href: 'https://www.linkedin.com/in/tych0'
  },
  {
    label: 'WhatsApp',
    value: '+31 6 39413665',
    href: 'https://wa.me/31639413665'
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s collaborate"
        title="Tell us about your next enablement moment"
        description="Share a few details about the outcomes you’re chasing and we’ll co-design a roadmap to get there."
      />

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="card" style={{ display: 'grid', gap: '1rem' }}>
            <SectionHeader
              eyebrow="Get in touch"
              title="Reach Tycho directly"
              description="Choose the channel that works best for you. Chemistry calls are complimentary and designed to shape the brief."
            />
            <ul className="list-reset" style={{ display: 'grid', gap: '0.85rem' }}>
              {CONTACT_DETAILS.map((detail) => (
                <li key={detail.label}>
                  <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{detail.label}</span>
                  <Link href={detail.href} style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {detail.value}
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem' }}>
              Availability updates land in the newsletter first. Ask to be added when we speak if you’d like quarterly updates.
            </p>
          </div>
          <form
            className="card"
            action="https://formsubmit.co/hello@tycholoke.com"
            method="POST"
            style={{ display: 'grid', gap: '1rem' }}
          >
            <input type="hidden" name="_subject" value="New enquiry from tycholoke.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="name" placeholder="Your name" required aria-label="Your name" />
            <input type="email" name="email" placeholder="Work email" required aria-label="Work email" />
            <input type="text" name="organisation" placeholder="Organisation" aria-label="Organisation" />
            <textarea name="message" placeholder="Tell us about your goals" rows={4} aria-label="Message" required />
            <button type="submit" className="button primary" style={{ justifyContent: 'center' }}>
              Send message
            </button>
            <input type="hidden" name="_next" value="https://tycholoke.com/thanks" />
          </form>
        </div>
      </section>
    </>
  );
}
