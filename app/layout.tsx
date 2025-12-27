import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ProgressBar from '@/components/ProgressBar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elizabeth Zhu | Senior Product Designer',
  description: 'Portfolio of Elizabeth Zhu, Senior Product Designer at Meta. Work grounded in empathy and problem solving, shaped by continuous feedback and collaboration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Bartle:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={poppins.className}>
        <CustomCursor />
        <ProgressBar />
        {children}
      </body>
    </html>
  )
}
