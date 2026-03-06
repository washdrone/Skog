import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Kunskap om drönarbaserad skogsanalys — guider och jämförelser',
  description:
    'Guider och artiklar om NDVI, multispektral analys, barkborredetektion, kolinlagring, LiDAR, satellitdata, säsongsplanering och kostnader för drönarbaserad skogsinventering.',
  path: '/kunskap',
})

const articles = [
  {
    href: '/kunskap/vad-ar-ndvi',
    title: 'Vad är NDVI?',
    description:
      'Vegetationsindex förklarat — formel, värdeskala och tillämpningar inom skogsbruk.',
  },
  {
    href: '/kunskap/skogsinventering-kostnad',
    title: 'Vad kostar skogsinventering med drönare?',
    description:
      'Prisfaktorer, jämförelse med traditionella metoder och avkastningsperspektiv.',
  },
  {
    href: '/kunskap/barkborre-tidigt',
    title: 'Upptäck barkborre tidigt med drönare',
    description:
      'Hur multispektral analys identifierar angrepp innan de syns för ögat.',
  },
  {
    href: '/kunskap/multispektral-vs-rgb',
    title: 'Multispektral vs RGB',
    description:
      'Skillnaden mellan sensortyper och när du ska välja vilken för skogsanalys.',
  },
  {
    href: '/kunskap/fotosyntesmatning-guide',
    title: 'Fotosyntetisk aktivitet — mätguide',
    description:
      'Så mäter du fotosyntetisk aktivitet i skog med drönare och vegetationsindex.',
  },
  {
    href: '/kunskap/dronare-vs-satellitdata',
    title: 'Drönare vs satellitdata',
    description:
      'Upplösning, kostnad, täckning och frekvens — en detaljerad jämförelse för skogsbruk.',
  },
  {
    href: '/kunskap/lidar-vs-dronare',
    title: 'LiDAR vs fotogrammetri',
    description:
      'Teknisk jämförelse av två metoder för att skapa 3D-modeller av skog.',
  },
  {
    href: '/kunskap/vad-paverkar-priset',
    title: 'Vad påverkar kostnaden för skogsinventering?',
    description:
      'Vilka faktorer styr priset — areal, terräng, sensortyp, leveransformat och årsavtal.',
  },
  {
    href: '/kunskap/kolinlagring-skog-guide',
    title: 'Kolinlagring i skog — hur mäts det?',
    description:
      'Guide till biomassemätning, CO₂-ekvivalenter och ESG-rapportering med drönardata.',
  },
  {
    href: '/kunskap/sasongsguide-skogsinventering',
    title: 'Bästa tid för skogsinventering — säsongsguide',
    description:
      'Månad-för-månad-guide till optimal tidpunkt för varje typ av drönarbaserad skogsanalys.',
  },
  {
    href: '/kunskap/stormskada-checklista',
    title: 'Checklista efter stormskada i skog',
    description:
      'Steg-för-steg-guide: vad du ska göra efter stormskada — dokumentation, försäkring och åtgärd.',
  },
]

export default function KunskapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={[{ label: 'Kunskap' }]} />

      <section className="gradient-hero py-12 sm:py-16 lg:py-20">
        <div className="container-page max-w-3xl text-center">
          <h1 className="text-heading-xl text-white font-display sm:text-display lg:text-display-lg">
            Kunskap om drönarbaserad skogsanalys
          </h1>
          <p className="mt-4 text-base text-white/60 leading-relaxed sm:mt-5 sm:text-lg">
            Guider, jämförelser och förklaringar som hjälper dig att förstå hur drönarteknik
            kan effektivisera och förbättra skogsbruket.
          </p>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent sm:h-16" />
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-forest-300 hover:shadow-md sm:p-6"
              >
                <h2 className="text-heading text-slate-900 group-hover:text-forest-700 transition-colors">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {article.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-600 group-hover:text-forest-700">
                  Läs mer
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
