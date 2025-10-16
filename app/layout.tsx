import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "../site.config";

// Optional: browser tab color / PWA accent
export const viewport: Viewport = { themeColor: "#111111" };

// ---- FIX: derive OGType safely (exclude string from the union) ----
type OpenGraphObject = Exclude<NonNullable<Metadata["openGraph"]>, string>;
type OGType = OpenGraphObject extends { type?: infer T } ? T : never;

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  keywords: [...site.seo.keywords], // resolves readonly -> mutable array
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.openGraph.url,
    siteName: site.seo.openGraph.siteName,
    images: site.seo.openGraph.image
      ? [{ url: site.seo.openGraph.image, width: 1200, height: 630 }]
      : undefined,
    type: site.seo.openGraph.type as OGType, // ✅ no 'any', no error
    locale: site.seo.openGraph.locale,
  },
  icons: { icon: site.brand.favicon },
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
