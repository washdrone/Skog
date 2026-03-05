import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Upptäck barkborre tidigt med drönare',
  description:
    'Multispektral drönaranalys kan upptäcka barkborreangrepp (Ips typographus) 4–8 veckor innan symptomen syns visuellt. Lär dig om green attack, NDRE-index och flygintervall.',
  path: '/kunskap/barkborre-tidigt',
})

const faqItems = [
  {
    question: 'Hur tidigt kan drönare upptäcka barkborre?',
    answer:
      'Med multispektral analys och NDRE-index kan angrepp upptäckas 4–8 veckor före visuella symptom (gulnande kronor). Det beror på angreppsintensitet, trädslag och förhållanden.',
  },
  {
    question: 'Vad är skillnaden mellan green attack och red attack?',
    answer:
      'Green attack är det tidiga stadiet då barken angrips men kronan fortfarande är grön. Red attack är det sena stadiet då kronan gulnar och rodnar. Multispektrala sensorer kan upptäcka green attack medan RGB-kameror först ser red attack.',
  },
  {
    question: 'Vilken tid på året bör man flyga för barkborredetektion?',
    answer:
      'Primärsvärmningen sker i maj–juni. Första kontrollflyg bör göras 3–4 veckor efter svärmning. Uppföljningsflyg rekommenderas varannan till var fjärde vecka under juni–september.',
  },
  {
    question: 'Fungerar detektion i alla typer av barrskog?',
    answer:
      'Metoden fungerar bäst i gran (Picea abies) som är värdträd för granbarkborren. Andra barkborrar finns i tall och andra trädslag, men granbarkborren orsakar störst skada i Sverige.',
  },
  {
    question: 'Hur stor areal kan övervakas per flygning?',
    answer:
      'Med en multispektral drönare kan 50–150 hektar kartläggas per dag beroende på terräng och flyghöjd. Vid ren screening kan högre flyghöjd ge snabbare täckning med något lägre upplösning.',
  },
]

export default function BarkborreTidigtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Barkborre tidigt', url: '/kunskap/barkborre-tidigt' },
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
          { label: 'Barkborre tidigt' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Upptäck barkborre tidigt med drönare
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Hur multispektral analys identifierar angrepp veckor innan symptomen syns för ögat.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Barkborreangrepp (<em>Ips typographus</em>) kan upptäckas 4–8 veckor tidigare med
            multispektral drönaranalys jämfört med visuell inspektion. Den avgörande fördelen
            ligger i att multispektrala sensorer registrerar förändringar i klorofyll och
            cellstruktur som sker långt innan kronan ändrar färg. Tidig detektion ger skogsägare
            möjlighet att sanera angripna träd innan nästa generation barkborrar svärmar.
          </p>

          <h2>Green attack vs red attack</h2>
          <p>
            Barkborrens angrepp genomgår två visuellt distinkta faser. Att förstå skillnaden är
            avgörande för att välja rätt detektionsmetod:
          </p>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Fas</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Visuellt</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Multispektralt</th>
                <th className="py-3 text-left font-semibold text-slate-900">Tidsram</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Green attack</td>
                <td className="py-3 pr-4 text-slate-600">Kronan grön, inga synliga symptom</td>
                <td className="py-3 pr-4 text-slate-600">NDRE och NIR-reflektans minskar mätbart</td>
                <td className="py-3 text-slate-600">0–8 veckor efter angrepp</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Red attack</td>
                <td className="py-3 pr-4 text-slate-600">Kronan gulnar, sedan rodnar</td>
                <td className="py-3 pr-4 text-slate-600">Kraftigt minskad NDVI och NDRE</td>
                <td className="py-3 text-slate-600">8–16 veckor efter angrepp</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Grey attack</td>
                <td className="py-3 pr-4 text-slate-600">Barr faller, grått skelett</td>
                <td className="py-3 pr-4 text-slate-600">Mycket lågt NDVI, barmarkssignal</td>
                <td className="py-3 text-slate-600">Månader till år</td>
              </tr>
            </tbody>
          </table>

          <h2>NDRE — nyckeln till tidig detektion</h2>
          <p>
            NDRE (Normalized Difference Red Edge Index) är det mest effektiva vegetationsindexet
            för att upptäcka green attack.{' '}
            <Link href="/kunskap/vad-ar-ndvi" className="text-forest-600 underline hover:text-forest-800">
              Till skillnad från NDVI
            </Link>{' '}
            använder NDRE Red Edge-bandet (ca 730 nm) istället för rött band. Red Edge är
            känsligare för subtila förändringar i klorofyllhalt och bladstruktur — precis de
            förändringar som sker under green attack.
          </p>
          <p>
            I praktiken innebär det att NDRE kan visa en tydlig minskning i ett trädkrona
            medan NDVI-värdet fortfarande ser normalt ut. Den extra känsligheten gör NDRE
            till förstahandsvalet vid systematisk barkborrebevakning.
          </p>

          <h2>Rekommenderade flygintervall</h2>
          <p>
            Timing är avgörande för effektiv barkborredetektion. Granbarkborren (<em>Ips
            typographus</em>) svärmar typiskt i maj–juni vid tillräckligt höga temperaturer.
          </p>
          <ul>
            <li>
              <strong>Första flyg</strong> — 3–4 veckor efter primärsvärmning (vanligen
              slutet av maj eller början av juni)
            </li>
            <li>
              <strong>Uppföljningsflyg</strong> — Varannan till var fjärde vecka under
              juni–september
            </li>
            <li>
              <strong>Riskbestånd</strong> — Prioritera bestånd nära föregående års angrepp,
              vindfällen och solexponerade sydsluttningar
            </li>
            <li>
              <strong>Avslutande flyg</strong> — September–oktober för att dokumentera
              totalt angreppsomfång under säsongen
            </li>
          </ul>

          <h2>Från detektion till åtgärd</h2>
          <p>
            Data från drönarflyg levereras som georefererade kartor med markerade
            riskområden. Dessa kan importeras direkt i GIS-system och används som underlag
            för{' '}
            <Link href="/areamatning-och-skogsbruk/skadeinventering" className="text-forest-600 underline hover:text-forest-800">
              skadeinventering
            </Link>{' '}
            och saneringsplanering. Vår{' '}
            <Link href="/vegetationsanalys/stressanalys" className="text-forest-600 underline hover:text-forest-800">
              stressanalystjänst
            </Link>{' '}
            är specifikt utformad för denna typ av bevakning.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
