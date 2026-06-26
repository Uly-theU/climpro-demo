import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos services — Climatisation & PAC | ClimPro Méditerranée',
  description: 'Installation PAC air/air, air/eau, climatisation gainable et entretien annuel en Moselle Est. Certifié RGE QualiPAC, devis gratuit sous 24h.',
}

const services = [
  {
    emoji: '❄️',
    title: 'PAC Air/Air',
    subtitle: 'Climatisation réversible',
    price: '1 800€ – 4 500€',
    description: 'La pompe à chaleur air/air est la solution la plus répandue pour se chauffer en hiver et se rafraîchir en été. Elle capte les calories de l\'air extérieur pour les redistribuer dans votre logement.',
    avantages: [
      'COP jusqu\'à 4,5 (1€ consommé = 4,5€ de chaleur)',
      'Installation rapide (1 journée)',
      'Compatible avec les aides MaPrimeRénov',
      'Marques Daikin, Mitsubishi, Atlantic',
    ],
    idealFor: 'Appartements, maisons jusqu\'à 150m²',
  },
  {
    emoji: '🌡️',
    title: 'PAC Air/Eau',
    subtitle: 'Remplacement de chaudière',
    price: '6 500€ – 14 000€',
    description: 'La PAC air/eau remplace avantageusement une chaudière au fioul ou au gaz. Elle alimente votre plancher chauffant, vos radiateurs basse température ou votre ballon ECS.',
    avantages: [
      'Économies jusqu\'à 60% sur la facture chauffage',
      'Aide jusqu\'à 10 000€ avec MaPrimeRénov',
      'Éligible à l\'éco-PTZ (emprunt 0% d\'intérêt)',
      'Bilan carbone réduit de 75%',
    ],
    idealFor: 'Maisons avec plancher chauffant ou radiateurs basse température',
  },
  {
    emoji: '💨',
    title: 'Climatisation Gainable',
    subtitle: 'Solution invisible et silencieuse',
    price: 'Sur devis (généralement 5 000€+)',
    description: 'Le système gainable intègre le groupe soufflant dans les combles ou un faux-plafond. La diffusion se fait par des bouches discrètes — aucun appareil visible dans les pièces.',
    avantages: [
      'Esthétique : aucune unité intérieure visible',
      'Multizone : toutes les pièces gérées via 1 système',
      'Régulation pièce par pièce possible',
      'Idéal pour les constructions neuves ou rénovations lourdes',
    ],
    idealFor: 'Maisons neuves, villas, appartements haut-de-gamme',
  },
  {
    emoji: '🔧',
    title: 'Entretien & Maintenance',
    subtitle: 'Contrat annuel',
    price: '90€ – 180€ / an',
    description: 'Un entretien annuel est obligatoire pour les équipements de plus de 4 kW (article R224-41-9 du Code de l\'environnement). Il garantit performance, durabilité et sécurité de votre installation.',
    avantages: [
      'Nettoyage filtres et échangeurs',
      'Contrôle circuit frigorifique',
      'Attestation d\'entretien fournie',
      'Détection préventive des pannes',
    ],
    idealFor: 'Tous les propriétaires d\'une PAC ou clim de + de 4 kW',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-cool-50 to-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Ce que nous faisons</p>
          <h1 className="font-display text-4xl font-bold text-navy-700 mb-4">Nos services climatisation</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Du bilan thermique à la mise en service, nous accompagnons chaque projet de A à Z.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <div className={`card p-8 ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="text-5xl mb-4">{s.emoji}</div>
                <h2 className="font-display text-2xl font-bold text-navy-700 mb-1">{s.title}</h2>
                <p className="text-sun-500 font-semibold text-sm mb-4">{s.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.avantages.map(a => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 mt-0.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="bg-cool-50 rounded-xl p-3 text-sm text-navy-700">
                  <strong>Idéal pour :</strong> {s.idealFor}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <div className="bg-navy-700 text-white rounded-2xl p-6">
                  <p className="text-slate-300 text-sm mb-1">Tarif indicatif</p>
                  <p className="font-display text-2xl font-bold text-sun-400">{s.price}</p>
                  <p className="text-slate-400 text-xs mt-1">Pose incluse · Fournitures incluses</p>
                </div>
                <Link href="/devis" className="btn-primary justify-center">
                  Obtenir un devis pour ce service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cool-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-navy-700 mb-4">Vous ne savez pas quelle solution choisir ?</h2>
          <p className="text-slate-500 mb-8">On vous conseille gratuitement. Un bilan thermique rapide suffit pour vous orienter.</p>
          <Link href="/devis" className="btn-primary text-base py-4">Demander un bilan gratuit</Link>
        </div>
      </section>
    </>
  )
}
