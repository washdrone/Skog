import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare — vi arbetar i hela Sverige',
  description:
    'TimberDrone utför drönarbaserad skogsinventering i hela Sverige. Läs mer om våra tjänster i Norrland, Svealand och Småland & Götaland.',
  path: '/platser',
})

const REGIONS = [
  {
    name: 'Norrland',
    href: '/platser/skogsinventering-norrland',
    counties: 'Norrbotten, Västerbotten, Jämtland, Västernorrland, Gävleborg',
    description:
      'Stora skogsarealer, avlägsen terräng och korta flygsäsonger. Vi anpassar uppdragen efter norrländska förhållanden och kan kartlägga hundratals hektar per mobilisering.',
  },
  {
    name: 'Svealand',
    href: '/platser/skogsinventering-svealand',
    counties: 'Dalarna, Värmland, Örebro, Västmanland, Uppsala, Södermanland, Stockholm',
    description:
      'Blandskog, god tillgänglighet och närhet till storstäder. Korta mobiliseringstider och effektiv kartläggning av varierande skogslandskap.',
  },
  {
    name: 'Småland & Götaland',
    href: '/platser/skogsinventering-smaland',
    counties: 'Jönköping, Kronoberg, Kalmar samt övriga Götaland',
    description:
      'Hög skogstäthet, privat ägande och granbarkborreproblematik. Drönarbaserad inventering och multispektral analys för tidig detektion och aktuella beslutsunderlag.',
  },
]

export default function PlatserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '/platser' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={[{ label: 'Platser' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare — vi arbetar i hela Sverige
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Från Norrbottens fjällnära skogar till Smålands granbestånd. Vi utför drönarbaserad
            skogsinventering, areamätning och vegetationsanalys i samtliga svenska län.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center">
            <span className="badge">Regioner</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Välj din region</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Klicka på en region för att läsa mer om hur vi arbetar lokalt och vilka tjänster som finns tillgängliga.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {REGIONS.map((region) => (
              <Link
                key={region.href}
                href={region.href}
                className="group rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:border-forest-200 hover:shadow-xl hover:shadow-forest-500/[0.06] hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                  {region.name}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-forest-600">
                  {region.counties}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {region.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 group-hover:text-forest-700 transition-colors">
                  Läs mer
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand ctaHref="/offert" />
    </>
  )
}
