import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Kolinlagring i skog — hur mäts det med drönare?',
  description:
    'Kolinlagring i skog mäts genom att beräkna biomassa och omvandla till CO2-ekvivalenter. Lär dig hur drönare och fjärranalys används för att kvantifiera skogens kolförråd.',
  path: '/kunskap/kolinlagring-skog-guide',
})

const faqItems = [
  {
    question: 'Hur räknar man om biomassa till koldioxidekvivalenter?',
    answer:
      'Torr biomassa innehåller ungefär 50 procent kol. Kolmassan multipliceras sedan med faktorn 3,67 (kvoten mellan molekylvikten för CO2 och atomvikten för kol) för att få mängden bunden koldioxid i CO2-ekvivalenter.',
  },
  {
    question: 'Varför är drönardata bättre än manuell provytemätning för kolinlagring?',
    answer:
      'Drönare kan täcka stora arealer och samla in data med hög rumslig upplösning, vilket ger en mer heltäckande bild av skogens biomassa jämfört med traditionella provytor som bara mäter ett fåtal punkter per bestånd.',
  },
  {
    question: 'Vilken typ av sensor behövs för att mäta kolinlagring?',
    answer:
      'LiDAR ger tredimensionell data om trädstruktur och höjd som är central för volym- och biomassaberäkningar. Multispektral sensor kan komplettera med vitalitetsdata. Ofta kombineras flera sensorer beroende på projektets krav.',
  },
  {
    question: 'Vad är CSRD och hur påverkar det skogsägare?',
    answer:
      'CSRD (Corporate Sustainability Reporting Directive) är ett EU-direktiv som ställer krav på att stora företag rapporterar sina hållbarhetsdata, inklusive klimatpåverkan. Skogsägare och förvaltare som levererar till dessa företag kan behöva dokumentera skogens kolförråd som del av leverantörskedjan.',
  },
  {
    question: 'Hur ofta behöver kolinlagringen mätas?',
    answer:
      'Det beror på syftet. För ESG-rapportering kan en årlig mätning vara tillräcklig. Vid aktivt skogsbruk med avverkning och nyplantering kan tätare mätningar vara motiverade för att följa förändringar i kolförrådet.',
  },
]

export default function KolinlagringSkogGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Kolinlagring i skog', url: '/kunskap/kolinlagring-skog-guide' },
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
          { label: 'Kolinlagring i skog' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Kolinlagring i skog — hur mäts det med drönare?
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Från biomassa till CO2-ekvivalenter — en guide till hur skogens kolförråd kvantifieras med modern fjärranalys.
          </p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Kolinlagring i skog mäts genom att beräkna skogens biomassa och omvandla den till
            koldioxidekvivalenter (CO2e). Skog binder koldioxid genom fotosyntes och lagrar
            kolet i stammar, grenar, rötter och mark. Genom att kvantifiera denna biomassa
            med drönarbaserad fjärranalys kan skogsägare dokumentera sitt kolförråd med hög
            noggrannhet och rumslig upplösning.
          </p>

          <h2>Varför mäta kolinlagring i skog?</h2>
          <p>
            Klimatfrågan och nya regelverk driver efterfrågan på verifierad koldata från skog.
            EU:s CSRD-direktiv (Corporate Sustainability Reporting Directive), som trädde i
            kraft 2024, innebär att stora företag måste rapportera hållbarhetsdata inklusive
            klimatpåverkan. Skogsägare som levererar virke eller säljer kolkrediter behöver
            kunna dokumentera skogens kolförråd och dess förändring över tid.
          </p>
          <p>
            Utöver regulatoriska krav ger kolinlagringsdata ett underlag för strategiskt
            skogsbruk — exempelvis för att optimera avverkningstidpunkter, värdera kolkrediter
            och kommunicera klimatnytta till intressenter.
          </p>

          <h2>Så beräknas kolinlagring — steg för steg</h2>
          <p>
            Processen från datainsamling till rapporterbar CO2e-siffra följer ett etablerat
            tillvägagångssätt:
          </p>

          <h3>Steg 1: Datainsamling med drönare</h3>
          <p>
            Drönare med LiDAR-sensor samlar in tredimensionell data om skogens struktur,
            inklusive trädhöjd, krondiameter och stamtäthet. Denna data kan komplettera
            eller ersätta traditionell provytemätning och täcker stora arealer med jämn kvalitet.
          </p>

          <h3>Steg 2: Biomassaberäkning</h3>
          <p>
            Utifrån de uppmätta trädparametrarna (höjd, diameter, kronvolym) beräknas
            stamvolym med hjälp av allometriska modeller. Stamvolymen omräknas till
            biomassa med densitetsfaktorer som varierar beroende på trädslag — gran, tall
            och björk har olika vedtäthet.
          </p>

          <h3>Steg 3: Omvandling till CO2-ekvivalenter</h3>
          <p>
            Torr biomassa innehåller ungefär 50 procent kol. Den beräknade kolmassan
            multipliceras med faktorn 3,67 (molekylviktsförhållandet mellan CO2 och rent
            kol) för att få mängden bunden koldioxid uttryckt i CO2-ekvivalenter.
          </p>

          <h3>Steg 4: Rapportering och uppföljning</h3>
          <p>
            Resultatet levereras som georefererade kartor och sammanställda rapporter som
            visar kolförråd per bestånd eller brukningsenhet. Genom att mäta vid flera
            tillfällen kan man följa hur kolförrådet förändras och beräkna nettoinlagring.
          </p>

          <h2>Biomassa och kolinnehåll per trädslag</h2>
          <p className="text-sm text-slate-500 italic">
            Tabellen visar generella riktvärden. Faktiska värden varierar med växtplats,
            ålder och beståndsstruktur.
          </p>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Trädslag</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Vedtäthet (kg/m3)</th>
                <th className="py-3 text-left font-semibold text-slate-900">Kolinnehåll</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Gran (Picea abies)</td>
                <td className="py-3 pr-4 text-slate-600">ca 380–400</td>
                <td className="py-3 text-slate-600">~50 % av torrvikten</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Tall (Pinus sylvestris)</td>
                <td className="py-3 pr-4 text-slate-600">ca 420–440</td>
                <td className="py-3 text-slate-600">~50 % av torrvikten</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Björk (Betula spp.)</td>
                <td className="py-3 pr-4 text-slate-600">ca 500–530</td>
                <td className="py-3 text-slate-600">~50 % av torrvikten</td>
              </tr>
            </tbody>
          </table>

          <h2>Drönare vs traditionell mätning</h2>
          <p>
            Traditionell kolinlagringsbedömning baseras på manuella provytor där diameter i
            brösthöjd och höjd mäts för ett urval av träd. Denna metod är tidskrävande och
            ger data med begränsad rumslig täckning. Drönarbaserad{' '}
            <Link href="/tjanster/lidar-skanning" className="text-forest-600 underline hover:text-forest-800">
              LiDAR-skanning
            </Link>{' '}
            kan samla in tredimensionell data över hela fastigheten, vilket ger en mer
            heltäckande och repeterbar mätning.
          </p>
          <p>
            Multispektral data från drönare kan dessutom komplettera volymberäkningarna
            med information om{' '}
            <Link href="/kunskap/vad-ar-ndvi" className="text-forest-600 underline hover:text-forest-800">
              vegetationens vitalitet (NDVI)
            </Link>
            , vilket kan indikera om beståndet aktivt binder kol eller om det är stressat.
          </p>

          <h2>CSRD och framtida rapporteringskrav</h2>
          <p>
            EU:s CSRD-direktiv kräver att stora företag från och med räkenskapsåret 2024
            rapporterar enligt European Sustainability Reporting Standards (ESRS). Klimatdata
            inklusive scope 1, 2 och 3-utsläpp och kolbindning i leverantörskedjan ingår.
            Skogsföretag och markägare som levererar till rapporteringsskyldiga företag kan
            förväntas dokumentera sina klimatdata, inklusive skogens kolförråd.
          </p>
          <p>
            Att ha aktuell och verifierad kolinlagringsdata ger en konkurrensfördel och
            möjlighet att positionera sin skog som en del av kundernas klimatstrategi.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand
        headline="Mät skogens kolförråd"
        description="Kontakta oss för att diskutera hur drönarbaserad inventering kan ge verifierad kolinlagringsdata för er skog."
        ctaHref="/offert"
      />
    </>
  )
}
