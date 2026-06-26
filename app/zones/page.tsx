import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zones d\'intervention — Moselle Est & Grand Est | ClimPro Moselle',
  description: 'ClimPro Moselle intervient dans toute la Moselle Est : Sarreguemines, Sarrebourg, Forbach, Saint-Avold, Bitche, Bouzonville et alentours. Devis gratuit, déplacement offert.',
  keywords: 'installateur climatisation Moselle, PAC Sarreguemines, climatisation Sarrebourg, clim Forbach, pompe à chaleur Saint-Avold',
}

const zonesVedettes = [
  {
    ville: 'Sarreguemines',
    cp: '57200',
    desc: 'Notre secteur principal. Intervention en maisons individuelles, appartements et locaux commerciaux. Délai d\'intervention : 48h.',
    quartiers: ['Centre-ville', 'Neunkirch', 'Wittring', 'Woelfling', 'Bliesbruck'],
    priorite: true,
  },
  {
    ville: 'Sarrebourg',
    cp: '57400',
    desc: 'Zone résidentielle et périurbaine. Forte demande en PAC Air/Eau pour remplacement de chaudières.',
    quartiers: ['Centre', 'Imling', 'Hommert', 'Fénétrange'],
    priorite: true,
  },
  {
    ville: 'Forbach',
    cp: '57600',
    desc: 'Bassin minier reconverti. Interventions fréquentes en maisons de plain-pied et PME locales.',
    quartiers: ['Centre', 'Behren-lès-Forbach', 'Stiring-Wendel', 'Freyming-Merlebach'],
    priorite: true,
  },
  {
    ville: 'Saint-Avold',
    cp: '57500',
    desc: 'Secteur industriel et résidentiel. Contrats d\'entretien professionnels disponibles.',
    quartiers: ['Centre', 'L\'Hôpital', 'Porcelette', 'Hombourg-Haut'],
    priorite: false,
  },
  {
    ville: 'Bitche',
    cp: '57230',
    desc: 'Secteur rural et forestier. Installations PAC en maisons individuelles et corps de ferme rénovés.',
    quartiers: ['Centre', 'Lemberg', 'Rohrbach-lès-Bitche', 'Volmunster'],
    priorite: false,
  },
  {
    ville: 'Bouzonville',
    cp: '57320',
    desc: 'Zone frontalière Moselle-Sarre. Interventions en pavillons et résidences récentes.',
    quartiers: ['Centre', 'Bouzonville', 'Creutzwald', 'Teting-sur-Nied'],
    priorite: false,
  },
]

const autresVilles = [
  'Puttelange-aux-Lacs', 'Grostenquin', 'Morhange', 'Dieuze',
  'Albestroff', 'Phalsbourg', 'Saverne', 'Drulingen',
  'Thionville', 'Metz', 'Hayange', 'Yutz',
]

// Structured data JSON-LD pour le SEO et les LLMs
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ClimPro Moselle',
  description: 'Installateur de climatisation et pompes à chaleur en Moselle Est. Installation PAC Air/Air, PAC Air/Eau, climatisation gainable, entretien annuel.',
  url: 'https://climpro-demo.vercel.app',
  telephone: '03 87 XX XX XX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 rue de la Paix',
    addressLocality: 'Sarreguemines',
    postalCode: '57200',
    addressRegion: 'Moselle',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.1135,
    longitude: 7.0686,
  },
  areaServed: zonesVedettes.map(z => ({
    '@type': 'City',
    name: z.ville,
    postalCode: z.cp,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services climatisation et PAC',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installation PAC Air/Air', description: 'Climatisation réversible' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installation PAC Air/Eau', description: 'Pompe à chaleur couplée radiateurs ou plancher chauffant' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entretien annuel', description: 'Maintenance préventive climatisation et PAC' } },
    ],
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '12:00' },
  ],
}

export default function ZonesPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cool-50 to-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Couverture locale</p>
          <h1 className="font-display text-4xl font-bold text-navy-700 mb-4">
            Zones d'intervention<br />
            <span className="text-2xl font-medium text-slate-500">Moselle Est & environs</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-6">
            Nous intervenons dans un rayon de 60 km autour de Sarreguemines —
            de Forbach à Sarrebourg, de Bitche à Saint-Avold.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">✓ Déplacement offert pour devis</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">✓ Intervention sous 48h</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">✓ Certifié RGE QualiPAC</span>
          </div>
        </div>
      </section>

      {/* Carte visuelle */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm" style={{height: '400px', background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)', position: 'relative'}}>
            {/* Pseudo-carte avec les villes positionnées */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3">🗺️</div>
                <div className="text-slate-500 font-medium">Zone d'intervention — Moselle Est</div>
                <div className="text-slate-400 text-sm mt-1">Rayon 60 km autour de Sarreguemines</div>
              </div>
            </div>
            {/* Points de villes */}
            {[
              { ville: 'Sarreguemines', top: '52%', left: '50%', principal: true },
              { ville: 'Forbach', top: '35%', left: '65%', principal: false },
              { ville: 'Sarrebourg', top: '68%', left: '30%', principal: false },
              { ville: 'Saint-Avold', top: '40%', left: '45%', principal: false },
              { ville: 'Bitche', top: '30%', left: '42%', principal: false },
              { ville: 'Bouzonville', top: '25%', left: '60%', principal: false },
            ].map(p => (
              <div
                key={p.ville}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: p.top, left: p.left }}
              >
                <div className={`flex flex-col items-center gap-1`}>
                  <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${p.principal ? 'bg-blue-600 w-4 h-4' : 'bg-blue-400'}`}></div>
                  <div className={`text-xs font-semibold bg-white px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap ${p.principal ? 'text-blue-700' : 'text-slate-600'}`}>
                    {p.ville}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones vedettes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-700 mb-2 text-center">Secteurs principaux</h2>
          <p className="text-slate-500 text-center mb-10">Intervention garantie en moins de 48h sur ces secteurs</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zonesVedettes.map(z => (
              <div key={z.ville} className={`card relative ${z.priorite ? 'border-blue-200 ring-1 ring-blue-100' : ''}`}>
                {z.priorite && (
                  <div className="absolute -top-2.5 left-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">Secteur prioritaire</span>
                  </div>
                )}
                <div className="flex items-start justify-between mb-3 mt-1">
                  <h2 className="font-display text-xl font-bold text-navy-700">{z.ville}</h2>
                  <span className="badge text-xs">{z.cp}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{z.desc}</p>
                {z.quartiers.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Communes couvertes</div>
                    <div className="flex flex-wrap gap-1.5">
                      {z.quartiers.map(q => (
                        <span key={q} className="text-xs bg-cool-50 text-navy-600 px-2 py-0.5 rounded-md">{q}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link href="/devis" className="text-blue-600 text-sm font-semibold hover:underline">
                    Demander un devis → {z.ville}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="py-12 bg-cool-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-bold text-navy-700 mb-2 text-center">Nous intervenons aussi dans…</h2>
          <p className="text-slate-500 text-sm text-center mb-6">Contactez-nous pour vérifier votre commune</p>
          <div className="flex flex-wrap justify-center gap-2">
            {autresVilles.map(v => (
              <span key={v} className="bg-white border border-slate-200 text-slate-600 text-sm px-3 py-1.5 rounded-xl shadow-sm">
                📍 {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text block — optimisé LLM */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-700 mb-6">
            Installateur climatisation Moselle Est — Sarreguemines et environs
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm">
            <p>
              <strong>ClimPro Moselle</strong> est votre installateur de climatisation et pompe à chaleur de référence
              dans la Moselle Est. Basés à <strong>Sarreguemines</strong> (57200), nous intervenons dans un rayon de
              60 km : <strong>Forbach, Sarrebourg, Saint-Avold, Bitche, Bouzonville</strong> et l'ensemble des communes
              du département 57.
            </p>
            <p>
              Nous installons des <strong>PAC Air/Air</strong> (climatisation réversible), des
              <strong> PAC Air/Eau</strong> (pompe à chaleur couplée à votre plancher chauffant ou radiateurs),
              et des <strong>systèmes gainables</strong> pour les logements neufs ou en rénovation.
              Nous assurons également l'entretien annuel et le dépannage.
            </p>
            <p>
              La Moselle Est bénéficie d'un climat continental — hivers froids, étés de plus en plus chauds.
              Nos équipements sont sélectionnés pour fonctionner efficacement dans ces conditions :
              jusqu'à <strong>-25°C en mode chauffage</strong>, COP &gt; 4 en conditions standard.
            </p>
            <p>
              Certifiés <strong>RGE QualiPAC</strong>, nos installations vous donnent accès aux aides de l'État :
              <strong> MaPrimeRénov'</strong>, <strong>Certificats d'Économie d'Énergie (CEE)</strong>,
              et <strong>éco-PTZ</strong>. Nous gérons toutes les démarches administratives pour vous.
            </p>
            <p>
              Vous cherchez un <em>installateur climatisation à Sarreguemines</em>, une
              <em> pompe à chaleur à Forbach</em>, ou une <em>climatisation réversible à Sarrebourg</em> ?
              Contactez-nous pour un devis gratuit sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy-700 mb-4">Vous êtes dans notre zone ?</h2>
          <p className="text-slate-500 mb-8">Devis gratuit sous 24h, déplacement offert sur toute la Moselle Est.</p>
          <Link href="/devis" className="btn-primary text-base py-4">Demander mon devis gratuit →</Link>
        </div>
      </section>
    </>
  )
}
