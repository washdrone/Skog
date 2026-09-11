import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Drönartjänster för kommuner och myndigheter',
  description:
    'Drönarbaserad kartläggning av skog för kommuner och myndigheter. Tätortsnära skog, beståndsöversikt, skogsskadeinventering och offentlig mark.',
  path: '/for/kommuner',
})

const faqItems = [
  {
    question: 'Kan ni flyga över tätortsnära skog och parkmark?',
    answer:
      'Ja. Vi planerar flygningar i och nära tätort i enlighet med gällande regler och koordinerar med berörda parter vid varje uppdrag.',
  },
  {
    question: 'Uppfyller era leveranser kraven för offentlig upphandling?',
    answer:
      'Vi är vana vid att arbeta med offentliga beställare och kan anpassa leveranser efter era kravspecifikationer. Vi erbjuder standardiserade format, fullständig dokumentation och fakturering anpassad för kommunal redovisning.',
  },
  {
    question: 'Kan drönardata användas som underlag för skötsel av kommunal skog?',
    answer:
      'Ja. Med drönarbilder och kartlager får ni underlag för att bedöma trädkronors tillstånd, upptäcka skadade träd och följa upp skötselåtgärder i kommunens skog och grönområden.',
  },
  {
    question: 'Hur hanterar ni GDPR vid flygning över offentlig mark?',
    answer:
      'Vi flyger på höjder och med inställningar som minimerar risken att enskilda personer kan identifieras. Vi arbetar för att hantera personuppgifter ansvarsfullt i enlighet med gällande dataskyddsregler. Kontakta oss för mer information om hur vi hanterar GDPR i specifika uppdrag.',
  },
]

export default function KommunerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kommuner och myndigheter', url: '/for/kommuner' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      <Breadcrumbs items={[{ label: 'Kundsegment' }, { label: 'Kommuner och myndigheter' }]} />

      <article>
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white sm:text-display-lg">
              Drönartjänster för kommuner och myndigheter
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Kostnadseffektiv kartläggning och övervakning av kommunal skog, parkmark och skyddade naturområden med drönarbaserad geodata.
            </p>
            <div className="mt-8">
              <Link href="/offert" className="btn-primary">
                Begär offert
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        <div className="section-padding">
          <div className="container-page max-w-3xl prose-forest">
            <p>
              TimberDrone hjälper kommuner och myndigheter att kartlägga, övervaka och dokumentera skog och grönområden med drönarbaserad geodata. Vi levererar aktuella underlag för beslut om skötsel, naturvård, exploatering och regelefterlevnad — snabbare och mer kostnadseffektivt än traditionella metoder.
            </p>

            <h2>Översikt och skadeinventering</h2>
            <p>
              Med drönarbilder och kartlager får ni en aktuell bild av kommunens skog — ni kan upptäcka skadade träd, följa upp skötselplaner och ta fram underlag för beslut. Vid stormfällning eller insektsangrepp kan vi snabbt leverera skadeunderlag. Läs mer om vår{' '}
              <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
                skogsskadeinventering
              </Link>{' '}
              och{' '}
              <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                skogsinventering
              </Link>.
            </p>

            <h2>Urban skog och parkförvaltning</h2>
            <p>
              Tätortsnära skog och parkmark kräver regelbunden tillsyn. Drönarflygning ger snabb översikt av trädkronors tillstånd, visar synliga avvikelser som kan motivera bedömning på plats av sakkunnig och dokumenterar förändringar över tid. Resultaten integreras med era befintliga förvaltningssystem i standardiserade GIS-format.
            </p>

            <h2>Offentlig mark och regelefterlevnad</h2>
            <p>
              Vi levererar daterade, georefererade kartlager som dokumenterar tillståndet på kommunal mark. Underlaget kan användas för samråd med Skogsstyrelsen, länsstyrelse och andra myndigheter, som ett av flera underlag i arbetet med naturhänsyn och miljöskydd.
            </p>

            <h2>Relevanta tjänster</h2>
            <ul>
              <li>
                <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
                  Skogsskadeinventering
                </Link>
              </li>
              <li>
                <Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">
                  Inventering och beståndsöversikt
                </Link>
              </li>
              <li>
                <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                  Arealmätning
                </Link>
              </li>
              <li>
                <Link href="/tjanster/tradhojdsmatning" className="text-forest-600 underline hover:text-forest-800">
                  Trädhöjdsmätning
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
