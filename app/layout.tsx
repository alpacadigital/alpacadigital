import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Alpaca Digital — Web Design & Development in Rochester, MN",
  description:
    "Alpaca Digital is a boutique web design studio in Rochester, MN. We build fast, modern, custom websites for local businesses. Get a free quote today.",
  keywords: [
    "web design Rochester MN",
    "web development Rochester MN",
    "small business web design",
    "local web designer",
    "Alpaca Digital",
  ],
  openGraph: {
    title: "Alpaca Digital — Web Design & Development",
    description: "Custom websites for local businesses. Fast, modern, and built to convert.",
    type: "website",
    url: "https://alpacadigital.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

