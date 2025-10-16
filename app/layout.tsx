import type { Metadata } from "next";
import "./globals.css";
import { site } from "../site.config"; // root import; adjusts to your tsconfig paths if needed

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.openGraph.url,
    siteName: site.seo.openGraph.siteName,
    images: site.seo.openGraph.image
      ? [{ url: site.seo.openGraph.image }]
      : undefined,
    type: site.seo.openGraph.type as any,
    locale: site.seo.openGraph.locale,
  },
  icons: {
    icon: site.brand.favicon,
  },
  metadataBase: new URL(site.seo.openGraph.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={site.locales.default}>
      <body>{children}</body>
    </html>
  );
}
