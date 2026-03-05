import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Multispektralanalys av skog med drönare',
  description:
    'Multispektralanalys av skog med drönare och 5-bands sensor. Vegetationsindex som NDVI, NDRE och GNDVI ger objektiv hälsobedömning och tidig stressdetektion.',
  path: '/tjanster/multispektralanalys',
})

const FAQ_ITEMS = [
  {
    question: 'Vad är multispektralanalys?',
    answer: 'Multispektralanalys innebär att en kamera med flera våglängdsband (typiskt 5: blått, grönt, rött, red edge och nära infrarött) mäter hur vegetation reflekterar ljus i varje band. Genom att kombinera banden i matematiska index som NDVI kan vi objektivt bedöma vegetationens hälsa.',
  },
  {
    question: 'Vad är skillnaden mellan NDVI, NDRE och GNDVI?',
    answer: 'NDVI (Normalized Difference Vegetation Index) mäter den generella vitaliteten utifrån rött och NIR-ljus. NDRE (Red Edge) är känsligare för tidiga stressförändringar i klorofyll. GNDVI (Green NDVI) reagerar bättre på klorofyllvariationer i tät kronslutning där NDVI mättar.',
  },
  {
    question: 'Hur hög upplösning har multispektraldata?',
    answer: 'Vår multispektrala sensor ger 5–10 cm markupplösning (GSD) vid 60–120 m flyghöjd. Det är 100–500 gånger högre upplösning än satellitdata från exempelvis Sentinel-2 (10 m/pixel) och tillräckligt för att analysera enskilda trädkronor.',
  },
  {
    question: 'Kan multispektralanalys ersätta fältinventering?',
    answer: 'Nej, multispektralanalys ersätter inte fältinventering men kompletterar den kraftfullt. Indexen visar var vegetationen avviker och hjälper er att prioritera var fältinsatser behövs. Diagnos av specifik skadeorsak kräver fortfarande fältverifiering.',
  },
  {
    question: 'Under vilka förhållanden krävs flygning?',
    answer: 'Multispektral flygning kräver molnfria eller jämnt mulna förhållanden för konsistent data. Kalibrering sker med reflektanspanel före start och irradianssensor (DLS) kompenserar för ljusförändringar under flygning.',
  },
]

export default function MultispektralanalysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Multispektralanalys', url: '/tjanster/multispektralanalys' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Multispektralanalys av skog med drönare',
              description: 'Vegetationsindex (NDVI, NDRE, GNDVI) från 5-bands multispektral sensor för objektiv hälsobedömning av skog.',
              url: '/tjanster/multispektralanalys',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Multispektralanalys"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Multispektralanalys av skog med drönare"
        intro="Multispektralanalys mäter hur vegetationen reflekterar ljus i fem våglängdsband och omvandlar reflektansen till vegetationsindex som objektivt visar skogens hälsotillstånd."
        relatedLinks={[
          { label: 'Fotosyntesmätning', href: '/tjanster/fotosyntesmatning' },
          { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
        ]}
      >
        <h2>Vad är multispektralanalys?</h2>
        <p>
          Multispektralanalys innebär att en kalibrerad 5-bands sensor monterad på drönare mäter
          vegetationens reflektans i blått (~475 nm), grönt (~560 nm), rött (~668 nm), red edge
          (~717 nm) och nära infrarött (~842 nm). Frisk vegetation absorberar rött ljus för
          fotosyntes och reflekterar starkt i nära infrarött. Genom att beräkna kvoten mellan
          dessa band skapas vegetationsindex som objektivt graderar skogens hälsa.
        </p>

        <h2>Vegetationsindex</h2>
        <p>Vi beräknar och levererar följande index beroende på syfte och förhållanden:</p>
        <ul>
          <li>
            <strong>NDVI</strong> (Normalized Difference Vegetation Index) — standardindex för
            generell vitalitetsbedömning. Värden 0.6–0.9 indikerar frisk, tät vegetation.
          </li>
          <li>
            <strong>NDRE</strong> (Normalized Difference Red Edge) — känsligare för tidiga
            klorofyllförändringar. Reagerar på stress innan NDVI visar utslag.
          </li>
          <li>
            <strong>GNDVI</strong> (Green NDVI) — effektivare vid tät kronslutning där NDVI
            mättar. Bättre korrelation med klorofyllkoncentration.
          </li>
          <li>
            <strong>SAVI</strong> (Soil-Adjusted VI) — korrigerar för synlig mark vid gles skog,
            nyplanteringar och stormskadade ytor.
          </li>
          <li>
            <strong>CI Red-Edge</strong> (Chlorophyll Index) — kvantifierar klorofyllhalt och
            korrelerar med kvävestatus.
          </li>
        </ul>

        <h2>Tillämpningar inom skogsbruk</h2>
        <ul>
          <li>Vitalitetsbedömning och prioritering av fältinsatser</li>
          <li>Tidig detektion av{' '}
            <Link href="/tjanster/barkborre-detektering" className="text-forest-600 underline hover:text-forest-800">
              barkborreangrepp
            </Link>{' '}
            och annan stress</li>
          <li>Uppföljning av planteringar och ungskogsetablering</li>
          <li>Dokumentation av skogstillstånd före och efter åtgärd</li>
          <li>Underlag för{' '}
            <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
              skogsbruksplaner
            </Link>
          </li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Reflektanskartor per band (GeoTIFF, SWEREF99 TM)</li>
          <li>Vegetationsindex-raster (NDVI, NDRE, GNDVI m.fl.)</li>
          <li>Klassificerad vitalitetskarta med färgkodning (4–5 klasser)</li>
          <li>PDF-rapport med kartor, statistik och tolkningsguide</li>
        </ul>

        <h2>Sensor och kalibrering</h2>
        <p>
          Vi använder kalibrerad multispektral kamera med 5 separata sensorer. Radiometrisk
          kalibrering sker med reflektanspanel före flygning och irradianssensor (DLS) kompenserar
          för ljusförändringar under pågående flygning. Resultatet är kalibrerade
          reflektansvärden som möjliggör jämförelse mellan flygningar och säsonger.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
