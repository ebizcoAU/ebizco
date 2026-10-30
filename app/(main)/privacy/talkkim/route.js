import { bareNoticeResponse } from "@/lib/bareNotice";

// LOAD-PRIV-1: /privacy/talkkim is a route handler, not a page, so the site template (layout, scripts,
// fonts, preloader) never wraps it. Prerendered at build; see lib/bareNotice.js.
export const dynamic = "force-static";

export function GET() {
  return bareNoticeResponse("aura");
}
