## quote-box

**Size**: 700×600px, portrait-ish. Rendered at `background-size: cover; background-position: center` inside a narrow sidebar widget (roughly 350–400px wide on desktop) with 80px vertical / 30px horizontal padding, and a dark navy overlay is applied automatically on top (`rgba(7, 26, 62, 0.7)`) — so **the image will always be seen through a heavy dark-blue tint**, don't rely on the image's own color or brightness coming through clearly. White text ("Have Any Query?") and a call-to-action button are centered on top, so keep the composition reasonably centered/uncluttered rather than having a critical subject at the edges (edges are more likely to be cropped on narrow viewports).

**Description**: A professional office/consulting scene that works well under a dark overlay — e.g. a support/consultant on a call, or hands on a laptop/tablet with soft ambient lighting, suggesting "we're here to help." Warm or neutral tones are fine since the navy overlay will mute them anyway. Should feel approachable and service-oriented, consistent with the "Have Any Query? Get A Quote" CTA copy sitting on top of it.

**Explicit exclusions**: no readable text or logos baked into the photo (the overlay text is added by the site, not the image), no faces looking directly/aggressively into camera close-up (keep it a bit more ambient/environmental so the overlaid text stays legible), no bright white background (fights with the white CTA button/text on top).

**Where it goes**: drop the finished file at `public/assets/img/widget/quote-box.jpg`. No code changes needed — `app/(main)/service-details/page.js` already references this exact path via `data-bg-src="/assets/img/widget/quote-box.jpg"`. Just tell me when it's dropped in and I'll verify it renders.
