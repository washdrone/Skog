'use client'

import { useState, FormEvent } from 'react'
import { events } from '@/lib/analytics'

const UPPDRAG_OPTIONS = [
  'Areamätning',
  'Inventering/beståndsgränser',
  'Avverkningsunderlag',
  'Skadeinventering',
  'Planteringsuppföljning',
  'Annat',
]

const LEVERANS_OPTIONS = [
  'Kartlager (Shapefile/GeoPackage)',
  'Georefererade ortofoton',
  'PDF-rapport',
  'Bilder/video',
]

const TILLAGG_OPTIONS = [
  'Höjdmodell (DTM/DSM)',
  '3D-modell av terräng/objekt',
  'Volymberäkning',
]

const TIDSRAM_OPTIONS = [
  'Akut (1–3 dagar)',
  'Inom 1 vecka',
  'Inom 2 veckor',
  'Inom en månad',
  'Flexibelt',
]

interface FormData {
  foretag: string
  kontaktperson: string
  epost: string
  omrade: string
  fastighetsbeteckning: string
  uppdragstyp: string
  areal: string
  leverans: string[]
  tillagg: string[]
  tidsram: string
  meddelande: string
}

const inputClass = 'mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-body shadow-sm transition-all placeholder:text-slate-400 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/20'
const labelClass = 'block text-sm font-medium text-slate-700'

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    foretag: '', kontaktperson: '', epost: '',
    omrade: '', fastighetsbeteckning: '', uppdragstyp: '',
    areal: '', leverans: [], tillagg: [], tidsram: '', meddelande: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [hasStarted, setHasStarted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    if (!hasStarted) { setHasStarted(true); events.formStart() }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleCheckbox(field: 'leverans' | 'tillagg', value: string) {
    if (!hasStarted) { setHasStarted(true); events.formStart() }
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) { setStatus('success'); events.formSubmit() }
      else { setStatus('error') }
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-forest-200 bg-forest-50 p-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest-100">
          <svg className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900">Tack för din förfrågan</h3>
        <p className="mt-3 text-slate-600">Vi har tagit emot er förfrågan och återkommer med en prisindikation inom 24 timmar. Vi bekräftar uppdragsdetaljer, areal och tidsplan via e-post.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="foretag" className={labelClass}>Företag / Organisation <span className="text-red-500">*</span></label>
          <input type="text" id="foretag" name="foretag" required value={formData.foretag} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="kontaktperson" className={labelClass}>Kontaktperson <span className="text-red-500">*</span></label>
          <input type="text" id="kontaktperson" name="kontaktperson" required value={formData.kontaktperson} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="epost" className={labelClass}>E-postadress <span className="text-red-500">*</span></label>
          <input type="email" id="epost" name="epost" required value={formData.epost} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="omrade" className={labelClass}>Område / Kommun</label>
          <input type="text" id="omrade" name="omrade" value={formData.omrade} onChange={handleChange} placeholder="t.ex. Gävle kommun" className={inputClass} />
        </div>
        <div>
          <label htmlFor="fastighetsbeteckning" className={labelClass}>Fastighetsbeteckning</label>
          <input type="text" id="fastighetsbeteckning" name="fastighetsbeteckning" value={formData.fastighetsbeteckning} onChange={handleChange} placeholder="t.ex. Gävle Hemlingby 1:1" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="uppdragstyp" className={labelClass}>Typ av uppdrag <span className="text-red-500">*</span></label>
        <select id="uppdragstyp" name="uppdragstyp" required value={formData.uppdragstyp} onChange={handleChange} className={inputClass}>
          <option value="">Välj typ av uppdrag</option>
          {UPPDRAG_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
        </select>
      </div>
      <div>
        <label htmlFor="areal" className={labelClass}>Uppskattad areal (ha)</label>
        <input type="text" id="areal" name="areal" value={formData.areal} onChange={handleChange} placeholder="t.ex. 50 ha eller 'vet ej'" className={inputClass} />
      </div>
      <div>
        <span className={labelClass}>Önskad leverans</span>
        <p className="mt-1 text-xs text-slate-400">Välj ett eller flera format</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {LEVERANS_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm transition-all hover:border-forest-300 hover:bg-forest-50/50 has-[:checked]:border-forest-500 has-[:checked]:bg-forest-50 cursor-pointer">
              <input type="checkbox" checked={formData.leverans.includes(opt)} onChange={() => handleCheckbox('leverans', opt)} className="h-4 w-4 rounded border-slate-300 text-forest-600 focus:ring-forest-500/20" />
              {opt}
            </label>
          ))}
        </div>
      </div>
      <div>
        <span className={labelClass}>Tilläggstjänster</span>
        <p className="mt-1 text-xs text-slate-400">Valfritt — välj eventuella tillägg</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {TILLAGG_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm transition-all hover:border-forest-300 hover:bg-forest-50/50 has-[:checked]:border-forest-500 has-[:checked]:bg-forest-50 cursor-pointer">
              <input type="checkbox" checked={formData.tillagg.includes(opt)} onChange={() => handleCheckbox('tillagg', opt)} className="h-4 w-4 rounded border-slate-300 text-forest-600 focus:ring-forest-500/20" />
              {opt}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="tidsram" className={labelClass}>Önskad tidsram</label>
        <select id="tidsram" name="tidsram" value={formData.tidsram} onChange={handleChange} className={inputClass}>
          <option value="">Välj tidsram</option>
          {TIDSRAM_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
        </select>
      </div>
      <div>
        <label htmlFor="meddelande" className={labelClass}>Övrig information</label>
        <textarea id="meddelande" name="meddelande" rows={4} value={formData.meddelande} onChange={handleChange} placeholder="Beskriv eventuella detaljer kring uppdraget, terräng, tillgänglighet eller andra önskemål." className={inputClass} />
      </div>
      <p className="text-xs text-slate-400">Genom att skicka detta formulär godkänner du att vi lagrar dina uppgifter för att hantera din förfrågan. Vi delar aldrig dina uppgifter med tredje part.</p>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'submitting' ? (
          <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Skickar...</>
        ) : (
          <>Skicka förfrågan <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></>
        )}
      </button>
      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">Något gick fel. Försök igen eller kontakta oss direkt via e-post.</div>
      )}
    </form>
  )
}
