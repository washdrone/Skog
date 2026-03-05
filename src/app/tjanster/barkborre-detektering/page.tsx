import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Barkborredetektering med drönare — tidig upptäckt',
  description:
    'Tidig upptäckt av barkborreangrepp med drönare och multispektral analys. Identifiera gröna angrepp innan de syns för ögat. NDRE och Red Edge avslöjar stressignaler i granskog.',
  path: '/tjanster/barkborre-detektering',
})

const FAQ_ITEMS = [
  {
    question: 'Kan drönare verkligen upptäcka barkborreangrepp innan de syns?',
    answer: 'Ja, multispektrala sensorer med Red Edge-band (NDRE) kan detektera tidiga förändringar i klorofyll som sker veckor innan barken brunfärgas synligt. Denna fas kallas "grönt angrepp" och är den mest värdefulla att upptäcka tidigt för att begränsa spridning.',
  },
  {
    question: 'Hur tidigt kan barkborreangrepp detekteras?',
    answer: 'Med NDRE-analys kan vi upptäcka gröna angrepp innan de blir synliga för ögat som rödbruna kronor. Tidig detektion möjliggör snabb avverkning av angripna träd innan nästa generation barkborrar svärmar.',
  },
  {
    question: 'Vilka arter av barkborre kan detekteras?',
    answer: 'Metoden riktar sig främst mot granbarkborre (Ips typographus) som angriper gran. Stressignalerna i spektraldata är artoberoende — vi detekterar den fysiologiska stressen som angreppet orsakar, oavsett barkborreart.',
  },
  {
    question: 'Hur ofta bör flygning ske under barkborresäsongen?',
    answer: 'Under aktiv barkborresäsong rekommenderar vi regelbunden flygning för att fånga nya angrepp i tid. Frekvensen kan anpassas baserat på risknivå, temperatur och lokala förhållanden.',
  },
  {
    question: 'Hur skiljer man barkborreangrepp från annan stress?',
    answer: 'Barkborreangrepp ger ett karakteristiskt mönster med kluster av stressade träd som sprider sig utåt från en initial angreppsplats. Vi kombinerar NDRE-data med spridningsmönster och tidsserie för att skilja barkborre från torka, stormskador eller andra stressfaktorer. Fältverifiering bekräftar diagnosen.',
  },
]

export default function BarkborreDetekteringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Barkborredetektering', url: '/tjanster/barkborre-detektering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Barkborredetektering med drönare',
              description: 'Tidig upptäckt av barkborreangrepp med multispektral drönare. Identifiera gröna angrepp innan de syns.',
              url: '/tjanster/barkborre-detektering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Barkborredetektering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Barkborredetektering med drönare — tidig upptäckt"
        intro="Barkborredetektering med drönare kan identifiera angripna granar innan angreppet syns för ögat. Multispektrala sensorer med Red Edge-band avslöjar klorofyllförändringar som indikerar gröna angrepp — den mest kritiska fasen att upptäcka."
        relatedLinks={[
          { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
          { label: 'Fotosyntesmätning', href: '/tjanster/fotosyntesmatning' },
          { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
        ]}
      >
        <h2>Vad är barkborredetektering med drönare?</h2>
        <p>
          Barkborredetektering med drönare innebär att multispektrala sensorer används för att
          identifiera tidiga stressignaler i granskog orsakade av barkborreangrepp. Granbarkborren
          (Ips typographus) är det mest skadliga skogsinsektet i Sverige och kan orsaka
          omfattande ekonomiska förluster. Tidig upptäckt av angripna träd är avgörande för att
          begränsa spridning genom snabb avverkning.
        </p>

        <h2>Gröna angrepp — varför tidighet är avgörande</h2>
        <p>
          Ett barkborreangrepp genomgår tre faser som kan identifieras med olika metoder:
        </p>
        <ul>
          <li>
            <strong>Grönt angrepp (tidig fas)</strong> — trädet ser grönt ut men har förändrad
            klorofyllstatus. Kan bara detekteras med multispektral sensor (NDRE). Detta är den
            mest värdefulla fasen att fånga.
          </li>
          <li>
            <strong>Gulnande krona (mellanfas)</strong> — kronan börjar gulna/rödna. Synlig för
            ögat och kan identifieras med RGB-kamera.
          </li>
          <li>
            <strong>Grått angrepp (sen fas)</strong> — barren har fallit. Barkborrarna har redan
            lämnat trädet och spridit sig vidare.
          </li>
        </ul>

        <h2>Metodik</h2>
        <p>
          Vi flyger med kalibrerad multispektral sensor och beräknar NDRE (Normalized
          Difference Red Edge) som primärt detektionsindex. Red Edge-bandet är
          särskilt känsligt för klorofyllförändringar och kan reagera innan visuella
          symptom uppträder. {/* MÅSTE VERIFIERAS: sensorspecifikation beror på faktisk utrustning */}
        </p>
        <ul>
          <li>Kalibrerad flygning med reflektanspanel och DLS-sensor</li>
          <li>NDRE-beräkning och anomalidetektion per trädkrona</li>
          <li>Klusteranalys för att identifiera angreppscentra</li>
          <li>Jämförelse med tidigare flygningar om data finns</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>NDRE-karta med markerade avvikande träd/kluster (GeoTIFF)</li>
          <li>Punktkarta med misstänkta angrepp (GeoPackage/Shapefile)</li>
          <li>Riskkarta klassificerad i 3–4 nivåer</li>
          <li>PDF-rapport med kartor, statistik och åtgärdsrekommendationer</li>
        </ul>

        <h2>Rekommenderad övervakning</h2>
        <p>
          Under aktiv barkborresäsong rekommenderar vi regelbunden flygning
          i riskområden. Kombinera med{' '}
          <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
            multispektralanalys
          </Link>{' '}
          och{' '}
          <Link href="/tjanster/ortofoto-kartering" className="text-forest-600 underline hover:text-forest-800">
            ortofoto
          </Link>{' '}
          för att skapa en komplett lägesbild. Data kan även integreras i{' '}
          <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
            skogsbruksplaner
          </Link>{' '}
          för långsiktig riskhantering.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
