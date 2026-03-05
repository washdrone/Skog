import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Ortofoto och flygfotografering för skogsbruk',
  description:
    'Högupplösta ortofoton och flygfotografering för skogsbruk med hög markupplösning. Georefererade flygbilder i SWEREF99 TM för GIS-integration.',
  path: '/tjanster/ortofoto-kartering',
})

const FAQ_ITEMS = [
  {
    question: 'Vad är ett ortofoto?',
    answer: 'Ett ortofoto är en geometriskt korrigerad flygbild där förvrängning från kameravinkel och terräng har rättats. Resultatet är en skalriktig karta som kan mätas i — varje pixel har en känd geografisk position. Ortofotot kan läggas direkt i GIS som underlagskarta.',
  },
  {
    question: 'Vilken upplösning har era ortofoton?',
    answer: 'Vi levererar ortofoton med hög markupplösning (GSD), beroende på flyghöjd och uppdragets krav. Upplösningen är avsevärt högre än Lantmäteriets ortofoton och data är mer aktuellt.',
  },
  {
    question: 'Hur stor areal kan kartläggas per flygning?',
    answer: 'Med RGB-kamera kan vi kartlägga stora arealer per flygdag, beroende på flyghöjd och markupplösningskrav. Lägre flyghöjd ger högre upplösning men täcker mindre areal per flygpass.',
  },
  {
    question: 'I vilka format levereras ortofotot?',
    answer: 'Ortofotot levereras som GeoTIFF i SWEREF99 TM (EPSG:3006). Vi kan även leverera i andra koordinatsystem vid behov. Filen kan importeras direkt i QGIS, ArcGIS, pcSKOG och andra GIS-program.',
  },
]

export default function OrtofotoKarteringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Ortofoto & kartering', url: '/tjanster/ortofoto-kartering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Ortofoto och flygfotografering för skogsbruk',
              description: 'Högupplösta georefererade ortofoton med hög markupplösning för skogsbruk.',
              url: '/tjanster/ortofoto-kartering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Ortofoto & kartering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Ortofoto och flygfotografering för skogsbruk"
        intro="Ortofoto är den grundläggande kartprodukten vid drönarbaserad skogskartering. En geometriskt korrigerad, georefererad flygbild med hög markupplösning som fungerar som en aktuell och detaljerad underlagskarta i ert GIS."
        relatedLinks={[
          { label: '3D-modellering', href: '/tjanster/3d-modellering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
          { label: 'Skogsbruksplan-underlag', href: '/tjanster/skogsbruksplan-underlag' },
        ]}
      >
        <h2>Vad är ett ortofoto?</h2>
        <p>
          Ett ortofoto är en flygbild som har korrigerats geometriskt så att den stämmer överens
          med en karta. Förvrängning från kameravinkel, linsoptik och terränghöjdskillnader har
          rättats, och varje pixel har tilldelats en exakt geografisk koordinat. Resultatet är
          en skalriktig bild som kan mätas i direkt — avstånd, arealer och positioner stämmer.
        </p>

        <h2>Upplösning och kvalitet</h2>
        <ul>
          <li><strong>Markupplösning (GSD):</strong> hög markupplösning, beroende på flyghöjd och utrustning {/* MÅSTE VERIFIERAS */}</li>
          <li><strong>Georeferering:</strong> SWEREF99 TM (EPSG:3006) med positionskorrektioner beroende på utrustning</li>
          <li><strong>Positionsnoggrannhet:</strong> hög, beroende på utrustning och korrektionsteknik {/* MÅSTE VERIFIERAS */}</li>
          <li><strong>Avsevärt högre upplösning</strong> än Lantmäteriets ortofoton</li>
          <li><strong>Aktuell data</strong> — flygning vid behov istället för Lantmäteriets fleråriga uppdateringscykel</li>
        </ul>

        <h2>Tillämpningar inom skogsbruk</h2>
        <ul>
          <li>Visuell dokumentation av beståndsgränser, hyggen och kantzoner</li>
          <li>Underlag för avverkningsplanering och maskindisponering</li>
          <li>Identifiering av vägar, upplag, vattendrag och hinder</li>
          <li>Före/efter-dokumentation av skogsvårdsåtgärder</li>
          <li>Underlag för kommunikation med markägare och myndigheter</li>
        </ul>

        <h2>Från flygfoto till ortofoto</h2>
        <p>
          Drönaren flyger systematiskt med hög överlapp (80 % fram, 70 % sida) och samlar in
          hundratals georefererade bilder. Bilderna bearbetas med fotogrammetrisk mjukvara som
          identifierar gemensamma punkter, beräknar kamerapositioner och skapar ett sömlöst,
          geometriskt korrekt ortofoto. Samma process genererar automatiskt en{' '}
          <Link href="/tjanster/3d-modellering" className="text-forest-600 underline hover:text-forest-800">
            digital ytmodell (DSM)
          </Link>{' '}
          och punktmoln.
        </p>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto (GeoTIFF, SWEREF99 TM, hög markupplösning)</li>
          <li>Kvalitetsrapport med GSD, överlapp och referenspunkter</li>
          <li>Valfritt: vektorgränser digitaliserade från ortofotot (GeoPackage)</li>
          <li>PDF-översiktskarta</li>
        </ul>

        <p>
          Ortofotot är ofta startpunkten för vidare analys. Kombinera med{' '}
          <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
            multispektralanalys
          </Link>{' '}
          för hälsobedömning eller{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          för volym- och beståndskartläggning.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
