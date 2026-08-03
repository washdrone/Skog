import Link from 'next/link'

const TRUST_ITEMS = [
  {
    title: 'Regelefterlevnad',
    description:
      'Flygningarna genomförs enligt EASA:s drönarregelverk och Transportstyrelsens föreskrifter. Vi hanterar tillstånd och anmälningar som krävs för varje uppdrag.',
    /* Formulering verifierad av ägaren 2026-08-03: "enligt EASA och
       Transportstyrelsen" — ange ej specifik operatörskategori eller certifikat. */
  },
  {
    title: 'Teknisk kvalitetskontroll',
    description:
      'Varje leverans kvalitetsgranskas innan den skickas. Fotogrammetrisk bearbetning och radiometrisk kalibrering kontrolleras steg för steg.',
  },
  {
    title: 'Dataintegritet & säkerhet',
    description:
      'Tydlig gallringspolicy och datalagring. Resultatet tillhör alltid uppdragsgivaren.',
  },
]

export default function TrustBlock() {
  return (
    <section className="bg-forest-950 border-y border-forest-900">
      <div className="container-page section-padding-sm">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-display text-white tracking-tight mb-4">Leveranssäkerhet i fokus</h2>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              Våra uppdrag kräver precision och pålitlighet. Vi är en partner när markdata och beslutsunderlag utgör kärnan i er analys.
            </p>
            <Link
              href="/om-oss"
              className="mt-4 inline-flex items-center text-sm font-bold text-accent-500 hover:text-accent-400 transition-colors"
            >
              Läs mer om vår metodik
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="md:w-2/3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_ITEMS.map((item, i) => (
              <div key={item.title} className="panel-dark p-6 border-forest-800">
                <div className="text-xs font-mono font-bold text-accent-500 mb-4">P-{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50 font-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
