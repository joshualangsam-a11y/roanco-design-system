---
name: roan-co-design
description: Use this skill to generate well-branded interfaces and assets for Roan Co. / Josh Langsam's portfolio brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Link `colors_and_type.css` from the root of this skill directly into any `<head>` — it loads Geist, Geist Mono, and DM Serif Display from Google Fonts and declares every token.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick rules of thumb

- Single accent color (#E8735A). No other hues. No gradients as backgrounds.
- Near-black (#0a0a0a) page, #141414 cards, 1px hairline borders at rgba(255,255,255,.06).
- Typography-first. DM Serif Display for displays, Geist for body, Geist Mono for numerals/metrics.
- Border radius 6–9px. No pills, no fully rounded cards.
- No emoji, no glow, no glass. Grain overlay at 2.5% opacity is the only texture.
- Section numbering `01 / 02 / 03 / 04` in mono accent/30 is a signature move.
- Card hover: border warms, lift -4px, accent dash expands from w-12 to w-24.
- Reach for the Portfolio UI Kit at `ui_kits/portfolio/` before building from scratch.
