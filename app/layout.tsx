import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Josh Langsam — Builder & Architect",
  description:
    "21-year-old builder shipping AI-powered software for industries that move slow. Co-founder & CTO of Roan Co.",
  keywords: [
    "Josh Langsam",
    "Roan Co",
    "AI agents",
    "full-stack developer",
    "legal tech",
    "SaaS",
    "Elixir",
    "Next.js",
    "Claude API",
  ],
  authors: [{ name: "Josh Langsam" }],
  creator: "Josh Langsam",
  metadataBase: new URL("https://joshlangsam.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Josh Langsam — Builder & Architect",
    description:
      "21-year-old builder shipping AI-powered software for industries that move slow.",
    type: "website",
    siteName: "Josh Langsam",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Langsam — Builder & Architect",
    description:
      "21-year-old builder shipping AI-powered software for industries that move slow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>JL</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Josh Langsam",
              jobTitle: "Co-founder & CTO",
              worksFor: {
                "@type": "Organization",
                name: "Roan Co.",
              },
              knowsAbout: [
                "AI Agents",
                "Full-Stack Development",
                "Legal Tech",
                "SaaS",
                "Elixir",
                "TypeScript",
              ],
              url: "https://joshlangsam.com",
            }),
          }}
        />
      </head>
      <body className="grain">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
