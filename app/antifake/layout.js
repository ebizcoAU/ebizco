import AntifakeHeader from "./components/Header";
import AntifakeFooter from "./components/Footer";
import "./antifake.css";
import { baseMetadata } from "@/lib/site";

export const metadata = {
  ...baseMetadata,
  applicationName: "AntiFake",
  openGraph: { ...baseMetadata.openGraph, siteName: "AntiFake" },
  title: {
    default: "AntiFake — Verify Genuine Products in Seconds",
    template: "%s | AntiFake",
  },
  description:
    "AntiFake uses dynamic QR-code technology, cryptography and AI data analysis to pinpoint counterfeit goods — safeguarding your brand, distribution network and customers.",
};

export default function AntifakeLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        {/* LOAD-PRIV-1: self-hosted fonts (public/assets/fonts, font-display: swap), no Google requests; a stalled
            fonts.googleapis.com used to leave the page blank. */}
        <link rel="stylesheet" href="/assets/fonts/antifake-fonts.css" />
        <link rel="stylesheet" href="/antifake/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/antifake/assets/css/style.css" />
        <link rel="stylesheet" href="/antifake/assets/css/scheme-01.css" />
        <link rel="stylesheet" href="/antifake/assets/css/coloring.css" />
        <link rel="icon" type="image/png" href="/antifake/assets/img/favicon/favicon-32x32.png" />
      </head>
      <body>
        <div id="wrapper">
          <AntifakeHeader />
          {children}
          <AntifakeFooter />
        </div>
      </body>
    </html>
  );
}
