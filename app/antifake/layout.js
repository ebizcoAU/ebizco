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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,200,300,500,600,700,800"
          rel="stylesheet"
        />
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
