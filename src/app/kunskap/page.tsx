import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Kunskap om drönarbaserad skogsanalys',
  description:
    'Guider och artiklar om NDVI, multispektral analys, barkborredetektion, LiDAR, satellitdata och kostnader för drönarbaserad skogsinventering.',
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

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl text-center">
          <h1 className="text-display text-white sm:text-display-lg">
            Kunskap om drönarbaserad skogsanalys
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Guider, jämförelser och förklaringar som hjälper dig att förstå hur drönarteknik
            kan effektivisera och förbättra skogsbruket.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
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
