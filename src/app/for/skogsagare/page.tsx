import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Drönartjänster för skogsägare',
  description:
    'TimberDrone hjälper privata skogsägare med drönarbaserad inventering, skadedokumentation och planteringsuppföljning. Kostnadseffektiv översikt över din skog.',
  path: '/for/skogsagare',
})

const faqItems = [
  {
    question: 'Hur stor areal kan ni flyga åt mig som privat skogsägare?',
    answer:
      'Vi anpassar uppdraget efter din fastighet. Oavsett om du äger 10 eller 500 hektar kan vi flyga hela eller delar av arealen. Du får en prisindikation baserad på storlek och önskade leveranser.',
  },
  {
    question: 'Kan jag använda drönardata för försäkringsärenden?',
    answer:
      'Ja. Våra georefererade ortofoton och kartlager är daterade och dokumenterar skadans art och omfattning. Materialet fungerar utmärkt som underlag vid försäkringsanmälan efter storm, snöbrott eller insektsangrepp.',
  },
  {
    question: 'Vilka format levereras data i?',
    answer:
      'Vi levererar ortofoton i GeoTIFF, kartlager i GeoPackage/Shapefile och rapporter i PDF. All data inkluderar metadata med koordinatsystem och flygdatum, redo att öppnas i vanliga kartprogram eller skickas vidare till din skogsförvaltare.',
  },
  {
    question: 'Hur ofta bör jag flyga min skog?',
    answer:
      'En årlig översiktsflygning ger god kontroll. Efter plantering rekommenderar vi uppföljning efter 1–3 år. Vid misstänkt skada, exempelvis efter storm, kan vi mobilisera snabbt för en riktad inventering.',
  },
]

export default function SkogsagarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kundsegment', url: '#' },
              { name: 'Skogsägare', url: '/for/skogsagare' },
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

      <Breadcrumbs items={[{ label: 'Kundsegment' }, { label: 'Skogsägare' }]} />

      <article>
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white sm:text-display-lg">
              Drönartjänster för skogsägare
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              TimberDrone ger dig som privat skogsägare kostnadseffektiv överblick, exakt inventering och dokumentation av din skogsfastighet — utan att du behöver trampa igenom varenda bestånd.
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
              TimberDrone hjälper privata skogsägare att få en tydlig, aktuell bild av sin skog med hjälp av professionell drönarflygning. Oavsett om du vill inventera beståndet, följa upp en plantering eller dokumentera skador efter en storm erbjuder vi snabba och prisvärda lösningar anpassade för enskilda fastighetsägare.
            </p>

            <h2>Bättre översikt utan dyr fältinventering</h2>
            <p>
              Med högupplösta ortofoton och georefererade kartlager får du en komplett översikt av din skogsfastighet. Du kan identifiera beståndsgränser, bedöma slutenhet och upptäcka problem tidigt — utan kostnaden för manuell fältinventering över stora arealer. Datan fungerar som beslutsunderlag när du planerar avverkning, gallring eller andra åtgärder.
            </p>

            <h2>Dokumentation för försäkring och myndigheter</h2>
            <p>
              Efter storm, snöbrott eller insektsangrepp behöver du snabbt kunna visa skadans omfattning. Våra daterade flygningar ger dig georefererat bildmaterial och skadekartor som godtas av försäkringsbolag och myndigheter. Läs mer om{' '}
              <Link href="/areamatning-och-skogsbruk/skadeinventering" className="text-forest-600 underline hover:text-forest-800">
                skadeinventering med drönare
              </Link>.
            </p>

            <h2>Planteringsuppföljning och tillväxtkontroll</h2>
            <p>
              Följ upp dina planteringar med regelbundna flygningar. Du ser hur plantorna etableras, var det finns luckor och om hjälpplantering behövs — utan att behöva vandra varje hygge till fots. Vår{' '}
              <Link href="/areamatning-och-skogsbruk/planteringsuppfoljning" className="text-forest-600 underline hover:text-forest-800">
                planteringsuppföljning
              </Link>{' '}
              ger dig konkreta underlag för beslut.
            </p>

            <h2>Relevanta tjänster</h2>
            <ul>
              <li>
                <Link href="/areamatning-och-skogsbruk/inventering" className="text-forest-600 underline hover:text-forest-800">
                  Inventering och beståndsöversikt
                </Link>
              </li>
              <li>
                <Link href="/areamatning-och-skogsbruk/skadeinventering" className="text-forest-600 underline hover:text-forest-800">
                  Skadeinventering efter storm och insekter
                </Link>
              </li>
              <li>
                <Link href="/areamatning-och-skogsbruk/planteringsuppfoljning" className="text-forest-600 underline hover:text-forest-800">
                  Planteringsuppföljning
                </Link>
              </li>
              <li>
                <Link href="/areamatning-och-skogsbruk/areamatning" className="text-forest-600 underline hover:text-forest-800">
                  Areamätning
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
