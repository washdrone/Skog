import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { definedTermSetSchema } from '@/lib/seo/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Ordlista — begrepp inom drönarbaserad skogsdata',
  description:
    'Ordlista över centrala begrepp inom drönarbaserad skogsinventering: ortofoto, punktmoln, fotogrammetri, LiDAR, DSM, DTM, CHM, GSD, RTK, GNSS och fler.',
  path: '/kunskap/ordlista',
})

/*
 * Samtliga definitioner är allmänt vedertagen fackterminologi inom
 * fjärranalys, geodesi och skogsbruk — inga företagsspecifika påståenden
 * (CLAUDE.md: vedertagen vetenskap behöver ingen källa men ska vara korrekt).
 */
const TERMS: {
  term: string
  definition: string
  link?: { label: string; href: string }
}[] = [
  {
    term: 'Bestånd',
    definition:
      'Ett skogsområde som är enhetligt i fråga om trädslag, ålder och struktur och därför behandlas som en enhet i skogsbruket. Beståndet är den grundläggande redovisningsenheten i en skogsbruksplan.',
    link: { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
  },
  {
    term: 'Drönarkartering',
    definition:
      'Kartläggning av ett markområde med drönare. Området flygs systematiskt med överlappande bilder som bearbetas till ortofoto, punktmoln och höjdmodeller.',
    link: { label: 'Skogsinventering med drönare', href: '/tjanster/skogsinventering' },
  },
  {
    term: 'DSM — digital ytmodell',
    definition:
      'Höjdmodell som beskriver den översta synliga ytan i landskapet. I skog motsvarar den trädkronornas överkant. DSM står för Digital Surface Model.',
  },
  {
    term: 'DTM — digital terrängmodell',
    definition:
      'Höjdmodell som beskriver själva markytan, utan vegetation och byggnader. Kallas även markmodell. DTM står för Digital Terrain Model.',
  },
  {
    term: 'CHM — kronhöjdsmodell',
    definition:
      'Rasterlager som anger vegetationens höjd över marken, beräknat som skillnaden mellan ytmodellen (DSM) och terrängmodellen (DTM). Kronhöjdsmodellen är grunden för trädhöjdsmätning från luften. CHM står för Canopy Height Model.',
    link: { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
  },
  {
    term: 'Fjärranalys',
    definition:
      'Insamling och tolkning av information om markytan utan direkt kontakt med den, med sensorer på satellit, flygplan eller drönare. Skoglig fjärranalys omfattar bland annat flygbildstolkning, laserskanning och satellitövervakning.',
    link: { label: 'Drönare vs satellitdata', href: '/kunskap/dronare-vs-satellitdata' },
  },
  {
    term: 'Fotogrammetri',
    definition:
      'Metod för att göra geometriska mätningar ur fotografier. Överlappande flygbilder matchas mot varandra så att en tredimensionell rekonstruktion kan beräknas — resultatet blir punktmoln, höjdmodeller och ortofoton.',
    link: { label: 'LiDAR vs fotogrammetri', href: '/kunskap/lidar-vs-dronare' },
  },
  {
    term: 'Georeferering',
    definition:
      'Att knyta bild- eller kartdata till ett känt koordinatsystem så att varje punkt i datat motsvarar en bestämd position på marken. Georefererade data kan kombineras med andra kartlager i GIS.',
  },
  {
    term: 'GIS — geografiskt informationssystem',
    definition:
      'Programvara för att lagra, analysera och visualisera geografiska data, till exempel QGIS och ArcGIS. Skogliga drönarleveranser i format som GeoTIFF, GeoPackage och Shapefile importeras och analyseras i GIS.',
  },
  {
    term: 'GNSS',
    definition:
      'Global Navigation Satellite System — samlingsnamn för satellitnavigeringssystem som GPS (USA), Galileo (EU) och GLONASS (Ryssland). GNSS-mottagare används för att positionera drönare och mätpunkter.',
  },
  {
    term: 'GSD — markupplösning',
    definition:
      'Ground Sample Distance — avståndet på marken mellan två intilliggande pixelcentra i en flygbild, ofta angivet i centimeter per pixel. Ju lägre GSD, desto högre detaljnivå. GSD styrs främst av flyghöjd och kamerans egenskaper.',
  },
  {
    term: 'LiDAR',
    definition:
      'Light Detection and Ranging — aktiv sensor som sänder ut laserpulser och mäter returtiden för att beräkna avstånd. Eftersom en del pulser tränger ned mellan trädkronorna kan LiDAR ge markhöjd även under krontak.',
    link: { label: 'LiDAR vs fotogrammetri', href: '/kunskap/lidar-vs-dronare' },
  },
  {
    term: 'Multispektral analys',
    definition:
      'Analys av bilddata som registrerats i fler våglängdsband än det synliga ljuset, till exempel nära-infrarött. Eftersom frisk vegetation reflekterar infrarött ljus starkt används multispektrala data för att bedöma vegetationens tillstånd.',
  },
  {
    term: 'NDVI',
    definition:
      'Normalized Difference Vegetation Index — vegetationsindex som beräknas ur reflektansen i nära-infrarött (NIR) och rött ljus enligt (NIR − Röd) / (NIR + Röd). Frisk, tät vegetation ger höga värden; stressad eller gles vegetation ger lägre.',
  },
  {
    term: 'Ortofoto',
    definition:
      'Flygbild som korrigerats geometriskt för kamerans lutning och terrängens höjdskillnader så att den blir skalriktig som en karta. Ortofoton kan därför användas för mätning av avstånd och areal.',
    link: { label: 'Skogsinventering med drönare', href: '/tjanster/skogsinventering' },
  },
  {
    term: 'Precisionsskogsbruk',
    definition:
      'Skogsbruk där beslut om skötsel och åtgärder anpassas efter detaljerade, platsspecifika data — exempelvis per bestånd eller enskilt träd — i stället för genomsnittsvärden på fastighetsnivå.',
  },
  {
    term: 'Punktmoln',
    definition:
      'En stor mängd punkter med tredimensionella koordinater som tillsammans beskriver terräng och vegetation. Punktmoln framställs med fotogrammetri eller LiDAR och lagras vanligen i formaten LAS eller LAZ.',
  },
  {
    term: 'RTK',
    definition:
      'Real Time Kinematic — teknik som förbättrar GNSS-positionering från meternivå till centimeternivå med hjälp av korrektionsdata från en referensstation. RTK-positionering minskar behovet av markstödpunkter vid drönarkartering.',
  },
  {
    term: 'Skogsbruksplan',
    definition:
      'Dokument som beskriver en skogsfastighets tillstånd — bestånd, ålder, trädslag och virkesförråd — och föreslår åtgärder, vanligen för en tioårsperiod.',
    link: { label: 'Underlag för skogsbruksplan', href: '/tjanster/skogsbruksplan-underlag' },
  },
  {
    term: 'SWEREF99 TM',
    definition:
      'Sveriges nationella referenssystem för plana koordinater (EPSG:3006). Standardsystemet för svenska geodata — kartlager i SWEREF99 TM kan kombineras direkt med data från svenska myndigheter.',
  },
  {
    term: 'Termografi',
    definition:
      'Avbildning av värmestrålning med värmekamera (IR-sensor). Termografi visar temperaturskillnader som inte syns i vanliga bilder.',
  },
  {
    term: 'Virkesförråd',
    definition:
      'Volymen stående skog inom ett område, i Sverige vanligen uttryckt i skogskubikmeter (m³sk) — stamvolym ovanför stubben inklusive topp och bark.',
  },
]

export default function OrdlistaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Ordlista', url: '/kunskap/ordlista' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            definedTermSetSchema({
              name: 'Ordlista — drönarbaserad skogsdata',
              description:
                'Definitioner av centrala begrepp inom drönarbaserad skogsinventering, fotogrammetri och skoglig fjärranalys.',
              url: '/kunskap/ordlista',
              terms: TERMS.map(({ term, definition }) => ({ term, definition })),
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[{ label: 'Kunskap', href: '/kunskap' }, { label: 'Ordlista' }]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Ordlista — begrepp inom drönarbaserad skogsdata
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Korta definitioner av de fackbegrepp som används inom drönarbaserad
            skogsinventering, fotogrammetri och skoglig fjärranalys.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <dl className="divide-y divide-slate-100">
            {TERMS.map((entry) => (
              <div key={entry.term} className="py-6">
                <dt className="text-lg font-bold text-slate-900">{entry.term}</dt>
                <dd className="mt-2 text-slate-600 font-body leading-relaxed">
                  {entry.definition}
                  {entry.link && (
                    <>
                      {' '}
                      <Link
                        href={entry.link.href}
                        className="text-forest-600 underline hover:text-forest-800"
                      >
                        Läs mer: {entry.link.label}
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <CTABand
        headline="Frågor om begreppen eller er data?"
        description="Kontakta oss så förklarar vi vad olika leveranser innehåller och hur de används i ert skogsbruk."
      />
    </>
  )
}
