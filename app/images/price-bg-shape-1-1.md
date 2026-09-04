## price-bg-shape-1-1

**Size**: 600×600px, square, **PNG with a transparent background** (this is not a photo — it needs an alpha channel). It's absolutely positioned to fill an entire pricing card (`width: 100%; height: 100%`) at `background-size: cover`, layered on top of a solid theme-blue fill (`--theme-color: #0E5AF2`) that only becomes visible when that card is hovered or centered in the carousel. So design it as a **decorative overlay pattern**, not a standalone image — it needs to look good sitting on top of solid blue.

**Description**: A soft, abstract decorative motif in white/very-light tones at low opacity (roughly 10–25% white, or thin white outline linework) — think gentle overlapping circles, a faint wave/blob shape in one corner, or a sparse dot-grid, similar to the subtle "confetti" or "bubble" accents common on SaaS pricing cards. It should read as a light texture over the blue card background, not a hard-edged graphic that competes with the plan name/price text sitting on top of it.

**Explicit exclusions**: no text, no logos, no photographic content, no dark colors or opaque fills (must stay mostly transparent so the blue card color shows through), no busy detail in the center (that's where the plan title/price/feature list render).

**Where it goes**: drop the finished file at `public/assets/img/shape/price-bg-shape-1-1.png`. No code changes needed — `app/(main)/price-plan/page.js` already references this exact path (used on all four pricing cards) via `data-bg-src="/assets/img/shape/price-bg-shape-1-1.png"`. Just tell me when it's dropped in and I'll verify it renders.
