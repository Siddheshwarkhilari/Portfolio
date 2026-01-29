# Professional Portfolio Website

A modern, high-performance portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ Built with Next.js 14 (App Router) for optimal performance
- 🎨 Stunning UI with Tailwind CSS and custom animations
- 📱 Fully responsive - works flawlessly on desktop, tablet, and mobile
- 🌙 Dark mode design with glassmorphism effects
- ⚡ Smooth animations powered by Framer Motion
- 🔍 SEO optimized with Next.js built-in features
- 📦 TypeScript for type safety
- 🎯 Production-ready and optimized for Vercel deployment

## 📋 Sections

1. **Hero** - Impactful introduction with call-to-actions
2. **About** - Professional journey and education
3. **Experience** - Timeline of professional roles
4. **Skills** - Comprehensive tech stack showcase
5. **Projects** - Portfolio of completed work
6. **Freelancing** - Services and offerings
7. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Image Optimization:** next/image
- **Deployment:** Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd professional-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`)
   - Update your name, title, and description
   - Replace social media links

2. **About Section** (`components/sections/About.tsx`)
   - Add your professional journey
   - Update education details
   - Customize your story

3. **Experience** (`components/sections/Experience.tsx`)
   - Update the `experiences` array with your work history
   - Include company names, roles, and achievements

4. **Skills** (`components/sections/Skills.tsx`)
   - Modify the `skillCategories` array with your technologies

5. **Projects** (`components/sections/Projects.tsx`)
   - Update the `projects` array with your work
   - Add project images, links, and descriptions

6. **Contact** (`components/sections/Contact.tsx`)
   - Update contact information and social links
   - Configure form submission (integrate with EmailJS, Formspree, etc.)

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📱 Progressive Web App (PWA)

This website is PWA-ready. To enable PWA features:

1. Install `next-pwa`:
```bash
npm install next-pwa
```

2. Configure in `next.config.js`
3. Add manifest and service worker

## 🎨 Design Features

- **Glassmorphism Effects** - Modern frosted glass UI elements
- **Gradient Text** - Eye-catching gradient typography
- **Smooth Animations** - Professional transitions and effects
- **Responsive Design** - Mobile-first approach
- **Optimized Images** - Automatic image optimization with next/image

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
