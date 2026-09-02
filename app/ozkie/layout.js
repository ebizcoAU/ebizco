import OzkieHeader from "./components/Header";
import OzkieFooter from "./components/Footer";
import "./ozkie.css";

export const metadata = {
  title: "OZKIE — The Sovereign Lock Platform | eBizCo Australia",
  description:
    "OZKIE gives hotels, motels, short-term rentals and homeowners decentralised self-check-in and smart-lock technology — your data, your server, your rules. No third-party cloud, no vendor lock-in.",
  keywords:
    "OZKIE, Sovereign Lock Platform, OZLOCK, OZLODGE, OZPMS, smart lock, hotel self check-in, hospitality technology, data sovereignty, self-hosted",
};

export default function OzkieLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
