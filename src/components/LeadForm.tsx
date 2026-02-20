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
  'Vet ej ännu',
]

interface FormData {
  foretag: string
  kontaktperson: string
  epost: string
  telefon: string
  omrade: string
  fastighetsbeteckning: string
  uppdragstyp: string
  areal: string
  leverans: string
  tidsram: string
  meddelande: string
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    foretag: '',
    kontaktperson: '',
    epost: '',
    telefon: '',
    omrade: '',
    fastighetsbeteckning: '',
    uppdragstyp: '',
    areal: '',
    leverans: '',
    tidsram: '',
    meddelande: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [hasStarted, setHasStarted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    if (!hasStarted) {
      setHasStarted(true)
      events.formStart()
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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

      if (res.ok) {
        setStatus('success')
        events.formSubmit()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-skog-200 bg-skog-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-skog-100">
          <svg className="h-7 w-7 text-skog-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-terrain-900">Tack för din förfrågan</h3>
        <p className="mt-3 text-terrain-600">
          Vi har tagit emot er förfrågan och återkommer med en prisindikation inom 24 timmar.
          Vi bekräftar uppdragsdetaljer, areal och tidsplan via e-post.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Row: Företag + Kontaktperson */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="foretag" className="block text-sm font-medium text-terrain-800">
            Företag / Organisation <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="foretag"
            name="foretag"
            required
            value={formData.foretag}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
        <div>
          <label htmlFor="kontaktperson" className="block text-sm font-medium text-terrain-800">
            Kontaktperson <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="kontaktperson"
            name="kontaktperson"
            required
            value={formData.kontaktperson}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
      </div>

      {/* Row: E-post + Telefon */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="epost" className="block text-sm font-medium text-terrain-800">
            E-postadress <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            value={formData.epost}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-terrain-800">
            Telefonnummer
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
      </div>

      {/* Row: Område + Fastighetsbeteckning */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="omrade" className="block text-sm font-medium text-terrain-800">
            Område / Kommun
          </label>
          <input
            type="text"
            id="omrade"
            name="omrade"
            value={formData.omrade}
            onChange={handleChange}
            placeholder="t.ex. Gävle kommun"
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm placeholder:text-terrain-400 focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
        <div>
          <label htmlFor="fastighetsbeteckning" className="block text-sm font-medium text-terrain-800">
            Fastighetsbeteckning
          </label>
          <input
            type="text"
            id="fastighetsbeteckning"
            name="fastighetsbeteckning"
            value={formData.fastighetsbeteckning}
            onChange={handleChange}
            placeholder="t.ex. Gävle Hemlingby 1:1"
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm placeholder:text-terrain-400 focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
      </div>

      {/* Typ av uppdrag */}
      <div>
        <label htmlFor="uppdragstyp" className="block text-sm font-medium text-terrain-800">
          Typ av uppdrag <span className="text-red-600">*</span>
        </label>
        <select
          id="uppdragstyp"
          name="uppdragstyp"
          required
          value={formData.uppdragstyp}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
        >
          <option value="">Välj typ av uppdrag</option>
          {UPPDRAG_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Row: Areal + Leverans */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="areal" className="block text-sm font-medium text-terrain-800">
            Uppskattad areal (ha)
          </label>
          <input
            type="text"
            id="areal"
            name="areal"
            value={formData.areal}
            onChange={handleChange}
            placeholder="t.ex. 50 ha eller 'vet ej'"
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm placeholder:text-terrain-400 focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          />
        </div>
        <div>
          <label htmlFor="leverans" className="block text-sm font-medium text-terrain-800">
            Önskad leverans
          </label>
          <select
            id="leverans"
            name="leverans"
            value={formData.leverans}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
          >
            <option value="">Välj leveransformat</option>
            {LEVERANS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tidsram */}
      <div>
        <label htmlFor="tidsram" className="block text-sm font-medium text-terrain-800">
          Önskad tidsram
        </label>
        <input
          type="text"
          id="tidsram"
          name="tidsram"
          value={formData.tidsram}
          onChange={handleChange}
          placeholder="t.ex. Inom 2 veckor, Flexibelt, Akut"
          className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm placeholder:text-terrain-400 focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
        />
      </div>

      {/* Meddelande */}
      <div>
        <label htmlFor="meddelande" className="block text-sm font-medium text-terrain-800">
          Övrig information
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          rows={4}
          value={formData.meddelande}
          onChange={handleChange}
          placeholder="Beskriv eventuella detaljer kring uppdraget, terräng, tillgänglighet eller andra önskemål."
          className="mt-1 block w-full rounded-md border border-terrain-300 px-3 py-2 text-sm shadow-sm placeholder:text-terrain-400 focus:border-skog-500 focus:outline-none focus:ring-1 focus:ring-skog-500"
        />
      </div>

      {/* GDPR notice */}
      <p className="text-xs text-terrain-500">
        Genom att skicka detta formulär godkänner du att vi lagrar dina uppgifter för att hantera din förfrågan.
        Vi delar aldrig dina uppgifter med tredje part. Läs mer i vår integritetspolicy.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Skickar...' : 'Skicka förfrågan'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Något gick fel. Försök igen eller kontakta oss direkt via e-post.
        </p>
      )}
    </form>
  )
}
