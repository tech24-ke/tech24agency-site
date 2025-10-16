// /app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/site.config";

// Use a hero or dedicated OG (1200x630 recommended)
const ogImage = "/og-image.png"; // put one in /public when ready

// Theme color (kept same simple export style as Zenfit)
export const viewport = { themeColor: "#10B981" };

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.baseUrl,
    siteName: site.brand,
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.brand}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: [ogImage],
  },
  metadataBase: new URL(site.baseUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon primary + alternate (PNG since we have /logo.png, not SVG) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body>{children}</body>
    </html>
  );
}
