import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Vad kostar skogsinventering med drönare?',
  description:
    'Kostnaden för drönarbaserad skogsinventering beror på areal, terräng och analystyp. Läs om prisfaktorer, jämförelse med traditionella metoder och ROI.',
  path: '/kunskap/skogsinventering-kostnad',
})

const faqItems = [
  {
    question: 'Vad kostar en typisk drönarflyging för skogsinventering?',
    answer:
      'Priset varierar beroende på areal, terräng och analystyp. En grundläggande RGB-kartläggning av 50–100 hektar kostar vanligtvis mindre än en traditionell fältinventering av samma område. Kontakta oss för en offert baserad på ert specifika uppdrag.',
  },
  {
    question: 'Är drönare billigare än traditionell inventering?',
    answer:
      'Per hektar blir drönare ofta kostnadseffektivare vid större arealer. Den stora besparingen ligger i minskad fälttid och snabbare leverans. ROI förbättras ytterligare när data används för flera ändamål.',
  },
  {
    question: 'Vilka dolda kostnader finns?',
    answer:
      'De vanligaste tillkommande kostnaderna är mobilisering vid långa avstånd, extra analyspaket och uppföljningsflyg. Vi specificerar alltid alla kostnader i offerten.',
  },
  {
    question: 'Hur snabbt levereras resultaten?',
    answer:
      'Leveranstid varierar beroende på uppdragets omfattning och komplexitet. Expresshantering kan vara möjlig mot tillägg vid akuta behov som stormskadeinventering.',
  },
  {
    question: 'Kan jag kombinera flera analyser i samma flygning?',
    answer:
      'Ja, det är ofta kostnadseffektivt att kombinera exempelvis arealmätning och skadeinventering i samma uppdrag. Flygningen behöver bara göras en gång och analyskostnaden är marginell i jämförelse.',
  },
]

export default function SkogsinventeringKostnadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Skogsinventering kostnad', url: '/kunskap/skogsinventering-kostnad' },
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
          { label: 'Skogsinventering kostnad' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Vad kostar skogsinventering med drönare?
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Prisfaktorer, jämförelse med traditionella metoder och avkastningsperspektiv.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Kostnaden för skogsinventering med drönare beror på areal, terräng och analystyp.
            En grundläggande kartläggning för arealmätning och ortofoto kostar mindre än
            mer avancerade analyspaket. Generellt blir drönare mer
            kostnadseffektivt ju större areal som kartläggs, eftersom mobiliserings- och
            uppställningskostnaden fördelas på fler hektar.
          </p>

          <h2>Faktorer som påverkar priset</h2>
          <ul>
            <li>
              <strong>Areal</strong> — Större uppdrag ger lägre pris per hektar. Vid arealer
              under 10 hektar dominerar mobiliseringskostnaden.
            </li>
            <li>
              <strong>Analystyp</strong> — En grundläggande kartläggning är billigast. Mer
              avancerade analyspaket kostar mer på grund av mer omfattande databearbetning.
            </li>
            <li>
              <strong>Terräng och tillgänglighet</strong> — Kuperad terräng eller svårtillgängliga
              områden kräver mer flygtid och planering.
            </li>
            <li>
              <strong>Analysdjup</strong> — Enbart ortofoto och arealmätning vs fullständig
              inventering med volymsuppskattning, stamantal och vitalitetskartor.
            </li>
            <li>
              <strong>Leveransformat</strong> — Standardleverans i GeoTIFF eller anpassade
              rapporter med tolkningsstöd och rekommendationer.
            </li>
          </ul>

          <h2>Jämförelse med traditionella metoder</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Parameter</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Drönare</th>
                <th className="py-3 text-left font-semibold text-slate-900">Traditionell fältinventering</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Kostnad per hektar</td>
                <td className="py-3 pr-4 text-slate-600">Sjunker snabbt med ökande areal</td>
                <td className="py-3 text-slate-600">Relativt konstant per hektar</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Tidsåtgång i fält</td>
                <td className="py-3 pr-4 text-slate-600">Timmar (flygning)</td>
                <td className="py-3 text-slate-600">Dagar till veckor</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Datatäckning</td>
                <td className="py-3 pr-4 text-slate-600">100 % av arealen, heltäckande</td>
                <td className="py-3 text-slate-600">Stickprovsbaserad (provytor)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Upplösning</td>
                <td className="py-3 pr-4 text-slate-600">Centimeternivå (beroende på utrustning och flyghöjd) {/* MÅSTE VERIFIERAS */}</td>
                <td className="py-3 text-slate-600">Trädnivå i provytor</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-700">Repeterbarhet</td>
                <td className="py-3 pr-4 text-slate-600">Hög — samma flygplan varje gång</td>
                <td className="py-3 text-slate-600">Varierande beroende på personal</td>
              </tr>
            </tbody>
          </table>

          <h2>ROI-perspektiv</h2>
          <p>
            Den verkliga besparingen med drönarbaserad inventering ligger sällan enbart i
            själva datainsamlingen. Det största värdet skapas genom:
          </p>
          <ul>
            <li>
              <strong>Tidsbesparing</strong> — Snabbare överblick möjliggör snabbare beslut.
              Vid stormskador eller skadedjursangrepp kan tidigt agerande spara betydande
              virkesvärden.
            </li>
            <li>
              <strong>Bättre beslutsunderlag</strong> — Heltäckande data istället för
              stickprov ger säkrare grund för{' '}
              <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
                avverkningsplanering
              </Link>{' '}
              och åtgärdsprioriteringar.
            </li>
            <li>
              <strong>Dokumentation</strong> — Georefererade kartor och rapporter fungerar som
              underlag vid försäkringsärenden, certifiering och myndighetskontakt.
            </li>
            <li>
              <strong>Kombinerade analyser</strong> — Samma flygdata kan användas för{' '}
              <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
                arealmätning
              </Link>,{' '}
              <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
                skogsskadeinventering
              </Link>{' '}
              och volymuppskattning.
            </li>
          </ul>

          <h2>Så får du en prisindikation</h2>
          <p>
            Varje uppdrag är unikt. Berätta om areal, syfte och önskade leveranser så
            återkommer vi med en specificerad offert. Grundläggande information vi behöver:
            fastighetsbeteckning eller koordinater, ungefärlig areal och vilken typ av analys
            ni är intresserade av.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
