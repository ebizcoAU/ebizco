import AntifakeAboutClient from "./AntifakeAboutClient";

export const metadata = {
  title: "About",
  description: "AntiFake's mission: end counterfeit products and unclear origins in Vietnam with dynamic QR codes and cryptography. Meet the team.",
  alternates: { canonical: "/antifake/about" },
};

export default function AntifakeAboutPage() {
  return <AntifakeAboutClient />;
}
