import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: '3D-modellering och höjdmodeller med drönare',
  description:
    '3D-modellering med drönare för skogsbruk: DSM, DTM, punktmoln och volymberäkningar. Fotogrammetriska höjdmodeller med hög upplösning i SWEREF99 TM.',
  path: '/tjanster/3d-modellering',
})

const FAQ_ITEMS = [
  {
    question: 'Vad är skillnaden mellan DSM och DTM?',
    answer: 'DSM (Digital Surface Model) representerar den synliga ytan inklusive trädkronor och byggnader. DTM (Digital Terrain Model) visar den underliggande markytan. Skillnaden mellan DSM och DTM ger kronhöjdsmodellen (CHM) som visar vegetationshöjd.',
  },
  {
    question: 'Hur skapas 3D-modeller med drönare?',
    answer: 'Drönaren tar hundratals överlappande bilder från olika positioner. Fotogrammetrisk mjukvara identifierar gemensamma punkter mellan bilderna och beräknar 3D-koordinater, vilket skapar ett tät punktmoln. Från punktmolnet genereras DSM, DTM och ortofoto.',
  },
  {
    question: 'Kan man beräkna virkesvolym med 3D-modeller?',
    answer: 'Ja, kronhöjdsmodellen (CHM) ger trädhöjd per pixel. I kombination med trädkronssegmentering och allometriska modeller kan virkesvolym uppskattas per träd eller per bestånd. Kalibrering mot fältprovytor förbättrar noggrannheten.',
  },
  {
    question: 'Vilken höjdnoggrannhet kan förväntas?',
    answer: 'Med RTK/PPK-korrektioner uppnår vi typiskt ±5–10 cm i höjdnoggrannhet för DSM. DTM-noggrannheten beror på vegetation — i öppen skog ger fotogrammetri bra resultat, men i tät skog rekommenderas LiDAR för exakt markmodell.',
  },
]

export default function TreDModelleringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: '3D-modellering', url: '/tjanster/3d-modellering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: '3D-modellering och höjdmodeller med drönare',
              description: 'DSM, DTM, punktmoln och volymberäkningar från drönarfotogrammetri för skogsbruk.',
              url: '/tjanster/3d-modellering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="3D-modellering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="3D-modellering och höjdmodeller med drönare"
        intro="3D-modellering med drönare omvandlar hundratals flygbilder till detaljerade höjdmodeller (DSM/DTM), punktmoln och volymberäkningar. Fotogrammetri ger en tredimensionell representation av skogsbeståndet som kompletterar traditionella kartprodukter."
        relatedLinks={[
          { label: 'LiDAR-skanning', href: '/tjanster/lidar-skanning' },
          { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
        ]}
      >
        <h2>Vad är 3D-modellering med drönare?</h2>
        <p>
          3D-modellering med drönare bygger på fotogrammetri — tekniken att beräkna
          tredimensionella koordinater från tvådimensionella bilder tagna från olika positioner.
          Drönaren flyger systematiskt och tar hundratals överlappande bilder. Mjukvaran
          identifierar miljontals gemensamma punkter mellan bilderna och beräknar ett tätt
          punktmoln med 3D-koordinater. Från punktmolnet genereras digitala höjdmodeller,
          ortofoto och volymberäkningar.
        </p>

        <h2>Produkter</h2>
        <ul>
          <li>
            <strong>DSM (Digital Surface Model)</strong> — ytmodell som visar det översta synliga
            lagret: trädkronor, byggnader, mark. Grundläggande produkt vid fotogrammetri.
          </li>
          <li>
            <strong>DTM (Digital Terrain Model)</strong> — markmodell skapad genom att filtrera
            bort vegetation från punktmolnet. Bäst resultat i glesare skog; för tät skog
            rekommenderas{' '}
            <Link href="/tjanster/lidar-skanning" className="text-forest-600 underline hover:text-forest-800">
              LiDAR-skanning
            </Link>.
          </li>
          <li>
            <strong>CHM (Canopy Height Model)</strong> — kronhöjdsmodell beräknad som DSM minus
            DTM. Visar trädhöjd för varje pixel.
          </li>
          <li>
            <strong>Punktmoln</strong> — färgkodat, georefererat 3D-punktmoln (LAS/LAZ) för
            vidare analys och visualisering.
          </li>
        </ul>

        <h2>Volymberäkningar</h2>
        <p>
          Från höjdmodellerna kan vi beräkna volymer för olika ändamål: stående virkesvolym per
          bestånd, massberäkning av timmerupplag, markarbeten och schaktvolymer. Volymberäkningar
          baseras på skillnaden mellan DSM och en referensyta (DTM eller definierad basnivå).
        </p>

        <h2>Tillämpningar inom skogsbruk</h2>
        <ul>
          <li>Trädhöjdsmätning och volymuppskattning per bestånd</li>
          <li>Terränganalys för vägplanering och avverkning</li>
          <li>Volymberäkning av timmerupplag och skotarvägar</li>
          <li>Profiler och tvärsnitt för hydrologisk planering</li>
          <li>Före/efter-jämförelser vid åtgärder</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>DSM och DTM (GeoTIFF, SWEREF99 TM)</li>
          <li>CHM (GeoTIFF)</li>
          <li>Punktmoln (LAS/LAZ)</li>
          <li>Konturlinjer (GeoPackage/Shapefile)</li>
          <li>Volymrapport med beräkningar och kartor (PDF)</li>
        </ul>

        <p>
          3D-modellering genereras automatiskt vid all{' '}
          <Link href="/tjanster/ortofoto-kartering" className="text-forest-600 underline hover:text-forest-800">
            ortofoto-produktion
          </Link>{' '}
          och kan kombineras med{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          för att koppla höjddata till beståndsmått.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
