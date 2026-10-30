import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { SITE, baseMetadata, organizationJsonLd } from "@/lib/site";

export const metadata = {
  ...baseMetadata,
  title: {
    default: "eBizco Australia — Software for Hospitality & Small Business",
    template: "%s | eBizco Australia",
  },
  description: SITE.description,
  icons: {
    icon: [
      { url: "/assets/img/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/img/favicons/apple-icon-180x180.png",
  },
  manifest: "/assets/img/favicons/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className="no-js">
      <head>
        {/* LOAD-PRIV-1: self-hosted fonts (public/assets/fonts, font-display: swap), no Google requests; a stalled
            fonts.googleapis.com used to leave the page blank for minutes. */}
        <link rel="stylesheet" href="/assets/fonts/ebizco-fonts.css" />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        {/* LOAD-PRIV-1: main.js hides the preloader only on window "load", which a slow third party can hold for
            minutes. Hide it on DOMContentLoaded, and after 3 s whatever happens. */}
        <script dangerouslySetInnerHTML={{ __html: `(function(d){function h(){var p=d.querySelector(".preloader");if(p)p.style.display="none"}d.addEventListener("DOMContentLoaded",h);setTimeout(h,3000)})(document)` }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Header />
        {children}
        <Footer />

        <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/app.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/layerslider.utils.js" strategy="afterInteractive" />
        <Script src="/assets/js/layerslider.transitions.js" strategy="afterInteractive" />
        <Script src="/assets/js/layerslider.kreaturamedia.jquery.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
