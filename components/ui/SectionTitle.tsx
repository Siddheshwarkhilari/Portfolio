'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
