import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, articleSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'LiDAR vs fotogrammetri för skogsdata',
  description:
    'LiDAR och fotogrammetri skapar 3D-modeller av skog på olika sätt. Jämförelse av noggrannhet, kostnad, penetration genom krontak och användning.',
  path: '/kunskap/lidar-vs-dronare',
})

/* Från git-historik — uppdatera vid faktisk innehållsändring (synligt datum + Article-schema) */
const ARTICLE_DATES = {
  published: '2026-03-05',
  modified: '2026-06-02',
  modifiedDisplay: '2 juni 2026',
}

const faqItems = [
  {
    question: 'Kan fotogrammetri mäta markhöjd under trädkronorna?',
    answer:
      'Fotogrammetri har svårt att mäta markhöjd under tät kronslutning eftersom kameran bara ser det som är synligt ovanifrån. LiDAR-pulser kan däremot penetrera krontak och ge markmodeller även i tät skog.',
  },
  {
    question: 'Vilken metod ger bäst trädhöjdsdata?',
    answer:
      'Båda metoderna ger bra trädhöjdsdata för krontopparna. LiDAR är dock överlägsen för höjdmätning i flerskiktad skog och för att bestämma markhöjd under krontak, vilket ger mer exakta stamhöjder.',
  },
  {
    question: 'Kostar LiDAR-skanning mer än fotogrammetri?',
    answer:
      'Ja, LiDAR-sensorer är dyrare och datamängderna större, vilket gör LiDAR-uppdrag mer kostsamma. Fotogrammetri med RGB-kamera är den mest kostnadseffektiva metoden för 3D-data.',
  },
  {
    question: 'Finns det gratis LiDAR-data för Sverige?',
    answer:
      'Ja, Lantmäteriet tillhandahåller rikstäckande LiDAR-data (Nationell höjdmodell, NH). Data är gratis men har lägre punkttäthet och aktualitet jämfört med drönarbaserad LiDAR.', /* MÅSTE VERIFIERAS: punkttäthet för Lantmäteriets data */
  },
  {
    question: 'Kan de två metoderna kombineras?',
    answer:
      'Ja, kombinationen är ofta optimal. LiDAR ger exakt markmodell och trädstruktur medan fotogrammetri (RGB) ger färgdata, ortofoto och visuell information. Moderna drönarplattformar kan bära båda sensorerna.',
  },
]

export default function LidarVsDronarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'LiDAR vs fotogrammetri', url: '/kunskap/lidar-vs-dronare' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: 'LiDAR vs fotogrammetri — jämförelse för skogsdata',
              description:
                'LiDAR och fotogrammetri skapar 3D-modeller av skog på olika sätt. Jämförelse av noggrannhet, kostnad, penetration genom krontak och bästa användningsområden.',
              url: '/kunskap/lidar-vs-dronare',
              datePublished: ARTICLE_DATES.published,
              dateModified: ARTICLE_DATES.modified,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Kunskap', href: '/kunskap' },
          { label: 'LiDAR vs fotogrammetri' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            LiDAR vs fotogrammetri — jämförelse för skogsdata
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Två metoder för att skapa 3D-modeller av skog — med olika styrkor och kostnadsbilder.
          </p>
          <p className="mt-4 text-sm font-mono text-white/40">Senast uppdaterad: {ARTICLE_DATES.modifiedDisplay}</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            LiDAR och fotogrammetri är två tekniker för att skapa 3D-modeller av skog. LiDAR
            (Light Detection and Ranging) sänder laserpulser och mäter returtiden för att
            beräkna avstånd med millimeterprecision. Fotogrammetri rekonstruerar 3D-struktur
            från överlappande fotografier. Båda kan monteras på drönare, men de ger olika
            typer av data med olika styrkor och begränsningar.
          </p>

          <h2>Teknisk jämförelse</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Parameter</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">LiDAR (drönare)</th>
                <th className="py-3 text-left font-semibold text-slate-900">Fotogrammetri (RGB)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Mätprincip</td>
                <td className="py-3 pr-4 text-slate-600">Laserpulser (aktiv sensor)</td>
                <td className="py-3 text-slate-600">Bildmatchning (passiv sensor)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Punkttäthet</td>
                {/* DJI Zenmuse L2-spec (enterprise.dji.com/zenmuse-l2/specs) — utrustning verifierad 2026-08-03 */}
                <td className="py-3 pr-4 text-slate-600">Upp till 240 000 punkter/s, 5 returer per puls (DJI Zenmuse L2)</td>
                <td className="py-3 text-slate-600">Hög ytnära (varierar med GSD och överlapp)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Penetration av krontak</td>
                <td className="py-3 pr-4 text-slate-600">Ja — laserreturer från flera nivåer</td>
                <td className="py-3 text-slate-600">Nej — ser bara ytskiktet</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Digital markmodell (DTM)</td>
                <td className="py-3 pr-4 text-slate-600">Hög noggrannhet, även under krontak</td>
                <td className="py-3 text-slate-600">Opålitlig under tät skog</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Höjdnoggrannhet</td>
                <td className="py-3 pr-4 text-slate-600">4 cm vertikalt vid 150 m enligt DJI:s specifikation för Zenmuse L2</td>
                <td className="py-3 text-slate-600">Lägre än LiDAR (varierar med GSD)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Färginformation</td>
                <td className="py-3 pr-4 text-slate-600">Nej (eller begränsad med inbyggd kamera)</td>
                <td className="py-3 text-slate-600">Ja, full RGB per punkt</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Ljusberoende</td>
                <td className="py-3 pr-4 text-slate-600">Oberoende (aktiv sensor)</td>
                <td className="py-3 text-slate-600">Kräver tillräckligt ljus</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Sensorkostnad</td>
                <td className="py-3 pr-4 text-slate-600">Hög</td>
                <td className="py-3 text-slate-600">Låg till måttlig</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Datamängd</td>
                <td className="py-3 pr-4 text-slate-600">Stor (hundratals MB–GB)</td>
                <td className="py-3 text-slate-600">Stor (tusentals bilder)</td>
              </tr>
            </tbody>
          </table>

          <h2>Bästa användningsområden</h2>

          <h3>LiDAR passar bäst för:</h3>
          <ul>
            <li>
              <strong>Markmodellering under krontak</strong> — terrängmodeller i tät skog
              där fotogrammetri inte kan nå marken
            </li>
            <li>
              <strong>Skogsstruktur</strong> — analys av kronhöjd, understory-skikt och
              vertikal skogsstruktur
            </li>
            <li>
              <strong>Volymskattning</strong> — beräkning av beståndsvolym baserat på
              kronhöjdsmodell och markmodell
            </li>
            <li>
              <strong>Hydrologisk modellering</strong> — exakta markmodeller för
              vattenavrinning och dikesplanering
            </li>
          </ul>

          <h3>Fotogrammetri passar bäst för:</h3>
          <ul>
            <li>
              <strong>Ortofoto och visuell dokumentation</strong> — högupplöst RGB-bild för{' '}
              <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                arealmätning
              </Link>{' '}
              och gränskartläggning
            </li>
            <li>
              <strong>Kostnadseffektiv 3D</strong> — ytmodeller (DSM) till lägre kostnad
              när markmodell inte krävs
            </li>
            <li>
              <strong>Öppen mark</strong> — på kalhyggen, i unga bestånd och öppen terräng
              fungerar fotogrammetri utmärkt
            </li>
            <li>
              <strong>Bilddokumentation</strong> — samma flygning kan ge både 3D-data
              och högupplösta ortofoton för dokumentation
            </li>
          </ul>

          <h2>Noggrannhet i praktiken</h2>
          <p>
            I tät produktionsskog ger drönarbaserad LiDAR markmodeller med hög
            noggrannhet — sensorn vi flyger, DJI Zenmuse L2, anges av tillverkaren
            till 4 cm vertikal noggrannhet vid 150 m flyghöjd. Fotogrammetri ger i
            samma förhållanden betydligt sämre markmodell, men mäter krontoppshöjder
            med god noggrannhet. Vid öppen eller gles skog minskar skillnaden avsevärt.
          </p>
          <p>
            För{' '}
            <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
              avverkningsunderlag
            </Link>{' '}
            och exakta volymberäkningar i produktionsskog ger LiDAR det mest tillförlitliga
            resultatet. För uppföljning, dokumentation och{' '}
            <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsinventering
            </Link>{' '}
            är fotogrammetri ofta tillräcklig och mer kostnadseffektiv.
          </p>
          {/* Utrustning verifierad av ägaren 2026-08-03 — båda metoderna finns i egen drift */}
          <p>
            TimberDrone flyger båda metoderna: fotogrammetri med högupplöst RGB-kamera
            och LiDAR med DJI Zenmuse L2 och RTK-positionering. Vi hjälper er att välja den
            metod som passar uppdragets mål och budget —{' '}
            <Link href="/offert" className="text-forest-600 underline hover:text-forest-800">
              beskriv ert behov
            </Link>{' '}
            så föreslår vi rätt upplägg.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
