import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Fotosyntetisk aktivitet — så mäter du med drönare',
  description:
    'Fotosyntetisk aktivitet i skog kan mätas indirekt med multispektrala vegetationsindex från drönare. Lär dig om metod, index och tillämpningar.',
  path: '/kunskap/fotosyntesmatning-guide',
})

const faqItems = [
  {
    question: 'Mäter drönare fotosyntes direkt?',
    answer:
      'Nej, drönare mäter reflekterat ljus, inte den biokemiska fotosyntesprocessen direkt. Vegetationsindex som NDVI och NDRE korrelerar starkt med fotosyntetisk kapacitet och ger en tillförlitlig indirekt mätning.',
  },
  {
    question: 'Vilket vegetationsindex är bäst för att mäta fotosyntetisk aktivitet?',
    answer:
      'NDVI ger en bra övergripande bild. NDRE är känsligare för subtila förändringar i klorofyllhalt. CI Red-Edge (Chlorophyll Index) korrelerar starkast med faktisk klorofyllkoncentration.',
  },
  {
    question: 'Påverkar årstiden mätresultaten?',
    answer:
      'Ja, fotosyntetisk aktivitet varierar kraftigt med årstid. Lövskog visar dramatiska skillnader mellan vinter och sommar. Barrskog har mer stabil men fortfarande säsongsvarierande aktivitet. Jämförelser bör göras mellan samma tidpunkter.',
  },
  {
    question: 'Hur exakta är drönarbaserade mätningar?',
    answer:
      'Med korrekt kalibrering (referenspanel och irradianssensor) uppnås radiometrisk noggrannhet med NRMSE under 2–4 %. Det är tillräckligt för att detektera meningsfulla skillnader i vegetationens tillstånd.',
  },
  {
    question: 'Kan mätningarna jämföras med satellitdata?',
    answer:
      'Ja, men med försiktighet. Drönare och satelliter har olika rumslig upplösning, betraktningsvinkel och atmosfärisk korrigering. Trender och relativa skillnader är jämförbara, men absoluta indexvärden kan skilja sig.',
  },
]

export default function FotosyntesmatningGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Fotosyntetisk aktivitet', url: '/kunskap/fotosyntesmatning-guide' },
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
          { label: 'Fotosyntetisk aktivitet' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Fotosyntetisk aktivitet — så mäter du med drönare
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            En guide till indirekta mätmetoder med multispektrala vegetationsindex.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Fotosyntetisk aktivitet i skog kan mätas indirekt genom multispektrala
            vegetationsindex som fångas med drönare. Metoden bygger på att friska, fotosyntesaktiva
            blad absorberar rött ljus och reflekterar starkt i nära infrarött (NIR). Genom att
            analysera förhållandet mellan dessa våglängder får vi en proxy för vegetationens
            fotosyntetiska kapacitet — utan att behöva ta fysiska prover.
          </p>

          <h2>Så fungerar det</h2>
          <p>
            Klorofyll a och b, de primära pigmenten i fotosyntesen, absorberar ljus i blått
            (ca 450 nm) och rött (ca 650 nm) spektrum. Nära infrarött ljus (700–900 nm)
            passerar obehindrat genom klorofyllet men reflekteras av bladets mesofyllstruktur.
            Denna kontrast — hög NIR-reflektans kombinerad med låg rödreflektion — är direkt
            kopplad till klorofyllhalt och cellhälsa.
          </p>
          <p>
            En{' '}
            <Link href="/kunskap/multispektral-vs-rgb" className="text-forest-600 underline hover:text-forest-800">
              multispektral sensor
            </Link>{' '}
            monterad på en drönare fångar dessa band pixelvis och skapar en heltäckande
            karta över fotosyntetisk aktivitet med 5–10 cm upplösning.
          </p>

          <h2>Vegetationsindex för fotosyntes</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Index</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Band</th>
                <th className="py-3 text-left font-semibold text-slate-900">Vad det mäter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">
                  <Link href="/kunskap/vad-ar-ndvi" className="text-forest-600 underline hover:text-forest-800">
                    NDVI
                  </Link>
                </td>
                <td className="py-3 pr-4 text-slate-600">NIR, Röd</td>
                <td className="py-3 text-slate-600">Övergripande vegetationsvitalitet och biomassa</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">NDRE</td>
                <td className="py-3 pr-4 text-slate-600">NIR, Red Edge</td>
                <td className="py-3 text-slate-600">Klorofyllhalt, tidig stress</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">GNDVI</td>
                <td className="py-3 pr-4 text-slate-600">NIR, Grön</td>
                <td className="py-3 text-slate-600">Klorofyll i tät kronslutning (mättar inte som NDVI)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">CI Red-Edge</td>
                <td className="py-3 pr-4 text-slate-600">NIR, Red Edge</td>
                <td className="py-3 text-slate-600">Klorofyllkoncentration (linjärt samband)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">PRI</td>
                <td className="py-3 pr-4 text-slate-600">531 nm, 570 nm</td>
                <td className="py-3 text-slate-600">Ljusanvändningseffektivitet (kräver hyperspektral)</td>
              </tr>
            </tbody>
          </table>

          <h2>Tillämpningar inom skogsbruk</h2>
          <ul>
            <li>
              <strong>Vitalitetsbedömning</strong> — Kartlägg fotosyntetisk aktivitet över
              stora arealer för att identifiera bestånd med nedsatt hälsa
            </li>
            <li>
              <strong>Stressdetektion</strong> — Minskad fotosyntetisk aktivitet är ofta
              det första tecknet på{' '}
              <Link href="/kunskap/barkborre-tidigt" className="text-forest-600 underline hover:text-forest-800">
                skadedjursangrepp
              </Link>, torka eller näringsbrist
            </li>
            <li>
              <strong>Tillväxtuppföljning</strong> — Följ hur{' '}
              <Link href="/areamatning-och-skogsbruk/planteringsuppfoljning" className="text-forest-600 underline hover:text-forest-800">
                nyplanteringar
              </Link>{' '}
              etablerar sig genom att mäta fotosyntetisk kapacitet över tid
            </li>
            <li>
              <strong>Gallringseffekter</strong> — Utvärdera hur kvarvarande träd svarar
              på ökad ljustillgång efter gallring
            </li>
          </ul>

          <h2>Begränsningar att vara medveten om</h2>
          <p>
            Vegetationsindex ger en indirekt mätning. De korrelerar starkt med fotosyntetisk
            kapacitet men mäter inte den faktiska kolassimileringen. Säsongsvariationer,
            trädslag och ljusförhållanden påverkar resultaten. Jämförelser bör alltid göras
            mellan data insamlade vid liknande förhållanden. Radiometrisk kalibrering med
            referenspanel är avgörande för tillförlitliga resultat.
          </p>
          <p>
            Vår{' '}
            <Link href="/vegetationsanalys/stressanalys" className="text-forest-600 underline hover:text-forest-800">
              stressanalystjänst
            </Link>{' '}
            inkluderar alltid korrekt kalibrering och tolkningsstöd för att säkerställa
            att resultaten är meningsfulla och jämförbara.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
