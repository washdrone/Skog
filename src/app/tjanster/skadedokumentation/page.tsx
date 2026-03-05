import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skadedokumentation med drönare — storm, brand och snöskador',
  description:
    'Professionell skadedokumentation med drönare efter storm, brand och snöbrott. Ortofoto och volymbedömning som underlag för försäkringsärenden och åtgärdsplanering.',
  path: '/tjanster/skadedokumentation',
})

const FAQ_ITEMS = [
  {
    question: 'Vilka typer av skogsskador kan dokumenteras med drönare?',
    answer: 'Vi dokumenterar stormfällning, brandskador, snöbrott, insektsangrepp och andra skador som påverkar skogsbeståndet. Drönare ger en snabb överblick av skadeomfattningen och möjliggör detaljerad kartering av drabbade områden.',
  },
  {
    question: 'Kan drönardata användas som underlag för försäkringsärenden?',
    answer: 'Ja, georefererade ortofoto och volymuppskattningar ger ett objektivt och dokumenterbart underlag för försäkringsanspråk. Kartmaterial med tidsangivelse och koordinater styrker skadeanmälan.',
  },
  {
    question: 'Hur snabbt kan en skadeinventering genomföras?',
    answer: 'Vi strävar efter att kunna mobilisera efter skadehändelser, men exakt responstid beror på omständigheterna. Kontakta oss direkt vid akut behov så planerar vi flygning så snart förhållandena tillåter.' /* MÅSTE VERIFIERAS: faktisk responstid och mobiliseringskapacitet */,
  },
  {
    question: 'Hur stor areal kan dokumenteras?',
    answer: 'Drönare kan täcka stora arealer per flygdag beroende på terräng och flygparametrar. För mycket stora skadeområden kan flygningen delas upp över flera dagar eller kombineras med satellitdata för en första grov bedömning.',
  },
  {
    question: 'Vad ingår i leveransen vid skadedokumentation?',
    answer: 'Leveransen inkluderar ortofoto, skadekarta med klassificerade zoner, volymuppskattning av skadad skog samt en sammanfattande rapport. Allt material är georefererat och redo att användas direkt i GIS-system eller som bilaga till försäkringsärenden.',
  },
]

export default function SkadedokumentationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Skadedokumentation', url: '/tjanster/skadedokumentation' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Skadedokumentation med drönare',
              description: 'Professionell dokumentation av stormskador, brandskador och snöbrott med drönare. Underlag för försäkring och åtgärdsplanering.',
              url: '/tjanster/skadedokumentation',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Skadedokumentation"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Skadedokumentation med drönare"
        intro="Professionell dokumentation av storm-, brand- och snöskador i skog. Drönarbaserad kartering ger snabb överblick, objektiv volymuppskattning och georefererat underlag för försäkringsanspråk och åtgärdsplanering."
        relatedLinks={[
          { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
          { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
        ]}
      >
        <h2>Varför drönarbaserad skadedokumentation?</h2>
        <p>
          När storm, brand eller snöbrott drabbar skogsmark behövs snabb och tillförlitlig
          dokumentation. Att inventera skadeomfattningen manuellt i svårtillgänglig terräng med
          vindfällen och brandskadade stammar är tidskrävande och riskfyllt. Drönare ger en
          säker överblick från luften och producerar georefererat kartmaterial som kan användas
          direkt i försäkringsärenden och vid planering av uppröjning.
        </p>

        <h2>Skadetyper vi dokumenterar</h2>
        <ul>
          <li>
            <strong>Stormskador</strong> — kartläggning av vindfällen, rotryckning och stambrott.
            Volymuppskattning av skadad skog för försäkring och virkesuttag.
          </li>
          <li>
            <strong>Brandskador</strong> — dokumentation av brandutbredning och skadegrad.
            Klassificering av drabbade zoner efter brandens intensitet.
          </li>
          <li>
            <strong>Snöbrott</strong> — kartering av snöbrottsdrabbade bestånd. Bedömning av
            skadeomfattning och åtgärdsbehov.
          </li>
        </ul>

        <h2>Metodik</h2>
        <p>
          Drönaren flyger över det skadedrabbade området och samlar in högupplösta bilder.
          Bilderna bearbetas till ortofoto och vid behov punktmoln för volymuppskattning.
          Skadade zoner klassificeras och kvantifieras.
        </p>
        <ul>
          <li>Ortofoto med hög markupplösning för visuell dokumentation</li>
          <li>Skadeklassificering i zoner baserat på skadegrad</li>
          <li>Volymuppskattning av skadad skog</li>
          <li>Jämförelse med data från före skadehändelsen om sådant finns</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto över skadat område (GeoTIFF)</li>
          <li>Skadekarta med klassificerade zoner (GeoPackage/Shapefile)</li>
          <li>Volymuppskattning av skadad skog</li>
          <li>Sammanfattande rapport med kartor och statistik (PDF)</li>
          <li>Bildmaterial anpassat för försäkringsbolag</li>
        </ul>

        <h2>Kombination med andra tjänster</h2>
        <p>
          Skadedokumentation kan kombineras med{' '}
          <Link href="/tjanster/ortofoto-kartering" className="text-forest-600 underline hover:text-forest-800">
            ortofoto och kartering
          </Link>{' '}
          för detaljerad dokumentation, eller med{' '}
          <Link href="/tjanster/barkborre-detektering" className="text-forest-600 underline hover:text-forest-800">
            barkborredetektering
          </Link>{' '}
          för att övervaka sekundära angrepp på stormskadad skog. Efter uppröjning kan{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          användas för att dokumentera kvarvarande bestånd.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
