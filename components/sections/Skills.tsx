'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Cloud,
  Layout,
  Server,
  Smartphone,
  GitBranch,
  Wrench,
} from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Containerization & Orchestration',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'Docker',
      'OnPremises Kubernetes',
      'AKS',
      'ACR',
      'Nexus',
    ],
  },
  {
    title: 'CI/CD Solutions',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Azure DevOps',
      'Github Actions',
      'CircleCI',
      'ArgoCD',
      'Spinnaker',
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Microsoft Azure',
      'AWS',
    ],
  },
  {
    title: 'Monitoring Solutions',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: [
      'ELK Stack',
      'Grafana',
    ],
  },
  {
    title: 'Programming & Scripting',
    icon: Code2,
    color: 'from-yellow-500 to-amber-500',
    skills: [
      'Python',
      'JavaScript',
      'Node.js (Backend APIs)',
    ],
  },
  {
    title: 'Generative AI',
    icon: Smartphone,
    color: 'from-teal-500 to-green-500',
    skills: [
      'LLMOps',
      'Langchain/Langraph',
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      'Git',
      'GitHub',
      'Azure Repos',
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    color: 'from-pink-500 to-rose-500',
    skills: [
      'Helm',
      'Ansible',
      'Jenkins',
      'Terraform',
      'VS Code',
      'Agile/Scrum',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon & Title */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} mr-3`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <span className="text-primary-400 mr-2">▹</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </FadeInSection>

        {/* Additional Stats Section */}
        <FadeInSection>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '1+' },
              { label: 'Projects Completed', value: '5+' },
              { label: 'Technologies', value: '25+' },
              { label: 'K8s Clusters Managed', value: '4+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
