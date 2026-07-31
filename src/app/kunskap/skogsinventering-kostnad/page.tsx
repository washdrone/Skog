import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, articleSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Vad kostar skogsinventering med drönare?',
  description:
    'Kostnaden för drönarbaserad skogsinventering beror på areal, terräng och analystyp. Prisfaktorer, jämförelse med fältinventering och ROI.',
  path: '/kunskap/skogsinventering-kostnad',
})

/*
 * Sammanslagen 2026-07-31 med /kunskap/vad-paverkar-priset, som besvarade
 * samma sökintention ("vad kostar det / vad styr priset") och konkurrerade
 * om samma sökord. Den gamla URL:en 301:as hit via next.config.js.
 *
 * Datum uppdateras vid faktisk innehållsändring — värdet syns på sidan och
 * ligger i Article-schemat, så det måste stämma.
 */
const ARTICLE_DATES = {
  published: '2026-03-05',
  modified: '2026-07-31',
  modifiedDisplay: '31 juli 2026',
}

const faqItems = [
  {
    question: 'Vad kostar en typisk drönarflygning för skogsinventering?',
    answer:
      'Priset varierar beroende på areal, terräng och analystyp. En grundläggande RGB-kartläggning av 50–100 hektar kostar vanligtvis mindre än en traditionell fältinventering av samma område. Kontakta oss för en offert baserad på ert specifika uppdrag.',
  },
  {
    question: 'Varför varierar priset så mycket mellan olika uppdrag?',
    answer:
      'Priset påverkas av en kombination av faktorer: areal, terräng, vilken typ av analys som krävs, hur data ska levereras och var fastigheten ligger. Ett litet uppdrag med ortofoto kostar mindre än en storskalig inventering med fullständig analys.',
  },
  {
    question: 'Är drönare billigare än traditionell inventering?',
    answer:
      'Per hektar blir drönare ofta kostnadseffektivare vid större arealer. Den stora besparingen ligger i minskad fälttid och snabbare leverans. Avkastningen förbättras ytterligare när samma data används för flera ändamål.',
  },
  {
    question: 'Blir det billigare med ett årsavtal?',
    answer:
      'Ja, återkommande uppdrag innebär lägre mobiliseringskostnader per tillfälle och möjlighet att planera logistik effektivare. Årsavtal med flera inventeringstillfällen ger normalt ett lägre pris per hektar jämfört med enstaka uppdrag.',
  },
  {
    question: 'Ingår analys och rapport i priset?',
    answer:
      'Det beror på valt leveransformat. Rådata (ortofoto, punktmoln) utan analys har ett lägre pris. Fullständiga analysrapporter med skogliga parametrar, hälsokartor eller volymberäkningar innebär mer bearbetningstid och kostar därför mer.',
  },
  {
    question: 'Spelar fastighetens läge stor roll för priset?',
    answer:
      'Ja, reseavstånd och logistik är en kostnadsfaktor. Uppdrag som kan samordnas geografiskt eller kombineras med andra uppdrag i samma region ger lägre logistikkostnad.',
  },
  {
    question: 'Vilka tillkommande kostnader finns?',
    answer:
      'De vanligaste tillkommande kostnaderna är mobilisering vid långa avstånd, extra analyspaket och uppföljningsflyg. Vi specificerar alltid alla kostnader i offerten.',
  },
  {
    question: 'Kan jag kombinera flera analyser i samma flygning?',
    answer:
      'Ja, det är ofta kostnadseffektivt att kombinera exempelvis arealmätning och skadeinventering i samma uppdrag. Flygningen behöver bara göras en gång och analyskostnaden är marginell i jämförelse.',
  },
  {
    question: 'Hur begär jag en prisindikation?',
    answer:
      'Kontakta oss via offertformuläret med uppgifter om areal, fastighetsbeteckning och vilken typ av data ni behöver. Vi återkommer med en prisindikation baserad på era specifika förutsättningar.',
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
              { name: 'Vad kostar skogsinventering?', url: '/kunskap/skogsinventering-kostnad' },
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
              headline: 'Vad kostar skogsinventering med drönare?',
              description:
                'Kostnaden för drönarbaserad skogsinventering beror på areal, terräng och analystyp. Prisfaktorer, jämförelse med fältinventering och ROI.',
              url: '/kunskap/skogsinventering-kostnad',
              datePublished: ARTICLE_DATES.published,
              dateModified: ARTICLE_DATES.modified,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Kunskap', href: '/kunskap' },
          { label: 'Vad kostar skogsinventering?' },
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
          <p className="mt-4 text-sm font-mono text-white/40">Senast uppdaterad: {ARTICLE_DATES.modifiedDisplay}</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Kostnaden för skogsinventering med drönare beror på areal, terräng och analystyp.
            Det finns inget standardpris per hektar, eftersom varje uppdrag har unika
            förutsättningar. En grundläggande kartläggning för arealmätning och ortofoto
            kostar mindre än mer avancerade analyspaket, och drönare blir generellt mer
            kostnadseffektivt ju större areal som kartläggs — mobiliserings- och
            uppställningskostnaden fördelas då på fler hektar.
          </p>

          <h2>Faktorer som påverkar priset</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Faktor</th>
                <th className="py-3 text-left font-semibold text-slate-900">Påverkan på pris</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Areal</td>
                <td className="py-3 text-slate-600">
                  Större arealer ger lägre pris per hektar tack vare skaleffekter.
                  Mobilisering, transport och planering fördelas på fler hektar. Vid arealer
                  under 10 hektar dominerar mobiliseringskostnaden.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Terräng och tillgänglighet</td>
                <td className="py-3 text-slate-600">
                  Kuperad terräng, höga berg eller svårtillgängliga områden kräver mer
                  flygtid och noggrannare planering, vilket ökar kostnaden.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Analystyp och analysdjup</td>
                <td className="py-3 text-slate-600">
                  Ortofoto och arealmätning är den mest kostnadseffektiva lösningen. Fullständig
                  inventering med volymuppskattning, stamantal och vitalitetskartor kräver mer
                  databearbetning och kostar mer.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Leveransformat</td>
                <td className="py-3 text-slate-600">
                  Rådata (ortofoto, punktmoln) i GeoTIFF är billigare. Analyserade produkter med
                  volymberäkningar, hälsokartor eller rapporter med tolkningsstöd kräver mer
                  bearbetningstid.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Antal tillfällen per år</td>
                <td className="py-3 text-slate-600">
                  Årsavtal med flera inventeringstillfällen ger lägre pris per flygning.
                  Enstaka uppdrag har högre mobiliseringskostnad.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Avstånd och logistik</td>
                <td className="py-3 text-slate-600">
                  Reseavstånd till fastigheten påverkar kostnaden. Uppdrag som kan samordnas
                  geografiskt ger lägre logistikkostnad.
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Skaleffekter vid större arealer</h2>
          <p>
            Kostnaden per hektar minskar med ökad areal. Det beror på att en stor del av
            kostnaden är fast — planering, transport, kalibrering och mobilisering — oavsett
            om uppdraget gäller 50 eller 500 hektar. För skogsbolag och förvaltare med stora
            innehav lönar det sig därför att inventera flera fastigheter i samma uppdrag.
          </p>

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

          <h2>Årsavtal och återkommande inventering</h2>
          <p>
            Många skogsägare och förvaltare behöver inventering vid flera tillfällen per år,
            exempelvis{' '}
            <Link href="/kunskap/sasongsguide-skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              anpassat efter säsong
            </Link>
            . Ett{' '}
            <Link href="/tjanster/arsavtal" className="text-forest-600 underline hover:text-forest-800">
              årsavtal
            </Link>{' '}
            med planerade flygningar ger förutsägbara kostnader och lägre pris per tillfälle
            jämfört med enstaka beställningar.
          </p>

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
            Varje uppdrag är unikt, så vi ger alltid en individuell offert. Berätta om areal,
            syfte och önskade leveranser så återkommer vi med en prisindikation. Grundläggande
            information vi behöver: fastighetsbeteckning eller koordinater, ungefärlig areal
            och vilken typ av analys ni är intresserade av.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand
        headline="Begär en kostnadsfri offert"
        description="Berätta om ert uppdrag — areal, läge och önskad analys — så återkommer vi med en prisindikation."
        ctaHref="/offert"
      />
    </>
  )
}
