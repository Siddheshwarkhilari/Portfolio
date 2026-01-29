'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies',
    features: [
      'Custom website design & development',
      'Responsive & mobile-first approach',
      'SEO optimization',
      'Fast loading speeds',
      'Cross-browser compatibility',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores to grow your business',
    features: [
      'Payment gateway integration',
      'Product management systems',
      'Shopping cart functionality',
      'Admin dashboards',
      'Inventory management',
    ],
  },
  {
    icon: Smartphone,
    title: 'Web Applications',
    description: 'Scalable web apps tailored to your business needs',
    features: [
      'Custom web application development',
      'Real-time features',
      'Database design & optimization',
      'API development & integration',
      'Cloud deployment',
    ],
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'End-to-end development services from frontend to backend',
    features: [
      'Frontend & backend development',
      'Database architecture',
      'RESTful API design',
      'Third-party integrations',
      'Performance optimization',
    ],
  },
  {
    icon: Zap,
    title: 'Cloud Infrastructure Management',
    description: 'Enterprise-grade cloud infrastructure and DevOps solutions',
    features: [
      'Kubernetes cluster setup and management',
      'CI/CD pipeline automation',
      'Infrastructure as Code (Terraform, Ansible)',
      'Cloud migration (Azure, AWS)',
      'Monitoring and observability setup (ELK, Grafana)',
      'Container orchestration and optimization',
    ],
  },
]

const technologies = [
  'Kubernetes & Docker',
  'Azure & AWS',
  'Terraform & Ansible',
  'CI/CD (Azure DevOps, Jenkins, ArgoCD)',
  'ELK Stack & Grafana',
  'Python & Node.js',
  'React & Next.js',
  'TypeScript',
]

export default function Freelancing() {
  return (
    <section id="freelancing" className="section-padding bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Freelancing Services"
          subtitle="Professional web development solutions for your business"
        />

        {/* Introduction */}
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I offer professional freelancing services to help businesses and individuals
              bring their digital ideas to life. With years of experience in full-stack
              development, I deliver high-quality, scalable solutions tailored to your needs.
            </p>
            <div className="flex items-center justify-center gap-3 text-primary-400">
              <Zap size={24} />
              <span className="text-lg font-semibold">
                Fast Turnaround • Quality Code • Ongoing Support
              </span>
            </div>
          </div>
        </FadeInSection>

        {/* Services Grid */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mr-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle
                          size={18}
                          className="text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </FadeInSection>

        {/* Technologies */}
        <FadeInSection>
          <div className="glass-effect rounded-2xl p-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-6">
              Technologies I Use
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Why Choose Me */}
        <FadeInSection>
          <div className="glass-effect rounded-2xl p-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-8">
              Why Work With Me?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Quality Focused',
                  description:
                    'Clean, maintainable code following industry best practices',
                },
                {
                  title: 'Reliable Communication',
                  description:
                    'Regular updates and transparent progress tracking',
                },
                {
                  title: 'Scalable Solutions',
                  description:
                    'Built with growth in mind for long-term success',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h4 className="text-xl font-semibold text-primary-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your ideas and turn them into reality. I&apos;m available for
                freelance projects and long-term collaborations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/50"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
