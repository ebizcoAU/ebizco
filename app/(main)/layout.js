import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "eBizCo AU - IT Solution & Service Provider",
  description:
    "eBizCo AU - IT Solution & Service Provider. Turnning your business vision to online reality. We provide full cloud based application development platforms and deployment, a one stop shop with all the IT services.",
  keywords:
    "eBizCo AU - IT Solution & Service Provider, digital marketing, cloud services, software development, virtual servers, app development, Perth, Western Australian, factory automation, embedded control, logistic, ecommerce, online store.",
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
    <html lang="en" className="no-js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&family=Fira+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
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
