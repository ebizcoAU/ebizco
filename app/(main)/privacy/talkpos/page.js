import PrivacyNotice from "../PrivacyNotice";
import { noticeMetadata } from "@/lib/privacyNotices";

export const metadata = noticeMetadata("maven");

export default function Page() {
  return <PrivacyNotice app="maven" />;
}
