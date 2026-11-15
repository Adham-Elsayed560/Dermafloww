# Dermaflow AI — Marketing Website

Editorial marketing site for **Dermaflow AI**, an AI operating system built for dermatology, aesthetic, and laser clinics in Egypt (launching with clinics in Mansoura).

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger (pinned & scroll-scrubbed feature scenes)
- Lenis (smooth scroll synchronized with ScrollTrigger via `gsap.ticker`)
- Motion (`motion/react`) for spring UI controls and accordions
- Lucide React icons

## Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Type-check TypeScript
npm run lint

# Build production bundle
npm run build
```

## Architecture
- `src/i18n/` — Bilingual English / Arabic dictionary (`dir="ltr"` / `dir="rtl"`) and language context
- `src/sections/` — Preloader, Navbar, Hero, Problem, Solution, Comparison, Persona, Pricing, Rollout, FAQ, Final CTA, Footer
- `src/scenes/` — Six Dark-Slate & Champagne-Gold feature scenes (WhatsApp 24/7 intake, Laser Pulse Guard with interactive DEMO slider, Ad Budget funnel, Zero Chaos scheduling, 24h Cost Comparison, Customer Journey)
- `src/components/ui/` — Magnetic buttons, 3D tilt cards, custom gold cursor, scroll progress, clip-path editorial images, marquee
- `src/hooks/` — `useReducedMotion` and `useLenisGsap`
- `src/lib/images.ts` — Asset imports supporting WebP overrides in `src/assets/images/`
