import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import DeliverablesList from '@/components/DeliverablesList'
import CTABand from '@/components/CTABand'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Leveranser & format – kartlager, ortofoton & rapporter',
  description:
    'Leveransformat för drönarbaserade mättjänster: Shapefile, GeoPackage, GeoTIFF, PDF-rapporter och mer. Alla leveranser är georefererade och kvalitetskontrollerade.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk/leveranser' },
}

const DELIVERABLES = [
  {
    title: 'Kartlager (vektordata)',
    description:
      'Polygoner, linjer och punkter med attributdata. Avgränsningar, beståndsgränser, hinder och infrastruktur.',
    formats: ['Shapefile', 'GeoPackage', 'GeoJSON', 'KML'],
  },
  {
    title: 'Georefererade ortofoton',
    description:
      'Högupplösta flygbilder sammanfogade till ett sömlöst ortofoto med koordinatreferens. Visuell grund för analys.',
    formats: ['GeoTIFF', 'JPEG2000'],
  },
  {
    title: 'PDF-rapport',
    description:
      'Sammanfattande rapport med kartor, mätresultat, bilder och kommentarer. Anpassad efter uppdragets karaktär.',
    formats: ['PDF'],
  },
  {
    title: 'Översiktsbilder',
    description:
      'Utvalda flygbilder i hög upplösning med metadata (datum, position). Lämpliga för dokumentation och kommunikation.',
    formats: ['JPEG', 'PNG'],
  },
  {
    title: 'Höjdmodell (valbart tillägg)',
    description:
      'Digital terrängmodell (DTM) eller ytmodell (DSM) baserad på fotogrammetri. Tillgängligt som valbart tillägg.',
    formats: ['GeoTIFF', 'LAS'],
  },
  {
    title: 'Metadata & dokumentation',
    description:
      'Varje leverans inkluderar mätdatum, koordinatsystem, upplösning och beskrivning av datainnehåll.',
    formats: ['XML', 'TXT'],
  },
]

export default function LeveranserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Leveranser & format', url: '/areamatning-och-skogsbruk/leveranser' },
            ])
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Areamätning & skogsbruk', href: '/areamatning-och-skogsbruk' },
          { label: 'Leveranser & format' },
        ]}
      />

      {/* Header */}
      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leveranser &amp; format
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Alla underlag levereras digitalt i branschstandardformat, redo att importeras
            i era GIS-system eller användas som beslutsunderlag. Varje leverans är
            georefererad, kvalitetskontrollerad och dokumenterad.
          </p>
        </div>
      </header>

      <DeliverablesList items={DELIVERABLES} />

      {/* Quality section */}
      {/* EJ VERIFIERAD: A3 "omflygning utan extra kostnad", B3 "SWEREF99 TM", A2 "3–5 arbetsdagar" */}
      <section className="bg-slate-50 section-padding">
        <div className="container-page max-w-3xl prose-forest">
          <h2>Kvalitetssäkring</h2>
          <p>
            Varje leverans genomgår kvalitetskontroll innan den skickas. Vi kontrollerar
            bland annat georeferering, fullständighet och visuell kvalitet. Om ett underlag
            inte uppfyller våra krav flyger vi om området utan extra kostnad.
          </p>

          <h2>Koordinatsystem</h2>
          <p>
            Standardleverans sker i SWEREF99 TM. Andra koordinatsystem kan levereras
            efter överenskommelse. Koordinatsystem anges alltid i medföljande metadata.
          </p>

          <h2>Leveranstid</h2>
          <p>
            Normal leveranstid är 3–5 arbetsdagar efter genomförd flygning, beroende
            på uppdragets storlek och komplexitet. Vid akuta behov kan vi prioritera
            snabbare leverans — kontakta oss för att diskutera.
          </p>

          <h2>Valbara tillägg</h2>
          <p>Följande tillägg kan beställas utöver standardleverans:</p>
          <ul>
            <li>Digital höjdmodell (DTM/DSM)</li>
            <li>3D-modell av terräng eller objekt</li>
            <li>Volymberäkning (t.ex. virkesvältor, jordmassor)</li>
          </ul>
          <p>
            Kontakta oss via{' '}
            <Link href="/areamatning-och-skogsbruk/kontakt" className="text-forest-600 underline hover:text-forest-800">
              offertformuläret
            </Link>{' '}
            om ni vill diskutera specifika leveransbehov.
          </p>
        </div>
      </section>

      <CTABand
        headline="Har ni specifika leveranskrav?"
        description="Berätta om era behov så anpassar vi leveransen efter ert arbetsflöde och era system."
      />
    </>
  )
}
