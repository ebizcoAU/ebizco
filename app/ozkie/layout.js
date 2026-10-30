import OzkieHeader from "./components/Header";
import OzkieFooter from "./components/Footer";
import "./ozkie.css";
import { baseMetadata } from "@/lib/site";

export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, siteName: "OZKIE by eBizco Australia" },
  title: {
    default: "OZKIE — The Sovereign Lock Platform | eBizco Australia",
    template: "%s | OZKIE",
  },
  description:
    "OZKIE gives hotels, motels, short-term rentals and homeowners decentralised self-check-in and smart-lock technology — your data, your server, your rules. No third-party cloud, no vendor lock-in.",
  keywords:
    "OZKIE, Sovereign Lock Platform, OZLOCK, OZLODGE, OZPMS, smart lock, hotel self check-in, hospitality technology, data sovereignty, self-hosted",
};

export default function OzkieLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        {/* LOAD-PRIV-1: self-hosted fonts (public/assets/fonts, font-display: swap), no Google requests; a stalled
            fonts.googleapis.com used to leave the page blank. */}
        <link rel="stylesheet" href="/assets/fonts/ozkie-fonts.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
      </head>
      <body className="ozkie">
        <OzkieHeader />
        {children}
        <OzkieFooter />
      </body>
    </html>
  );
}
