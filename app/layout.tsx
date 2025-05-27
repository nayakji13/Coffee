import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffee Shop - Premium Coffee Experience',
  description: 'Experience the finest coffee in town. Freshly roasted beans, handcrafted drinks, and a cozy atmosphere.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 