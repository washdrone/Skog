import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Drönartjänster för skogsbolag',
  description:
    'Skalbar drönarbaserad datainsamling för skogsbolag. Integration med GIS-system, standardiserade leveransformat och möjlighet till återkommande flygningar.',
  path: '/for/skogsbolag',
})

const faqItems = [
  {
    question: 'Kan ni integrera drönardata med vårt befintliga GIS-system?',
    answer:
      'Ja. Vi levererar i branschstandard-format som GeoTIFF, GeoPackage och Shapefile med fullständiga koordinatreferenser. Datan kan importeras direkt i ArcGIS, QGIS eller ert egna skogsbruksplaneringssystem.',
  },
  {
    question: 'Hur hanterar ni stora arealer med återkommande flygningar?',
    answer:
      'Vi erbjuder ramavtal med schemalagda flygningar — exempelvis kvartalsvis eller säsongsbaserat. Varje flygning följer samma metodologi och referenspunkter, vilket ger jämförbara dataset över tid.',
  },
  {
    question: 'Vilken upplösning och noggrannhet kan vi förvänta oss?',
    answer:
      'Vi flyger med branschledande utrustning — inklusive LiDAR, RTK-positionering och multispektral kamera — som ger ortofoton med hög markupplösning och noggrann positionering. Utrustningen anpassas efter uppdragets krav.',
  },
  {
    question: 'Erbjuder ni bulkpriser för stora volymer?',
    answer:
      'Ja. Vid ramavtal eller flyguppdrag över större arealer erbjuder vi volymbaserad prissättning. Kontakta oss med era behov så tar vi fram ett anpassat förslag.',
  },
]

export default function SkogsbolagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kundsegment', url: '#' },
              { name: 'Skogsbolag', url: '/for/skogsbolag' },
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

      <Breadcrumbs items={[{ label: 'Kundsegment' }, { label: 'Skogsbolag' }]} />

      <article>
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white sm:text-display-lg">
              Drönartjänster för skogsbolag
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Skalbar och standardiserad drönarbaserad datainsamling som integreras sömlöst med era befintliga arbetsflöden och GIS-system.
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
              TimberDrone levererar drönarbaserad geodata anpassad för skogsbolagens krav på skalbarhet, standardisering och systemintegration. Vi förstår att ni behöver data som passar rakt in i era befintliga arbetsflöden — från avverkningsplanering och beståndsöversikt till uppföljning och miljöhänsyn.
            </p>

            <h2>Skalbar datainsamling över stora arealer</h2>
            <p>
              Vi hanterar flygningar från enstaka bestånd till tusentals hektar. Med effektiv flygplanering och modern drönarteknik samlar vi in data snabbt och kostnadseffektivt. Ramavtal med schemalagda flygningar ger er kontinuerlig tillgång till aktuella underlag utan att belasta den egna organisationen.
            </p>

            <h2>Integration med befintliga GIS-system</h2>
            <p>
              All data levereras i standardiserade format — GeoTIFF, GeoPackage, Shapefile — redo att importeras direkt i ArcGIS, QGIS eller ert skogsbruksplaneringssystem. Vi anpassar koordinatsystem, lagerstruktur och namngivning efter era specifikationer. Läs mer om{' '}
              <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                skogsinventering och leveranser
              </Link>.
            </p>

            <h2>Återkommande flygningar och tidsserier</h2>
            <p>
              Genom att flyga samma områden regelbundet med identisk metodik bygger ni upp jämförbara tidsserier. Det ger ovärderliga insikter om tillväxt, skadeförlopp och åtgärdseffekter. Varje leverans följer samma kvalitetsstandard och dokumentation.
            </p>

            <h2>Tjänster för skogsbolag</h2>
            <ul>
              <li>
                <Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">
                  Inventering och beståndsöversikt
                </Link>
              </li>
              <li>
                <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
                  Avverkningsunderlag
                </Link>
              </li>
              <li>
                <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                  Areamätning
                </Link>
              </li>
              <li>
                <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
                  NDVI-kartläggning och vegetationsanalys
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
