import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us",
  description: "Contact eBizco Australia: head office 29 Farrer Street, Braddon ACT 2612, WA office in Morley, phone +61 412 783 132, email admin@ebizco.com.au.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
