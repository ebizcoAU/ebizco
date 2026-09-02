# hero-projman-construction

- **Used on:** Homepage hero, Slide 3 (ProjMan) — currently a placeholder gradient + icon, since no real photo exists yet
- **Target file:** `src/assets/img/others/hero-projman-construction.png`
- **Once generated, update:** `web/app/page.js` → `heroSlides[2].image` → `/assets/img/others/hero-projman-construction.png` (this also removes the need for the gradient/hard-hat-icon fallback in the carousel markup — and copy the file into `web/public/assets/img/others/` too, so the dev/build server can serve it)

## Size

1920 x 1080 px (16:9 widescreen), PNG or JPG. The image is displayed full-bleed behind the hero and cropped with `object-fit: cover`, so keep the main subject within the center-safe area (avoid placing anything critical within ~5% of the top/bottom/left/right edges).

## Description

Photorealistic, wide-format hero image for a construction-industry workforce SaaS platform. An active Australian construction site at golden hour, softly blurred scaffolding and steel framework fading into the left of the frame. On the right side of the frame, a construction worker wearing a hard hat and hi-vis vest holds a rugged tablet showing a simple, abstract progress-checklist / verification UI (no readable text), with a subtle glowing geolocation-pin icon overlaid near the tablet.

**Composition:** worker and tablet positioned in the right two-thirds of the frame; the construction site softly blurred and dim on the left third. The left ~40% will be darkened further by a CSS gradient and hold the headline text, so keep that area visually calm.

**Style:** premium B2B SaaS aesthetic, warm golden-hour lighting mixed with a cool deep-blue sky, professional documentary-photography feel, 4K quality. No visible logos, brand names, or readable text anywhere in the image.

**Mood:** verified, transparent, professional workforce integrity.
