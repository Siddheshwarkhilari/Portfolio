import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siddheshwar Khilari | DevOps & Software Engineer',
  description: 'DevOps Engineer with hands-on experience in operating and scaling Kubernetes platforms, building automated CI/CD and GitOps workflows, and supporting production systems on Azure and AWS.',
  keywords: ['DevOps Engineer', 'Kubernetes', 'Azure', 'AWS', 'CI/CD', 'GitOps', 'Cloud Infrastructure', 'Software Engineer', 'Portfolio'],
  authors: [{ name: 'Siddheshwar Khilari' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siddheshwarkhilari.com',
    title: 'Siddheshwar Khilari | DevOps & Software Engineer',
    description: 'DevOps Engineer specializing in Kubernetes, cloud infrastructure, and automated workflows.',
    siteName: 'Siddheshwar Khilari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddheshwar Khilari | DevOps & Software Engineer',
    description: 'DevOps Engineer specializing in Kubernetes, cloud infrastructure, and automated workflows.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
