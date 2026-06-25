import Link from 'next/link'

const services = [
  {
    icon: '❄️',
    title: 'PAC Air/Air',
    desc: 'Climatisation réversible pour chauffer et rafraîchir votre logement avec un excellent rendement énergétique.',
    price: 'À partir de 1 800€',
  },
  {
    icon: '🌡️',
    title: 'PAC Air/Eau',
    desc: 'Pompe à chaleur couplée à votre plancher chauffant ou radiateurs. Idéal pour remplacer une chaudière.',
    price: 'À partir de 6 500€',
  },
  {
    icon: '💨',
    title: 'Clim Gainable',
    desc: 'Système discret intégré dans les plafonds pour une diffusion homogène dans toutes les pièces.',
    price: 'Sur devis',
  },
  {
    icon: '🔧',
    title: 'Entretien & SAV',
    desc: 'Contrat d\'entretien annuel, nettoyage des filtres, vérification du circuit frigorifique.',
    price: 'À partir de 90€/an',
  },
]

const reviews = [
  {
    name: 'Sophie M.',
    location: 'Marseille 13e',
    rating: 5,
    text: 'Installation rapide et soignée. L\'équipe est arrivée à l\'heure, travail propre, aucune mauvaise surprise sur la facture. Je recommande vivement !',
    date: 'Il y a 2 semaines',
  },
  {
    name: 'Patrick D.',
    location: 'Aix-en-Provence',
    rating: 5,
    text: 'Très professionnel, devis clair et honnête. Ma PAC air/eau tourne depuis 6 mois sans aucun problème. Excellent rapport qualité/prix.',
    date: 'Il y a 1 mois',
  },
  {
    name: 'Isabelle R.',
    location: 'Aubagne',
    rating: 5,
    text: 'J\'ai fait appel à ClimPro pour un entretien. Ponctuel, efficace, et ils ont détecté une fuite que l\'ancien installateur n\'avait pas vue. Merci !',
    date: 'Il y a 3 mois',
  },
]

const zones = ['Marseille', 'Aix-en-Provence', 'Aubagne', 'La Ciotat', 'Cassis', 'Martigues', 'Salon-de-Provence', 'Vitrolles', 'Istres', 'Gardanne', 'Allauch', 'Plan-de-Cuques']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 text-white">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sun-500/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cool-200/5 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Certifié RGE QualiPAC · Intervention sous 48h
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Votre expert clim à{' '}
              <span className="text-sun-400">Marseille</span>{' '}
              et dans le 13
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Installation, entretien et dépannage de climatisation et pompes à chaleur.
              Devis gratuit sous 24h. Financement disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/devis" className="btn-primary text-base py-3.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Devis gratuit en ligne
              </Link>
              <a href="tel:0612345678" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 12 34 56 78
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { n: '+15 ans', label: "d'expérience" },
              { n: '+800', label: 'installations' },
              { n: '4.9★', label: 'avis Google' },
              { n: '48h', label: "délai d'intervention" },
            ].map(s => (
              <div key={s.n} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="font-display text-3xl font-bold text-sun-400 mb-1">{s.n}</div>
                <div className="text-sm text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Nos prestations</p>
          <h2 className="section-title">Ce que nous faisons</h2>
          <p className="section-sub mb-12">
            Solutions de climatisation et PAC adaptées à votre logement et votre budget.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {services.map(s => (
              <div key={s.title} className="card group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-navy-700 text-xl mb-2 group-hover:text-sun-500 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="font-semibold text-navy-600 text-sm">{s.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn-outline">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-20 bg-cool-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Pourquoi nous choisir</p>
            <h2 className="section-title text-left mb-6">Un artisan de confiance, pas un centre d'appels</h2>
            <ul className="space-y-4">
              {[
                { icon: '✅', title: 'Certifié RGE QualiPAC', desc: 'Vos aides MaPrimeRénov et CEE sont garanties.' },
                { icon: '⚡', title: 'Intervention rapide', desc: 'Devis sous 24h, installation sous 3–5 jours.' },
                { icon: '💰', title: 'Prix transparents', desc: 'Devis détaillé, aucune surprise sur la facture.' },
                { icon: '🛡️', title: 'Garantie 2 ans pièces & main-d\'œuvre', desc: 'On répond de notre travail.' },
              ].map(i => (
                <li key={i.title} className="flex gap-4">
                  <span className="text-2xl shrink-0">{i.icon}</span>
                  <div>
                    <strong className="font-display font-semibold text-navy-700">{i.title}</strong>
                    <p className="text-slate-500 text-sm mt-0.5">{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80"
              alt="Technicien installant une climatisation"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sun-500 flex items-center justify-center text-white font-bold font-display">J</div>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">Jean-Marc, gérant</p>
                    <p className="text-xs text-slate-400">15 ans d'expérience · 800+ clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Témoignages</p>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-bold text-navy-700">4.9/5</span>
            <span className="text-slate-400 text-sm">sur 87 avis Google</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="card text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-white font-bold font-display">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array(r.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">"{r.text}"</p>
                <p className="text-xs text-slate-400">{r.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-16 bg-cool-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Intervention locale</p>
          <h2 className="section-title">Nos zones d'intervention</h2>
          <p className="section-sub mb-8">Nous intervenons dans tout le département des Bouches-du-Rhône (13).</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {zones.map(z => (
              <span key={z} className="badge text-sm">{z}</span>
            ))}
          </div>
          <Link href="/zones" className="inline-block mt-8 text-navy-700 font-semibold text-sm hover:text-sun-500 underline underline-offset-4 transition-colors">
            Voir toutes les communes →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-navy-700 to-navy-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Prêt à profiter du confort ?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Recevez votre devis gratuit sous 24h. Sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary text-base py-4 px-8">
              Demander un devis gratuit
            </Link>
            <a href="tel:0612345678" className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/30 hover:border-white font-semibold px-8 py-4 rounded-xl transition-all">
              Appeler directement
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
