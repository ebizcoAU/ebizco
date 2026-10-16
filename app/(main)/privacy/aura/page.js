import PrivacyNotice from "../PrivacyNotice";
import { noticeMetadata } from "@/lib/privacyNotices";

export const metadata = noticeMetadata("aura");

export default function Page() {
  return <PrivacyNotice app="aura" />;
}
