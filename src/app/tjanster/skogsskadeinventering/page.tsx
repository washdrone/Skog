import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsskadeinventering med drönare',
  description:
    'Skogsskadeinventering med drönare kartlägger storm-, insekts- och torkskador, inklusive granbarkborre. Snabbt skadeunderlag — rikstäckande i hela Sverige.',
  path: '/tjanster/skogsskadeinventering',
})

const FAQ_ITEMS = [
  {
    question: 'Hur går en skogsskadeinventering med drönare till?',
    answer:
      'Drönaren flyger över det drabbade området och samlar in georefererade bilder. Bilderna bearbetas till ett ortofoto där skadad skog kan avgränsas och mätas — areal, position och omfattning. Resultatet blir en karta över skadan med beräknad areal, som underlag för åtgärder och dokumentation.',
  },
  {
    question: 'Kan drönare upptäcka granbarkborreangrepp?',
    answer:
      'Drönare kan kartlägga granbarkborreangrepp där angreppen ger synliga förändringar i kronorna, till exempel missfärgade eller avbarrade träd. Genom regelbunden flygning kan nya angreppspunkter lokaliseras och avgränsas så att angripna träd kan tas ut i tid. Tidiga, ännu gröna angrepp är svårare att se och kräver ofta kompletterande kontroll på marken.' /* MÅSTE VERIFIERAS: detektionsgrad för tidiga angrepp beror på utrustning och förhållanden */,
  },
  {
    question: 'Vilka typer av skogsskador kan inventeras?',
    answer:
      'Vanliga skadetyper är stormfällning och vindfällen, insektsangrepp som granbarkborre, samt tork- och torkstressskador. Även snöbrott och brandskadade områden kan kartläggas. Gemensamt är att drönaren ger en heltäckande bild av var skadan finns och hur stor areal som är drabbad.',
  },
  {
    question: 'Hur snabbt kan en skada kartläggas efter till exempel en storm?',
    answer:
      'Efter en storm är det ofta svårt och farligt att överblicka skadorna från marken. En drönarflygning ger snabbt en överblick över omfattningen utan att man behöver ta sig in i rasrisksområden. Tidpunkten planeras efter områdets storlek och tillgänglighet.' /* MÅSTE VERIFIERAS: ange ingen specifik leveranstid utan intern bekräftelse */,
  },
  {
    question: 'Kan jag använda underlaget för försäkrings- eller skadeärenden?',
    answer:
      'Skadeinventeringen ger en daterad, georefererad dokumentation av skadan med kartor och beräknad areal. Det är ett objektivt underlag som kan användas vid kontakt med försäkringsbolag, virkesköpare och myndigheter, samt för att planera uttag av skadat virke.',
  },
  {
    question: 'Hur beräknas skadans omfattning?',
    answer:
      'Den skadade ytan avgränsas i ortofotot och arealen beräknas geografiskt. Beroende på skadetyp kan även antal drabbade träd eller volym uppskattas tillsammans med höjd- och beståndsdata. Allt levereras georefererat så att det kan läggas in direkt i skogliga system.',
  },
  {
    question: 'Kan ni följa hur en skada utvecklas över tid?',
    answer:
      'Ja. Genom att flyga samma område vid flera tillfällen kan spridningen av till exempel barkborreangrepp följas mellan säsonger. Återkommande skadeövervakning kan läggas upp inom ett årsavtal så att nya angrepp upptäcks tidigt.',
  },
]

export default function SkogsskadeinventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Skogsskadeinventering', url: '/tjanster/skogsskadeinventering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Skogsskadeinventering med drönare',
              description:
                'Kartläggning av storm-, insekts- och torkskador i skog med drönare, inklusive granbarkborre. Georefererat skadeunderlag med areal och position.',
              url: '/tjanster/skogsskadeinventering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Skogsskadeinventering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Skogsskadeinventering med drönare"
        intro="Skogsskadeinventering med drönare kartlägger storm-, insekts- och torkskador — inklusive granbarkborre — snabbt och heltäckande. Du får en georefererad skadekarta med areal och position som underlag för åtgärder. Rikstäckande i hela Sverige."
        relatedLinks={[
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
          { label: 'Årsavtal', href: '/tjanster/arsavtal' },
        ]}
      >
        <h2>Vad är skogsskadeinventering med drönare?</h2>
        <p>
          Skogsskadeinventering med drönare innebär att skadad skog kartläggs från luften för att
          fastställa var skadan finns, hur stor areal som är drabbad och hur omfattande den är. I
          stället för att försöka överblicka skadorna från marken får du en heltäckande och
          georefererad bild över hela det drabbade området. Metoden används vid storm- och
          vindfällen, insektsangrepp som granbarkborre samt tork- och torkstressskador, och ger ett
          objektivt underlag för att planera uttag av skadat virke och för dokumentation.
        </p>

        <h2>Skadetyper vi kartlägger</h2>
        <ul>
          <li><strong>Stormskador</strong> — vindfällen och stormfälld skog avgränsas och arealberäknas</li>
          <li><strong>Insektsskador</strong> — angrepp av granbarkborre lokaliseras via förändringar i kronorna</li>
          <li><strong>Torkskador</strong> — torkstressad och avdöende skog kartläggs</li>
          <li><strong>Övriga skador</strong> — snöbrott och brandskadade områden</li>
        </ul>

        <h2>Metodik</h2>
        <p>
          Drönaren flyger över det drabbade området och samlar in georefererade bilder som bearbetas
          till ett ortofoto. I ortofotot avgränsas den skadade skogen och arealen beräknas
          geografiskt. Vid behov uppskattas antal drabbade träd eller volym tillsammans med höjd- och
          beståndsdata.
        </p>
        <ul>
          <li><strong>Skadeavgränsning</strong> — skadad yta ritas av och arealberäknas</li>
          <li><strong>Positionering</strong> — skadepunkter och bestånd georefereras</li>
          <li><strong>Omfattningsbedömning</strong> — areal och, där möjligt, antal träd eller volym</li>
          <li><strong>Uppföljning över tid</strong> — samma område kan flygas om för att följa spridning</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto över det drabbade området (GeoTIFF)</li>
          <li>Skadekarta med avgränsade ytor och beräknad areal (GeoPackage/Shapefile)</li>
          <li>Sammanfattande rapport med skadeomfattning och kartor (PDF)</li>
          <li>Daterat, georefererat underlag för försäkrings- och åtgärdsärenden</li>
        </ul>

        <h2>Kombinera med andra tjänster</h2>
        <p>
          Skadeinventeringen blir mer komplett tillsammans med{' '}
          <Link href="/tjanster/tradhojdsmatning" className="text-forest-600 underline hover:text-forest-800">
            trädhöjdsmätning
          </Link>{' '}
          och{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>
          , som ger volym- och beståndsdata för det drabbade området. För att upptäcka nya angrepp
          tidigt kan återkommande skadeövervakning läggas upp inom ett{' '}
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
