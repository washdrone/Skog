import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Kolinlagring & ESG-underlag med drönare — biomassemätning för skog',
  description:
    'Mät skogens biomassa och beräkna kolinlagring med drönare. Underlag för ESG-rapportering, CSRD och klimatbokslut. Förändringsdetektion över tid för verifierbara klimatdata.',
  path: '/tjanster/kolinlagring',
})

const FAQ_ITEMS = [
  {
    question: 'Varför behövs drönardata för kolinlagring?',
    answer: 'EU:s CSRD-direktiv ställer krav på att större företag rapporterar klimatpåverkan, inklusive kolinlagring i skog. Drönarbaserad biomassemätning ger mer detaljerade och verifierbara data än traditionella skattningsmetoder, vilket stärker trovärdigheten i ESG-rapporteringen.',
  },
  {
    question: 'Hur beräknas kolinlagring från drönardata?',
    answer: 'Genom att mäta trädvolym och biomassa från luften kan koldioxidupptag uppskattas via vedertagna omräkningsfaktorer. Metoden kombinerar höjddata och kronmätningar för att beräkna stående volym, som sedan omräknas till biomassa och CO₂-ekvivalenter.',
  },
  {
    question: 'Vilka företag omfattas av CSRD?',
    answer: 'CSRD omfattar i ett första steg stora företag av allmänt intresse och utökas successivt. Skogsägande företag och organisationer med klimatmål behöver verifierbara data om kolinlagring i sin skog. Kontakta oss för att diskutera hur det påverkar just er verksamhet.' /* MÅSTE VERIFIERAS: exakta gränsvärden och tidsplan för CSRD-implementering i Sverige */,
  },
  {
    question: 'Kan förändring av kolinlagring mätas över tid?',
    answer: 'Ja, genom att flyga samma område vid flera tillfällen kan vi mäta tillväxt och förändringar i biomassa. Detta ger verifierbara tidsserier som visar hur kolinlagringen utvecklas — viktigt för både klimatrapportering och certifieringssystem.',
  },
  {
    question: 'Hur förhåller sig drönardata till satellitbaserade metoder?',
    answer: 'Satellitdata ger bred täckning men begränsad upplösning. Drönardata ger betydligt högre detaljnivå på beståndsnivå, vilket är värdefullt för verifiering och för att komplettera grövre skattningar. De två metoderna kan kombineras effektivt.',
  },
]

export default function KolinlagringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Kolinlagring & ESG', url: '/tjanster/kolinlagring' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Kolinlagring & ESG-underlag med drönare',
              description: 'Biomassemätning och kolinlagringsberäkning med drönare. Verifierbara data för ESG-rapportering och klimatbokslut.',
              url: '/tjanster/kolinlagring',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Kolinlagring & ESG"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Kolinlagring & ESG-underlag med drönare"
        intro="Mät skogens biomassa och beräkna kolinlagring med hög precision. Drönarbaserad data ger verifierbara underlag för ESG-rapportering, CSRD-krav och klimatbokslut — en tjänst som få aktörer erbjuder idag."
        relatedLinks={[
          { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
          { label: 'LiDAR-skanning', href: '/tjanster/lidar-skanning' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
        ]}
      >
        <h2>Varför kolinlagring med drönare?</h2>
        <p>
          EU:s CSRD-direktiv (Corporate Sustainability Reporting Directive) driver en
          ökande efterfrågan på verifierbara klimatdata från och med 2025. Skogsägande
          företag, kommuner och organisationer behöver dokumentera kolinlagring i sin skog
          som del av hållbarhetsrapporteringen. Drönarbaserad biomassemätning ger betydligt
          mer detaljerade data än traditionella metoder och möjliggör återkommande uppföljning.
          {/* MÅSTE VERIFIERAS: CSRD-tidsplan och vilka aktörer som faktiskt omfattas i Sverige */}
        </p>

        <h2>Metodik</h2>
        <p>
          Vi kartlägger skogsbeståndet från luften och beräknar biomassa genom att
          kombinera höjddata med kronmätningar. Stående volym omräknas sedan till
          biomassa och CO₂-ekvivalenter via vedertagna omräkningsfaktorer.
        </p>
        <ul>
          <li>
            <strong>Volymskattning</strong> — trädvolym beräknas från höjddata och kronprojektionsarea
          </li>
          <li>
            <strong>Biomassaomräkning</strong> — stående volym omräknas till biomassa med
            artspecifika faktorer
          </li>
          <li>
            <strong>CO₂-ekvivalenter</strong> — biomassa omräknas till bunden koldioxid
          </li>
          <li>
            <strong>Förändringsdetektion</strong> — jämförelse mellan flygningar visar tillväxt
            och förändringar över tid
          </li>
        </ul>

        <h2>Fördelar</h2>
        <ul>
          <li>Verifierbara data som uppfyller krav på hållbarhetsrapportering</li>
          <li>Högre detaljnivå än satellitbaserade skattningar</li>
          <li>Möjlighet att följa förändring över tid med upprepade flygningar</li>
          <li>Kombinerbar med inventering och vitalitetsanalys i samma flygning</li>
          <li>Få aktörer erbjuder denna tjänst — positionera er tidigt</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Biomassakarta per bestånd (GeoTIFF/GeoPackage)</li>
          <li>Kolinlagringsberäkning i CO₂-ekvivalenter per areal</li>
          <li>Förändringsrapport vid upprepade flygningar</li>
          <li>Sammanfattande rapport anpassad för ESG-rapportering (PDF)</li>
        </ul>

        <h2>Kombinera med andra tjänster</h2>
        <p>
          Kolinlagringsmätning kan med fördel kombineras med{' '}
          <Link href="/tjanster/lidar-skanning" className="text-forest-600 underline hover:text-forest-800">
            LiDAR-skanning
          </Link>{' '}
          för detaljerad höjddata, eller med{' '}
          <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
            multispektralanalys
          </Link>{' '}
          för att bedöma skogens vitalitet och tillväxtpotential. Data kan även integreras i{' '}
          <Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">
            beståndsinventering
          </Link>{' '}
          för en komplett skoglig datainsamling.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
