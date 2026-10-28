import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Energy Fintech Services LLP | Green Mobility Finance',
  description:
    'Innovative financial solutions for electric vehicles, batteries, and sustainable commercial mobility.',
  openGraph: {
    title: 'Energy Fintech Services LLP | Green Mobility Finance',
    description:
      'Innovative financial solutions for electric vehicles, batteries, and sustainable commercial mobility.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1F3B70',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
