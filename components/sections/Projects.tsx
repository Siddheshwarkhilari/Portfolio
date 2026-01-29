'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Automated Kubernetes Cluster Installation Upgrade',
    description: 'Customizable Ansible framework for automated K8s cluster provisioning',
    longDescription: 'Built a customizable Ansible framework to automate Kubernetes installation and upgrades, enabling rapid multi-node cluster provisioning, standardizing cluster builds, and reducing setup time across environments.',
    technologies: ['Ansible', 'Kubernetes', 'Automation', 'Infrastructure as Code'],
    image: '/projects/k8s-automation.jpg',
    featured: true,
  },
  {
    title: 'CNI Migration (WeaveNet to Cilium)',
    description: 'Production migration with zero downtime and enhanced security',
    longDescription: 'Executed a planned production migration from WeaveNet to Cilium, including CIDR changes and node reconfiguration, resulting in improved network performance, enhanced security, and better observability with zero major disruptions.',
    technologies: ['Kubernetes', 'Cilium', 'WeaveNet', 'Networking', 'Production Migration'],
    image: '/projects/cni-migration.jpg',
    featured: true,
  },
  {
    title: 'TechAI - AI Assisted DevOps Bot',
    description: 'AI-powered operational assistant for infrastructure components',
    longDescription: 'Developed AI-powered operational assistants for core infrastructure components (Kubernetes, databases, SAP), leveraging agentic frameworks to accelerate troubleshooting, improve system understanding, and reduce manual operational effort.',
    technologies: ['LLMOps', 'Langchain', 'Python', 'AI/ML', 'Kubernetes', 'Automation'],
    image: '/projects/techai-bot.jpg',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and contributions"
        />

        {/* Featured Projects */}
        <FadeInSection>
          <div className="space-y-12">
            {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
                        Featured Project
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mt-2">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
