import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Jaktkartering med drönare — ortofoto och kartor för jakt',
  description:
    'Detaljerade jaktkartor med drönare. Högupplösta ortofoto som visar terräng, stigar, skogstyper och naturliga gränser — optimerade för jaktplanering och jaktlagsförvaltning.',
  path: '/tjanster/jaktkartering',
})

const FAQ_ITEMS = [
  {
    question: 'Vad är jaktkartering med drönare?',
    answer: 'Jaktkartering innebär att vi skapar högupplösta ortofoton och kartor över jaktmark med drönare. Kartorna visar terräng, skogstyper, stigar, vatten och naturliga gränser med betydligt högre detaljnivå än vanliga kartunderlag.',
  },
  {
    question: 'Hur skiljer sig drönarkartorna från vanliga kartunderlag?',
    answer: 'Drönarbaserade ortofoto har betydligt högre upplösning än till exempel Lantmäteriets ortofoton eller satellitbilder. Det innebär att ni kan se detaljer som stigar, mindre vattendrag, höjdskillnader och enskilda trädgrupper — information som är värdefull vid jaktplanering.',
  },
  {
    question: 'Kan jaktkartering kombineras med skogsinventering?',
    answer: 'Ja, jaktkartering är en naturlig tilläggstjänst vid skogsinventering. Om drönaren redan flyger över fastigheten för inventering kan jaktkartor tas fram från samma eller kompletterande flygdata, vilket ger mervärde utan en separat mobilisering.',
  },
  {
    question: 'I vilka format levereras kartorna?',
    answer: 'Kartorna levereras som georefererade ortofoto (GeoTIFF) för GIS-programvara samt som tryckklara PDF-kartor i valfri skala. Vi kan även leverera kartrutor anpassade för mobila kartappar som används vid jakt.',
  },
  {
    question: 'Hur stor areal kan karteras?',
    answer: 'Arealkapaciteten beror på terrängen och önskad detaljnivå. Drönare är särskilt lämpade för att kartera avgränsade jaktområden med hög upplösning. För mycket stora arealer kan vi planera flygningen över flera dagar.',
  },
]

export default function JaktkarteringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Jaktkartering', url: '/tjanster/jaktkartering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Jaktkartering med drönare',
              description: 'Högupplösta jaktkartor och ortofoto med drönare. Detaljerade kartor optimerade för jaktplanering.',
              url: '/tjanster/jaktkartering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Jaktkartering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Jaktkartering med drönare"
        intro="Detaljerade jaktkartor baserade på högupplösta drönorbilder. Se terräng, stigar, skogstyper och naturliga gränser i en helt annan detaljnivå än traditionella kartunderlag — optimerat för jaktplanering och förvaltning av jaktmark."
        relatedLinks={[
          { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
        ]}
      >
        <h2>Jaktkartor med drönare</h2>
        <p>
          Bra kartunderlag är grundläggande för effektiv jaktplanering. Traditionella kartor
          och satellitbilder ger en grov överblick, men saknar ofta den detaljnivå som
          behövs för att planera drev, identifiera pass och förstå terrängens karaktär.
          Drönarbaserade ortofoto ger en helt annan upplösning där enskilda stigar,
          mindre vattendrag och terrängformationer syns tydligt.
        </p>

        <h2>Naturlig tilläggstjänst</h2>
        <p>
          Jaktkartering är en naturlig tilläggstjänst när drönaren redan flyger över
          fastigheten för{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          eller{' '}
          <Link href="/tjanster/ortofoto-kartering" className="text-forest-600 underline hover:text-forest-800">
            ortofoto och kartering
          </Link>
          . Från samma flygdata kan vi ta fram jaktanpassade kartor — vilket ger mervärde
          utan extra mobiliseringskostnad.
        </p>

        <h2>Vad kartorna visar</h2>
        <ul>
          <li>
            <strong>Terräng och höjdskillnader</strong> — backar, dalgångar och höjdryggar
            som påverkar jaktplanering
          </li>
          <li>
            <strong>Skogstyper och beståndsgränser</strong> — tydlig bild av äldre skog,
            ungskog, hyggen och blandskog
          </li>
          <li>
            <strong>Stigar och vägar</strong> — befintliga stigar, skogsbilvägar och
            naturliga passager
          </li>
          <li>
            <strong>Vatten och våtmarker</strong> — bäckar, tjärnar, myrar och diken
          </li>
          <li>
            <strong>Gränser</strong> — fastighetsgränser och naturliga gränser för jaktområden
          </li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Högupplöst ortofoto (GeoTIFF) för GIS-programvara</li>
          <li>Tryckklara kartblad i PDF-format</li>
          <li>Kartrutor anpassade för mobila kartappar</li>
          <li>Eventuell höjdmodell för terränganalys</li>
        </ul>

        <h2>Kombination med skogliga tjänster</h2>
        <p>
          Jaktkartering kan kombineras med{' '}
          <Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">
            beståndsinventering
          </Link>{' '}
          för att få en komplett bild av både skogstillstånd och jaktförutsättningar.
          Skogsägare som redan beställer inventering kan enkelt lägga till jaktkartor
          som en tilläggsleverans.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
