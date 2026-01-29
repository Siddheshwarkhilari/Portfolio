'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

interface ExperienceItem {
  company: string
  role: string
  location: string
  duration: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'Jio Platforms Limited',
    role: 'DevOps Engineer',
    location: 'India',
    duration: 'October 2023 - Present',
    description: 'Leading operational monitoring and production support for multiple Kubernetes clusters, building automated CI/CD workflows, and ensuring system reliability.',
    responsibilities: [
      'Owned day-to-day operational monitoring and production support for multiple Kubernetes clusters across 4+ environments',
      'Resolved high-severity incidents related to cluster networking, CI/CD failures, and OS-level issues, significantly reducing downtime and MTTR',
      'Designed and implemented automated CI/CD and GitOps workflows using Azure DevOps, Jenkins, Argo CD, and Helm',
      'Enabled consistent container-controlled Python deployments and rollback mechanisms',
      'Operated ELK stack-based logging and dashboards for Kubernetes infrastructure environments',
      'Built ingestion pipelines and resolved log ingestion, indexing, and performance issues',
    ],
    technologies: ['Kubernetes', 'Docker', 'Azure DevOps', 'Jenkins', 'Argo CD', 'Helm', 'ELK Stack', 'Grafana', 'Azure', 'AWS', 'Python'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Professional Experience"
          subtitle="My journey through the tech industry"
        />

        <FadeInSection>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="glass-effect rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
                      {/* Company & Role */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Building2 className="text-primary-400 mr-2" size={20} />
                          <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                            {exp.company}
                          </h3>
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-primary-400 mb-2">
                          {exp.role}
                        </h4>
                      </div>

                      {/* Location & Duration */}
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h5 className="text-gray-200 font-semibold mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary-400 mr-2">▹</span>
                              <span className="text-gray-300 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-gray-200 font-semibold mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
