'use client'
import { useState } from 'react'

const WEBHOOK_URL = 'https://n8n-ppwn.srv1569424.hstgr.cloud/webhook/metis-devis'

const types = ['Appartement', 'Maison individuelle', 'Local commercial', 'Autre']
const services = ['PAC Air/Air', 'PAC Air/Eau', 'Climatisation gainable', 'Entretien annuel', 'Dépannage urgent', 'Je ne sais pas encore']
const surfaces = ['< 30m²', '30–60m²', '60–100m²', '100–150m²', '150–250m²', '> 250m²']

// Mapping surface texte → m² numérique pour le scoring
const surfaceMap: Record<string, number> = {
  '< 30m²': 25,
  '30–60m²': 45,
  '60–100m²': 80,
  '100–150m²': 125,
  '150–250m²': 200,
  '> 250m²': 300,
}

export default function DevisPage() {
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    service: '',
    type: '',
    surface: '',
    nom: '',
    tel: '',
    email: '',
    ville: '',
    code_postal: '',
    message: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Mapping service → type_demande pour le scoring n8n
    const typeDemandeMap: Record<string, string> = {
      'PAC Air/Air': 'installation',
      'PAC Air/Eau': 'installation',
      'Climatisation gainable': 'installation',
      'Entretien annuel': 'entretien',
      'Dépannage urgent': 'depannage',
      'Je ne sais pas encore': 'installation',
    }

    const payload = {
      nom: form.nom,
      email: form.email,
      telephone: form.tel,
      ville: form.ville,
      code_postal: form.code_postal,
      type_logement: form.type.toLowerCase().replace(' ', '_'),
      proprietaire: true,
      surface: surfaceMap[form.surface] || 80,
      nb_pieces: 0,
      type_demande: typeDemandeMap[form.service] || 'installation',
      type_clim: form.service,
      chauffage_actuel: 'inconnu',
      installation_existante: false,
      urgence: 'sous_30_jours',
      creneau_rappel: '',
      message: form.message,
      consentement_rgpd: true,
      source: 'formulaire_site',
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSent(true)
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold text-navy-700 mb-4">Demande reçue !</h2>
          <p className="text-slate-500 text-lg mb-2">Merci <strong>{form.nom}</strong>.</p>
          <p className="text-slate-500 mb-8">Nous vous rappelons sous <strong>24h</strong> pour vous communiquer votre devis gratuit.</p>
          <a href="tel:0612345678" className="btn-primary justify-center mx-auto w-fit">
            Appeler maintenant : 06 12 34 56 78
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-br from-cool-50 to-white py-16 border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-3">Sans engagement</p>
          <h1 className="font-display text-4xl font-bold text-navy-700 mb-4">Demander votre devis gratuit</h1>
          <p className="text-slate-500 text-lg">Réponse sous 24h · Déplacement et devis offerts</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Étapes */}
          <div className="flex items-center gap-2 mb-10">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                  step >= s ? 'bg-navy-700 text-white' : 'bg-slate-100 text-slate-400'
                }`}>{s}</div>
                {s < 3 && <div className={`flex-1 h-1 rounded transition-colors ${step > s ? 'bg-navy-700' : 'bg-slate-100'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1 */}
            {step === 1 && (
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-navy-700 mb-6">Votre projet</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Type de prestation</label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map(s => (
                        <button key={s} type="button" onClick={() => set('service', s)}
                          className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            form.service === s ? 'border-navy-700 bg-cool-50 text-navy-700' : 'border-slate-200 text-slate-600 hover:border-navy-300'
                          }`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Type de logement</label>
                    <div className="grid grid-cols-2 gap-2">
                      {types.map(t => (
                        <button key={t} type="button" onClick={() => set('type', t)}
                          className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            form.type === t ? 'border-navy-700 bg-cool-50 text-navy-700' : 'border-slate-200 text-slate-600 hover:border-navy-300'
                          }`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Surface à traiter</label>
                    <div className="grid grid-cols-3 gap-2">
                      {surfaces.map(s => (
                        <button key={s} type="button" onClick={() => set('surface', s)}
                          className={`text-center px-3 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            form.surface === s ? 'border-navy-700 bg-cool-50 text-navy-700' : 'border-slate-200 text-slate-600 hover:border-navy-300'
                          }`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button type="button" onClick={() => setStep(2)}
                  disabled={!form.service || !form.type || !form.surface}
                  className="mt-8 btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                  Continuer →
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-navy-700 mb-6">Vos coordonnées</h2>
                <div className="space-y-4">
                  {[
                    { key: 'nom', label: 'Nom & Prénom', type: 'text', placeholder: 'Jean Dupont' },
                    { key: 'tel', label: 'Téléphone', type: 'tel', placeholder: '06 12 34 56 78' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'jean@exemple.fr' },
                    { key: 'ville', label: 'Ville', type: 'text', placeholder: 'Sarreguemines' },
                    { key: 'code_postal', label: 'Code postal', type: 'text', placeholder: '57200' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]}
                        onChange={e => set(f.key, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-navy-700 focus:outline-none text-slate-700 transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Message (optionnel)</label>
                    <textarea rows={3} placeholder="Précisez votre demande si besoin..."
                      value={form.message} onChange={e => set('message', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-navy-700 focus:outline-none text-slate-700 resize-none transition-colors" />
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">← Retour</button>
                  <button type="button" onClick={() => setStep(3)}
                    disabled={!form.nom || !form.tel || !form.email}
                    className="btn-primary flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                    Continuer →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-navy-700 mb-6">Récapitulatif</h2>
                <div className="bg-cool-50 rounded-xl p-5 space-y-3 mb-8 text-sm">
                  {[
                    { label: 'Prestation', val: form.service },
                    { label: 'Logement', val: form.type },
                    { label: 'Surface', val: form.surface },
                    { label: 'Nom', val: form.nom },
                    { label: 'Téléphone', val: form.tel },
                    { label: 'Email', val: form.email },
                    { label: 'Ville', val: form.ville },
                    { label: 'Code postal', val: form.code_postal },
                  ].filter(r => r.val).map(r => (
                    <div key={r.label} className="flex justify-between">
                      <span className="text-slate-500 font-medium">{r.label}</span>
                      <span className="text-navy-700 font-semibold">{r.val}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 text-sm mb-6">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-700">Devis <strong>100% gratuit et sans engagement</strong>. Nous vous rappelons sous 24h.</span>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-4">
                    {error}
                  </div>
                )}
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center" disabled={loading}>← Retour</button>
                  <button type="submit" disabled={loading} className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? 'Envoi en cours…' : 'Envoyer ma demande ✓'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
