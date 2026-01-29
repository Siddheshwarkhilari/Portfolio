'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, User } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know who I am and what I do"
        />

        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Introduction */}
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <User className="text-primary-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-100">Professional Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I&apos;m a passionate DevOps Engineer with hands-on experience in operating and scaling 
                  Kubernetes platforms, building automated CI/CD and GitOps workflows, and supporting production 
                  systems on Azure and AWS. My journey in technology has been driven by curiosity and a commitment 
                  to operational excellence.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With a strong background in troubleshooting high-severity incidents across networking, 
                  infrastructure, and application layers, I specialize in creating reliable, automated solutions 
                  that enhance system observability and performance. I thrive in fast-paced environments and 
                  enjoy solving complex infrastructure challenges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Beyond technology, I&apos;m also a professional cricketer who represented the Maharashtra U-19 
                  Team, bringing the same discipline, teamwork, and strategic thinking from the field to my 
                  engineering work.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-primary-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-100">Current Role</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently working as a <span className="text-primary-400 font-semibold">DevOps Engineer</span> at{' '}
                  <span className="text-primary-400 font-semibold">Jio Platforms Limited</span>, where I own 
                  day-to-day operational monitoring and production support for multiple Kubernetes clusters across 
                  4+ environments, resolving high-severe incidents and building automated workflows.
                </p>
              </div>
            </div>

            {/* Right Column - Education & Highlights */}
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-primary-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-100">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">MTech in Software Systems</h4>
                    <p className="text-primary-400 font-medium">BITS Pilani Hyderabad Campus</p>
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Bachelor&apos;s Degree</h4>
                    <p className="text-primary-400 font-medium">MIIT College</p>
                    <p className="text-gray-400 text-sm">2020 - 2023</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">▹</span>
                    <span className="text-gray-300">Expertise in Kubernetes operations and cloud infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">▹</span>
                    <span className="text-gray-300">Strong troubleshooting skills for high-severity production incidents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">▹</span>
                    <span className="text-gray-300">Experience with CI/CD automation and GitOps workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">▹</span>
                    <span className="text-gray-300">Proficient in observability tools and infrastructure monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">▹</span>
                    <span className="text-gray-300">AI-assisted operations and automation enthusiast</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
