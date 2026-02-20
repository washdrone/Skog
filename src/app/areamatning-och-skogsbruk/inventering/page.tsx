import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Skogsinventering med drönare – beståndsgränser, hyggen & infrastruktur',
  description:
    'Drönarbaserad skogsinventering med kartläggning av beståndsgränser, hyggen, vägar, upplag och kantzoner. Visuellt beslutsunderlag för skogsförvaltning.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk/inventering' },
}

export default function InventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Inventering', url: '/areamatning-och-skogsbruk/inventering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Skogsinventering med drönare',
              description:
                'Kartläggning av beståndsgränser, hyggen, vägar, upplag och kantzoner som visuellt beslutsunderlag.',
              url: '/areamatning-och-skogsbruk/inventering',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Inventering"
        headline="Skogsinventering &amp; översikt med drönare"
        intro="Kartläggning av beståndsgränser, hyggen, vägar, upplag och kantzoner. Ett aktuellt och visuellt beslutsunderlag för skogsförvaltning och planering."
        relatedLinks={[
          { label: 'Areamätning', href: '/areamatning-och-skogsbruk/areamatning' },
          { label: 'Avverkningsunderlag', href: '/areamatning-och-skogsbruk/avverkningsunderlag' },
          { label: 'Skadeinventering', href: '/areamatning-och-skogsbruk/skadeinventering' },
        ]}
      >
        <h2>Vad ingår</h2>
        <p>
          Vi flyger över det aktuella skogsinnehavet och skapar aktuella ortofoton med hög
          upplösning. Utifrån dessa identifierar och digitaliserar vi relevanta gränser och
          objekt som ger er en samlad bild av skogstillståndet.
        </p>
        <ul>
          <li>Beståndsgränser och avdelningsgränser som kartlager</li>
          <li>Identifiering av hyggen, röjningsytor och föryngringsområden</li>
          <li>Vägar, upplag, vändplaner och överfarter</li>
          <li>Kantzoner mot vatten, jordbruksmark eller andra skyddade områden</li>
          <li>Georefererade ortofoton som visuell referens</li>
        </ul>

        <h2>När passar detta</h2>
        <p>
          Inventeringstjänsten är användbar när ni behöver en aktuell översikt av ert
          skogsinnehav — som komplement till befintlig skogsbruksplan, inför planerade
          åtgärder, eller som grund för dialog med entreprenörer och myndigheter.
        </p>
        <ul>
          <li>Uppdatering av skogsbruksplan med aktuella förhållanden</li>
          <li>Planering inför avverkning, gallring eller markberedning</li>
          <li>Översikt av infrastruktur (vägar, upplag) inför entreprenörarbete</li>
          <li>Dokumentation av kantzoner och miljöhänsyn</li>
        </ul>

        <h2>Leverans</h2>
        <p>
          Kartlager och ortofoton levereras i överenskommet format. Se{' '}
          <Link href="/areamatning-och-skogsbruk/leveranser" className="text-skog-700 underline hover:text-skog-900">
            Leveranser &amp; format
          </Link>{' '}
          för detaljer om filformat och leveransrutiner.
        </p>
      </ServicePageLayout>
    </>
  )
}
