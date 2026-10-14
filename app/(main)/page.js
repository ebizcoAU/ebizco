import HomeClient from "./HomeClient";
import { SITE } from "@/lib/site";

export const metadata = {
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}
