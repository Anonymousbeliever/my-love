import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'For You, Sabina',
  description: 'A love letter to the woman who changed everything.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="%22http://www.w3.org/2000/svg%22 viewBox="0 0 100 100"><text y=".9em" font-size="90">❤️</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
