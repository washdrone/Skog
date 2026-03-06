import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Skadeinventering med drönare – storm, snö & insekter',
  description:
    'Snabb skadeinventering med drönare efter storm, snöbrott eller insektsangrepp. Georefererad dokumentation och kartlager för beslutsunderlag och försäkringsärenden.',
  alternates: { canonical: 'https://timberdrone.se/areamatning-och-skogsbruk/skadeinventering' },
}

export default function SkadeinventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Skadeinventering', url: '/areamatning-och-skogsbruk/skadeinventering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Skadeinventering med drönare',
              description:
                'Dokumentation och kartlager efter storm, snöbrott eller insektsangrepp för beslutsunderlag och försäkringsärenden.',
              url: '/areamatning-och-skogsbruk/skadeinventering',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Skadeinventering"
        headline="Skadeinventering med drönare"
        intro="Snabb dokumentation och kartlager efter storm, snöbrott eller insektsangrepp. Georefererade underlag för beslutsfattande, åtgärdsplanering och försäkringsärenden."
        relatedLinks={[
          { label: 'Inventering & översikt', href: '/areamatning-och-skogsbruk/inventering' },
          { label: 'Planteringsuppföljning', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
          { label: 'Kontakt', href: '/areamatning-och-skogsbruk/kontakt' },
        ]}
      >
        <h2>Vad ingår</h2>
        <p>
          Efter storm, snöbrott eller misstänkta insektsangrepp flyger vi det drabbade
          området med drönare och dokumenterar skadeomfattningen. Resultatet är georefererade
          kartlager och ortofoton som ger en tydlig bild av situationen.
        </p>
        <ul>
          <li>Avgränsning av skadat område med ytberäkning</li>
          <li>Dokumentation av skadans art och omfattning via högupplösta bilder</li>
          <li>Georefererade ortofoton som visuellt underlag</li>
          <li>Kartlager med skadeområden för import i GIS</li>
          <li>Daterade leveranser för försäkrings- och myndighetskommunikation</li>
        </ul>

        <h2>När passar detta</h2>
        <p>
          Skadeinventering med drönare är värdefull när snabb och dokumenterad överblick
          behövs — särskilt när det skadade området är svårtillgängligt eller omfattande.
        </p>
        <ul>
          <li>Efter stormar eller kraftiga snöfall med misstänkt skogsskada</li>
          <li>Vid misstänkta insektsangrepp (t.ex. granbarkborre)</li>
          <li>Som underlag för försäkringsanmälan och skadereglering</li>
          <li>Uppföljning efter åtgärder i skadat bestånd</li>
        </ul>

        <h2>Snabb mobilisering</h2>
        <p>
          Vid akuta behov prioriterar vi snabb utryckning. Kontakta oss direkt via{' '}
          <Link href="/areamatning-och-skogsbruk/kontakt" className="text-forest-600 underline hover:text-forest-800">
            kontaktformuläret
          </Link>{' '}
          eller via <a href="mailto:info@timberdrone.se" className="text-forest-600 underline hover:text-forest-800">e-post</a> så diskuterar vi tidsplan och genomförande.
        </p>
      </ServicePageLayout>
    </>
  )
}
