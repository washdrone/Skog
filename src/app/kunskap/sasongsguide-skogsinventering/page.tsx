import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Bästa tid för skogsinventering med drönare — säsongsguide',
  description:
    'Säsongsguide för skogsinventering med drönare. Lär dig vilken tid på året som passar bäst för barkborredetektion, multispektralanalys, ortofoto, LiDAR och planteringsuppföljning.',
  path: '/kunskap/sasongsguide-skogsinventering',
})

const faqItems = [
  {
    question: 'Kan man flyga drönare för skogsinventering på vintern?',
    answer:
      'Ja, vintern är faktiskt idealisk för LiDAR-skanning av lövskog eftersom avsaknaden av löv gör att laserpulserna når marken bättre. Kyla kan dock begränsa batteritiden och kraftigt snöfall kan försvåra logistiken.',
  },
  {
    question: 'När ska man inventera för barkborre?',
    answer:
      'Barkborrar (framför allt granbarkborren) börjar svärma när temperaturen överstiger cirka 18 °C, men tidiga stressymtom i träden kan upptäckas redan från mars–april när temperaturen passerar 8 °C. En andra kontroll i augusti fångar senvårens och sommarens angrepp.',
  },
  {
    question: 'Varför är full lövtäckning viktigt för ortofoto?',
    answer:
      'Ortofoto under full lövtäckning (juni–juli) ger den mest kompletta bilden av kronskiktet, vilket är viktigt för areaberäkningar, beståndsavgränsning och visuell dokumentation. Utan löv syns marken genom kronorna, vilket ger annorlunda och ofta mindre användbar data för dessa ändamål.',
  },
  {
    question: 'Kan man göra NDVI-mätning på hösten?',
    answer:
      'NDVI-mätning är mest tillförlitlig under aktiv växtsäsong (maj–augusti) när klorofyllaktiviteten är hög. På hösten börjar lövverket ändra färg och falla, vilket påverkar NDVI-värdena och gör det svårare att bedöma vitalitet korrekt.',
  },
  {
    question: 'Hur långt i förväg bör jag boka en drönarinventering?',
    answer:
      'Vi rekommenderar att boka minst några veckor i förväg, särskilt under högsäsong (maj–augusti). Årsavtal med planerade flygtillfällen ger bäst förutsättningar för att kunna flyga vid optimalt väder och rätt tidpunkt.',
  },
]

export default function SasongsguideSkogsinventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Säsongsguide skogsinventering', url: '/kunskap/sasongsguide-skogsinventering' },
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
          { label: 'Säsongsguide skogsinventering' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Bästa tid för skogsinventering med drönare — säsongsguide
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Rätt tidpunkt ger bättre data. Här är en översikt av när varje typ av drönarinventering ger bäst resultat.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Bästa tid för skogsinventering med drönare beror på vilken typ av data som ska
            samlas in. Barkborredetektion bör göras på våren och sensommaren, multispektralanalys
            under aktiv växtsäsong, ortofoto vid full lövtäckning och LiDAR-skanning av lövskog
            under barmarkssäsongen på vintern. Nedan följer en detaljerad säsongsguide.
          </p>

          <h2>Säsongsöversikt — månad för månad</h2>
          <p className="text-sm text-slate-500 italic">
            Tabellen visar de mest lämpliga perioderna för respektive inventeringstyp i mellersta
            Sverige. Tidpunkterna kan variera med upp till en månad beroende på breddgrad och årets
            väderförhållanden.
          </p>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Period</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Bäst för</th>
                <th className="py-3 text-left font-semibold text-slate-900">Varför</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Mar–Apr</td>
                <td className="py-3 pr-4 text-slate-600">Barkborre, tidig detektion</td>
                <td className="py-3 text-slate-600">
                  Granbarkborren aktiveras vid ca 8 °C. Stressymtom kan upptäckas tidigt
                  med multispektral sensor innan synliga skador uppstår.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Maj–Jun</td>
                <td className="py-3 pr-4 text-slate-600">Fotosyntesmätning, multispektral</td>
                <td className="py-3 text-slate-600">
                  Aktiv fotosyntes ger tydliga NDVI- och NDRE-värden. Bästa perioden för att
                  bedöma skogshälsa och vitalitet.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Jun–Jul</td>
                <td className="py-3 pr-4 text-slate-600">Ortofoto, skogsinventering</td>
                <td className="py-3 text-slate-600">
                  Full lövtäckning ger komplett bild av kronskiktet. Optimal tid för
                  beståndsavgränsning, areaberäkning och visuell dokumentation.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Aug</td>
                <td className="py-3 pr-4 text-slate-600">Barkborre, sen säsong</td>
                <td className="py-3 text-slate-600">
                  Andra generationens svärmning och sommarens angrepp syns tydligare.
                  Uppföljning av vårens detektion.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Sep–Okt</td>
                <td className="py-3 pr-4 text-slate-600">Planteringsinventering, stormskada</td>
                <td className="py-3 text-slate-600">
                  Nyplanterade bestånd har etablerat sig. Höststormar kan kräva snabb
                  skadedokumentation.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Nov–Feb</td>
                <td className="py-3 pr-4 text-slate-600">LiDAR-skanning (lövskog)</td>
                <td className="py-3 text-slate-600">
                  Avlövade träd ger bättre markpenetration för laserpulser. Idealisk tid för
                  terrängmodeller och volymberäkning under krontaket i lövskog.
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Mars–April: tidig barkborredetektion</h2>
          <p>
            Granbarkborren (Ips typographus) är Nordens mest skadegörande skadeinsekt på
            gran. Insekten aktiveras på våren när temperaturen passerar cirka 8 °C och
            börjar svärma vid omkring 18 °C. Genom att flyga med{' '}
            <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
              multispektral sensor
            </Link>{' '}
            tidigt på säsongen kan stressymtom i klorofyllhalten upptäckas innan angreppen
            blir synliga med blotta ögat. Läs mer i vår guide om{' '}
            <Link href="/kunskap/barkborre-tidigt" className="text-forest-600 underline hover:text-forest-800">
              tidig barkborredetektion
            </Link>.
          </p>

          <h2>Maj–Juni: fotosyntesmätning och vitalitetsbedömning</h2>
          <p>
            Under försommaren är fotosyntesen som mest aktiv, vilket ger starka och
            tillförlitliga värden vid{' '}
            <Link href="/kunskap/vad-ar-ndvi" className="text-forest-600 underline hover:text-forest-800">
              NDVI-kartläggning
            </Link>{' '}
            och NDRE-analys. Det är den bästa perioden för att göra en heltäckande
            vitalitetsbedömning av skogen och identifiera bestånd som avviker från
            förväntad hälsa.
          </p>

          <h2>Juni–Juli: inventering och ortofoto</h2>
          <p>
            Full lövtäckning gör perioden juni–juli till den optimala tiden för{' '}
            <Link href="/tjanster/ortofoto-kartering" className="text-forest-600 underline hover:text-forest-800">
              ortofoto och kartering
            </Link>
            . Kronskiktet är komplett, vilket ger bäst underlag för{' '}
            <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsinventering
            </Link>{' '}
            inklusive beståndsavgränsning, stamräkning och areaberäkning.
          </p>

          <h2>Augusti: uppföljning barkborre</h2>
          <p>
            Granbarkborren kan producera en andra generation under varma somrar. I augusti
            syns sommarens angrepp tydligare och det är lämpligt att göra en{' '}
            <Link href="/tjanster/barkborre-detektering" className="text-forest-600 underline hover:text-forest-800">
              uppföljande flygning för barkborredetektion
            </Link>{' '}
            för att fånga skador som inte var synliga vid vårskanningen.
          </p>

          <h2>September–Oktober: plantering och stormskador</h2>
          <p>
            Hösten är rätt tid för{' '}
            <Link href="/tjanster/planteringsinventering" className="text-forest-600 underline hover:text-forest-800">
              planteringsinventering
            </Link>{' '}
            — nyplanterade bestånd har haft en växtsäsong att etablera sig och
            överlevnadsgraden kan bedömas. Höststormar kan också kräva snabb{' '}
            <Link href="/tjanster/skadedokumentation" className="text-forest-600 underline hover:text-forest-800">
              skadedokumentation
            </Link>{' '}
            för att underlag till försäkringsärenden och åtgärdsplanering.
          </p>

          <h2>November–Februari: LiDAR under barmarkssäsong</h2>
          <p>
            För lövskog är vintern den optimala tiden för{' '}
            <Link href="/tjanster/lidar-skanning" className="text-forest-600 underline hover:text-forest-800">
              LiDAR-skanning
            </Link>
            . Utan löv på träden når en större andel laserpulser marken, vilket ger bättre
            digitala markmodeller och mer detaljerad data om stamstruktur. För barrskog
            spelar säsongen mindre roll eftersom barren sitter kvar året runt, men
            snöfria förhållanden underlättar logistiken.
          </p>

          <h2>Planera inventeringen rätt</h2>
          <p>
            Genom att planera flygningar efter säsong får ni bättre data och mer
            kostnadseffektiva uppdrag. Ett årsavtal med planerade inventeringstillfällen
            säkerställer att varje flygning sker vid optimal tidpunkt. Läs mer om{' '}
            <Link href="/kunskap/vad-paverkar-priset" className="text-forest-600 underline hover:text-forest-800">
              vad som påverkar kostnaden
            </Link>{' '}
            för skogsinventering med drönare.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand
        headline="Planera årets inventeringar"
        description="Kontakta oss för att diskutera ett årsupplägg som ger rätt data vid rätt tidpunkt."
        ctaHref="/offert"
      />
    </>
  )
}
