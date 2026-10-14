import { ogCard, ogSize } from "@/lib/og";

export const alt = "AntiFake — verify genuine products in seconds";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "AntiFake · eBizco Australia",
    title: "Verify genuine products in seconds",
    subtitle: "Dynamic QR codes, cryptography and AI data analysis that pinpoint counterfeit goods.",
    accent: "#3CC48D",
  });
}
