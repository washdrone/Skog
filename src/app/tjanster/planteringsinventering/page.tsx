import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Planteringsinventering med drönare — kontrollera återväxt effektivt',
  description:
    'Planteringsinventering med drönare ger en objektiv och heltäckande kontroll av planteringsresultat. Mät plantöverlevnad, täthet och fördelning utan tidskrävande manuell inventering.',
  path: '/tjanster/planteringsinventering',
})

const FAQ_ITEMS = [
  {
    question: 'Varför behövs planteringsinventering?',
    answer: 'Skogsstyrelsen kräver att skogsägare säkerställer godkänd återväxt efter föryngringsavverkning. Planteringsinventering dokumenterar att tillräckligt antal plantor överlevt och att fördelningen är godtagbar. Drönarbaserad inventering ger en objektiv helhetsbild av planteringsresultatet.',
  },
  {
    question: 'Hur fungerar planteringsinventering med drönare?',
    answer: 'Drönaren flyger över det planterade hygget och samlar in högupplösta bilder. Bilderna bearbetas till ortofoto där enskilda plantor kan identifieras. Plantantal, täthet och fördelning beräknas och jämförs med kravnivåer.',
  },
  {
    question: 'När bör planteringsinventering genomföras?',
    answer: 'Inventering görs normalt några år efter plantering, när plantorna är tillräckligt stora för att identifieras från luften men innan beståndet slutit sig. Tidpunkten beror på trädslag, ståndort och tillväxtförhållanden.',
  },
  {
    question: 'Kan drönare ersätta manuell planträkning?',
    answer: 'Drönarbaserad inventering ger en heltäckande bild till skillnad från manuella stickprov. Den ersätter inte all fältverifiering men minskar behovet av manuell inventering avsevärt och ger en mer representativ bild av planteringsresultatet.',
  },
  {
    question: 'Vilka trädslag kan inventeras?',
    answer: 'Metoden fungerar för vanliga skogsbruksträdslag som gran, tall och björk. Identifieringsgraden beror på plantornas storlek, tidpunkt för flygning och markvegetationens täthet.',
  },
]

export default function PlanteringsinventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Planteringsinventering', url: '/tjanster/planteringsinventering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Planteringsinventering med drönare',
              description: 'Heltäckande kontroll av planteringsresultat med drönare. Mät plantöverlevnad, täthet och fördelning objektivt.',
              url: '/tjanster/planteringsinventering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Planteringsinventering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Planteringsinventering med drönare"
        intro="Kontrollera återväxten efter föryngringsavverkning snabbt och objektivt. Drönarbaserad planteringsinventering ger en heltäckande bild av plantöverlevnad och täthet — utan tidskrävande manuella stickprov."
        relatedLinks={[
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
        ]}
      >
        <h2>Vad är planteringsinventering med drönare?</h2>
        <p>
          Planteringsinventering med drönare innebär att nyplanterade hyggen kartläggs från
          luften för att bedöma plantöverlevnad, täthet och rumslig fördelning. Skogsstyrelsen
          kräver att skogsägare säkerställer godkänd återväxt efter slutavverkning, vilket gör
          planteringsinventering till ett återkommande behov i svenskt skogsbruk.
        </p>

        <h2>Metodik</h2>
        <p>
          Drönaren flyger systematiskt över hygget och samlar in högupplösta RGB-bilder. Bilderna
          bearbetas till ett georefererat ortofoto där enskilda plantor kan identifieras och räknas.
          Resultatet ger en heltäckande bild av hela planteringen — inte bara stickprov.
        </p>
        <ul>
          <li><strong>Plantidentifiering</strong> — enskilda plantor identifieras i ortofotot</li>
          <li><strong>Täthetsberäkning</strong> — antal plantor per hektar beräknas för hela arealen</li>
          <li><strong>Fördelningsanalys</strong> — luckor och ojämnheter i planteringen kartläggs</li>
          <li><strong>Jämförelse mot krav</strong> — resultatet relateras till Skogsstyrelsens kravnivåer</li>
        </ul>

        <h2>Fördelar</h2>
        <ul>
          <li>Heltäckande kartläggning istället för stickprov i provytor</li>
          <li>Objektiv dokumentation som underlag för myndighetskontroll</li>
          <li>Identifierar luckor som kräver kompletteringsplantering</li>
          <li>Minskad fälttid jämfört med manuell inventering</li>
          <li>Återkommande uppdrag — samma hyggen kan följas upp över tid</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto över planteringen (GeoTIFF)</li>
          <li>Plantkarta med identifierade plantor (GeoPackage/Shapefile)</li>
          <li>Täthetskarta med plantor per hektar</li>
          <li>Sammanfattande rapport med statistik och kartor (PDF)</li>
        </ul>

        <h2>Kombinera med andra tjänster</h2>
        <p>
          Planteringsinventering kan med fördel kombineras med{' '}
          <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
            multispektralanalys
          </Link>{' '}
          för att bedöma plantornas vitalitet, eller med{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          för äldre bestånd som inte längre behöver återväxtkontroll.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
