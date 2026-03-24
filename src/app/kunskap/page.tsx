import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'

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
    description: 'Vegetationsindex förklarat — formel, värdeskala och tillämpningar inom skogsbruk.',
    image: 'article_data_analysis.png'
  },
  {
    href: '/kunskap/skogsinventering-kostnad',
    title: 'Vad kostar skogsinventering med drönare?',
    description: 'Prisfaktorer, jämförelse med traditionella metoder och avkastningsperspektiv.',
    image: 'article_forest_economy.png'
  },
  {
    href: '/kunskap/barkborre-tidigt',
    title: 'Upptäck barkborre tidigt med drönare',
    description: 'Hur multispektral analys identifierar angrepp innan de syns för ögat.',
    image: 'article_barkborre.png'
  },
  {
    href: '/kunskap/multispektral-vs-rgb',
    title: 'Multispektral vs RGB',
    description: 'Skillnaden mellan sensortyper och när du ska välja vilken för skogsanalys.',
    image: 'article_data_analysis.png'
  },
  {
    href: '/kunskap/fotosyntesmatning-guide',
    title: 'Fotosyntetisk aktivitet — mätguide',
    description: 'Så mäter du fotosyntetisk aktivitet i skog med drönare och vegetationsindex.',
    image: 'article_data_analysis.png'
  },
  {
    href: '/kunskap/dronare-vs-satellitdata',
    title: 'Drönare vs satellitdata',
    description: 'Upplösning, kostnad, täckning och frekvens — en detaljerad jämförelse för skogsbruk.',
    image: 'article_drone_satellite.png'
  },
  {
    href: '/kunskap/lidar-vs-dronare',
    title: 'LiDAR vs fotogrammetri',
    description: 'Teknisk jämförelse av två metoder för att skapa 3D-modeller av skog.',
    image: 'article_drone_satellite.png'
  },
  {
    href: '/kunskap/vad-paverkar-priset',
    title: 'Vad påverkar kostnaden för skogsinventering?',
    description: 'Vilka faktorer styr priset — areal, terräng, sensortyp, leveransformat och årsavtal.',
    image: 'article_forest_economy.png'
  },
  {
    href: '/kunskap/kolinlagring-skog-guide',
    title: 'Kolinlagring i skog — hur mäts det?',
    description: 'Guide till biomassemätning, CO₂-ekvivalenter och ESG-rapportering med drönardata.',
    image: 'article_forest_economy.png'
  },
  {
    href: '/kunskap/sasongsguide-skogsinventering',
    title: 'Bästa tid för skogsinventering — säsongsguide',
    description: 'Månad-för-månad-guide till optimal tidpunkt för varje typ av drönarbaserad skogsanalys.',
    image: 'article_forest_economy.png'
  },
  {
    href: '/kunskap/stormskada-checklista',
    title: 'Checklista efter stormskada i skog',
    description: 'Steg-för-steg-guide: vad du ska göra efter stormskada — dokumentation, försäkring och åtgärd.',
    image: 'article_barkborre.png'
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

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none">
          <Image src="/sunny_ortofoto.png" alt="Forest background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-mapping-grid opacity-[0.05] pointer-events-none" />
        <div className="container-page relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-display text-white sm:text-display-lg tracking-tight">
            Kunskap om drönarbaserad skogsanalys
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70 leading-relaxed font-body">
            Guider, jämförelser och förklaringar som hjälper dig att förstå hur drönarteknik
            kan effektivisera och förbättra skogsbruket.
          </p>
        </div>
      </header>

      <section className="section-padding bg-cream-50">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="panel group flex flex-col overflow-hidden transition-all duration-300 hover:border-forest-400 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Visual Banner */}
                <div className="relative h-48 w-full bg-forest-900 border-b border-slate-200 overflow-hidden">
                  <Image 
                    src={`/${article.image}`} 
                    alt={article.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 bg-white">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 font-body">
                    {article.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-sm font-bold text-forest-600 group-hover:text-forest-700 transition-colors">
                    Läs mer
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
