import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vistara',
  description: 'Hardware Availability Layer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Vistara</title>
      <meta name="description" content="Hardware Availability Layer" />
      <meta property="og:url" content="https://www.vistara.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Vistara" />
      <meta property="og:description" content="Hardware Availability Layer" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/72226d2e-374a-46e5-ab33-9e89c3820aeb.png?token=VbVOkKNLpoZsJOj-htaNYEyiR2qao_1ShxPz0jYt3lI&height=1200&width=1200&expires=33241864664"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="vistara.dev"/>
      <meta property="twitter:url" content="https://www.vistara.dev"/>
      <meta name="twitter:title" content="Vistara"/>
      <meta name="twitter:description" content="Hardware Availability Layer"/>
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/72226d2e-374a-46e5-ab33-9e89c3820aeb.png?token=VbVOkKNLpoZsJOj-htaNYEyiR2qao_1ShxPz0jYt3lI&height=1200&width=1200&expires=33241864664"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
