import { ogCard, ogSize } from "@/lib/og";

export const alt = "OZKIE — the Sovereign Lock Platform by eBizco Australia";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "OZKIE · eBizco Australia",
    title: "The Sovereign Lock Platform",
    subtitle: "Self-check-in and smart locks for hotels, motels and homes. Your data, your server, your rules.",
    accent: "#D4A64A",
  });
}
