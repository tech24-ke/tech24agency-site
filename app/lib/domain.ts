import { site } from "../../site.config";

export function getCountryFromHost(hostname: string) {
  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts[0] : null;
  const country = Object.entries(site.countries).find(
    ([, cfg]) => cfg.subdomain === subdomain
  );
  return country ? country[0] : null;
}

export function getWhatsAppNumberByCountry(countryCode: string | null) {
  switch (countryCode) {
    case "ke":
      return "254748699460";
    case "be":
      return "32465603546";
    case "it":
      return "393920123456";
    case "cy":
      return "35799021195";
    default:
      return site.contact.whatsappNumberIntl; // fallback
  }
}
