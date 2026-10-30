# Yummys Purple


**Live site:** https://YOUR-USERNAME.github.io/YOUR-REPO/

## About

Yummys Purple is for neighbors looking for a warm, freshly baked snack without a long wait. The page introduces the bakery, highlights three favorites, explains simple ways to order, and provides a contact form layout.

## Design system

### Palette (60-30-10)

| Role | Share | Color | Used for |
| --- | ---: | --- | --- |
| Dominant (60%) | Lavender `#6F46A0` | Deep plum `#21152E` |
| Secondary (30%) | Yellow surfaces `#FFD84D` | Plum surfaces `#372345` |
| Accent (10%) | White text and fields `#FFFFFF` | White text and yellow accents `#FFFFFF` / `#FFD84D` |

### Visual style

**Style chosen:** Simple, natural bakery aesthetic  
**Why I chose it:** The lavender background and open spacing keep the page calm, while yellow padded panels draw attention to the baked goods.

### Contrast check

- Light-mode text `#FFFFFF` on lavender `#6F46A0`: **6.86:1** (passes the 4.5:1 target).
- Text `#2D1B42` on yellow `#FFD84D`: **11.27:1**.
- Dark-mode body text `#FFFFFF` on `#21152E`: **17.34:1**.
- Dark-mode panel text `#FFFFFF` on `#372345`: **14.11:1**.
- Tool used: local WCAG relative-luminance contrast calculation.

## Features

- [x] Mobile-first responsive layout
- [x] Dark mode toggle with saved preference
- [x] Page-load intro timeline with a replay button
- [x] Scroll reveals on each section below the hero
- [x] Scroll-linked progress bar
- [x] Four-photo ube gallery embedded directly in the HTML (no separate image files)

## Built with

- HTML5
- Tailwind CSS browser CDN v4
- JavaScript
- GSAP 3.13.0
- GSAP ScrollTrigger 3.13.0


