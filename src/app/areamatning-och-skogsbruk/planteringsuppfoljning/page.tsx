import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Planteringsuppföljning med drönare – ungskog & planteringar',
  description:
    'Drönarbaserad planteringsuppföljning för översikt och dokumentation av planteringar och ungskog. Identifiera luckor och bedöm etableringsgrad effektivt.',
  alternates: { canonical: 'https://timberdrone.se/areamatning-och-skogsbruk/planteringsuppfoljning' },
}

export default function PlanteringsuppfoljningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Planteringsuppföljning', url: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Planteringsuppföljning med drönare',
              description:
                'Översikt och dokumentation av planteringar och ungskog med drönare. Identifiera luckor och bedöm etableringsgrad.',
              url: '/areamatning-och-skogsbruk/planteringsuppfoljning',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Planteringsuppföljning"
        headline="Planteringsuppföljning med drönare"
        intro="Översikt och dokumentation av planteringar och ungskog. Identifiera luckor, bedöm etableringsgrad och dokumentera tillståndet — effektivare än traditionell fältinventering."
        relatedLinks={[
          { label: 'Inventering & översikt', href: '/areamatning-och-skogsbruk/inventering' },
          { label: 'Areamätning', href: '/areamatning-och-skogsbruk/areamatning' },
          { label: 'Skadeinventering', href: '/areamatning-och-skogsbruk/skadeinventering' },
        ]}
      >
        <h2>Vad ingår</h2>
        <p>
          Vi flyger planterade eller föryngrade ytor med drönare och skapar högupplösta
          ortofoton som ger en överblick av planteringsresultatet. Underlaget kan
          användas för att bedöma etableringsgrad, identifiera luckor och planera
          eventuella kompletteringsåtgärder.
        </p>
        <ul>
          <li>Högupplösta ortofoton över planterad yta</li>
          <li>Visuell dokumentation av etableringsgrad</li>
          <li>Identifiering av luckor och områden som kan behöva åtgärd</li>
          <li>Daterade leveranser för uppföljning över tid</li>
          <li>Kartlager med avgränsning av undersökt område</li>
        </ul>

        <h2>När passar detta</h2>
        <p>
          Planteringsuppföljning med drönare är användbar när ni behöver dokumentera
          och bedöma en planterings etablering — särskilt på större arealer där
          traditionell fältinventering blir tids- och kostnadskrävande.
        </p>
        <ul>
          <li>Uppföljning 1–3 år efter plantering</li>
          <li>Bedömning av återväxt efter avverkning</li>
          <li>Dokumentation inför eller efter röjning</li>
          <li>Jämförelse över tid (årlig uppföljning av samma ytor)</li>
        </ul>

        <h2>Leverans</h2>
        <p>
          Ortofoton och eventuella kartlager levereras digitalt. Se{' '}
          <Link href="/areamatning-och-skogsbruk/leveranser" className="text-forest-600 underline hover:text-forest-800">
            Leveranser &amp; format
          </Link>{' '}
          för mer information om filformat och leveransrutiner.
        </p>
      </ServicePageLayout>
    </>
  )
}
