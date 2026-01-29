'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., EmailJS, API call, etc.)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'siddheshkhilari111@gmail.com',
      href: 'mailto:siddheshkhilari111@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/SiddheshwarKhilari',
      username: '@SiddheshwarKhilari',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/Siddheshwar2k02',
      username: '/in/Siddheshwar2k02',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://x.com/SiddheshKh7719',
      username: '@SiddheshKh7719',
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="p-3 bg-primary-500/20 rounded-lg mr-4">
                          <Icon size={24} className="text-primary-400" />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-1">{info.title}</h4>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-200 font-medium hover:text-primary-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-200 font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-100 mb-6">
                  Follow Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                      >
                        <Icon
                          size={24}
                          className="text-gray-400 group-hover:text-primary-400 transition-colors mr-4"
                        />
                        <div>
                          <p className="text-gray-200 font-medium">{social.name}</p>
                          <p className="text-gray-400 text-sm">{social.username}</p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/50"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
