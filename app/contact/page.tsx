import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — ClimPro Moselle',
  description: 'Contactez ClimPro Moselle pour un devis gratuit ou un renseignement. Téléphone, email, horaires. Sarreguemines — Moselle Est.',
}

const horaires = [
  { jour: 'Lundi – Vendredi', h: '8h00 – 18h30' },
  { jour: 'Samedi', h: '9h00 – 12h30' },
  { jour: 'Dimanche', h: 'Fermé' },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cool-50 to-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Prenez contact</p>
          <h1 className="font-display text-4xl font-bold text-navy-700 mb-4">Nous contacter</h1>
          <p className="text-slate-500 text-lg">Appelez-nous ou envoyez un message — on répond vite.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          {/* Infos */}
          <div className="space-y-8">
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-navy-700 mb-6">Informations</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cool-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 mb-0.5">Téléphone</p>
                    <a href="tel:0612345678" className="text-sun-500 font-bold text-lg hover:text-sun-600 transition-colors">06 12 34 56 78</a>
                    <p className="text-slate-400 text-xs mt-0.5">Appel gratuit · Rappel possible</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cool-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 mb-0.5">Email</p>
                    <a href="mailto:contact@climpro-med.fr" className="text-slate-600 hover:text-navy-700 transition-colors">contact@climpro-med.fr</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cool-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 mb-0.5">Adresse</p>
                    <p className="text-slate-600">12 Rue des Artisans<br />57200 Sarreguemines</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Horaires */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-navy-700 mb-5">Horaires</h2>
              <ul className="space-y-3">
                {horaires.map(h => (
                  <li key={h.jour} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-600 font-medium text-sm">{h.jour}</span>
                    <span className={`font-semibold text-sm ${h.h === 'Fermé' ? 'text-slate-400' : 'text-navy-700'}`}>{h.h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponible maintenant
              </div>
            </div>
          </div>

          {/* Map + CTA */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-card h-72 border border-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20682.3!2d7.0686!3d49.1135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793f2d35c8f5555%3A0x40819a5fd979a70!2sSarreguemines%2C%2057200!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation ClimPro Moselle — Sarreguemines"
              />
            </div>

            <div className="card p-8 text-center">
              <h3 className="font-display text-xl font-bold text-navy-700 mb-3">Besoin d'un devis ?</h3>
              <p className="text-slate-500 text-sm mb-6">Notre formulaire en ligne prend 2 minutes. Réponse garantie sous 24h.</p>
              <Link href="/devis" className="btn-primary w-full justify-center">
                Remplir le formulaire de devis
              </Link>
            </div>

            <div className="bg-navy-700 text-white rounded-2xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-sun-500 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-lg">Dépannage urgent ?</p>
                <p className="text-slate-300 text-sm">Interventions possibles sous 4h en saison.</p>
                <a href="tel:0612345678" className="text-sun-400 font-bold hover:text-sun-300 transition-colors">06 12 34 56 78</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
