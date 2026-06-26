'use client'
import { useState } from 'react'
import Link from 'next/link'

const nav = [
  { label: 'Accueil',  href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Zones',    href: '/zones' },
  { label: 'Contact',  href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-navy-700 flex items-center justify-center shadow-md group-hover:bg-sun-500 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <span className="font-display font-bold text-navy-700 text-lg leading-none block">ClimPro</span>
            <span className="text-xs text-slate-400 font-medium leading-none">Moselle Est</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(n => (
            <Link key={n.href} href={n.href}
              className="px-4 py-2 rounded-lg text-slate-600 hover:text-navy-700 hover:bg-cool-50 font-medium text-sm transition-colors">
              {n.label}
            </Link>
          ))}
          <Link href="/devis"
            className="ml-3 btn-primary text-sm py-2.5">
            Devis gratuit
          </Link>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-1">
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-700 hover:bg-cool-50 font-medium">
              {n.label}
            </Link>
          ))}
          <Link href="/devis" onClick={() => setOpen(false)}
            className="mt-2 btn-primary justify-center">
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  )
}
