import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Uppföljning av vegetation över tid – tidsserie med drönare | Timberdrone',
  description:
    'Återkommande multispektrala flygningar med standardiserad metodik skapar tidsserier som avslöjar trender i vegetationens hälsa. Förändringskarta och trendanalys.',
  alternates: { canonical: 'https://timberdrone.se/vegetationsanalys/uppfoljning-over-tid' },
}

export default function UppfoljningOverTidPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Vegetationsanalys', url: '/vegetationsanalys' },
              { name: 'Uppföljning över tid', url: '/vegetationsanalys/uppfoljning-over-tid' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Uppföljning av vegetation över tid',
              description: 'Tidsserier av vegetationsindex från återkommande drönarflygningar för trendanalys och förändringsdetektion.',
              url: '/vegetationsanalys/uppfoljning-over-tid',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Uppföljning över tid"
        breadcrumbParent={{ label: 'Vegetationsanalys', href: '/vegetationsanalys' }}
        headline="Uppföljning över tid — vegetationsförändringar"
        intro="Genom att flyga samma område vid upprepade tillfällen med identisk sensor och flygplan skapas en tidsserie av vegetationsindex. Förändringarna mellan flygningarna avslöjar trender — med en precision som varken satellit eller fältrundor kan matcha."
        relatedLinks={[
          { label: 'NDVI-kartläggning', href: '/vegetationsanalys/ndvi-kartlaggning' },
          { label: 'Planteringsuppföljning', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
          { label: 'Stressanalys', href: '/vegetationsanalys/stressanalys' },
          { label: 'Kontakt', href: '/areamatning-och-skogsbruk/kontakt' },
        ]}
      >
        <h2>Vad ingår</h2>
        <ul>
          <li>Återkommande multispektrala flygningar med standardiserad metodik (samma sensor, flyghöjd, kalibrering)</li>
          <li>NDVI/NDRE-tidsserie per pixel eller per trädkrona</li>
          <li>Förändringskarta (raster-differens): visar var vitaliteten ökat, minskat eller är oförändrad</li>
          <li>Trendanalys med sammanfattande rapport</li>
        </ul>

        <h2>Varför konsistens är avgörande</h2>
        <p>
          Radiometrisk kalibrering måste vara identisk mellan flygningar för att förändringarna ska vara
          meningsfulla. Varje flygning kalibreras med:
        </p>
        <ul>
          <li>Reflektanspanel med kända värden per band (före start)</li>
          <li>Irradianssensor (DLS) på drönarens ovansida — korrigerar för molnpassager och solvinkelförändringar</li>
          <li>Samma flyghöjd, överlapp och sensorinställning</li>
        </ul>

        <h2>När passar detta</h2>
        <ul>
          <li>Uppföljning 1–3 år efter plantering — dokumentera etableringsgrad, identifiera luckor som behöver kompletteringsplantering</li>
          <li>Effektmätning av skogsvårdsåtgärder (röjning, gödsling, markberedning)</li>
          <li>Miljöövervakning av skyddsvärd skog eller vattenskyddsområden</li>
          <li>Löpande hälsoövervakning av bestånd med känd sårbarhet (t.ex. granbarkborrerisk)</li>
          <li>Årlig inventering av samma fastighet — bygga en historik</li>
        </ul>

        <h2>Drönare vs satellit för tidsserier</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-3 pr-4 font-semibold text-slate-900">Parameter</th>
                <th className="pb-3 pr-4 font-semibold text-slate-900">Drönare</th>
                <th className="pb-3 font-semibold text-slate-900">Sentinel-2</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Upplösning</td>
                <td className="py-2.5 pr-4">5–10 cm/pixel</td>
                <td className="py-2.5">10 m/pixel</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Enskilda träd</td>
                <td className="py-2.5 pr-4">Ja — kronsegmentering möjlig</td>
                <td className="py-2.5">Nej — varje pixel ≈ 100 m²</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Besökstid</td>
                <td className="py-2.5 pr-4">On-demand, samma dag</td>
                <td className="py-2.5">Var 5:e dag</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Molnberoende</td>
                <td className="py-2.5 pr-4">Flyger under moln</td>
                <td className="py-2.5">Bilder oanvändbara vid moln</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Historik</td>
                <td className="py-2.5 pr-4">Från första flygningen</td>
                <td className="py-2.5">Gratis data sedan 2015</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Bäst för</td>
                <td className="py-2.5 pr-4">Detaljanalys prioriterade områden</td>
                <td className="py-2.5">Landskapsskala, lång historik</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Bäst praxis</strong>: Sentinel-2 för landskapsskala och lång historik (data från 2015),
          drönare för detaljanalys av prioriterade områden.
        </p>

        <h2>Leverans</h2>
        <p>
          NDVI-raster (GeoTIFF, SWEREF99 TM) per flygning, förändringskarta, trendrapport (PDF).
          Alla leveranser kan importeras direkt i{' '}
          <Link href="/areamatning-och-skogsbruk/leveranser" className="text-forest-600 underline hover:text-forest-800">
            era GIS-system
          </Link>.
        </p>
      </ServicePageLayout>
    </>
  )
}
