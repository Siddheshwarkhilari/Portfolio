'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-primary-400 text-lg md:text-xl font-medium">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          Siddheshwar Khilari
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mb-8"
        >
          DevOps & Software Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          DevOps Engineer with hands-on experience in operating and scaling Kubernetes platforms, 
          building automated CI/CD and GitOps workflows, and supporting production systems on Azure and AWS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/50 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-effect hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-6 mb-16"
        >
          <Link
            href="https://github.com/SiddheshwarKhilari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Github size={28} />
          </Link>
          <Link
            href="https://linkedin.com/in/Siddheshwar2k02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </Link>
          <Link
            href="mailto:siddheshkhilari111@gmail.com"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Mail size={28} />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <a
            href="#about"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-200 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
