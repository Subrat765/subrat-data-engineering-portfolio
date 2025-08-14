import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subrat - Data Engineering Portfolio',
  description: 'Data Engineering Portfolio showcasing projects and expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
