import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Tycho Loke | MSP Strategist, Speaker & Trainer",
  description:
    "Personal brand site for Tycho Loke offering MSP growth consulting, Microsoft workshops, cybersecurity speaking engagements, and Above the Stack insights.",
  keywords: [
    "Tycho Loke",
    "MSP speaker",
    "Microsoft trainer",
    "cybersecurity consultant",
    "GTM strategist",
    "Above The Stack"
  ],
  metadataBase: new URL("https://tycholoke.com"),
  openGraph: {
    title: "Tycho Loke | Innovate. Strategize. Transform.",
    description:
      "Helping MSPs streamline cloud strategy, enhance security, and drive growth with cutting-edge insights and execution.",
    url: "https://tycholoke.com",
    siteName: "Tycho Loke",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tycho Loke | MSP Strategist, Speaker & Trainer",
    description:
      "Hire Tycho for speaking engagements, workshops, and Above The Stack insights on Microsoft, security, AI, and automation."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
