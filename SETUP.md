# Portfolio Website - Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   The website will be available at `http://localhost:3000`

3. **Customize Your Content**
   - See `CUSTOMIZATION_GUIDE.md` for detailed instructions
   - Replace all placeholder content with your actual information from your resume

## Important: Content Customization Required

⚠️ **This portfolio contains PLACEHOLDER content only!**

You MUST update the following files with your actual resume information:

### High Priority (Update First)
1. `components/sections/Hero.tsx` - Your name, title, social links
2. `components/sections/Experience.tsx` - Your work history
3. `components/sections/Skills.tsx` - Your technical skills
4. `components/sections/Projects.tsx` - Your actual projects
5. `components/sections/About.tsx` - Your education and story
6. `components/sections/Contact.tsx` - Your contact information
7. `app/layout.tsx` - SEO metadata (title, description)

### Quick Customization Steps

1. **Global Find & Replace:**
   - "Your Name" → Your actual name
   - "your.email@example.com" → Your email
   - "@yourusername" → Your social media handles
   - "Company Name" → Your actual employers
   - "University Name" → Your actual university

2. **Update Arrays:**
   - Experience array in `Experience.tsx`
   - Skills categories in `Skills.tsx`
   - Projects array in `Projects.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Freelancing.tsx
│   │   └── Contact.tsx
│   └── ui/                # Reusable UI components
│       ├── SectionTitle.tsx
│       └── FadeInSection.tsx
├── public/                # Static assets
└── package.json           # Dependencies
```

## Adding Your Resume Content

Since you mentioned attaching your resume, here's the mapping:

| Resume Section | Component File | What to Update |
|---------------|----------------|----------------|
| Personal Info | Hero.tsx | Name, title, intro |
| Education | About.tsx | Degree, university, year |
| Work Experience | Experience.tsx | Companies, roles, dates, achievements |
| Technical Skills | Skills.tsx | Programming languages, frameworks, tools |
| Projects | Projects.tsx | Project names, descriptions, tech stack |
| Contact Info | Contact.tsx | Email, location, social links |

## Features Included

✅ Fully responsive (mobile, tablet, desktop)
✅ Dark mode design
✅ Smooth animations with Framer Motion
✅ SEO optimized
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Production-ready
✅ Vercel deployment optimized
✅ Fast loading with Next.js image optimization

## Need Help?

Refer to:
- `README.md` - Full documentation
- `CUSTOMIZATION_GUIDE.md` - Detailed customization instructions
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ⚠️ **CUSTOMIZE all content with your resume information**
4. 🎨 Adjust colors/styling if needed (optional)
5. 📸 Add your project screenshots to `/public` folder
6. 🚀 Deploy to Vercel

---

**Remember:** This is a template with placeholder content. Your portfolio will only be effective once you replace all placeholder text with your actual professional information!
