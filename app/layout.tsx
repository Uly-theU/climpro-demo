import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ClimPro Moselle — Installateur Climatisation Sarreguemines & Moselle Est',
  description: 'Installation et entretien de climatisation et PAC à Sarreguemines et dans toute la Moselle Est. Certifié RGE QualiPAC. Devis gratuit sous 24h, déplacement offert.',
  keywords: 'installateur climatisation Sarreguemines, PAC air air Moselle, climatisation Forbach, climatisation Sarrebourg, pompe à chaleur Moselle Est, devis climatisation 57',
  openGraph: {
    title: 'ClimPro Moselle — Installateur Climatisation Sarreguemines',
    description: 'Installation et entretien de climatisation et PAC en Moselle Est. Certifié RGE QualiPAC. Devis gratuit sous 24h.',
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
