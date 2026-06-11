import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, howToSchema, articleSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Checklista efter stormskada i skog — vad ska du göra?',
  description:
    'Steg-för-steg-checklista efter stormskada i skog. Dokumentation, försäkringsanmälan, skadeomfattning med drönare och åtgärdsplanering.',
  path: '/kunskap/stormskada-checklista',
})

/* Från git-historik — uppdatera vid faktisk innehållsändring (synligt datum + Article-schema) */
const ARTICLE_DATES = {
  published: '2026-03-05',
  modified: '2026-06-02',
  modifiedDisplay: '2 juni 2026',
}

const faqItems = [
  {
    question: 'Hur snabbt bör jag dokumentera stormskadan?',
    answer:
      'Så snabbt som möjligt efter att stormen har passerat och det är säkert att vistas i området. Tidig dokumentation stärker försäkringsärendet och ger bättre underlag för åtgärdsplanering. Drönarbaserad dokumentation kan ofta göras snabbare än markbaserad inventering eftersom den inte kräver framkomlighet på stormskadade vägar.',
  },
  {
    question: 'Vad behöver försäkringsbolaget för underlag?',
    answer:
      'Försäkringsbolag kräver typiskt dokumentation av skadans omfattning och beräknad volym skadat virke. Georefererade ortofoto, 3D-modeller och volymberäkningar från drönardata ger ett objektivt och detaljerat underlag som stärker ärendet.',
  },
  {
    question: 'Kan man flyga drönare direkt efter en storm?',
    answer:
      'Flygning kan ske så snart det är säkert — det vill säga när stormvindar har avtagit och det inte finns kvarvarande riskfaktorer som hängande träd eller kraftiga vindbyar. Väderförhållandena vid flygningen måste uppfylla kraven för säker drift.',
  },
  {
    question: 'Hur stor areal kan dokumenteras med drönare efter storm?',
    answer:
      'Drönare kan täcka betydligt större arealer per dag jämfört med markbaserad inventering, eftersom framkomlighetsproblem på mark inte påverkar flygningen. Exakt kapacitet beror på uppdragets förutsättningar.',
  },
  {
    question: 'Varför är det viktigt att agera snabbt efter stormskada?',
    answer:
      'Stormfällt virke utgör en betydande risk för barkborreangrepp eftersom granbarkborren attraheras av stressat och dött virke. Snabb dokumentation och åtgärdsplanering minskar risken för sekundärskador och virkesförluster.',
  },
]

const howToSteps = [
  {
    name: 'Säkerhetsbedömning',
    text: 'Gå inte in i stormskadad skog förrän det är säkert. Hängande och lutande träd utgör livsfara. Bedöm situationen från väg eller utkantspunkt.',
  },
  {
    name: 'Kontakta försäkringsbolaget',
    text: 'Anmäl skadan till ert försäkringsbolag så snart som möjligt. Notera ärendenummer och fråga vilken dokumentation som krävs.',
  },
  {
    name: 'Dokumentera skadan',
    text: 'Beställ drönarbaserad skogsskadeinventering med ortofoto och 3D-modell för att kartlägga skadans geografiska utbredning och uppskatta volymer.',
  },
  {
    name: 'Bedöm skadeomfattningen',
    text: 'Analysera drönardata för att beräkna drabbad areal, volym stormfällt virke och identifiera prioriterade åtgärdsområden.',
  },
  {
    name: 'Planera upparbetning',
    text: 'Prioritera upparbetning av gran för att minimera risken för barkborreangrepp. Planera logistik baserat på den georefererade skadekartan.',
  },
  {
    name: 'Uppföljning och barkborrekontroll',
    text: 'Planera uppföljande flygningar under våren och sommaren för att tidigt upptäcka eventuella barkborreangrepp i angränsande bestånd.',
  },
]

export default function StormskadaChecklistaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Checklista stormskada', url: '/kunskap/stormskada-checklista' },
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
            howToSchema({
              name: 'Checklista efter stormskada i skog',
              description:
                'Steg-för-steg-guide för skogsägare efter stormskada — från säkerhetsbedömning till uppföljning.',
              steps: howToSteps,
            })
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: 'Checklista efter stormskada i skog — vad ska du göra?',
              description:
                'Steg-för-steg-checklista efter stormskada i skog. Dokumentation, försäkringsanmälan, skadeomfattning med drönare och åtgärdsplanering.',
              url: '/kunskap/stormskada-checklista',
              datePublished: ARTICLE_DATES.published,
              dateModified: ARTICLE_DATES.modified,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Kunskap', href: '/kunskap' },
          { label: 'Checklista stormskada' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Checklista efter stormskada i skog — vad ska du göra?
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            En steg-för-steg-guide för skogsägare som drabbats av stormskada.
          </p>
          <p className="mt-4 text-sm font-mono text-white/40">Senast uppdaterad: {ARTICLE_DATES.modifiedDisplay}</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Efter en stormskada i skog bör du säkerställa personlig säkerhet, kontakta ditt
            försäkringsbolag och dokumentera skadan så snabbt som möjligt. Tidig och noggrann
            dokumentation stärker försäkringsärendet, ger bättre underlag för åtgärdsplanering
            och minskar risken för sekundärskador som barkborreangrepp i angränsande bestånd.
          </p>

          <h2>Steg 1: Säkerhetsbedömning</h2>
          <p>
            Gå aldrig in i stormskadad skog utan att först bedöma säkerhetsläget. Hängande
            och lutande träd, spänningsladdade stammar och rotuppdragningar utgör direkt
            livsfara. Bedöm situationen från väg eller skogens utkant. Om stormen har
            fällt träd över vägar och kraftledningar, kontakta räddningstjänst eller
            elnätsbolaget.
          </p>

          <h2>Steg 2: Kontakta försäkringsbolaget</h2>
          <p>
            Anmäl skadan till ert försäkringsbolag så snart det är praktiskt möjligt.
            Notera ärendenummer och fråga specifikt vilken dokumentation de kräver.
            De flesta skogförsäkringar kräver:
          </p>
          <ul>
            <li>Dokumentation av skadans geografiska utbredning</li>
            <li>Uppskattning av volym skadat virke</li>
            <li>Fotodokumentation av skadeområdet</li>
            <li>Fastighetsbeteckning och beståndsinformation</li>
          </ul>

          <h2>Steg 3: Dokumentera med drönare</h2>
          <p>
            Drönarbaserad{' '}
            <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsskadeinventering
            </Link>{' '}
            ger ett objektivt och heltäckande underlag som är svårt att uppnå med
            markbaserad inventering — särskilt när framkomligheten i skogen är kraftigt
            begränsad efter en storm. Drönare kan:
          </p>
          <ul>
            <li>Kartlägga skadans utbredning med georefererat ortofoto</li>
            <li>Skapa 3D-modeller för volymberäkning av fällt virke</li>
            <li>Identifiera riskområden med hängande och lutande träd</li>
            <li>Dokumentera väg- och infrastrukturskador</li>
          </ul>

          <h2>Steg 4: Bedöm skadeomfattningen</h2>
          <p>
            Med drönardata som underlag kan skadeomfattningen analyseras systematiskt.
            Ortofoto visar den geografiska utbredningen och{' '}
            <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              3D-modeller
            </Link>{' '}
            ger underlag för att beräkna volymer av stormfällt virke. Georefererade kartor
            gör det möjligt att kommunicera skadans omfattning till försäkringsbolag,
            virkesköpare och avverkningsentreprenörer.
          </p>

          <h2>Steg 5: Planera upparbetning — prioritera gran</h2>
          <p>
            Stormfällt granvirke bör upparbetas och transporteras bort så snabbt som möjligt.
            Granbarkborren (Ips typographus) attraheras av stressat och dött granvirke och kan
            föröka sig explosivt i stormfällda bestånd. Varje fördröjning ökar risken för att
            barkborren sprider sig till friska granbestånd i omgivningen.
          </p>
          <p>
            Använd den georefererade skadekartan från drönarflygningen som underlag för att
            planera avverkningsordning och virkestransportlogistik.
          </p>

          <h2>Steg 6: Uppföljning och barkborrekontroll</h2>
          <p>
            Efter upparbetning bör angränsande bestånd övervakas för barkborreangrepp.
            Planera uppföljande flygningar för{' '}
            <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsskadeinventering
            </Link>{' '}
            under våren och sommaren för att tidigt upptäcka angrepp i angränsande
            granbestånd. Läs mer om{' '}
            <Link href="/kunskap/barkborre-tidigt" className="text-forest-600 underline hover:text-forest-800">
              tidig barkborreinventering
            </Link>{' '}
            och{' '}
            <Link href="/kunskap/sasongsguide-skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              bästa tid för inventering
            </Link>.
          </p>

          <h2>Sammanfattande checklista</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Steg</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Åtgärd</th>
                <th className="py-3 text-left font-semibold text-slate-900">Tidsperspektiv</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">1</td>
                <td className="py-3 pr-4 text-slate-600">Säkerhetsbedömning</td>
                <td className="py-3 text-slate-600">Omedelbart</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">2</td>
                <td className="py-3 pr-4 text-slate-600">Kontakta försäkringsbolaget</td>
                <td className="py-3 text-slate-600">Samma dag</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">3</td>
                <td className="py-3 pr-4 text-slate-600">Drönarbaserad skogsskadeinventering</td>
                <td className="py-3 text-slate-600">Inom dagar</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">4</td>
                <td className="py-3 pr-4 text-slate-600">Analys av skadeomfattning</td>
                <td className="py-3 text-slate-600">Inom en vecka</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">5</td>
                <td className="py-3 pr-4 text-slate-600">Upparbetning, gran prioriteras</td>
                <td className="py-3 text-slate-600">Så snart som möjligt</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">6</td>
                <td className="py-3 pr-4 text-slate-600">Uppföljning barkborre</td>
                <td className="py-3 text-slate-600">Vår–sommar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand
        headline="Stormskada? Vi hjälper er snabbt."
        description="Kontakta oss för akut skogsskadeinventering med drönare. Vi kan kartlägga skadeområdet och ge underlag för försäkring och åtgärdsplanering."
        ctaHref="/offert"
      />
    </>
  )
}
