import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'LiDAR-skanning med drönare för skogsbruk',
  description:
    'LiDAR-skanning med drönare ger detaljerade punktmoln, terrängmodeller (DTM) och kronhöjdsmodeller (CHM) för skogsbruk. Penetrerar krontak för exakt markmodellering.',
  path: '/tjanster/lidar-skanning',
})

const FAQ_ITEMS = [
  {
    question: 'Vad är LiDAR och hur fungerar det?',
    answer: 'LiDAR (Light Detection and Ranging) är en sensor som skickar ut laserpulser och mäter tiden det tar för dem att reflekteras tillbaka. Varje puls genererar en eller flera 3D-punkter. Resultatet är ett tredimensionellt punktmoln som visar både trädkronor, grenar, undervegetation och markyta.',
  },
  {
    question: 'Vad är fördelen med LiDAR jämfört med fotogrammetri?',
    answer: 'LiDAR-pulser penetrerar krontak och når markytan även i tät skog, vilket ger exakta markmodeller (DTM). Fotogrammetri bygger på synliga ytor och kan inte se genom vegetationen. LiDAR ger därför bättre höjdmätningar under krontak och mer detaljerad skogsstruktur.',
  },
  {
    question: 'Vilken punktdensitet kan uppnås med drönarburen LiDAR?',
    answer: 'Med drönarburen LiDAR uppnår vi typiskt 100–400 punkter per kvadratmeter, att jämföra med flygburen LiDAR från flygplan som ger 1–20 punkter per kvadratmeter. Den höga punktdensiteten möjliggör detaljerad analys av enskilda träd.',
  },
  {
    question: 'Kan LiDAR-data kombineras med multispektraldata?',
    answer: 'Ja, det är en kraftfull kombination. LiDAR ger den tredimensionella strukturen (höjd, volym, markmodell) medan multispektraldata ger information om vegetationens hälsa. Tillsammans skapas ett komplett beslutsunderlag.',
  },
]

export default function LidarSkanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'LiDAR-skanning', url: '/tjanster/lidar-skanning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'LiDAR-skanning med drönare för skogsbruk',
              description: 'Detaljerade punktmoln, terrängmodeller och kronhöjdsmodeller med drönarburen LiDAR.',
              url: '/tjanster/lidar-skanning',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="LiDAR-skanning"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="LiDAR-skanning med drönare för skogsbruk"
        intro="LiDAR-skanning med drönare ger tredimensionella punktmoln som penetrerar krontaket och kartlägger skogens fullständiga struktur — från markyta till trädtoppar. Resultatet är exakta terrängmodeller, kronhöjdsmodeller och detaljerad skogsstruktur."
        relatedLinks={[
          { label: '3D-modellering', href: '/tjanster/3d-modellering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
          { label: 'Skogsbruksplan-underlag', href: '/tjanster/skogsbruksplan-underlag' },
        ]}
      >
        <h2>Vad är LiDAR-skanning?</h2>
        <p>
          LiDAR (Light Detection and Ranging) är en aktiv fjärranalysteknik som mäter avstånd
          genom att sända ut laserpulser och registrera reflektionerna. Till skillnad från
          fotogrammetri kan LiDAR penetrera vegetationens krontak och nå markytan, vilket ger
          exakta höjdmodeller även i tät skog. Drönarburen LiDAR ger 100–400 punkter per
          kvadratmeter — avsevärt högre densitet än traditionell flygburen LiDAR.
        </p>

        <h2>Produkter och modeller</h2>
        <ul>
          <li>
            <strong>DTM (Digital Terrain Model)</strong> — terrängmodell som visar markytans höjd
            under vegetationen. Grundläggande för hydrologisk analys, vägplanering och
            volymberäkningar.
          </li>
          <li>
            <strong>DSM (Digital Surface Model)</strong> — ytmodell som representerar det översta
            lagret inklusive trädkronor och byggnader.
          </li>
          <li>
            <strong>CHM (Canopy Height Model)</strong> — kronhöjdsmodell beräknad som DSM minus
            DTM. Visar trädhöjd för varje punkt i beståndet.
          </li>
          <li>
            <strong>Punktmoln</strong> — klassificerat 3D-punktmoln (mark, vegetation,
            brus) i LAS/LAZ-format.
          </li>
        </ul>

        <h2>Tillämpningar inom skogsbruk</h2>
        <ul>
          <li>Exakt trädhöjdsmätning för volymberäkningar</li>
          <li>Terrängmodellering för vägplanering och maskintillgänglighet</li>
          <li>Beståndsgränser och strukturanalys</li>
          <li>Hydrologisk modellering och identifiering av blöta partier</li>
          <li>Underlag för avverkningsplanering med detaljerad terrängbild</li>
        </ul>

        <h2>Fördelar med drönarburen LiDAR</h2>
        <ul>
          <li>Penetrerar krontak — exakta markmodeller även i tät skog</li>
          <li>100–400 punkter/m² jämfört med 1–20 punkter/m² från flygplan</li>
          <li>Flexibel flygplanering — anpassad för specifika bestånd</li>
          <li>Snabb mobilisering jämfört med traditionell LiDAR-flygning</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Klassificerat punktmoln (LAS/LAZ, SWEREF99 TM)</li>
          <li>DTM, DSM och CHM (GeoTIFF)</li>
          <li>Konturlinjer och höjdkurvor (GeoPackage/Shapefile)</li>
          <li>PDF-rapport med visualiseringar och statistik</li>
        </ul>

        <p>
          LiDAR-skanning kombineras ofta med{' '}
          <Link href="/tjanster/3d-modellering" className="text-forest-600 underline hover:text-forest-800">
            3D-modellering
          </Link>{' '}
          och{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          för ett komplett beslutsunderlag.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
