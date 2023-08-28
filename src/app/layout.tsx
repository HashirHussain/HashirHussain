import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const inter = Red_Hat_Display({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Hashir Hussain',
  description: 'Full Stack JavaScript Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
