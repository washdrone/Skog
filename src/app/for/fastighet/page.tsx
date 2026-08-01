import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Drönartjänster för skogsfastighetsköpare',
  description:
    'Verifiera virkesvolymer, skogens hälsa och beståndsgränser inför köp eller försäljning av skogsfastighet. Oberoende drönardata för due diligence.',
  path: '/for/fastighet',
})

const faqItems = [
  {
    question: 'Varför behöver jag drönardata vid köp av skogsfastighet?',
    answer:
      'En skogsbruksplan baseras ofta på äldre inventeringar och kan vara flera år gammal. Drönarbaserad kartläggning ger dig en aktuell, oberoende bild av fastigheten — virkesförråd, beståndsgränser och eventuella skador — så att du kan fatta ett välgrundat köpbeslut.',
  },
  {
    question: 'Kan ni verifiera uppgifterna i en befintlig skogsbruksplan?',
    answer:
      'Ja. Vi kartlägger fastigheten med drönare och jämför resultatet med den befintliga skogsbruksplanen. Du får ett oberoende underlag som visar avvikelser i areal, beståndsindelning och skogens visuella status. Kompletterande fältverifiering kan rekommenderas vid behov.',
  },
  {
    question: 'Hur snabbt kan ni genomföra en flygning inför en fastighetsaffär?',
    answer:
      'Vi förstår att fastighetsaffärer ofta har pressade tidsramar. Kontakta oss så tidigt som möjligt i processen så planerar vi in flygningen. Leveranstider beror på areal, väderförhållanden och önskade analyser — vi specificerar detta i offerten.',
  },
  {
    question: 'Vilka leveranser ingår i ett due diligence-uppdrag?',
    answer:
      'Ett typiskt uppdrag omfattar högupplösta ortofoton, georefererade kartlager och en sammanfattande rapport. Vi kan även komplettera med skadeinventering för att bedöma skogens status. Exakt leveransomfattning specificeras i offerten baserat på dina behov.',
  },
  {
    question: 'Kan drönardata användas vid förhandling om pris?',
    answer:
      'Absolut. Om drönardata visar att den faktiska statusen avviker från vad som anges i skogsbruksplanen — exempelvis skador, luckor eller avvikande beståndsgränser — ger det dig ett konkret förhandlingsunderlag. Datan är georefererad och daterad, vilket gör den svår att ifrågasätta.',
  },
]

export default function FastighetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kundsegment', url: '#' },
              { name: 'Skogsfastighetsköpare', url: '/for/fastighet' },
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

      <Breadcrumbs items={[{ label: 'Kundsegment' }, { label: 'Skogsfastighetsköpare' }]} />

      <article>
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white sm:text-display-lg">
              Drönartjänster för skogsfastighetsköpare
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Verifiera virkesvolymer, beståndsgränser och skogens hälsa innan du skriver på. TimberDrone levererar oberoende drönardata som ger dig ett tryggt beslutsunderlag vid köp eller försäljning av skogsfastighet.
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
              Att köpa en skogsfastighet är en betydande investering. Priset baseras till stor del på det uppskattade virkesförrådet, markens bonitet och skogens kondition — uppgifter som ofta kommer från skogsbruksplaner som kan vara flera år gamla. Med drönarbaserad kartläggning får du en aktuell och oberoende bild av fastigheten innan du fattar beslut.
            </p>

            <h2>Due diligence med drönardata</h2>
            <p>
              Traditionell due diligence vid skogsfastighetsköp förlitar sig ofta på äldre fältdata och subjektiva bedömningar. En drönarflygning ger dig högupplösta ortofoton och georefererade kartlager som visar fastighetens faktiska status. Du kan identifiera avvikelser mellan skogsbruksplanen och verkligheten — exempelvis bestånd som avverkats, skador som inte dokumenterats eller gränser som inte stämmer.
            </p>

            <h2>Bedöm skogens status med skadeinventering</h2>
            <p>
              Utöver visuell kartläggning kan vi genomföra en skogsskadeinventering för att bedöma skogens skick. Med drönarbilder och bildanalys upptäcker vi skadade träd och områden med avvikelser — värdefull information innan du binder dig vid ett köp. Läs mer om{' '}
              <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
                skogsskadeinventering
              </Link>.
            </p>

            <h2>Oberoende underlag för förhandling</h2>
            <p>
              Drönardata ger dig ett objektivt förhandlingsverktyg. Om kartläggningen visar att den faktiska statusen avviker från vad säljaren redovisar har du konkret dokumentation att hänvisa till. All data är georefererad, daterad och levereras i standardiserade format som kan granskas av tredje part.
            </p>

            <h2>Relevanta tjänster</h2>
            <ul>
              <li>
                <Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">
                  Inventering och beståndsöversikt
                </Link>
              </li>
              <li>
                <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                  Areamätning
                </Link>
              </li>
              <li>
                <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
                  Skogsskadeinventering
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
