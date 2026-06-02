import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Trädhöjdsmätning med drönare — höjd- och tillväxtdata',
  description:
    'Trädhöjdsmätning med drönare ger objektiv höjd- och tillväxtdata för hela beståndet. Heltäckande höjdmodeller från luften — rikstäckande i hela Sverige.',
  path: '/tjanster/tradhojdsmatning',
})

const FAQ_ITEMS = [
  {
    question: 'Hur noggrann är trädhöjdsmätning med drönare?',
    answer:
      'Trädhöjd beräknas som skillnaden mellan en kronhöjdsmodell (DSM) och en markmodell (DTM). Noggrannheten beror på flyghöjd, bildöverlapp, markvegetation och hur väl markytan syns mellan kronorna. För att säkerställa kvaliteten kalibreras höjderna mot kontrollmätningar i fält.' /* MÅSTE VERIFIERAS: ange specifik höjdnoggrannhet först när den är bekräftad mot faktisk utrustning */,
  },
  {
    question: 'Hur går trädhöjdsmätning med drönare till?',
    answer:
      'Drönaren flyger systematiskt över beståndet med högt bildöverlapp och samlar in georefererade bilder. Bilderna bearbetas fotogrammetriskt till ett punktmoln, varifrån en kronhöjdsmodell och en markmodell tas fram. Skillnaden mellan modellerna ger trädens höjd över hela arealen.',
  },
  {
    question: 'Kan ni mäta höjden på enskilda träd?',
    answer:
      'Ja, i bestånd där enskilda trädkronor kan urskiljas segmenteras kronorna i punktmolnet och en höjd beräknas per träd. I täta eller ungskogsbestånd där kronorna går ihop redovisas höjden i stället som en yttäckande höjdmodell och beståndsmedelvärden.',
  },
  {
    question: 'Vad används höjddata till i skogsbruket?',
    answer:
      'Trädhöjd är en central variabel för att uppskatta volym, bonitet och tillväxt. Höjddata används som underlag för avverknings- och skötselbeslut, för att följa beståndets utveckling över tid och som indata till volymmodeller tillsammans med stamantal och diameter.',
  },
  {
    question: 'Hur skiljer sig drönarmätning från laserdata och fältmätning?',
    answer:
      'Manuell höjdmätning i fält bygger på stickprov i provytor, medan drönaren ger en heltäckande höjdbild av hela beståndet. Jämfört med rikstäckande laserdata från flygplan är drönarflygning mer aktuell och kan beställas vid behov, med högre upplösning på den enskilda fastigheten.',
  },
  {
    question: 'Hur ofta bör trädhöjden mätas för att följa tillväxt?',
    answer:
      'För att mäta tillväxt jämförs höjddata från två flygningar vid olika tidpunkter. Lämpligt intervall beror på syftet — för tillväxtuppföljning i yngre bestånd kan återkommande flygningar med några års mellanrum ge tydlig utveckling. Vi kan lägga upp återkommande mätningar inom ett årsavtal.',
  },
  {
    question: 'Påverkar årstid och väder mätningen?',
    answer:
      'Ja. Lövfri säsong gör det lättare att se markytan mellan kronorna i lövbestånd, och stabilt väder utan kraftig vind ger jämnare bilddata. Vi planerar flygningen efter beståndstyp och syfte för att höjdmodellen ska bli så tillförlitlig som möjligt.',
  },
]

export default function TradhojdsmatningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Trädhöjdsmätning', url: '/tjanster/tradhojdsmatning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Trädhöjdsmätning med drönare',
              description:
                'Objektiv höjd- och tillväxtdata för skogsbestånd med drönare. Heltäckande höjdmodeller och höjd per träd som underlag för volym, bonitet och skötselbeslut.',
              url: '/tjanster/tradhojdsmatning',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Trädhöjdsmätning"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Trädhöjdsmätning med drönare"
        intro="Trädhöjdsmätning med drönare ger objektiv höjd- och tillväxtdata för hela beståndet — heltäckande höjdmodeller och höjd per träd som underlag för volym, bonitet och skötselbeslut. Rikstäckande i hela Sverige."
        relatedLinks={[
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
          { label: 'Skogsbruksplan-underlag', href: '/tjanster/skogsbruksplan-underlag' },
          { label: 'Årsavtal', href: '/tjanster/arsavtal' },
        ]}
      >
        <h2>Vad är trädhöjdsmätning med drönare?</h2>
        <p>
          Trädhöjdsmätning med drönare innebär att hela skogsbeståndets höjd kartläggs från luften
          i stället för att mätas i enstaka provytor. Drönaren samlar in georefererade bilder som
          bearbetas till höjdmodeller, vilket ger en heltäckande och objektiv bild av trädens höjd
          över hela arealen. Höjd är en av de viktigaste variablerna i skogsbruket — den ligger till
          grund för volym, bonitet och tillväxt, och därmed för avverknings- och skötselbeslut.
        </p>

        <h2>Så beräknas höjden</h2>
        <p>
          Höjden tas fram genom att två modeller jämförs: en kronhöjdsmodell som beskriver
          vegetationens översta yta och en markmodell som beskriver marknivån under träden.
          Skillnaden mellan dem är trädens höjd.
        </p>
        <ul>
          <li><strong>Kronhöjdsmodell (DSM)</strong> — beräknas ur det fotogrammetriska punktmolnet</li>
          <li><strong>Markmodell (DTM)</strong> — marknivån som syns mellan och under kronorna</li>
          <li><strong>Höjdmodell (CHM)</strong> — DSM minus DTM ger trädens höjd över hela arealen</li>
          <li><strong>Höjd per träd</strong> — där enskilda kronor kan urskiljas segmenteras de och en höjd beräknas per träd</li>
        </ul>

        <h2>Vad höjddata används till</h2>
        <ul>
          <li>Indata till volymuppskattning tillsammans med stamantal och diameter</li>
          <li>Bedömning av bonitet och beståndets utvecklingsstadium</li>
          <li>Tillväxtuppföljning genom jämförelse mellan flygningar över tid</li>
          <li>Underlag för avverknings-, gallrings- och röjningsbeslut</li>
          <li>Objektiv dokumentation av beståndets tillstånd</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Kronhöjdsmodell (CHM) och markmodell (DTM) som GeoTIFF</li>
          <li>Punktmoln (LAS/LAZ)</li>
          <li>Höjdkarta och eventuell höjd per träd (GeoPackage/Shapefile)</li>
          <li>Sammanfattande rapport med höjdstatistik per bestånd (PDF)</li>
        </ul>

        <h2>Kombinera med skogsinventering</h2>
        <p>
          Trädhöjdsmätning ingår ofta som en del av en bredare{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>
          , där höjd kombineras med stamantal och trädslag till färdiga{' '}
          <Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">
            beståndsdata
          </Link>
          . För löpande tillväxtuppföljning kan återkommande höjdmätningar läggas upp inom ett{' '}
          <Link href="/tjanster/arsavtal" className="text-forest-600 underline hover:text-forest-800">
            årsavtal
          </Link>
          .
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
