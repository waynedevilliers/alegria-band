# Alegría! Band Website

A modern, responsive one-page marketing website for Alegría!, a live music band from Nordheim am Main, Germany. Built with Next.js, React, and TypeScript.

**Status**: Draft 1 - Foundation & Layout Complete

---

## Features

✓ **German-only website** - No language switching, optimized for German audience  
✓ **Responsive design** - Optimized for 375px, 768px, 1024px, and 1440px viewports  
✓ **Fast & performant** - Static site generation with Next.js, images optimized  
✓ **GDPR compliant** - Impressum, Datenschutz pages, youtube-nocookie embeds  
✓ **Accessible** - WCAG AA contrast ratios, keyboard navigation, semantic HTML  
✓ **SEO optimized** - Meta tags, OG cards, sitemap, robots.txt  
✓ **Type-safe** - Full TypeScript with strict mode  
✓ **CI/CD pipeline** - GitHub Actions with linting, type checking, building, e2e tests  

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 16.2.12 |
| **Runtime** | React | 18.3.1 |
| **Language** | TypeScript | 7.0.2 |
| **Styling** | Tailwind CSS + @tailwindcss/postcss | 4.3.3 |
| **Testing** | Playwright | 1.62.0 |
| **Linting** | ESLint | 9.0.0 |
| **Formatting** | Prettier | 3.2.5 |
| **Build** | Static export (output: 'export') | - |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Navbar, metadata
│   ├── page.tsx             # Main page (imports 8 section components)
│   ├── globals.css          # Tailwind directives, theme tokens
│   ├── datenschutz/         # GDPR privacy policy
│   └── impressum/           # Legal/TMG info
├── components/
│   ├── navbar.tsx           # Fixed header, logo, nav links, mobile hamburger
│   ├── setlist-modal.tsx    # Repertoire modal (70 songs in 2-column grid)
│   ├── lite-youtube.tsx     # Click-to-play YouTube (youtube-nocookie)
│   ├── photo-lightbox.tsx   # Full-screen image viewer
│   └── sections/            # 8 section components
│       ├── hero-section.tsx
│       ├── intro-section.tsx
│       ├── repertoire-section.tsx
│       ├── die-musiker-section.tsx    # 220×275px band member photos
│       ├── termine-section.tsx        # Tour dates (accordion)
│       ├── fotos-section.tsx          # Image carousel (5 images)
│       ├── videos-section.tsx         # YouTube videos
│       └── kontakt-section.tsx        # Contact & booking
└── data/
    └── content.ts           # All German text content

public/images/
├── logo.jpg                 # Logo (325×153)
├── hero/hero_image.jpeg     # Hero background
├── die_musiker.jpeg         # Band photo
├── band_members/            # Individual member photos
└── foto_section/            # Gallery carousel images (5 images)
```

---

## Setup & Development

### Prerequisites
- Node.js 20.x
- npm or yarn

### Installation

```bash
git clone <repo>
cd alegria-band
npm install
```

### Commands

```bash
npm run dev              # Start dev server (localhost:3000)
npm run build            # Static export to `out/`
npm run start            # Production server
npm run lint             # ESLint check
npm run format           # Auto-format with Prettier
npm run typecheck        # TypeScript check
npm run test:e2e         # Playwright smoke tests
```

---

## Key Features

### Sections

1. **Hero** - Full-width image, band name, tagline, scroll CTA
2. **Bandvorstellung** - Bio text + setlist modal + band members
3. **Die Musiker** - 4 member cards (220×275 images) with roles
4. **Termine** - Tour dates with year-based accordion (2026 open by default)
5. **Fotos** - Image carousel with left/right navigation (5 images)
6. **Videos** - 5 YouTube videos (youtube-nocookie facade)
7. **Kontakt** - Band contact info + booking CTA
8. **Footer** - Legal links (Impressum, Datenschutz)

### Components

- **Setlist Modal**: Opens on button click, shows all songs in 2-column grid
- **Fotos Carousel**: Single image display with prev/next buttons, counter
- **Termine Accordion**: Native `<details>` elements, smooth toggle
- **Navbar**: Sticky header, logo, 6 nav links, mobile hamburger menu

---

## Responsive Breakpoints

- **375px** (small mobile): Single column, reduced padding
- **640px** (mobile landscape): 2 columns start
- **768px** (tablet): 2–3 columns, medium padding
- **1024px** (desktop): 3–4 columns, full padding
- **1440px+** (large desktop): Same, max-width container

---

## GDPR & Legal

✓ **Impressum** (`/impressum`) - Business info per TMG  
✓ **Datenschutz** (`/datenschutz`) - Privacy policy covering:
  - No form data collection (mailto-only)
  - YouTube embeds use youtube-nocookie.com (no cookies until click)
  - User rights disclosure

✓ **No cookie banner** - Not needed (youtube-nocookie facade only)

---

## Accessibility (WCAG AA)

✓ Contrast ratios 9:1+ for all text  
✓ Keyboard navigation (nav, modals, carousel)  
✓ Semantic HTML (proper headings, landmarks)  
✓ Descriptive alt text on all images  
✓ ARIA labels on interactive elements  

---

## Performance

- Images optimized (priority, lazy-load, responsive sizes)
- Static export (no server overhead)
- Smooth scroll behavior
- No external font downloads (system fonts)
- Tailwind CSS minified

---

## Testing

**8 Playwright smoke tests**:
1. Page loads without errors
2. All sections render
3. Navbar nav links work
4. Setlist modal renders
5. Termine accordion works
6. Fotos carousel controls exist
7. Videos section renders
8. Footer legal links exist

Run: `npm run test:e2e`

---

## Deployment

### Vercel (Recommended)
```bash
git push origin feature/rebuild-german-site
# Vercel auto-deploys preview URLs
# Merge to main → Auto-deploys production
```

### Static Hosting
```bash
npm run build
# Upload `out/` folder to any static host
```

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| sangria | #6c1f23 | Primary accent |
| clay | #b4573f | Warm highlights |
| cream | #f5e8d5 | Light bg |
| ink | #28170f | Main text |

---

## Known Limitations

- Gallery images are section headers (need real photos)
- Contact form is email-only (mailto)
- No newsletter/backend integration
- No dark mode

---

## Next Steps

- [ ] Replace gallery images with real band photos
- [ ] Deploy to GitHub Pages / Vercel
- [ ] Test on actual mobile devices
- [ ] Lighthouse audit (target >90)
- [ ] DNS / domain setup
- [ ] Optional: Newsletter signup, analytics

---

**Last Updated**: 2026-07-29  
**Status**: Draft 1 - Foundation Complete  
**Next Phase**: User testing, deployment, real gallery photos
