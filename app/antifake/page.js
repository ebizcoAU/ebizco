import AntifakeClient from "./AntifakeClient";

export const metadata = {
  description: "AntiFake uses dynamic QR codes, cryptography and AI data analysis to pinpoint counterfeit goods, protecting your brand, distribution network and customers.",
  alternates: { canonical: "/antifake" },
};

export default function AntifakePage() {
  return <AntifakeClient />;
}
