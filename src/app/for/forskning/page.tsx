import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Drönardata för skogsforskning',
  description:
    'Högupplöst drönardata för skogsforskning och universitet. Multispektral tidsserie, repeterbar metodik och leverans av rådata i öppna format.',
  path: '/for/forskning',
})

const faqItems = [
  {
    question: 'Kan ni flyga med multispektrala sensorer?',
    answer:
      'Ja. Vi erbjuder flygningar med multispektrala kamerasystem som fångar band i synligt ljus, rödkant och nära infrarött (NIR). Det möjliggör beräkning av vegetationsindex som NDVI, NDRE och andra index relevanta för er forskning.',
  },
  {
    question: 'Levererar ni rådata eller bearbetade produkter?',
    answer:
      'Vi kan leverera båda. Råbilder med fullständig EXIF-metadata och kamerakalibreringsdata levereras för egna bearbetningar. Vi erbjuder även bearbetade produkter som ortofoton, punktmoln och vegetationsindex-kartor.',
  },
  {
    question: 'Hur säkerställer ni repeterbarhet mellan flygningar?',
    answer:
      'Vi dokumenterar flygplan, flyghöjd, överlapp, tidpunkt och väderförhållanden för varje mission. Markerade referenspunkter (GCP) och RTK-positionering ger konsekvent georeferering. Samma parameter-uppsättning används vid återkommande flygningar.',
  },
  {
    question: 'Kan vi använda drönardata i publicerade studier?',
    answer:
      'Absolut. Vi levererar fullständig metodbeskrivning inklusive utrustning, flyghöjd, GSD, överlapp och bearbetningsparametrar — allt ni behöver för att beskriva datainsamlingen i en vetenskaplig publikation.',
  },
]

export default function ForskningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kundsegment', url: '#' },
              { name: 'Skogsforskning', url: '/for/forskning' },
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

      <Breadcrumbs items={[{ label: 'Kundsegment' }, { label: 'Skogsforskning' }]} />

      <article>
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white sm:text-display-lg">
              Drönardata för skogsforskning
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Högupplöst, repeterbar och väldefinierad drönardata för forskningsprojekt. Vi levererar rådata, multispektrala tidsserier och fullständig metoddokumentation.
            </p>
            <div className="mt-8">
              <Link href="/offert" className="btn-primary">
                Diskutera ert projekt
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
              TimberDrone stödjer skogsforskning vid universitet och forskningsinstitut genom att leverera högupplöst drönardata med full kontroll över metodik och dokumentation. Vi förstår forskningens krav på repeterbarhet, transparens och tillgång till rådata — och anpassar varje uppdrag efter ert projektdesign.
            </p>

            <h2>Högupplöst data med dokumenterad metodik</h2>
            <p>
              {/* MÅSTE VERIFIERAS: exakt GSD beror på utrustning och flyghöjd */}
              Vi flyger med kamerasystem som ger hög markupplösning (GSD beroende på utrustning och flyghöjd). Varje flygning dokumenteras med fullständiga parametrar — flyghöjd, överlapp, sensorspecifikation, kalibreringsinformation och väderförhållanden — så att datainsamlingen kan beskrivas exakt i vetenskapliga publikationer.
            </p>

            <h2>Multispektrala tidsserier</h2>
            <p>
              Med multispektrala sensorer fångar vi data i synligt ljus, rödkant och nära infrarött. Genom återkommande flygningar över samma provytor med identisk metodik byggs tidsserier som möjliggör analys av fenologi, stressförlopp och behandlingseffekter. Läs mer om vår{' '}
              <Link href="/vegetationsanalys/ndvi-kartlaggning" className="text-forest-600 underline hover:text-forest-800">
                NDVI-kartläggning
              </Link>{' '}
              och{' '}
              <Link href="/vegetationsanalys/uppfoljning-over-tid" className="text-forest-600 underline hover:text-forest-800">
                uppföljning över tid
              </Link>.
            </p>

            <h2>Rådata och öppna format</h2>
            <p>
              Vi levererar råbilder med fullständig EXIF-data och kamerakalibreringsparametrar för egna bearbetningar i verktyg som Pix4D, Agisoft Metashape eller OpenDroneMap. Bearbetade produkter levereras i öppna format som GeoTIFF och LAS/LAZ.
            </p>

            <h2>Relevanta tjänster för forskning</h2>
            <ul>
              <li>
                <Link href="/vegetationsanalys/ndvi-kartlaggning" className="text-forest-600 underline hover:text-forest-800">
                  NDVI-kartläggning
                </Link>
              </li>
              <li>
                <Link href="/vegetationsanalys/stressanalys" className="text-forest-600 underline hover:text-forest-800">
                  Stressanalys
                </Link>
              </li>
              <li>
                <Link href="/vegetationsanalys/uppfoljning-over-tid" className="text-forest-600 underline hover:text-forest-800">
                  Uppföljning över tid
                </Link>
              </li>
              <li>
                <Link href="/areamatning-och-skogsbruk/inventering" className="text-forest-600 underline hover:text-forest-800">
                  Inventering och beståndsöversikt
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
