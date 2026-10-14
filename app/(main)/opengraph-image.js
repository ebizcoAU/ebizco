import { ogCard, ogSize } from "@/lib/og";

export const alt = "eBizco Australia — software for hospitality and small business";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "eBizco Australia · since 1998",
    title: "Software for hospitality & small business",
    subtitle: "AI voice assistants, point of sale, self-hosted smart-lock check-in and custom development. Braddon ACT.",
    accent: "#4D8BFF",
  });
}
