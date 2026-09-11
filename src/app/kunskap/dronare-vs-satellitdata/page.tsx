import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, articleSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Drönare vs satellitdata för skogsbruk',
  description:
    'Drönare och satelliter kompletterar varandra i skogsbruket. Jämförelse av upplösning, kostnad, täckning, frekvens och molnberoende för skogsanalys.',
  path: '/kunskap/dronare-vs-satellitdata',
})

/* Från git-historik — uppdatera vid faktisk innehållsändring (synligt datum + Article-schema) */
const ARTICLE_DATES = {
  published: '2026-03-05',
  modified: '2026-06-02',
  modifiedDisplay: '2 juni 2026',
}

const faqItems = [
  {
    question: 'Är drönare bättre än satellitdata för skogsbruk?',
    answer:
      'Inte generellt bättre — de kompletterar varandra. Drönare ger högre upplösning och flexibilitet för specifika områden, medan satelliter ger regelbunden täckning av stora arealer. Valet beror på syfte, areal och budget.',
  },
  {
    question: 'Vilken upplösning har Sentinel-2 jämfört med drönare?',
    answer:
      'Sentinel-2 har 10 m upplösning i sina bästa band (synligt och NIR). En drönare ger betydligt högre rumslig upplösning (beroende på utrustning och flyghöjd).',
  },
  {
    question: 'Kostar satellitdata något?',
    answer:
      'Data från Sentinel-2 (ESA) och Landsat (NASA/USGS) är gratis och fritt tillgängliga. Kommersiella satelliter som Pléiades eller WorldView kostar per bild och levererar högre upplösning (30–50 cm).',
  },
  {
    question: 'Hur påverkar moln satellitdata?',
    answer:
      'Optiska satelliter kan inte se genom moln, vilket är ett problem i Sverige som har hög andel molntäcke. Drönare flyger under molnen och påverkas inte på samma sätt.', /* MÅSTE VERIFIERAS: källa saknas för molntäcke */
  },
  {
    question: 'Kan man kombinera drönare och satellitdata?',
    answer:
      'Ja, det är ofta den bästa strategin. Satellitdata ger kontinuerlig landskapsöverblick för att identifiera intressanta områden. Drönare används sedan för detaljanalys av dessa områden.',
  },
]

export default function DronareVsSatellitdataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Drönare vs satellitdata', url: '/kunskap/dronare-vs-satellitdata' },
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
              headline: 'Drönare vs satellitdata för skogsbruk',
              description:
                'Drönare och satelliter kompletterar varandra i skogsbruket. Jämförelse av upplösning, kostnad, täckning, frekvens och molnberoende för skogsanalys.',
              url: '/kunskap/dronare-vs-satellitdata',
              datePublished: ARTICLE_DATES.published,
              dateModified: ARTICLE_DATES.modified,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Kunskap', href: '/kunskap' },
          { label: 'Drönare vs satellitdata' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Drönare vs satellitdata för skogsbruk
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            En detaljerad jämförelse av två datakällor med olika styrkor och begränsningar.
          </p>
          <p className="mt-4 text-sm font-mono text-white/40">Senast uppdaterad: {ARTICLE_DATES.modifiedDisplay}</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Drönare och satelliter kompletterar varandra i skogsbruket. Satellitdata ger
            regelbunden överblick av stora landskap till låg eller ingen kostnad, medan
            drönarbaserad fjärranalys erbjuder bilder med hög markupplösning för specifika bestånd.
            Rätt val — eller kombination — beror på areal, detaljbehov, tidskrav och budget.
          </p>

          <p>Jämförelsen beskriver olika sensortyper generellt. Multispektrala band och kalibreringspaneler förutsätter sådan utrustning och beskriver inte automatiskt TimberDrones leverans. Ange vilken analys du behöver i din förfrågan.</p>
          <h2>Detaljerad jämförelse</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Parameter</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Drönare</th>
                <th className="py-3 text-left font-semibold text-slate-900">Satellit (Sentinel-2)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Rumslig upplösning</td>
                <td className="py-3 pr-4 text-slate-600">Typiskt 2–3 cm/pixel vid 80–120 m flyghöjd</td>
                <td className="py-3 text-slate-600">10–20 m</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Täckning per pass</td>
                <td className="py-3 pr-4 text-slate-600">Varierar beroende på utrustning och förhållanden {/* MÅSTE VERIFIERAS */}</td>
                <td className="py-3 text-slate-600">290 km svepbredd</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Återbesöksfrekvens</td>
                <td className="py-3 pr-4 text-slate-600">På begäran, same day möjligt</td>
                <td className="py-3 text-slate-600">Ca 5 dagar (Sentinel-2A + 2B, kan variera med latitud)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Molnberoende</td>
                <td className="py-3 pr-4 text-slate-600">Flyger under molnen</td>
                <td className="py-3 text-slate-600">Kan inte se genom moln</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Datakostnad</td>
                <td className="py-3 pr-4 text-slate-600">Per uppdrag</td>
                <td className="py-3 text-slate-600">Gratis (Sentinel-2, Landsat)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Spektralband</td>
                <td className="py-3 pr-4 text-slate-600">Beror på sensor; RGB och multispektrala kameror skiljer sig</td>
                <td className="py-3 text-slate-600">13 band (Sentinel-2)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Kalibrering</td>
                <td className="py-3 pr-4 text-slate-600">Lokal (referenspanel)</td>
                <td className="py-3 text-slate-600">Atmosfärisk korrigering (automatiserad)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Trädindividnivå</td>
                <td className="py-3 pr-4 text-slate-600">Ja, enskilda kronor</td>
                <td className="py-3 text-slate-600">Nej, beståndsnivå</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">3D-data</td>
                <td className="py-3 pr-4 text-slate-600">Ja (fotogrammetri, LiDAR)</td>
                <td className="py-3 text-slate-600">Begränsat (stereobilder)</td>
              </tr>
            </tbody>
          </table>

          <h2>När passar drönare bäst?</h2>
          <ul>
            <li>
              <strong>Detaljanalys av specifika bestånd</strong> — enskilda trädkronor,{' '}
              <Link href="/kunskap/barkborre-tidigt" className="text-forest-600 underline hover:text-forest-800">
                barkborreangrepp
              </Link>,{' '}
              <Link href="/tjanster/plantrakning" className="text-forest-600 underline hover:text-forest-800">
                planträkning
              </Link>
            </li>
            <li>
              <strong>Molniga perioder</strong> — när satellitdata har luckor kan drönare
              samla in data oavsett
            </li>
            <li>
              <strong>Akuta behov</strong> — stormskadeinventering, akuta skadedjursangrepp
              som kräver snabb respons
            </li>
            <li>
              <strong>Exakta mätningar</strong> —{' '}
              <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                arealmätning
              </Link>,
              volymberäkning, stamantal
            </li>
          </ul>

          <h2>När passar satellitdata bäst?</h2>
          <ul>
            <li>
              <strong>Landskapsöverblick</strong> — bevakning av tusentals hektar
              kontinuerligt
            </li>
            <li>
              <strong>Tidsserier</strong> — historisk förändring med arkivdata (Sentinel-2
              från 2015, Landsat från 1972)
            </li>
            <li>
              <strong>Screening</strong> — identifiera områden som behöver detaljanalys
              med drönare
            </li>
            <li>
              <strong>Låg budget</strong> — gratis satellitdata för grundläggande
              översiktsbevakning av stora arealer
            </li>
          </ul>

          <h2>Den optimala strategin</h2>
          <p>
            För professionellt skogsbruk ger kombinationen av satellitdata och drönaranalys
            det bästa resultatet. Satellitdata används för kontinuerlig bevakning och
            trendanalys. När avvikelser upptäcks — eller när detaljerad analys behövs för
            planering — kompletteras med drönarbaserad{' '}
            <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsinventering
            </Link>{' '}
            eller{' '}
            <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsskadeinventering
            </Link>{' '}
            på hög upplösning.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
