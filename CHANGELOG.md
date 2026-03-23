# Changelog

## 2024-06-09

### Added

- **Litestack Landing Page Foundation**  
  - Updated project branding, positioning, and core content for Litestack (Bubble dev agency).
  - Implemented sections: Hero, Why Litestack, What We Build, Process, Results, and Final CTA.
  - Responsive, sticky Navbar with mobile-friendly CTA and anchor navigation.

### Changed

- **Navbar**: Now features brand, navigation links, prominent CTAs, sticky/fixed styles, and mobile enhancements.
- **HeroSection**: New headline, subheadline, primary and secondary CTA using accent/brand colors.
- **Section Components**: Added and composed modular sections for Why Litestack, What We Build, Process, Results, and CTA banner.
- **Globals and Tailwind**:  
  - Updated color palette for deep blue, purple accent, off-white backgrounds as per new design guidelines.
  - Modernized font stack (Inter, Manrope).
  - Improved utility classes, reusable shadows, and gradients for consistent visual rhythm.

### Files Modified and Created

- `content/content.ts`
- `components/Navbar.tsx`
- `components/HeroSection.tsx`
- `components/WhyLitestackSection.tsx` *(new)*
- `components/WhatWeBuildSection.tsx` *(new)*
- `components/ProcessSection.tsx` *(new)*
- `components/ResultsSection.tsx` *(new)*
- `components/FinalCtaSection.tsx` *(new)*
- `app/page.tsx`
- `app/globals.css`
- `tailwind.config.ts`

### Notes

- All copy is driven by `content/content.ts` for easy editing.
- CTA buttons and anchor navigation are wired to relevant on-page sections.
- No placeholder logic or demo components; all sections production-ready and styled.