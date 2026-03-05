import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Vad är NDVI? — Vegetationsindex förklarat',
  description:
    'NDVI (Normalized Difference Vegetation Index) mäter vegetationens vitalitet genom att jämföra nära infrarött och rött ljus. Lär dig hur indexet används inom skogsbruk.',
  path: '/kunskap/vad-ar-ndvi',
})

const faqItems = [
  {
    question: 'Vad betyder ett NDVI-värde på 0.7?',
    answer:
      'Ett NDVI-värde på 0.7 indikerar tät, frisk vegetation med hög klorofyllhalt och aktiv fotosyntes. Värden mellan 0.6 och 0.9 är typiska för välmående barrskog under växtsäsongen.',
  },
  {
    question: 'Kan NDVI mätas med vanlig RGB-kamera?',
    answer:
      'Nej, NDVI kräver data från nära infrarött (NIR) band som inte fångas av vanliga RGB-kameror. En multispektral sensor med minst rött och NIR-band behövs.',
  },
  {
    question: 'Hur ofta bör NDVI-mätning göras?',
    answer:
      'För allmän bevakning räcker 1–2 flygningar per växtsäsong. Vid misstänkta skador eller efter storm kan tätare intervall (varannan till var fjärde vecka) vara motiverat.',
  },
  {
    question: 'Påverkar väder NDVI-resultaten?',
    answer:
      'Ja, molniga förhållanden och ojämnt ljus kan ge opålitliga resultat. Flygningar bör ske vid molnfri himmel eller jämnt molntäcke, och sensorn kalibreras med referenspanel.',
  },
  {
    question: 'Vad är skillnaden mellan NDVI och NDRE?',
    answer:
      'NDVI använder rött och NIR-band medan NDRE använder Red Edge och NIR. NDRE är känsligare för tidiga stressförändringar i klorofyllhalten och mättar inte lika snabbt i tät skog.',
  },
]

export default function VadArNDVIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Vad är NDVI?', url: '/kunskap/vad-ar-ndvi' },
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

      <Breadcrumbs
        items={[
          { label: 'Kunskap', href: '/kunskap' },
          { label: 'Vad är NDVI?' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Vad är NDVI? — Vegetationsindex förklarat
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            En guide till det mest använda vegetationsindexet inom fjärranalys och skogsbruk.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            NDVI (Normalized Difference Vegetation Index) är ett vegetationsindex som mäter
            växtlighetens vitalitet genom att jämföra hur mycket nära infrarött (NIR) och rött
            ljus som reflekteras av vegetation. Friska växter absorberar rött ljus för fotosyntes
            och reflekterar starkt i NIR — kontrasten mellan dessa band utgör grunden för NDVI.
          </p>

          <h2>Formeln bakom NDVI</h2>
          <p>NDVI beräknas med en enkel formel:</p>
          <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
            <span className="font-mono text-lg text-slate-800">
              NDVI = (NIR − Röd) / (NIR + Röd)
            </span>
          </div>
          <p>
            Resultatet blir ett värde mellan −1 och +1. Negativa värden representerar vatten
            eller snö, värden nära noll indikerar bar mark, och höga positiva värden visar tät,
            frisk vegetation.
          </p>

          <h2>Värdeskala och tolkning</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">NDVI-intervall</th>
                <th className="py-3 text-left font-semibold text-slate-900">Tolkning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-mono text-forest-700">0.7 – 1.0</td>
                <td className="py-3 text-slate-600">Tät, frisk vegetation med hög klorofyllaktivitet</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-forest-600">0.4 – 0.7</td>
                <td className="py-3 text-slate-600">Måttlig till god vegetation</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-amber-600">0.2 – 0.4</td>
                <td className="py-3 text-slate-600">Gles eller stressad vegetation</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-red-600">0.0 – 0.2</td>
                <td className="py-3 text-slate-600">Bar mark, sten, bebyggelse</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-slate-400">−1.0 – 0.0</td>
                <td className="py-3 text-slate-600">Vatten, snö, moln</td>
              </tr>
            </tbody>
          </table>

          <h2>Tillämpningar inom skogsbruk</h2>
          <p>
            NDVI har blivit ett standardverktyg för skogsbrukare och förvaltare. De vanligaste
            användningsområdena inkluderar:
          </p>
          <ul>
            <li>
              <strong>Vitalitetsbedömning</strong> — kartlägg skogens hälsotillstånd över stora arealer
              och identifiera områden som kräver åtgärd
            </li>
            <li>
              <strong>Tidig skadedetektion</strong> — upptäck{' '}
              <Link href="/kunskap/barkborre-tidigt" className="text-forest-600 underline hover:text-forest-800">
                barkborreangrepp
              </Link>{' '}
              och stressymtom innan de syns med blotta ögat
            </li>
            <li>
              <strong>Planteringsuppföljning</strong> — verifiera etableringsgrad och tillväxt i{' '}
              <Link href="/areamatning-och-skogsbruk/planteringsuppfoljning" className="text-forest-600 underline hover:text-forest-800">
                nyplanterade bestånd
              </Link>
            </li>
            <li>
              <strong>Förändring över tid</strong> — jämför NDVI-kartor mellan år för att följa
              skogstillståndets utveckling
            </li>
          </ul>

          <h2>Drönare vs satellitdata för NDVI</h2>
          <p>
            Satellitbaserad NDVI (exempelvis Sentinel-2 med 10 m upplösning) ger bra överblick
            men saknar detaljer på trädnivå. Drönarbaserad NDVI med multispektral sensor
            erbjuder 5–10 cm upplösning, vilket möjliggör analys av enskilda trädkronor. Drönare
            påverkas inte heller av molntäcke på samma sätt och kan flygas på begäran. Läs mer i
            vår jämförelse{' '}
            <Link href="/kunskap/dronare-vs-satellitdata" className="text-forest-600 underline hover:text-forest-800">
              drönare vs satellitdata
            </Link>.
          </p>

          <h2>Kompletterande index</h2>
          <p>
            NDVI är ett utmärkt screeningverktyg, men vid detaljerad analys kan kompletterande
            index ge mer information. NDRE (Normalized Difference Red Edge) är känsligare för
            tidiga klorofyllförändringar. GNDVI fungerar bättre i tät kronslutning där NDVI
            tenderar att mätta. Läs mer i vår{' '}
            <Link href="/vegetationsanalys/ndvi-kartlaggning" className="text-forest-600 underline hover:text-forest-800">
              tjänst för NDVI-kartläggning
            </Link>.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
