import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { CallToAction } from '../components/CallToAction';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });

export const metadata: Metadata = {
  metadataBase: new URL('https://tycholoke.com'),
  title: {
    default: 'Tycho Loke | Trainer, Speaker & Consultant',
    template: '%s | Tycho Loke'
  },
  description:
    'Elevate your IT enablement moments with Tycho Loke—Microsoft Certified Trainer delivering modern workplace workshops, security experiences, and standout keynotes.',
  keywords: ['Tycho Loke', 'Microsoft trainer', 'Copilot enablement', 'Security workshops', 'Keynote speaker'],
  openGraph: {
    title: 'Tycho Loke | Trainer, Speaker & Consultant',
    description:
      'Elevate your IT enablement moments with Tycho Loke—Microsoft Certified Trainer delivering modern workplace workshops, security experiences, and standout keynotes.',
    url: 'https://tycholoke.com',
    siteName: 'Tycho Loke',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tycho Loke | Trainer, Speaker & Consultant',
    description:
      'Modern workplace enablement, cyber resilience experiences, and storytelling that sticks. Book Tycho for your next workshop or keynote.'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <CallToAction
          title="Design the enablement moment your team still talks about"
          description="Every engagement starts with a collaborative blueprint session so we can tailor the experience to your culture, tech stack, and success measures."
          primaryLabel="Book a chemistry call"
          primaryHref="/contact"
          secondaryLabel="Download capability deck"
          secondaryHref="https://assets.zyrosite.com/AGBvkQwnDkSnMRLG/Tycho-Loke-Capability-Deck.pdf"
        />
        <SiteFooter />
      </body>
    </html>
  );
}
