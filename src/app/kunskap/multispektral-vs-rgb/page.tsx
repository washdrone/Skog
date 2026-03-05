import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Multispektral vs RGB — skillnaden för skogsanalys',
  description:
    'Multispektrala sensorer fångar ljus utanför det synliga spektrumet och avslöjar skogshälsa som RGB-kameror missar. Jämförelse av sensortyper, band och användningsområden.',
  path: '/kunskap/multispektral-vs-rgb',
})

const faqItems = [
  {
    question: 'Kan en vanlig drönarkamera användas för skogsanalys?',
    answer:
      'Ja, RGB-kameror fungerar bra för arealmätning, ortofoto, 3D-modeller och visuell inspektion. Men för vitalitetsbedömning, stressdetektion och vegetationsindex som NDVI krävs en multispektral sensor.',
  },
  {
    question: 'Vad kostar en multispektral sensor jämfört med RGB?',
    answer:
      'Multispektrala drönarsensorer kostar betydligt mer än RGB-kameror. Men som kund behöver du inte investera i egen utrustning — vi tillhandahåller rätt sensor för uppdraget.',
  },
  {
    question: 'Hur många band har en typisk multispektral sensor?',
    answer:
      'Vanliga drönarsensorer för skogsbruk har 5–6 band: Blue, Green, Red, Red Edge och NIR. Vissa modeller har fler band för mer specialiserade analyser.',
  },
  {
    question: 'Påverkar sensortypen flygtiden?',
    answer:
      'Multispektrala sensorer är ofta lättare än avancerade RGB-kameror, men kräver lägre flyghöjd för att uppnå tillräcklig upplösning per band. Det kan ge något längre total flygtid per areal.',
  },
  {
    question: 'Kan man kombinera RGB och multispektral i samma flygning?',
    answer:
      'Ja, det är vanligt att flyga med båda sensorerna parallellt eller sekventiellt. RGB-data ger högupplöst ortofoto medan multispektral data ger vegetationsindex. Kombinationen ger det bästa underlaget.',
  },
]

export default function MultispektralVsRGBPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Multispektral vs RGB', url: '/kunskap/multispektral-vs-rgb' },
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
          { label: 'Multispektral vs RGB' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Multispektral vs RGB — skillnaden för skogsanalys
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Vilken sensortyp passar för ditt uppdrag? En jämförelse av kapacitet och användningsområden.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Multispektrala sensorer fångar ljus utanför det synliga spektrumet, inklusive nära
            infrarött (NIR) och Red Edge, vilka är osynliga för vanliga RGB-kameror. Denna
            extra information avslöjar förändringar i vegetationens klorofyll, cellstruktur och
            vatteninnehåll som inte kan ses med blotta ögat eller fotograferas med standardkameror.
            Valet av sensor avgör vilka analyser som är möjliga.
          </p>

          <h2>Jämförelse: RGB vs multispektral</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Egenskap</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">RGB</th>
                <th className="py-3 text-left font-semibold text-slate-900">Multispektral</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Band</td>
                <td className="py-3 pr-4 text-slate-600">3 (Röd, Grön, Blå)</td>
                <td className="py-3 text-slate-600">5–6 (+ Red Edge, NIR)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Rumslig upplösning</td>
                <td className="py-3 pr-4 text-slate-600">Hög {/* MÅSTE VERIFIERAS: GSD beror på utrustning och flyghöjd */}</td>
                <td className="py-3 text-slate-600">Lägre än RGB {/* MÅSTE VERIFIERAS: GSD beror på utrustning och flyghöjd */}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Vegetationsindex</td>
                <td className="py-3 pr-4 text-slate-600">Begränsat (ExG, VARI)</td>
                <td className="py-3 text-slate-600">NDVI, NDRE, GNDVI, SAVI m.fl.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Stressdetektion</td>
                <td className="py-3 pr-4 text-slate-600">Endast synliga symptom</td>
                <td className="py-3 text-slate-600">Tidig detektion (green attack)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">3D-modellering</td>
                <td className="py-3 pr-4 text-slate-600">Ja, fotogrammetri</td>
                <td className="py-3 text-slate-600">Möjligt men lägre detaljnivå</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Kostnad</td>
                <td className="py-3 pr-4 text-slate-600">Lägre</td>
                <td className="py-3 text-slate-600">Högre (sensor + kalibrering)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Kalibrering</td>
                <td className="py-3 pr-4 text-slate-600">Ej nödvändig</td>
                <td className="py-3 text-slate-600">Krävs (referenspanel + DLS)</td>
              </tr>
            </tbody>
          </table>

          <h2>Spektralband förklarade</h2>
          <p>
            En multispektral sensor delar upp ljuset i distinkta band. Varje band ger
            specifik information om vegetationen:
          </p>
          <ul>
            <li>
              <strong>Blue (blått)</strong> {/* MÅSTE VERIFIERAS: sensorspecifikation beror på faktisk utrustning */} — Känsligt för klorofyll och karotenoider.
              Används i vattenanalys och för att skilja vegetation från jord.
            </li>
            <li>
              <strong>Green (grönt)</strong> {/* MÅSTE VERIFIERAS: sensorspecifikation beror på faktisk utrustning */} — Reflekteras mest av frisk vegetation, används
              i GNDVI och för att bedöma total biomassa.
            </li>
            <li>
              <strong>Red (rött)</strong> {/* MÅSTE VERIFIERAS: sensorspecifikation beror på faktisk utrustning */} — Absorberas starkt av klorofyll. Hög absorption
              innebär frisk vegetation. Centralt band i{' '}
              <Link href="/kunskap/vad-ar-ndvi" className="text-forest-600 underline hover:text-forest-800">
                NDVI-beräkning
              </Link>.
            </li>
            <li>
              <strong>Red Edge</strong> {/* MÅSTE VERIFIERAS: sensorspecifikation beror på faktisk utrustning */} — Övergångszonen mellan röd absorption och
              NIR-reflektans. Mycket känsligt för klorofyllförändringar och centralt för{' '}
              <Link href="/kunskap/barkborre-tidigt" className="text-forest-600 underline hover:text-forest-800">
                tidig barkborredetektion
              </Link>.
            </li>
            <li>
              <strong>NIR (nära infrarött)</strong> {/* MÅSTE VERIFIERAS: sensorspecifikation beror på faktisk utrustning */} — Nära infrarött reflekteras starkt av frisk
              bladstruktur. Minskad NIR-reflektans indikerar cellskada eller torrstress.
            </li>
          </ul>

          <h2>När ska du välja vilken?</h2>
          <h3>Välj RGB när du behöver:</h3>
          <ul>
            <li>Ortofoto och visuell dokumentation</li>
            <li>
              <Link href="/areamatning-och-skogsbruk/areamatning" className="text-forest-600 underline hover:text-forest-800">
                Arealmätning
              </Link>{' '}
              och gränskartläggning
            </li>
            <li>3D-modeller och höjddata via fotogrammetri</li>
            <li>Visuell inventering av stormskador (red attack, vindfällen)</li>
          </ul>

          <h3>Välj multispektral när du behöver:</h3>
          <ul>
            <li>
              <Link href="/vegetationsanalys/ndvi-kartlaggning" className="text-forest-600 underline hover:text-forest-800">
                NDVI-kartläggning
              </Link>{' '}
              och vitalitetsbedömning
            </li>
            <li>Tidig stressdetektion och barkborrescreening</li>
            <li>
              <Link href="/vegetationsanalys/uppfoljning-over-tid" className="text-forest-600 underline hover:text-forest-800">
                Uppföljning över tid
              </Link>{' '}
              med jämförbara data
            </li>
            <li>Klorofyllanalys och kvävestatus</li>
          </ul>

          <p>
            I många uppdrag är den bästa lösningen att kombinera båda sensorerna. RGB-data ger
            det visuella underlaget medan multispektral data ger den analytiska djupet. Kontakta
            oss för rådgivning om rätt sensorval för ert specifika uppdrag.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
