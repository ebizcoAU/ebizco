// Central registry of eBizCo's product links.
// Update a product's destination here — every page that links to a product reads from this file.

export const PRODUCTS = {
  ozlodge: {
    id: "ozlodge",
    name: "OZLODGE",
    tagline: "Hospitality Automation",
    href: "/ozkie/ozlodge",
    external: false,
  },
  ozlock: {
    id: "ozlock",
    name: "OZLOCK",
    tagline: "Residential Smart Lock",
    href: "/ozkie/ozlock",
    external: false,
  },
  ozpms: {
    id: "ozpms",
    name: "OZPMS",
    tagline: "Enterprise Property Management",
    href: "/ozkie/ozpms",
    external: false,
  },
  icutv: {
    id: "icutv",
    name: "ICUTV",
    tagline: "Pay-Per-Play Digital Signage",
    href: "/icutv",
    external: false,
  },
  antifake: {
    id: "antifake",
    name: "AntiFake",
    tagline: "Product Authentication",
    href: "/antifake",
    external: false,
  },
  projman: {
    id: "projman",
    name: "ProjMan",
    tagline: "Construction Workforce Platform",
    href: "http://localhost:5010",
    external: true,
  },
};

// Spread onto a <Link>/<a> so external product links open in a new tab safely:
// <Link href={PRODUCTS.antifake.href} {...externalLinkProps(PRODUCTS.antifake)}>
export function externalLinkProps(product) {
  return product.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
