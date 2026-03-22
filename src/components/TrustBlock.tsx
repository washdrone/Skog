const TRUST_ITEMS = [
  {
    title: 'EASA-certifierad verksamhet',
    description:
      'Utbildade piloter och en fullt certifierad verksamhet, registrerad enligt Transportstyrelsens och EASA:s flygregler.',
  },
  {
    title: 'Teknisk & manuell kvalitetskontroll',
    description:
      'Garanterad korrekthet i data innan leverans. Verifierad fotogrammetri minimerar felmarginal i avverkning och värdering.',
  },
  {
    title: 'Dataintegritet & säkerhet',
    description:
      'Tydlig gallringspolicy och datalagring på svenska servrar. Resultatet tillhör alltid uppdragsgivaren.',
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
              Våra uppdrag kräver precision och pålitlighet. Vi är en trygg partner när markdata och beslutsunderlag utgör kärnan i er analys.
            </p>
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
