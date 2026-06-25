import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ClimPro Méditerranée — Installateur Climatisation Marseille',
  description: 'Installation et entretien de climatisation et PAC à Marseille et dans les Bouches-du-Rhône. Certifié RGE QualiPAC. Devis gratuit sous 24h.',
  keywords: 'installateur climatisation marseille, PAC air air marseille, climatisation 13, devis climatisation',
  openGraph: {
    title: 'ClimPro Méditerranée — Installateur Climatisation Marseille',
    description: 'Installation et entretien de climatisation et PAC à Marseille et dans les Bouches-du-Rhône.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
