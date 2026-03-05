import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import NDVIGradientBar from '@/components/NDVIGradientBar'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'NDVI-kartläggning med drönare – vegetationsindex för skog | Timberdrone',
  description:
    'Georefererade NDVI-kartor med 5–10 cm upplösning. Klassificerad vitalitetskarta, tolkningsrapport och GeoTIFF i SWEREF99 TM för import i ert GIS.',
  alternates: { canonical: 'https://timberdrone.se/vegetationsanalys/ndvi-kartlaggning' },
}

export default function NDVIKartlaggningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Vegetationsanalys', url: '/vegetationsanalys' },
              { name: 'NDVI-kartläggning', url: '/vegetationsanalys/ndvi-kartlaggning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'NDVI-kartläggning med drönare',
              description: 'Georefererade NDVI-kartor för objektiv bedömning av vegetationens vitalitet.',
              url: '/vegetationsanalys/ndvi-kartlaggning',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="NDVI-kartläggning"
        breadcrumbParent={{ label: 'Vegetationsanalys', href: '/vegetationsanalys' }}
        headline="NDVI-kartläggning med drönare"
        intro="Georefererade vegetationskartor som visar var skogen mår bra, var den stressar och var åtgärder behövs. Objektiv vitalitetsbedömning med 5–10 cm upplösning."
        relatedLinks={[
          { label: 'Stressanalys', href: '/vegetationsanalys/stressanalys' },
          { label: 'Uppföljning över tid', href: '/vegetationsanalys/uppfoljning-over-tid' },
          { label: 'Planteringsuppföljning', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
          { label: 'Leveranser & format', href: '/areamatning-och-skogsbruk/leveranser' },
        ]}
      >
        <h2>Vad är NDVI?</h2>
        <p>
          NDVI (Normalized Difference Vegetation Index) beräknas som{' '}
          <span className="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded">(NIR − Röd) / (NIR + Röd)</span>.
          Frisk vegetation absorberar rött ljus för fotosyntes och reflekterar starkt i nära infrarött. Kontrasten ger
          ett värde mellan −1 och +1:
        </p>
        <ul>
          <li><strong>0.6–0.9</strong> — Tät, frisk vegetation</li>
          <li><strong>0.4–0.6</strong> — Måttlig vegetation</li>
          <li><strong>0.2–0.4</strong> — Stressad eller gles vegetation</li>
          <li><strong>&lt; 0.2</strong> — Bar mark, vatten, snö</li>
        </ul>

        <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <NDVIGradientBar />
        </div>

        <h2>Vad ingår</h2>
        <ul>
          <li>Multispektral flygning med kalibrerad sensor (5 band: Blue, Green, Red, Red Edge, NIR)</li>
          <li>Radiometrisk korrigering via referenspanel + irradianssensor (DLS)</li>
          <li>NDVI-beräkning per pixel från reflektanskartor</li>
          <li>Georefererat NDVI-raster i GeoTIFF (SWEREF99 TM / EPSG:3006)</li>
          <li>Klassificerad karta: 4–5 vitalitetsklasser med tydlig färgkodning</li>
          <li>PDF-sammanfattning med kartor, statistik och tolkningsguide</li>
        </ul>

        <h2>Kompletterande index</h2>
        <p>Levereras på begäran beroende på syfte och förhållanden:</p>
        <ul>
          <li><strong>GNDVI</strong> (Green NDVI) — känsligare för klorofyllvariationer i tät kronslutning, där NDVI mättar</li>
          <li><strong>NDRE</strong> (Red Edge) — reagerar på tidiga klorofyllförändringar innan de syns visuellt; det viktigaste indexet för tidig stressdetektion</li>
          <li><strong>SAVI</strong> (Soil-Adjusted VI) — korrigerar för synlig mark; värdefullt vid gles skog, nyplanteringar och stormskadade ytor</li>
          <li><strong>CI Red-Edge</strong> (Chlorophyll Index) — kvantifierar klorofyllhalt; korrelerar starkt med kvävestatus</li>
        </ul>

        <h2>Upplösning och noggrannhet</h2>
        <ul>
          <li>Multispektral GSD: 5–10 cm vid 60–120 m flyghöjd (tillräckligt för enskilda trädkronor)</li>
          <li>Radiometrisk kalibrering: NRMSE &lt; 2–4 % vid korrekt panelkalibrering</li>
          <li>Kräver molnfria förhållanden för konsistent data</li>
        </ul>

        <h2>När passar detta</h2>
        <ul>
          <li>Överblick av skogstillstånd innan fältinventering — prioritera var resurser sätts in</li>
          <li>Bedömning av planteringsresultat och etableringsgrad</li>
          <li>Löpande bevakning av bestånd med känd sårbarhet</li>
          <li>Underlag för dialog med markägare eller myndigheter</li>
        </ul>

        <h2>Viktigt att veta</h2>
        <p>
          NDVI mäter vegetationens vitalitet — inte direkt fotosyntes, artsammansättning eller specifik
          skadeorsak. Indexet är ett kraftfullt screeningverktyg som visar <em>var</em> något avviker.
          Diagnos av <em>varför</em> kräver fältverifiering. Vi levererar alltid tolkningsstöd med varje leverans.
        </p>

        <h2>Leveransformat</h2>
        <p>
          GeoTIFF (raster, SWEREF99 TM), klassificerad PNG, PDF-rapport. Alla leveranser kan importeras direkt
          i{' '}
          <Link href="/areamatning-och-skogsbruk/leveranser" className="text-forest-600 underline hover:text-forest-800">
            era GIS-system
          </Link>.
        </p>
      </ServicePageLayout>
    </>
  )
}
