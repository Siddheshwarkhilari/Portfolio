import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SiddheshwarKhilari', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Siddheshwar2k02', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/SiddheshKh7719', label: 'Twitter' },
    { icon: Mail, href: 'mailto:siddheshkhilari111@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="glass-effect border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Siddheshwar Khilari. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>

          {/* Built With */}
          <div className="text-gray-400 text-sm">
            Built with <span className="text-primary-400">Next.js</span> & <span className="text-primary-400">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
