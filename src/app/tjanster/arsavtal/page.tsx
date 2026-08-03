import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Årsavtal för löpande skogsövervakning',
  description:
    'Årsavtal för löpande skogsövervakning med drönare. Planerade flygningar under året ger kontinuerlig uppföljning av tillväxt, skador och skogstillstånd.',
  path: '/tjanster/arsavtal',
})

const FAQ_ITEMS = [
  {
    question: 'Vad innebär ett årsavtal?',
    answer: 'Ett årsavtal innebär att vi genomför planerade drönarflygningar över era skogsinnehav under årets gång. Istället för enstaka uppdrag får ni en löpande övervakning som fångar förändringar i skogstillståndet över tid. Avtalet anpassas efter era behov och skogsinnehavets storlek.' /* MÅSTE VERIFIERAS: exakt avtalsstruktur och villkor */,
  },
  {
    question: 'Hur många flygningar ingår i ett årsavtal?',
    answer: 'Antalet flygningar anpassas efter era behov och vilka tjänster som ska ingå. En typisk uppsättning kan inkludera flygningar under vår, sommar och höst, men det beror helt på skogsinnehavets karaktär och vilka parametrar som ska övervakas.' /* MÅSTE VERIFIERAS: faktiska avtalsmodeller och flygfrekvenser */,
  },
  {
    question: 'Vilka tjänster kan ingå i ett årsavtal?',
    answer: 'Alla våra produktionsskogliga tjänster kan ingå — skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering. Vi sätter ihop ett paket som matchar era specifika behov och skogliga utmaningar.',
  },
  {
    question: 'Passar årsavtal för alla storlekar av skogsinnehav?',
    answer: 'Årsavtal är främst intressant för skogsägare med större innehav eller för de som behöver regelbunden uppföljning, exempelvis vid aktiv barkborreövervakning eller löpande tillväxtuppföljning. Kontakta oss för att diskutera vad som passar er situation.',
  },
  {
    question: 'Vad är fördelen jämfört med enstaka uppdrag?',
    answer: 'Löpande övervakning ger tidsserier som visar förändringar och trender. Ni kan agera proaktivt istället för reaktivt — exempelvis upptäcka barkborreangrepp tidigt eller följa tillväxtutveckling. Dessutom förenklas planering och administration för båda parter.',
  },
]

export default function ArsavtalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Årsavtal', url: '/tjanster/arsavtal' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Årsavtal & löpande skogsövervakning',
              description: 'Löpande skogsövervakning med drönare via årsavtal. Planerade flygningar under året för kontinuerlig uppföljning.',
              url: '/tjanster/arsavtal',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Årsavtal"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Årsavtal & löpande skogsövervakning"
        intro="Få löpande överblick över era skogsinnehav med planerade drönarflygningar under hela året. Årsavtal ger kontinuerlig data, tidsserier och proaktiv förvaltning — istället för punktinsatser."
        relatedLinks={[
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
          { label: 'Skogsskadeinventering', href: '/tjanster/skogsskadeinventering' },
        ]}
      >
        <h2>Varför årsavtal?</h2>
        <p>
          Skog är en levande resurs som förändras ständigt — tillväxt, skadehändelser,
          insektsangrepp och klimatpåverkan gör att aktuell data snabbt blir inaktuell.
          Med ett årsavtal genomför vi planerade flygningar vid strategiska tidpunkter
          under året, vilket ger er en löpande bild av skogstillståndet och möjlighet
          att agera proaktivt.
        </p>

        <h2>Så fungerar det</h2>
        <p>
          Vi skräddarsyr ett avtal utifrån era behov, skogsinnehavets storlek och vilka
          parametrar ni vill övervaka. Flygningar planeras vid tidpunkter som ger mest
          värde — exempelvis tidig sommar för skadeövervakning av barkborre, barmarkssäsong
          för planträkning och höst för volym- och höjduppföljning.
          {/* MÅSTE VERIFIERAS: faktiska avtalsmodeller, prissättning och tidsplaner */}
        </p>
        <ul>
          <li>
            <strong>Behovsanalys</strong> — vi kartlägger era skogsinnehav och övervakningsbehov
          </li>
          <li>
            <strong>Flygplanering</strong> — tidpunkter och tjänster anpassas efter årstid och prioriteringar
          </li>
          <li>
            <strong>Löpande leveranser</strong> — data och rapporter levereras efter varje flygning
          </li>
          <li>
            <strong>Årssammanställning</strong> — samlad rapport med trender och förändringar över året
          </li>
        </ul>

        <h2>Fördelar med löpande övervakning</h2>
        <ul>
          <li>Tidsserier som visar förändringar och trender i skogstillståndet</li>
          <li>Tidig upptäckt av skador, angrepp och stressfaktorer</li>
          <li>Proaktiv förvaltning istället för reaktiva insatser</li>
          <li>Objektiv, daterad dokumentation av skogens utveckling</li>
          <li>Förenklad planering — flygningar är redan inbokade</li>
        </ul>

        <h2>Tjänster som kan ingå</h2>
        <p>
          Alla våra produktionsskogliga tjänster kan ingå i ett årsavtal. Vanliga kombinationer
          inkluderar{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          för volymuppföljning,{' '}
          <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsskadeinventering
          </Link>{' '}
          för skadeövervakning under sommarhalvåret och{' '}
          <Link href="/tjanster/tradhojdsmatning" className="text-forest-600 underline hover:text-forest-800">
            trädhöjdsmätning
          </Link>{' '}
          för tillväxtuppföljning. Vi kan även följa upp föryngringen med{' '}
          <Link href="/tjanster/plantrakning" className="text-forest-600 underline hover:text-forest-800">
            planträkning
          </Link>{' '}
          på nyplanterade hyggen.
        </p>

        <h2>Leveranser</h2>
        <ul>
          <li>Data och rapporter efter varje flygning enligt avtal</li>
          <li>Kartmaterial i GIS-kompatibla format (GeoTIFF/GeoPackage)</li>
          <li>Årssammanställning med förändringsanalys och trender (PDF)</li>
          <li>Tillgång till historisk data från samtliga flygningar</li>
        </ul>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
