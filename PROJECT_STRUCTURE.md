# Portfolio Project - File Overview

## Core Application Files

### App Directory (Next.js 14 App Router)
- `app/layout.tsx` - Root layout, SEO metadata, navigation & footer wrapper
- `app/page.tsx` - Home page that composes all sections
- `app/globals.css` - Global styles, Tailwind imports, custom utilities

### Components

#### Layout Components
- `components/Navigation.tsx` - Fixed navigation bar with smooth scroll
- `components/Footer.tsx` - Footer with social links and copyright

#### Section Components (Main Content)
- `components/sections/Hero.tsx` - Landing section with name, title, CTA
- `components/sections/About.tsx` - Professional journey, education, bio
- `components/sections/Experience.tsx` - Timeline of work history
- `components/sections/Skills.tsx` - Tech stack categorized by type
- `components/sections/Projects.tsx` - Portfolio of work
- `components/sections/Freelancing.tsx` - Services and offerings
- `components/sections/Contact.tsx` - Contact form and social links

#### UI Components (Reusable)
- `components/ui/SectionTitle.tsx` - Animated section titles
- `components/ui/FadeInSection.tsx` - Scroll-triggered fade-in wrapper
- `components/ui/index.ts` - Component exports

### Data
- `data/portfolio-data.ts` - **MAIN DATA FILE** - All content in one place

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS customization (colors, animations)
- `postcss.config.js` - PostCSS configuration for Tailwind
- `next.config.js` - Next.js configuration
- `.eslintrc.json` - ESLint rules
- `.gitignore` - Git ignored files

### Public Assets
- `public/content-form.html` - Interactive form to generate content
- `public/logo.svg` - Logo file
- `public/projects/` - (Create this) Add project screenshots here

### Documentation
- `README.md` - Complete technical documentation
- `GET_STARTED.md` - **START HERE** - Quick start guide
- `QUICKSTART.md` - Fast-track customization
- `SETUP.md` - Detailed setup instructions
- `CUSTOMIZATION_GUIDE.md` - Component-by-component guide
- `PROJECT_STRUCTURE.md` - This file

## File Relationships

```
app/layout.tsx
├── components/Navigation.tsx
├── app/page.tsx
│   ├── components/sections/Hero.tsx
│   ├── components/sections/About.tsx
│   │   └── components/ui/SectionTitle.tsx
│   │   └── components/ui/FadeInSection.tsx
│   ├── components/sections/Experience.tsx
│   ├── components/sections/Skills.tsx
│   ├── components/sections/Projects.tsx
│   ├── components/sections/Freelancing.tsx
│   └── components/sections/Contact.tsx
└── components/Footer.tsx
```

## Data Flow

1. **Content Source:** `data/portfolio-data.ts`
2. **Used In:** All section components
3. **Rendered In:** `app/page.tsx`
4. **Displayed To:** User's browser

## What to Edit for Customization

### Essential (Must Edit)
1. ✅ `data/portfolio-data.ts` - Your resume information
2. ✅ `app/layout.tsx` - SEO metadata (title, description)

### Important (Should Edit)
3. `components/sections/Contact.tsx` - Configure form submission
4. `components/Footer.tsx` - Update copyright and links

### Optional (Can Edit)
5. `tailwind.config.ts` - Customize colors/theme
6. `components/sections/*` - Fine-tune layouts

### Don't Edit (Unless You Know What You're Doing)
- `tsconfig.json`
- `postcss.config.js`
- `next.config.js`
- `app/globals.css` (base Tailwind imports)

## Build Process

```
Source Files (TypeScript/TSX)
    ↓
TypeScript Compiler
    ↓
Next.js Build
    ↓
Tailwind CSS Processing
    ↓
Production Bundle
    ↓
Deploy (Vercel/Netlify)
```

## Dependencies Overview

### Core Framework
- `next` - Next.js 14 framework
- `react` - React 18
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - Browser compatibility

### Animations
- `framer-motion` - Smooth animations

### Icons & Utils
- `lucide-react` - Icon library
- `clsx` - Conditional class names

## File Size Reference

Small files (< 5KB):
- Config files
- UI components
- Data file

Medium files (5-15KB):
- Section components
- Navigation/Footer

Large files (> 15KB):
- None (good for performance!)

## Performance Features

✅ Next.js Image Optimization (automatic)
✅ Code Splitting (automatic)
✅ Static Generation (SSG)
✅ Lazy Loading (on scroll)
✅ Optimized Fonts (next/font)
✅ Minification (production build)

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment Requirements

Required files for deployment:
- ✅ All source files
- ✅ `package.json` (dependencies)
- ✅ `next.config.js` (build config)
- ✅ `.gitignore` (for Git)

Not needed for deployment:
- ❌ `node_modules/` (installed by host)
- ❌ `.next/` (built by host)
- ❌ Documentation files (optional)

## Security Notes

- No sensitive data in source code
- Form submission should use backend API
- Environment variables for API keys
- All external links open in new tab (`target="_blank"`)

## Browser Support

✅ Modern browsers (last 2 versions)
✅ Chrome, Firefox, Safari, Edge
✅ Mobile browsers (iOS Safari, Android Chrome)
❌ IE11 (not supported by Next.js 14)

## Questions?

Refer to:
- `GET_STARTED.md` - Quick start
- `README.md` - Full documentation
- `QUICKSTART.md` - Fast customization
