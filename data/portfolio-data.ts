/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * This file contains all the content for your portfolio website.
 * Replace all placeholder text with your actual information from your resume.
 * 
 * After updating this file, import and use this data in the respective components.
 */

export const personalInfo = {
  name: "Your Full Name",
  title: "Full Stack Developer & Software Engineer",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  location: "City, Country",
  
  // Short introduction for hero section
  tagline: "Building scalable web applications and delivering innovative solutions.",
  
  // Longer bio for about section
  bio: "I'm a passionate Full Stack Developer with extensive experience in building modern web applications. My journey in software development has been driven by curiosity and a commitment to excellence.",
  
  // Social media links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourportfolio.com",
  },
}

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2015 - 2019",
    gpa: "3.8/4.0", // Optional
    achievements: [
      "Dean's List for Academic Excellence",
      "First place in University Hackathon",
    ],
  },
  // Add more education entries if needed
]

export const experience = [
  {
    company: "Company Name",
    role: "Senior Software Engineer",
    location: "City, Country",
    period: "Jan 2022 - Present",
    description: "Leading development of enterprise-level web applications and mentoring junior developers.",
    responsibilities: [
      "Architected and developed scalable microservices using Node.js and TypeScript",
      "Led a team of 5 developers in delivering high-quality features on tight deadlines",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with product managers and designers to deliver user-centric solutions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "Previous Company",
    role: "Full Stack Developer",
    location: "City, Country",
    period: "Jun 2020 - Dec 2021",
    description: "Developed and maintained multiple client-facing web applications.",
    responsibilities: [
      "Built responsive web applications using React and Redux",
      "Developed RESTful APIs and integrated third-party services",
      "Optimized application performance resulting in 40% faster load times",
      "Participated in code reviews and established best practices",
    ],
    technologies: ["React", "Redux", "Express.js", "MongoDB", "Material-UI"],
  },
  // Add more experience entries
]

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Material-UI",
    "Redux",
    "Framer Motion",
    "Responsive Design",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "JWT Authentication",
    "WebSockets",
  ],
  database: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Prisma",
    "Mongoose",
    "SQL",
    "Database Design",
  ],
  cloud: [
    "AWS (EC2, S3, Lambda)",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Nginx",
    "Linux",
  ],
  mobile: [
    "React Native",
    "Progressive Web Apps",
    "Responsive Design",
    "Mobile-First Development",
  ],
  tools: [
    "Git",
    "VS Code",
    "Postman",
    "Figma",
    "Jest",
    "ESLint",
    "Prettier",
    "Agile/Scrum",
  ],
}

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced features",
    longDescription: "A comprehensive e-commerce platform with user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg", // Add your image to public/projects/
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
    highlights: [
      "Integrated Stripe payment processing",
      "Real-time inventory management",
      "Admin dashboard with analytics",
    ],
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    longDescription: "A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and analytics dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    image: "/projects/taskmanager.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
  },
  // Add more projects
]

export const freelanceServices = [
  {
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
    features: [
      "Custom website design & development",
      "Responsive & mobile-first approach",
      "SEO optimization",
      "Fast loading speeds",
      "Cross-browser compatibility",
    ],
  },
  {
    title: "E-Commerce Solutions",
    description: "Full-featured online stores to grow your business",
    features: [
      "Payment gateway integration",
      "Product management systems",
      "Shopping cart functionality",
      "Admin dashboards",
      "Inventory management",
    ],
  },
  // Add more services
]

export const stats = {
  yearsExperience: "5+",
  projectsCompleted: "50+",
  technologies: "30+",
  happyClients: "25+",
}

/**
 * INSTRUCTIONS:
 * 
 * 1. Replace all placeholder text above with your actual information
 * 2. Update social media URLs with your profiles
 * 3. Add your work experience from your resume
 * 4. List your technical skills
 * 5. Add your projects with descriptions and links
 * 6. Update education information
 * 
 * After updating this file, you can import and use this data in your components:
 * 
 * Example:
 * import { personalInfo, experience, skills } from '@/data/portfolio-data'
 * 
 * Then use the data in your components instead of hardcoded values.
 */
