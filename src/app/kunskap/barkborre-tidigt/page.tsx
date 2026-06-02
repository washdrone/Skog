import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Upptäck barkborre tidigt med drönare',
  description:
    'Drönarbilder och bildanalys kan hjälpa till att upptäcka barkborreangrepp (Ips typographus) tidigt. Lär dig om green attack, red attack och flygintervall.',
  path: '/kunskap/barkborre-tidigt',
})

const faqItems = [
  {
    question: 'Hur tidigt kan drönare upptäcka barkborre?',
    answer:
      'Med drönarbilder och bildanalys kan angrepp upptäckas i ett tidigt skede, ofta innan skadorna är tydliga från marken. Hur tidigt beror på angreppsintensitet, trädslag och förhållanden.',
  },
  {
    question: 'Vad är skillnaden mellan green attack och red attack?',
    answer:
      'Green attack är det tidiga stadiet då barken angrips men kronan fortfarande är grön. Red attack är det sena stadiet då kronan gulnar och rodnar. Återkommande drönarflygningar gör det lättare att fånga angrepp i ett tidigt skede.',
  },
  {
    question: 'Vilken tid på året bör man flyga för barkborredetektion?',
    answer:
      'Primärsvärmningen sker i maj–juni. Första kontrollflyg bör göras några veckor efter svärmning. Uppföljningsflyg rekommenderas regelbundet under juni–september.',
  },
  {
    question: 'Fungerar detektion i alla typer av barrskog?',
    answer:
      'Metoden fungerar bäst i gran (Picea abies) som är värdträd för granbarkborren. Andra barkborrar finns i tall och andra trädslag, men granbarkborren orsakar störst skada i Sverige.',
  },
  {
    question: 'Hur stor areal kan övervakas per flygning?',
    answer:
      'Arealen som kan kartläggas per dag varierar beroende på utrustning, terräng och flyghöjd. Vid ren screening kan högre flyghöjd ge snabbare täckning med något lägre upplösning.',
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
            Hur drönarflygning och bildanalys hjälper dig att fånga angrepp i ett tidigt skede.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Barkborreangrepp (<em>Ips typographus</em>) kan upptäckas tidigare med
            drönarflygning jämfört med inventering enbart från marken. Fördelen ligger i att
            återkommande flygningar ger en heltäckande bild av bestånden och gör det lättare att
            fånga avvikelser i ett tidigt skede. Tidig upptäckt ger skogsägare
            möjlighet att sanera angripna träd innan nästa generation barkborrar svärmar.
          </p>

          <h2>Green attack, red attack och grey attack</h2>
          <p>
            Barkborrens angrepp genomgår flera visuellt distinkta faser. Att förstå skillnaden är
            avgörande för att tolka vad man ser i fält och i drönarbilder:
          </p>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Fas</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Kännetecken</th>
                <th className="py-3 text-left font-semibold text-slate-900">Tidsram</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Green attack</td>
                <td className="py-3 pr-4 text-slate-600">Kronan grön, inga tydliga symptom från marken</td>
                <td className="py-3 text-slate-600">Veckor efter angrepp (varierar)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Red attack</td>
                <td className="py-3 pr-4 text-slate-600">Kronan gulnar, sedan rodnar</td>
                <td className="py-3 text-slate-600">Längre tid efter angrepp</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Grey attack</td>
                <td className="py-3 pr-4 text-slate-600">Barr faller, grått skelett</td>
                <td className="py-3 text-slate-600">Månader till år</td>
              </tr>
            </tbody>
          </table>

          <h2>Återkommande flygningar fångar angrepp tidigt</h2>
          <p>
            Genom att flyga riskbestånd regelbundet under svärmningssäsongen blir det lättare att
            upptäcka avvikelser i ett tidigt skede. Drönarbilder ger en heltäckande överblick av
            stora arealer, och förändringar mellan flygningar kan följas över tid. Underlaget
            används för att rikta fältkontroll och saneringsinsatser dit de behövs.
          </p>

          <h2>Rekommenderade flygintervall</h2>
          <p>
            Timing är avgörande för effektiv barkborredetektion. Granbarkborren (<em>Ips
            typographus</em>) svärmar typiskt i maj–juni vid tillräckligt höga temperaturer.
          </p>
          <ul>
            <li>
              <strong>Första flyg</strong> — Några veckor efter primärsvärmning (vanligen
              slutet av maj eller början av juni)
            </li>
            <li>
              <strong>Uppföljningsflyg</strong> — Regelbundet under
              juni–september, med intervall anpassat efter riskbedömning
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
            <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsskadeinventering
            </Link>{' '}
            och saneringsplanering. Tjänsten är utformad för denna typ av bevakning av
            granbarkborreangrepp.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
