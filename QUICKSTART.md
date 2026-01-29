# 🎯 Quick Start: Updating Your Portfolio with Resume Information

This guide will help you quickly update your portfolio with information from your resume.

## Step 1: Update Personal Information (5 minutes)

### File: `data/portfolio-data.ts`

Open this file and update the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "John Doe",  // ← Your actual name
  title: "Full Stack Developer & Software Engineer",  // ← Your professional title
  email: "john.doe@email.com",  // ← Your email
  phone: "+1 (555) 123-4567",  // ← Your phone
  location: "San Francisco, CA",  // ← Your location
  
  tagline: "Your compelling one-line pitch",
  bio: "Your professional story (2-3 sentences)",
  
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    portfolio: "https://johndoe.com",
  },
}
```

## Step 2: Add Your Work Experience (10 minutes)

### From Your Resume → `data/portfolio-data.ts`

For each job in your resume, add an entry to the `experience` array:

```typescript
{
  company: "Tech Corp",
  role: "Senior Software Engineer",
  location: "New York, NY",
  period: "Jan 2022 - Present",
  description: "Brief overview of your role",
  responsibilities: [
    "Key achievement or responsibility #1",
    "Key achievement or responsibility #2",
    "Key achievement or responsibility #3",
    "Use action verbs: Led, Developed, Implemented, etc.",
  ],
  technologies: ["React", "Node.js", "AWS", "etc."],
}
```

**Pro Tips:**
- Use bullet points from your resume
- Focus on achievements, not just duties
- Include metrics when possible (e.g., "Improved performance by 40%")
- List 3-5 key responsibilities per job

## Step 3: List Your Skills (5 minutes)

### From Resume → `data/portfolio-data.ts`

Update each skill category with technologies you actually know:

```typescript
export const skills = {
  frontend: ["React.js", "Vue.js", "etc."],  // Your frontend skills
  backend: ["Node.js", "Python", "etc."],     // Your backend skills
  database: ["PostgreSQL", "MongoDB", "etc."], // Your database experience
  cloud: ["AWS", "Docker", "etc."],           // Your cloud/DevOps skills
  // ... etc.
}
```

## Step 4: Add Your Projects (15 minutes)

### From Resume → `data/portfolio-data.ts`

For each project in your resume:

```typescript
{
  title: "Project Name",
  description: "One-sentence description",
  longDescription: "2-3 sentences about what it does and its impact",
  technologies: ["Next.js", "PostgreSQL", "AWS"],
  image: "/projects/project-name.jpg",  // Optional: add image later
  liveUrl: "https://project-url.com",   // If live
  githubUrl: "https://github.com/you/project",  // If public
  featured: true,  // Set to true for your best 2-3 projects
}
```

**Pro Tips:**
- Highlight 2-3 projects as "featured"
- Include live URLs if deployed
- Mention the impact or scale (users, performance, etc.)
- Describe what problem it solves

## Step 5: Update Education (2 minutes)

### From Resume → `data/portfolio-data.ts`

```typescript
export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    location: "City, State",
    period: "2015 - 2019",
    gpa: "3.8/4.0",  // Optional
    achievements: [  // Optional
      "Dean's List",
      "Relevant award or achievement",
    ],
  },
]
```

## Step 6: Update Component Files (10 minutes)

Now that your data is in `portfolio-data.ts`, update components to use it:

### Option A: Keep Current Structure (Easier)
Just copy-paste data from `portfolio-data.ts` directly into each component file.

### Option B: Import Data (Cleaner)
Update each component to import from `portfolio-data.ts`:

```typescript
import { personalInfo, experience, skills, projects } from '@/data/portfolio-data'
```

Then use the imported data instead of hardcoded values.

## Step 7: Update SEO Metadata (3 minutes)

### File: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Full Stack Developer',  // ← Update
  description: 'Your professional tagline',    // ← Update
  // ... update other metadata fields
}
```

## Step 8: Test Your Changes (2 minutes)

```bash
npm run dev
```

Open `http://localhost:3000` and check:
- [ ] Hero section shows your name and title
- [ ] About section has your story
- [ ] Experience section lists your jobs
- [ ] Skills section shows your tech stack
- [ ] Projects section displays your work
- [ ] Contact section has your info

## Quick Checklist

- [ ] Updated `personalInfo` with your details
- [ ] Added all work experience entries
- [ ] Listed all your technical skills
- [ ] Added 4-6 projects
- [ ] Updated education information
- [ ] Updated SEO metadata in `app/layout.tsx`
- [ ] Replaced placeholder social media links
- [ ] Tested the website locally

## Common Mistakes to Avoid

❌ Leaving "Your Name" or other placeholders
❌ Using fake or exaggerated experience
❌ Listing technologies you don't actually know
❌ Forgetting to update social media links
❌ Using broken project URLs
❌ Having spelling/grammar errors

## Need to Add Images?

1. Create `/public/projects/` folder
2. Add your project screenshots (recommended: 1200x630px)
3. Reference them in your project data: `image: "/projects/my-project.jpg"`

## Still Have Placeholders?

Use Find & Replace (Ctrl+Shift+H in VS Code):

| Find | Replace With |
|------|--------------|
| `Your Name` | Your actual name |
| `your.email@example.com` | Your email |
| `yourusername` | Your social media handles |
| `Company Name` | Your employer(s) |
| `University Name` | Your university |

## Next Steps After Customization

1. **Test thoroughly** - Click every link, check every section
2. **Ask for feedback** - Show it to friends or colleagues
3. **Deploy** - Push to Vercel or Netlify
4. **Share** - Add the link to your resume and LinkedIn

---

**Time Estimate:** 45-60 minutes total to fully customize your portfolio

**Remember:** Quality over quantity. It's better to have 5 well-described projects than 20 rushed ones.

Good luck! 🚀
