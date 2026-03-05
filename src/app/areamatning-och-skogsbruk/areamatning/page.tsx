import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Areamätning med drönare – georefererade polygoner för skog & mark',
  description:
    'Professionell areamätning med drönare för fastigheter, avdelningar och bestånd. Georefererade polygoner och exakta ytberäkningar levererade som kartlager.',
  alternates: { canonical: 'https://timberdrone.se/areamatning-och-skogsbruk/areamatning' },
}

export default function AreamatningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Areamätning', url: '/areamatning-och-skogsbruk/areamatning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Areamätning med drönare',
              description: 'Georefererade polygoner och exakta ytberäkningar för fastigheter, avdelningar och bestånd.',
              url: '/areamatning-och-skogsbruk/areamatning',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Areamätning"
        headline="Areamätning med drönare"
        intro="Georefererade polygoner och exakta ytberäkningar för fastigheter, avdelningar och bestånd. Drönarfotogrammetri ger er tillförlitliga arealunderlag utan tidskrävande fältarbete."
        relatedLinks={[
          { label: 'Inventering & översikt', href: '/areamatning-och-skogsbruk/inventering' },
          { label: 'Avverkningsunderlag', href: '/areamatning-och-skogsbruk/avverkningsunderlag' },
          { label: 'Leveranser & format', href: '/areamatning-och-skogsbruk/leveranser' },
        ]}
      >
        <h2>Vad ingår</h2>
        <p>
          Vi flyger det aktuella området med drönare och skapar georefererade ortofoton med hög
          upplösning. Utifrån dessa producerar vi exakta polygoner med ytberäkning för varje
          avgränsad yta — oavsett om det rör sig om fastighetsgränser, avdelningsgränser eller
          enskilda bestånd.
        </p>
        <ul>
          <li>Georefererade polygoner med ytangivelse i hektar</li>
          <li>Ortofoton som visuell referens</li>
          <li>Leverans som Shapefile, GeoPackage eller annan överenskommen standard</li>
          <li>Dokumentation av mätdatum och referenskoordinatsystem</li>
        </ul>

        <h2>När passar detta</h2>
        <p>
          Areamätning med drönare är relevant när ni behöver uppdaterade ytunderlag för
          planering, redovisning eller fastighetsärenden — och när traditionell fältmätning
          är för tids- eller kostnadskrävande.
        </p>
        <ul>
          <li>Kontroll eller uppdatering av areauppgifter i skogsbruksplan</li>
          <li>Underlag vid fastighetsaffärer eller förvaltning</li>
          <li>Avgränsning av specifika bestånd eller avdelningar</li>
          <li>Dokumentation av avverkade eller planterade ytor</li>
        </ul>

        <h2>Leverans</h2>
        <p>
          Färdiga kartlager levereras digitalt i överenskommet format. Alla leveranser
          inkluderar metadata med mätdatum, koordinatsystem och upplösning.
          Läs mer på sidan{' '}
          <Link href="/areamatning-och-skogsbruk/leveranser" className="text-forest-600 underline hover:text-forest-800">
            Leveranser &amp; format
          </Link>.
        </p>
      </ServicePageLayout>
    </>
  )
}
