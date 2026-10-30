# Yummys Purple

A responsive one-page site for a neighborhood bakery offering pandesal, ensaymada, cupcakes, pickup, and local delivery.

## Design system

### Palette (60-30-10)

| Role | Share | Light mode | Dark mode | Used for |
| --- | ---: | --- | --- | --- |
| Dominant | 60% | Lavender `#6F46A0` | Deep plum `#21152E` | Page background |
| Secondary | 30% | Sun yellow `#FFD84D` | Card plum `#372345` | Gallery, cards, and panels |
| Accent | 10% | Paper white `#FFFFFF` | Sun yellow `#FFD84D` | Text, fields, and highlights |

The supporting ink color is `#2D1B42`. Color tokens are defined in the Tailwind `@theme` block in `index.html` and reused throughout the page.

### Visual style

**Style chosen:** Minimalism  
**Why I chose it:** Open spacing and clear typography make the bakery information easy to scan, while a restrained set of colors keeps attention on the products.

### Contrast check

- Light-mode body text, white `#FFFFFF` on lavender `#6F46A0`: **6.86:1**.
- Light-mode panel text, ink `#2D1B42` on yellow `#FFD84D`: **11.27:1**.
- Dark-mode body text, white `#FFFFFF` on deep plum `#21152E`: **17.34:1**.
- Dark-mode panel text, white `#FFFFFF` on plum `#372345`: **14.11:1**.
- Tool used: local WCAG relative-luminance contrast calculation.

## Session A features

- Semantic header, navigation list, main content, bakery sections, contact form, and footer.
- Mobile-first layout with `sm:`, `md:`, and `lg:` breakpoints.
- Reusable Tailwind components: `.panel`, `.btn-main`, `.nav-link`, `.field`, and `.eyebrow`.
- Dark mode styles across the page, saved in `localStorage`.

## Built with

- HTML5
- Tailwind CSS browser CDN v4
- JavaScript
- GSAP 3.13.0 and ScrollTrigger 3.13.0
