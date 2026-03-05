import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Underlag för skogsbruksplan med drönardata',
  description:
    'Drönardata som underlag för skogsbruksplan: ortofoto, höjdmodeller, beståndskarta och vegetationsindex. Minska fälttid och få bättre beslutsunderlag.',
  path: '/tjanster/skogsbruksplan-underlag',
})

const FAQ_ITEMS = [
  {
    question: 'Kan drönardata ersätta en traditionell skogsbruksplan?',
    answer: 'Drönardata ersätter inte skogsbruksplanen utan ger bättre underlag för den. Vi levererar kartlager, beståndsmått och analyser som underlättar planarbetet och minskar fälttiden. Slutgiltig skogsbruksplan ska kvalitetsgranskas av behörig planerare.',
  },
  {
    question: 'Vilka delar av skogsbruksplanen kan drönardata bidra till?',
    answer: 'Drönardata bidrar främst till beståndskartläggning (gränser, areal), beståndsuppskattning (höjd, volym, trädslag), hälsobedömning (vegetationsindex), terränganalys (markmodell, vägar, vattendrag) och dokumentation (ortofoto, 3D-modeller).',
  },
  {
    question: 'Hur ofta bör drönardata uppdateras?',
    answer: 'Vi rekommenderar ny flygning inför varje planrevision (vart 10:e år), efter större åtgärder (avverkning, gallring, storm) och vid specifika behov som barkborrekontroll. Uppföljningsflygningar under pågående planperiod ger aktuellt beslutsunderlag.',
  },
  {
    question: 'Hur integreras drönardata med pcSKOG och andra planeringssystem?',
    answer: 'Alla leveranser georefereras i SWEREF99 TM och levereras i standardformat (GeoPackage, Shapefile, GeoTIFF) som kan importeras direkt i pcSKOG, Heureka, QGIS och ArcGIS. Beståndsregister levereras som Excel/CSV med fält anpassade för import.',
  },
  {
    question: 'Vad kostar drönarunderlag för skogsbruksplan?',
    answer: 'Kostnaden beror på areal, tjänsteomfattning och tillgänglighet. Kontakta oss för offert — vi anpassar paketet efter era behov och budget. Minskad fälttid innebär ofta att totalkostnaden för planarbetet blir lägre trots investeringen i drönardata.',
  },
]

export default function SkogsbruksplanUnderlagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Skogsbruksplan-underlag', url: '/tjanster/skogsbruksplan-underlag' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Underlag för skogsbruksplan med drönardata',
              description: 'Drönardata som underlag för skogsbruksplan: ortofoto, höjdmodeller, beståndskarta och vegetationsindex.',
              url: '/tjanster/skogsbruksplan-underlag',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Skogsbruksplan-underlag"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Underlag för skogsbruksplan med drönardata"
        intro="Drönardata ger bättre underlag för skogsbruksplaner genom att kombinera högupplösta ortofoton, detaljerade höjdmodeller, beståndskartläggning och vegetationsindex. Resultatet är ett faktabaserat beslutsunderlag som minskar fälttid och ökar planens kvalitet."
        relatedLinks={[
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
          { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
        ]}
      >
        <h2>Vad är drönarunderlag för skogsbruksplan?</h2>
        <p>
          En skogsbruksplan beskriver skogens tillstånd och planerar åtgärder för de kommande
          10 åren. Traditionellt bygger planen på fältinventering med stickprov. Drönardata
          kompletterar och förstärker detta arbete genom att leverera heltäckande kartlager
          som ger planeraren en detaljerad, aktuell och objektiv bild av skogen innan fältbesök.
        </p>

        <h2>Datalager som stödjer planarbetet</h2>
        <p>Vi levererar ett paket av datalager anpassat för skogsbruksplanering:</p>
        <ul>
          <li>
            <strong><Link href="/tjanster/ortofoto-kartering" className="text-forest-600 underline hover:text-forest-800">Ortofoto</Link></strong>{' '}
            — aktuell, högupplöst flygbild (2–5 cm) som underlag för beståndsgränser och visuell bedömning
          </li>
          <li>
            <strong><Link href="/tjanster/3d-modellering" className="text-forest-600 underline hover:text-forest-800">Höjdmodeller</Link></strong>{' '}
            — DSM, DTM och kronhöjdsmodell för trädhöjd, terränganalys och volymuppskattning
          </li>
          <li>
            <strong><Link href="/tjanster/bestandsinventering" className="text-forest-600 underline hover:text-forest-800">Beståndskarta</Link></strong>{' '}
            — förslag på beståndsgränser med areal, höjd, trädslag och utvecklingsklass
          </li>
          <li>
            <strong><Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">Vegetationsindex</Link></strong>{' '}
            — NDVI/NDRE-kartor för hälsobedömning och prioritering av åtgärder
          </li>
        </ul>

        <h2>Fördelar för skogsbruksplanering</h2>
        <ul>
          <li>Minskad fälttid — planeraren vet var insatser behövs innan fältbesök</li>
          <li>Bättre beståndsgränser baserade på faktiska skillnader i krontak och höjd</li>
          <li>Objektiva mått istället för visuella bedömningar</li>
          <li>Aktuell data — flygning vid behov istället för inaktuella kartor</li>
          <li>Digital dokumentation för uppföljning och revision</li>
        </ul>

        <h2>Arbetsflöde</h2>
        <ul>
          <li><strong>Steg 1:</strong> Flygning av fastigheten med RGB- och/eller multispektral kamera</li>
          <li><strong>Steg 2:</strong> Bearbetning till ortofoto, höjdmodeller och vegetationsindex</li>
          <li><strong>Steg 3:</strong> Beståndskartläggning med föreslagna gränser och attributdata</li>
          <li><strong>Steg 4:</strong> Leverans av kartlager i format anpassat för pcSKOG, QGIS eller ArcGIS</li>
          <li><strong>Steg 5:</strong> Planeraren verifierar i fält och kompletterar med manuella mätningar</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto (GeoTIFF, SWEREF99 TM)</li>
          <li>DSM, DTM, CHM (GeoTIFF)</li>
          <li>Beståndskarta med attribut (GeoPackage/Shapefile)</li>
          <li>Vegetationsindex-kartor (GeoTIFF)</li>
          <li>Beståndsregister (Excel/CSV)</li>
          <li>Sammanfattande rapport (PDF)</li>
        </ul>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
