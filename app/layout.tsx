import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Overpass } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/lib/site";

const display = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-big-shoulders",
});

const text = Overpass({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-overpass",
});

const description =
  "Gates Jones helps Rochester, MN businesses get more customers from Google: websites that turn visitors into calls, local SEO, and Google Business Profile rankings. Get a free visibility audit.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Alpaca Digital | Websites, Local SEO & Google Business Profile in Rochester, MN",
  description,
  alternates: { canonical: "/" },
  keywords: [
    "web design Rochester MN",
    "Rochester MN SEO",
    "local SEO Rochester",
    "Google Business Profile optimization",
    "small business website Rochester MN",
    "Alpaca Digital",
    "Gates Jones",
  ],
  openGraph: {
    title: "Be the first call when Rochester searches | Alpaca Digital",
    description,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Be the first call when Rochester searches | Alpaca Digital",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6ebe2" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1714" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  ...(site.phone && { telephone: site.phone }),
  image: `${site.url}/gates.png`,
  logo: `${site.url}/alpaca-logo.png`,
  description,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rochester",
    addressRegion: "MN",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Rochester, Minnesota" },
  knowsAbout: ["Web design", "Local SEO", "Google Business Profile optimization", "Copywriting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
