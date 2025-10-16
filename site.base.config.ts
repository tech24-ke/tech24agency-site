// ✅ Base Tech24 config schema (clone for each country site)

export const site = {
  // Required by layout.tsx
  locales: { default: "" }, // e.g. "it", "fr", "en"

  brand: {
    name: "", // e.g. "Tech24 Italia"
    shortName: "Tech24",
    logoPath: "/logo.png",
    favicon: "/favicon.ico",
    tagline: "", // country-specific tagline
  },

  contact: {
    whatsappNumberIntl: "", // international format without +
    email: "",
  },

  ui: {
    footerNote: "© {{year}} Tech24 — All rights reserved.",
  },

  links: {
    primaryCta: "",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/tech24kenya/" },
      { label: "Facebook",  href: "https://facebook.com/tech24kenya" },
      { label: "TikTok",    href: "https://tiktok.com/@tech24kenya" },
      { label: "X (Twitter)", href: "https://x.com/tech24kenya" },
    ],
  },

  countries: {
    // Use ISO code as key (IT, BE, KE, etc.)
    XX: {
      subdomain: "",             // e.g. "it"
      whatsappNumberIntl: "",    // same as above
      wa: "",                    // duplicate field kept for lib compatibility
    },
  },

  seo: {
    title: "",        // e.g. "Tech24 Italia — Siti web e strumenti digitali"
    description: "",  // 1–2 sentences summary
    keywords: [],     // list of 4–6 relevant keywords
    openGraph: {
      url: "",        // full absolute domain (https://xx.tech24agency.com)
      siteName: "",   // matches brand.name
      image: "/og.png",
      type: "website",
      locale: "",     // e.g. it_IT, fr_BE, en_KE
    },
  },
};
