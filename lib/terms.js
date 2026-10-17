// Terms of Use state, shared by the page, the footer and the sitemap. While EFFECTIVE_DATE is null the
// page is a draft: banner + noindex, no footer link, not in the sitemap (PM 2026-10-17, as the privacy drafts).
// Set it only together with every section's text: the page refuses to build "final" with a section missing.
export const TERMS_EFFECTIVE_DATE = null; // e.g. "1 November 2026"
export const TERMS_DRAFT = !TERMS_EFFECTIVE_DATE;
