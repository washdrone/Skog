import Link from 'next/link'

const OUTPUTS = [
  {
    title: 'Ortofoto',
    description:
      /* MÅSTE VERIFIERAS: B1 GSD-intervall beror på utrustning och flyghöjd */
      'Sömlösa, georefererade flygbilder med hög markupplösning. Visuell grund för all analys och planering.',
    badges: ['GeoTIFF', 'JPEG2000'],
    href: '/areamatning-och-skogsbruk/leveranser',
    placeholder: (
      <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-600 to-forest-950">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 topo-pattern opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-[150px] h-[150px] rounded-full bg-forest-500/20 blur-[50px]" />
      </div>
    ),
  },
  {
    title: 'Kartlager & vektordata',
    description:
      'Polygoner, linjer och punkter med attributdata. Beståndsgränser, hinder, infrastruktur — redo för ert GIS.',
    badges: ['Shapefile', 'GeoPackage', 'GeoJSON'],
    href: '/areamatning-och-skogsbruk/leveranser',
    placeholder: (
      <div className="absolute inset-0 bg-forest-950">
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 300 200" fill="none">
          <polygon points="40,30 120,20 140,80 60,90" stroke="#46c17e" strokeWidth="1.5" fill="#46c17e" fillOpacity="0.1" />
          <polygon points="130,40 230,25 250,100 160,95" stroke="#7cd9a5" strokeWidth="1.5" fill="#7cd9a5" fillOpacity="0.08" />
          <polygon points="50,100 150,95 170,170 70,180" stroke="#24a663" strokeWidth="1.5" fill="#24a663" fillOpacity="0.12" />
          <polygon points="160,100 270,90 280,175 180,180" stroke="#46c17e" strokeWidth="1.5" fill="#46c17e" fillOpacity="0.06" />
          <line x1="40" y1="30" x2="130" y2="40" stroke="#7cd9a5" strokeWidth="0.5" opacity="0.3" />
          <line x1="60" y1="90" x2="50" y2="100" stroke="#7cd9a5" strokeWidth="0.5" opacity="0.3" />
          <circle cx="40" cy="30" r="2" fill="#46c17e" opacity="0.6" />
          <circle cx="120" cy="20" r="2" fill="#46c17e" opacity="0.6" />
          <circle cx="140" cy="80" r="2" fill="#46c17e" opacity="0.6" />
          <circle cx="60" cy="90" r="2" fill="#46c17e" opacity="0.6" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Vegetationsindex (NDVI)',
    description:
      'Multispektral analys som visar växtlighetens vitalitet. Objektiv bedömning av skogshälsa, stress och förändringar.',
    badges: ['GeoTIFF', 'PDF-rapport'],
    href: '/vegetationsanalys/ndvi-kartlaggning',
    placeholder: (
      <div className="absolute inset-0 ndvi-gradient opacity-80">
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>
    ),
  },
]

export default function OutputShowcase() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="container-page relative">
        <div className="text-center">
          <span className="badge">Vad vi levererar</span>
          <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display">
            Era underlag — redo att använda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Alla leveranser är georefererade, kvalitetskontrollerade och levereras i branschstandardformat.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OUTPUTS.map((output) => (
            <Link
              key={output.title}
              href={output.href}
              className="card-shine group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:border-forest-300 hover:shadow-2xl hover:shadow-forest-500/[0.08] sm:hover:-translate-y-1.5"
            >
              {/* Visual placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {output.placeholder}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-forest-700 transition-colors duration-300">
                  {output.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {output.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {output.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-500"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
