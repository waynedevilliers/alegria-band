# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Alegría!** is a bilingual (German/English) one-page website for a live band from Nordheim am Main, Germany. The site showcases the band's music, members, videos, and provides booking contact information.

- **Stack**: Next.js 16, React 18, TypeScript 7, Tailwind CSS 3
- **Deployment**: Static site with no backend or database
- **Key Features**: Bilingual content, YouTube embed gallery, photo lightbox, smooth scrolling navigation

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm build

# Start production server
npm start

# Lint code (ESLint with Next.js config)
npm run lint

# Type checking
npx tsc --noEmit
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main single-page application (all sections)
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   ├── language-toggle.tsx    # Language switcher (DE/EN)
│   ├── lite-youtube.tsx       # Lazy-loading YouTube embed wrapper
│   └── photo-lightbox.tsx     # Full-screen image gallery with keyboard nav
└── data/
    └── content.ts         # All text content (bilingual strings)

public/
└── images/               # Static image assets

Configuration files:
- tailwind.config.ts      # Custom color palette, fonts, shadows
- tsconfig.json          # TypeScript configuration with @ path alias
- .eslintrc.json         # ESLint extends next/core-web-vitals
- next.config.js/mjs     # Next.js configuration
- postcss.config.mjs      # PostCSS with Tailwind/Autoprefixer
```

## Architecture & Key Patterns

### Single-Page Application
All content lives in `src/app/page.tsx` as a single component with multiple sections anchored by id (hero, about, band, videos, photos, contact). This is intentional for a portfolio-style marketing site.

### Bilingual Content System
- Language state managed via `useState<Language>("de")` in the root page component
- All text lives in `src/data/content.ts` organized by section and language
- Language switching recalculates display strings via `useMemo` to avoid re-renders
- Add new strings by extending the `content` object with both language variants

**To add a new section with bilingual text:**
1. Add entry to `src/data/content.ts` with `de` and `en` keys
2. Reference it in `page.tsx` via `t.sectionName.key`
3. Language toggle will automatically make it available in both languages

### Component Patterns

**LanguageToggle** — Stateless button group that accepts current language and onChange callback. Used in the fixed header.

**LiteYouTube** — Lazy-loads iframe on click to avoid unnecessary requests. Fetches thumbnail from YouTube's CDN, replaces with embed on activation.

**PhotoLightbox** — Full-screen overlay gallery with keyboard navigation (arrow keys to navigate, ESC to close). Works with modulo arithmetic to loop through images.

### Styling Approach
- **Framework**: Tailwind CSS with custom color palette
- **Colors**: Sangria, clay, terracotta, cream, sand, ink (defined in `tailwind.config.ts`)
- **Fonts**: Georgia serif for display headings, system sans-serif for body
- **Shadows**: Custom `shadow-glow` for cards (rgba sangria with 0.28 opacity)
- **Responsive**: Breakpoints at 1024px (lg), 768px (md), and 640px (sm) — TailwindCSS defaults

No CSS modules or scoped styles — all Tailwind utility classes.

### Performance Considerations
- **Image loading**: Images under the fold use `loading="lazy"` to defer requests
- **Hero image**: Uses `priority` and is set as `fill` for responsive sizing
- **YouTube**: Lazy embedded only when user clicks play button
- **Smooth scrolling**: `scroll-behavior: smooth` in globals.css

## Adding Content

### New Band Member
Edit `src/data/content.ts`:
```typescript
{
  name: "Member Name",
  role: { de: "Instrument, Role", en: "Instrument, Role" },
  imageAlt: "Member Name description",
}
```
Image references the shared `heroImage` — update actual images in the gallery array and map in the band section.

### New Video
Add YouTube ID to `content.videos.items` array in `src/data/content.ts`. LiteYouTube component handles the rest.

### New Gallery Images
Update the `galleryImages` array in `page.tsx`. Provide actual image paths and alt text. PhotoLightbox automatically uses these.

## Color Palette (Tailwind)

- **sangria** (#6c1f23) — Primary accent, used for dark backgrounds and borders
- **clay** (#b4573f) — Warm accent for text highlights
- **terracotta** (#c96d45) — Secondary warm tone
- **cream** (#f5e8d5) — Light background, hero CTA button
- **sand** (#ead7c1) — Lighter sand tone for hover states
- **ink** (#28170f) — Dark text

## Git Workflow

Follow the global CLAUDE.md rules:
- Work on feature branches (`feature/description`, `fix/description`)
- Create PRs before merging
- All commits should pass `npm run lint` and type checking
- No direct commits to main

## Known Limitations & Future Improvements

- Gallery currently uses the same hero image for all items — should be updated with actual band photos
- No animation library beyond Tailwind transforms
- Contact form is email-only (mailto links)
- No analytics or tracking implemented
