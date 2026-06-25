import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zones d\'intervention — Bouches-du-Rhône | ClimPro Méditerranée',
  description: 'ClimPro Méditerranée intervient dans tout le 13 : Marseille, Aix-en-Provence, Aubagne, La Ciotat, Martigues, Salon-de-Provence et plus.',
}

const zones = [
  {
    ville: 'Marseille',
    cp: '13001–13016',
    desc: 'Notre secteur principal. Intervention dans tous les arrondissements, 48h chrono.',
    quartiers: ['Vieux-Port', 'Prado', 'Castellane', 'La Pomme', 'Les Goudes', 'Plan-de-Cuques'],
  },
  {
    ville: 'Aix-en-Provence',
    cp: '13100',
    desc: 'Ville universitaire et résidentielle. Forte demande en climatisation réversible.',
    quartiers: ['Centre-ville', 'Jas-de-Bouffan', 'Les Milles', 'Puyricard'],
  },
  {
    ville: 'Aubagne',
    cp: '13400',
    desc: 'Interventions régulières en maisons individuelles et PME locales.',
    quartiers: ['Centre', 'La Valentine', 'Gémenos'],
  },
  {
    ville: 'La Ciotat',
    cp: '13600',
    desc: 'Zone balnéaire avec nombreuses résidences secondaires et villas.',
    quartiers: ['Vieux Port', 'Les Deux Frères', 'Ceyreste'],
  },
  {
    ville: 'Martigues',
    cp: '13500',
    desc: 'Zone industrielle et résidentielle. Contrats d\'entretien professionnels disponibles.',
    quartiers: ['Jonquières', 'Île', 'Ferrières', 'Port-de-Bouc'],
  },
  {
    ville: 'Salon-de-Provence',
    cp: '13300',
    desc: 'Interventions sur pavillons et maisons de plain-pied.',
    quartiers: ['Centre historique', 'Arbois', 'Grans', 'Lançon'],
  },
  { ville: 'Vitrolles', cp: '13127', desc: 'Zone aéroportuaire — professionnels et particuliers.', quartiers: [] },
  { ville: 'Istres', cp: '13800', desc: 'Ouest des Bouches-du-Rhône — bassin de l\'Étang de Berre.', quartiers: [] },
  { ville: 'Gardanne', cp: '13120', desc: 'Centre et périphérie, maisons individuelles.', quartiers: [] },
  { ville: 'Allauch', cp: '13190', desc: 'Village résidentiel proche de Marseille.', quartiers: [] },
  { ville: 'Cassis', cp: '13260', desc: 'Villas et résidences de prestige.', quartiers: [] },
  { ville: 'Berre-l\'Étang', cp: '13130', desc: 'Zone industrielle et résidentielle.', quartiers: [] },
]

export default function ZonesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cool-50 to-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Couverture locale</p>
          <h1 className="font-display text-4xl font-bold text-navy-700 mb-4">Zones d'intervention</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Nous couvrons l'ensemble du département des Bouches-du-Rhône (13).
            Déplacement offert pour tout devis.
          </p>
        </div>
      </section>

      {/* Featured zones */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map(z => (
              <div key={z.ville} className="card">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-display text-xl font-bold text-navy-700">{z.ville}</h2>
                  <span className="badge text-xs">{z.cp}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{z.desc}</p>
                {z.quartiers.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {z.quartiers.map(q => (
                      <span key={q} className="text-xs bg-cool-50 text-navy-600 px-2 py-0.5 rounded-md">{q}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section className="py-16 bg-cool-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-700 mb-6">
            Installateur climatisation dans les Bouches-du-Rhône
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm">
            <p>
              ClimPro Méditerranée est votre installateur de climatisation et pompe à chaleur de référence dans les Bouches-du-Rhône.
              Basés à Marseille, nous intervenons rapidement sur l'ensemble du département 13 : de Marseille à Aix-en-Provence,
              en passant par Aubagne, La Ciotat, Cassis, Martigues, Salon-de-Provence, Istres et Vitrolles.
            </p>
            <p>
              Notre connaissance du territoire local nous permet d'adapter chaque installation aux conditions climatiques
              spécifiques du Sud-Est — ensoleillement intense, mistral, proximité marine. Nous sélectionnons des équipements
              adaptés à chaque configuration.
            </p>
            <p>
              Certifiés <strong>RGE QualiPAC</strong>, nos installations vous donnent accès aux aides de l'État :
              <strong> MaPrimeRénov'</strong>, <strong>Certificats d'Économie d'Énergie (CEE)</strong>, et
              <strong> éco-PTZ</strong>. Nous vous accompagnons dans toutes les démarches administratives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy-700 mb-4">Vous êtes dans notre zone ?</h2>
          <p className="text-slate-500 mb-8">Devis gratuit sous 24h, déplacement offert.</p>
          <Link href="/devis" className="btn-primary text-base py-4">Demander mon devis gratuit</Link>
        </div>
      </section>
    </>
  )
}
