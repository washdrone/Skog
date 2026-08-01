import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Planträkning med drönare',
  description:
    'Planträkning med drönare ger heltäckande kontroll av plantantal, täthet och luckor efter plantering. Objektivt återväxtunderlag — hela Sverige.',
  path: '/tjanster/plantrakning',
})

const FAQ_ITEMS = [
  {
    question: 'Hur går planträkning med drönare till?',
    answer:
      'Drönaren flyger systematiskt över det planterade hygget och samlar in högupplösta bilder. Bilderna bearbetas till ett georefererat ortofoto där enskilda plantor kan identifieras och räknas. Resultatet blir antal plantor per hektar, täthet och en karta över luckor — för hela arealen i stället för enstaka stickprov.',
  },
  {
    question: 'Hur noggrann är planträkning från luften?',
    answer:
      'Hur stor andel av plantorna som kan identifieras beror på plantornas storlek, tidpunkten för flygningen och hur tät markvegetationen är. Små plantor i hög gräs- eller hyggesvegetation är svårare att se. Vid behov kombineras flygräkningen med fältkontroll i ett urval ytor för att verifiera resultatet.' /* MÅSTE VERIFIERAS: ange identifieringsgrad/noggrannhet först när den är bekräftad mot faktisk utrustning */,
  },
  {
    question: 'När ska planträkningen göras efter plantering?',
    answer:
      'Räkningen görs normalt när plantorna är tillräckligt stora för att synas från luften men innan beståndet slutit sig. Exakt tidpunkt beror på trädslag, ståndort och tillväxt. En flygning under barmarkssäsong när plantorna sticker upp ur vegetationen ger oftast bäst resultat.',
  },
  {
    question: 'Kan drönare ersätta manuell planträkning i provytor?',
    answer:
      'Drönarbaserad räkning ger en heltäckande bild av hela hygget i stället för stickprov i provytor, vilket gör resultatet mer representativt och visar exakt var luckorna finns. Den ersätter inte all fältkontroll, men minskar behovet av manuell inventering avsevärt.',
  },
  {
    question: 'Vilka trädslag fungerar planträkning för?',
    answer:
      'Metoden fungerar för vanliga föryngringsträdslag som gran, tall och björk. Barrplantor med tydlig form är ofta lättare att särskilja, medan identifieringsgraden för alla trädslag påverkas av plantstorlek och konkurrerande markvegetation.',
  },
  {
    question: 'Visar planträkningen var jag behöver hjälpplantera?',
    answer:
      'Ja. Eftersom hela hygget kartläggs får du en karta som visar var tätheten är för låg och var luckorna ligger. Det ger ett konkret underlag för att planera hjälpplantering där den faktiskt behövs, i stället för över hela arealen.',
  },
  {
    question: 'Kan resultatet användas som underlag för återväxtkontroll?',
    answer:
      'Drönarräkningen ger en objektiv och daterad dokumentation av plantantal och fördelning som kan användas som underlag vid uppföljning av återväxten efter föryngringsavverkning. Plantantal per hektar kan ställas mot de kravnivåer som gäller för fastigheten.',
  },
]

export default function PlantrakningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Planträkning', url: '/tjanster/plantrakning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Planträkning med drönare',
              description:
                'Heltäckande räkning av plantor och föryngring efter plantering med drönare. Plantantal per hektar, täthet och luckkartor som objektivt återväxtunderlag.',
              url: '/tjanster/plantrakning',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Planträkning"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Planträkning med drönare"
        intro="Planträkning med drönare ger en heltäckande och objektiv kontroll av föryngringen efter plantering — plantantal per hektar, täthet och en karta över luckorna, utan tidskrävande manuella stickprov. Rikstäckande i hela Sverige."
        relatedLinks={[
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
          { label: 'Skogsskadeinventering', href: '/tjanster/skogsskadeinventering' },
        ]}
      >
        <h2>Vad är planträkning med drönare?</h2>
        <p>
          Planträkning med drönare innebär att nyplanterade hyggen kartläggs från luften för att
          räkna plantorna och bedöma föryngringens täthet och fördelning. I stället för att räkna
          plantor i ett fåtal provytor får du en heltäckande bild av hela hygget — antal plantor per
          hektar, var tätheten är för låg och var luckorna ligger. Det ger ett objektivt underlag för
          att avgöra om föryngringen håller måttet och var eventuell hjälpplantering behövs.
        </p>

        <h2>Metodik</h2>
        <p>
          Drönaren flyger systematiskt över hygget och samlar in högupplösta bilder som bearbetas
          till ett georefererat ortofoto. I ortofotot identifieras och räknas enskilda plantor, och
          resultatet sammanställs till täthet och fördelning över hela arealen.
        </p>
        <ul>
          <li><strong>Plantidentifiering</strong> — enskilda plantor identifieras i ortofotot</li>
          <li><strong>Täthetsberäkning</strong> — antal plantor per hektar för hela arealen</li>
          <li><strong>Luck- och fördelningsanalys</strong> — luckor och ojämnheter i föryngringen kartläggs</li>
          <li><strong>Jämförelse mot målnivå</strong> — plantantalet kan ställas mot den täthet som eftersträvas</li>
        </ul>

        <h2>Fördelar</h2>
        <ul>
          <li>Heltäckande räkning i stället för stickprov i provytor</li>
          <li>Objektiv och daterad dokumentation av föryngringen</li>
          <li>Luckkarta som visar exakt var hjälpplantering behövs</li>
          <li>Minskad fälttid jämfört med manuell planträkning</li>
          <li>Samma hyggen kan följas upp över tid</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto över hygget (GeoTIFF)</li>
          <li>Plantkarta med identifierade plantor (GeoPackage/Shapefile)</li>
          <li>Täthetskarta med plantor per hektar och markerade luckor</li>
          <li>Sammanfattande rapport med statistik och kartor (PDF)</li>
        </ul>

        <h2>Kombinera med andra tjänster</h2>
        <p>
          Planträkning kompletterar en{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          i den unga skogen och kan följas upp med{' '}
          <Link href="/tjanster/tradhojdsmatning" className="text-forest-600 underline hover:text-forest-800">
            trädhöjdsmätning
          </Link>{' '}
          när plantorna vuxit till sig, för att följa beståndets utveckling över tid.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
