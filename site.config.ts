// site.config.ts — mirror of Zenfit shape so layout/page can stay simple
export const site = {
  brand: "Tech24 Agency",
  baseUrl: "https://tech24agency.com",

  metaTitle: "Tech24 Agency — Affordable websites & digital tools",
  metaDescription:
    "Tech24 Agency builds affordable, modern websites with WhatsApp integration, hosting, and domains for SMEs in Africa and beyond.",

  address: "Limassol, Cyprus",
  contact: {
    phone: "+357 99 021195",
    whatsapp: "35799021195", // used by page.tsx to build wa.me
    email: "hello@tech24agency.com",
  },

  // Works with Zenfit’s page.tsx social mapping (string map or array of {name, href})
  socials: {
    instagram: "https://www.instagram.com/tech24kenya/",
    facebook: "https://facebook.com/tech24kenya",
    tiktok: "https://tiktok.com/@tech24kenya",
    x: "https://x.com/tech24kenya",
    // googleBusiness: "" // add later if needed
  },
} as const;

export type SiteConfig = typeof site;
