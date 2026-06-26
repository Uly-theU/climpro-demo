import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-sun-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg leading-none block">ClimPro</span>
              <span className="text-xs text-slate-400 leading-none">Moselle Est</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Votre expert en installation et entretien de climatisation en Moselle Est depuis 2010.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="badge bg-navy-800 text-cool-200 text-xs">RGE QualiPAC</span>
            <span className="badge bg-navy-800 text-cool-200 text-xs">Qualibat</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-display font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Accueil', href: '/' },
              { label: 'Nos services', href: '/services' },
              { label: 'Zones d\'intervention', href: '/zones' },
              { label: 'Demander un devis', href: '/devis' },
              { label: 'Contact', href: '/contact' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sun-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-sun-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>06 12 34 56 78</span>
            </li>
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-sun-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@climpro-med.fr</span>
            </li>
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-sun-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lun–Ven : 8h–18h<br />Sam : 9h–12h</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ClimPro Moselle — Tous droits réservés · SIRET 123 456 789 00012
      </div>
    </footer>
  )
}
