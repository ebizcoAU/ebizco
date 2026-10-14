// One place for the company facts that search engines and link previews read:
// page metadata, the sitemap, robots.txt and the Organization structured data.

export const SITE = {
  url: "https://ebizco.com.au",
  name: "eBizco Australia",
  legalName: "Ebizco Australia Pty Ltd",
  abn: "44 091 466 858",
  acn: "091 466 858",
  foundingYear: "1998",
  email: "admin@ebizco.com.au",
  telephone: "+61 412 783 132",
  description:
    "Canberra software company since 1998: AI voice assistants, point of sale, self-hosted smart-lock check-in for hospitality, digital signage, and custom web, mobile and IoT development.",
  headOffice: {
    streetAddress: "29 Farrer Street",
    addressLocality: "Braddon",
    addressRegion: "ACT",
    postalCode: "2612",
    addressCountry: "AU",
  },
  waOffice: {
    streetAddress: "Unit 1/9 Boag Rd",
    addressLocality: "Morley",
    addressRegion: "WA",
    postalCode: "6062",
    addressCountry: "AU",
  },
};

// Every public page, for the sitemap. Add a page here when you add one to the menus.
export const SITE_PAGES = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/team", priority: 0.5, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.6, changeFrequency: "monthly" },
  { path: "/icutv", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ozkie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ozkie/ozlodge", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ozkie/ozlock", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ozkie/ozpms", priority: 0.7, changeFrequency: "monthly" },
  { path: "/antifake", priority: 0.7, changeFrequency: "monthly" },
  { path: "/antifake/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/antifake/features", priority: 0.6, changeFrequency: "monthly" },
  { path: "/antifake/jobs", priority: 0.4, changeFrequency: "monthly" },
  { path: "/antifake/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

// Shared metadata for each section's root layout. `canonical` is set per page, never here,
// because a layout's canonical would be inherited by every page under it.
export const baseMetadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  publisher: SITE.legalName,
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_AU" },
  twitter: { card: "summary_large_image" },
};

const postalAddress = (a) => ({ "@type": "PostalAddress", ...a });

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/assets/img/logo.png`,
  description: SITE.description,
  foundingDate: SITE.foundingYear,
  email: SITE.email,
  telephone: SITE.telephone,
  identifier: [
    { "@type": "PropertyValue", propertyID: "ABN", value: SITE.abn },
    { "@type": "PropertyValue", propertyID: "ACN", value: SITE.acn },
  ],
  address: postalAddress(SITE.headOffice),
  location: [
    { "@type": "Place", name: "Head office", address: postalAddress(SITE.headOffice) },
    { "@type": "Place", name: "WA office", address: postalAddress(SITE.waOffice) },
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer support", email: SITE.email, telephone: SITE.telephone, areaServed: "AU", availableLanguage: ["English", "Vietnamese"] },
  ],
};
