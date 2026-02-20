import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Avverkningsunderlag med drönare – kartlager för avverkningsplanering',
  description:
    'Drönarbaserade avverkningsunderlag med kartlagda ytor, avgränsningar, åtkomstvägar och hinder. Ger planerare och maskinförare ett komplett visuellt underlag.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk/avverkningsunderlag' },
}

export default function AvverkningsunderlagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Avverkningsunderlag', url: '/areamatning-och-skogsbruk/avverkningsunderlag' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Avverkningsunderlag med drönare',
              description:
                'Kartlagda ytor, avgränsningar, åtkomstvägar och hinder som underlag för avverkningsplanering.',
              url: '/areamatning-och-skogsbruk/avverkningsunderlag',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Avverkningsunderlag"
        headline="Avverkningsunderlag med drönare"
        intro="Kartlagda ytor, avgränsningar, åtkomstvägar och hinder — ett komplett visuellt underlag för avverkningsplanering och maskindisponering."
        relatedLinks={[
          { label: 'Areamätning', href: '/areamatning-och-skogsbruk/areamatning' },
          { label: 'Inventering & översikt', href: '/areamatning-och-skogsbruk/inventering' },
          { label: 'Leveranser & format', href: '/areamatning-och-skogsbruk/leveranser' },
        ]}
      >
        <h2>Vad ingår</h2>
        <p>
          Vi kartlägger det aktuella avverkningsområdet med drönare och levererar
          underlag som ger planerare, virkesköpare och maskinförare en tydlig bild av
          terräng, gränser och logistik.
        </p>
        <ul>
          <li>Avgränsning av avverkningsyta med ytberäkning</li>
          <li>Identifiering av åtkomstvägar, vändplaner och avlägg</li>
          <li>Dokumentation av hinder: ledningar, vattenövergångar, fornlämningar, branter</li>
          <li>Kantzoner och hänsynsytor markerade i kartlager</li>
          <li>Georefererade ortofoton som visuell referens</li>
        </ul>

        <h2>När passar detta</h2>
        <p>
          Avverkningsunderlag med drönare passar när ni vill effektivisera planeringsfasen och
          ge alla inblandade parter — från virkesköpare till maskinförare — ett gemensamt, aktuellt
          underlag att utgå ifrån.
        </p>
        <ul>
          <li>Inför planering av slutavverkning eller gallring</li>
          <li>Dokumentation av åtkomst och logistik för maskinentreprenörer</li>
          <li>Identifiering av hänsynsytor och begränsningar</li>
          <li>Underlag för dialog med markägare eller myndigheter</li>
        </ul>

        <h2>Leverans</h2>
        <p>
          Kartlager med avgränsningar, hinder och infrastruktur levereras digitalt.
          Se{' '}
          <Link href="/areamatning-och-skogsbruk/leveranser" className="text-forest-600 underline hover:text-forest-800">
            Leveranser &amp; format
          </Link>{' '}
          för detaljer om filformat.
        </p>
      </ServicePageLayout>
    </>
  )
}
