// site.config.ts
export const site = {
  brand: {
    name: "Tech24 Agency",
    shortName: "Tech24",
    logoPath: "/logo.png",           // /public/logo.png
    favicon: "/favicon.ico",         // already working
    tagline:
      "Affordable websites and digital tools for small businesses across Africa and beyond.",
  },

  contact: {
    whatsappNumberIntl: "35799021195", // used to build wa.me link
    email: "hello@tech24agency.com",
  },

  seo: {
    title: "Tech24 Agency — Affordable websites & digital tools",
    description:
      "Tech24 Agency builds affordable, modern websites with WhatsApp integration, hosting, and domains for SMEs in Africa and beyond.",
    keywords: [
      "Tech24",
      "web design",
      "affordable websites",
      "Kenya",
      "Africa",
      "SME",
      "WhatsApp integration",
    ],
    openGraph: {
      url: "https://tech24agency.com",
      siteName: "Tech24 Agency",
      image: "/og-image.png", // optional, place in /public if you add it
      type: "website",
      locale: "en",
    },
  },

  links: {
    primaryCta: "https://wa.me/35799021195",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/tech24kenya/" },
      { label: "Facebook",  href: "https://facebook.com/tech24kenya" },
      { label: "TikTok",    href: "https://tiktok.com/@tech24kenya" },
      { label: "X",         href: "https://x.com/tech24kenya" },
    ],
  },

  locales: {
    default: "en",
    supported: ["en"], // extend later
  },

  countries: {
    // plan: one project or subdomain per country
    ke: { label: "Kenya",    subdomain: "ke" },
    be: { label: "Belgium",  subdomain: "be" },
    it: { label: "Italy",    subdomain: "it" },
    cy: { label: "Cyprus",   subdomain: "cy" },
  },

  ui: {
    footerNote: "© {{year}} Tech24 Agency — All rights reserved.",
  },
} as const;

export type SiteConfig = typeof site;
