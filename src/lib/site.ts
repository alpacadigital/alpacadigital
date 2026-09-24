// Single source of truth for business details used across the site,
// metadata, and structured data. Update here and it updates everywhere.
export const site = {
  name: "Alpaca Digital",
  tagline: "Websites That Bring More Leads",
  url: "https://alpacadigital.co",
  founder: "Gates Jones",
  founderFirstName: "Gates",
  // Drop a headshot in /public and set its path here (e.g. "/gates.jpg"). It shows up in
  // the hero, About, and Contact sections. Until then, those spots show initials.
  founderPhoto: null as string | null,
  phone: "(507) 322-8385",
  phoneHref: "tel:+15073228385",
  phoneE164: "+1-507-322-8385",
  email: "hello@alpacadigital.co",
  city: "Rochester",
  region: "MN",
  description:
    "Alpaca Digital builds custom websites, local SEO, and Google Business Profile optimization for local businesses in Rochester, MN, so you get found on Google and your phone rings more.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;
