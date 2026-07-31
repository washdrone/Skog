import Link from 'next/link'
import Image from 'next/image'

const OUTPUTS = [
  {
    title: 'Ortofoto',
    description:
      'Sömlösa, georefererade flygbilder med hög markupplösning. Visuell grund för inventering, planträkning och skadeavgränsning.',
    badges: ['GeoTIFF', 'JPEG2000'],
    href: '/tjanster/skogsinventering',
    image: '/sunny_ortofoto.png',
    alt: 'Georefererat ortofoto över skogsbestånd från drönare',
  },
  {
    title: 'Höjdmodeller & punktmoln',
    description:
      'Kronhöjdsmodell och markmodell ur fotogrammetriskt punktmoln. Underlag för trädhöjd, volym och tillväxt.',
    badges: ['GeoTIFF', 'LAS/LAZ'],
    href: '/tjanster/tradhojdsmatning',
    image: '/sunny_lidar.png',
    alt: 'Höjdmodell och punktmoln för trädhöjdsmätning med drönare',
  },
  {
    title: 'Bestånds- & skadekartor',
    description:
      'Beståndsgränser, plantkartor och avgränsade skadeytor med attributdata och beräknad areal — redo för ert GIS.',
    badges: ['Shapefile', 'GeoPackage', 'PDF-rapport'],
    href: '/tjanster/skogsskadeinventering',
    image: '/sunny_vektordata.png',
    alt: 'Beståndskarta och skadekarta som vektordata för skogsbruk',
  },
]

export default function OutputShowcase() {
  return (
    <section className="bg-white section-padding border-b border-slate-200">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge">Vad vi levererar</span>
          <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display tracking-tight">
            Era underlag — redo att använda
          </h2>
          <p className="mt-4 text-slate-600 font-body leading-relaxed">
            Alla leveranser är georefererade, kvalitetskontrollerade och levereras i branschstandardformat.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OUTPUTS.map((output) => (
            <Link
              key={output.title}
              href={output.href}
              className="panel flex flex-col group overflow-hidden hover:border-forest-500 transition-colors"
            >
              {/* Visual image */}
              <div className="relative aspect-[16/10] w-full bg-forest-900 overflow-hidden">
                <Image
                  src={output.image}
                  alt={output.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
                <div className="absolute top-0 left-0 h-1 w-full bg-forest-600 transition-all duration-300 group-hover:bg-accent-500" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-forest-700 transition-colors">
                  {output.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-600 font-body mb-6">
                  {output.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {output.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-1 bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest"
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
