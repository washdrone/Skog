import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Beståndsinventering med drönare',
  description:
    'Beståndsinventering med drönare: beståndsgränser, trädslag, åldersklassificering och volym per bestånd. Georefererade kartlager som underlag för skogsbruksplan.',
  path: '/tjanster/bestandsinventering',
})

const FAQ_ITEMS = [
  {
    question: 'Vad är beståndsinventering?',
    answer: 'Beståndsinventering innebär att skogen delas in i bestånd — avgränsade skogspartier med liknande egenskaper (trädslag, ålder, bonitet). Varje bestånd kartläggs med avseende på gränser, areal, dominerande trädslag, medelhöjd och uppskattat virkesförråd.',
  },
  {
    question: 'Hur kartläggs beståndsgränser med drönare?',
    answer: 'Beståndsgränser identifieras genom att kombinera ortofoto (visuella skillnader i krontak) och höjdmodell (höjdskillnader mellan bestånd med olika utvecklingsstadier). Gränserna digitaliseras som vektorpolygoner med areal beräknad i SWEREF99 TM.',
  },
  {
    question: 'Kan drönare bestämma trädslag?',
    answer: 'Med högupplösta drönarbilder kan vi skilja barr från löv. Med tidpunktsanpassade flygningar (t.ex. tidig vår eller höst) ökar möjligheten att skilja gran, tall och björk. Artriktigheten beror på tidpunkt och fältverifiering.',
  },
  {
    question: 'Hur förhåller sig drönarinventering till Skogsstyrelsens krav?',
    answer: 'Drönardata ger högupplöst underlag som kompletterar skogsbruksplanens krav, men ersätter inte fältinventering helt. Vi levererar kartlager och beståndsmått som underlättar planarbetet och minskar fälttid. Slutgiltig skogsbruksplan ska kvalitetsgranskas av behörig planerare.',
  },
]

export default function BestandsinventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Beståndsinventering', url: '/tjanster/bestandsinventering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Beståndsinventering med drönare',
              description: 'Beståndsgränser, trädslag, ålder och volym kartlagt per bestånd med drönare.',
              url: '/tjanster/bestandsinventering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Beståndsinventering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Beståndsinventering med drönare"
        intro="Beståndsinventering med drönare kartlägger skogens indelning i bestånd med tydliga gränser, trädslag, åldersklassificering och volymuppskattning. Resultatet är georefererade kartlager som utgör grunden för skogsbruksplanering och förvaltning."
        relatedLinks={[
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
          { label: 'Skogsbruksplan-underlag', href: '/tjanster/skogsbruksplan-underlag' },
          { label: 'Skogsskadeinventering', href: '/tjanster/skogsskadeinventering' },
        ]}
      >
        <h2>Vad är beståndsinventering?</h2>
        <p>
          Beståndsinventering innebär att skogen delas in i avgränsade enheter — bestånd — med
          liknande egenskaper avseende trädslag, ålder, höjd och täthet. Varje bestånd kartläggs
          som en polygon med tillhörande attributdata. Beståndsinventering utgör grunden för{' '}
          <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
            skogsbruksplaner
          </Link>{' '}
          och är avgörande för rationellt skogsbruk.
        </p>

        <h2>Metodik</h2>
        <p>
          Vi kombinerar flera datakällor från drönare för att identifiera och karakterisera bestånd:
        </p>
        <ul>
          <li>
            <strong>Ortofoto</strong> — visuell identifiering av kronskikt, luckor och gränser
          </li>
          <li>
            <strong>Höjdmodell (CHM)</strong> — höjdskillnader avgränsar bestånd med olika
            utvecklingsstadier
          </li>
          <li>
            <strong>Trädkronssegmentering</strong> — identifiering av enskilda träd för
            stamantal och krondiameter
          </li>
        </ul>

        <h2>Beståndsmått som kartläggs</h2>
        <ul>
          <li>Beståndsgränser som georefererade polygoner</li>
          <li>Areal per bestånd (hektar)</li>
          <li>Dominerande trädslag (barr/löv, gran/tall/björk)</li>
          <li>Medelhöjd och övre höjd</li>
          <li>Kronslutning och stamtäthet</li>
          <li>Uppskattat virkesförråd (m³sk/ha)</li>
          <li>Utvecklingsklass (ungskog, gallringsskog, slutavverkningsskog)</li>
        </ul>

        <h2>Tillämpningar</h2>
        <ul>
          <li>Underlag för skogsbruksplan och åtgärdsplanering</li>
          <li>Gallringsbedömning och prioritering</li>
          <li>Avgränsning av naturvärdesbestånd och kantzoner</li>
          <li>Dokumentation för certifiering (FSC/PEFC)</li>
          <li>Uppföljning av beståndsutveckling över tid</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Beståndskarta med polygoner och attributdata (GeoPackage/Shapefile)</li>
          <li>Ortofoto (GeoTIFF, hög markupplösning)</li>
          <li>Kronhöjdsmodell (GeoTIFF)</li>
          <li>Beståndsregister med sammanställda mått (Excel/CSV)</li>
          <li>PDF-rapport med kartor och beståndssammanfattning</li>
        </ul>

        <p>
          Kombinera beståndsinventering med{' '}
          <Link href="/tjanster/tradhojdsmatning" className="text-forest-600 underline hover:text-forest-800">
            trädhöjdsmätning
          </Link>{' '}
          för detaljerad höjd- och tillväxtdata per bestånd, eller med{' '}
          <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsskadeinventering
          </Link>{' '}
          för att kartlägga skador inom bestånden.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
