import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Fotosyntetisk aktivitet i skog — mätning med drönare',
  description:
    'Mätning av fotosyntetisk aktivitet i skog med drönare och spektrala index. Unik insikt i skogens biologiska kapacitet genom NDVI, NDRE och klorofyllindex.',
  path: '/tjanster/fotosyntesmatning',
})

const FAQ_ITEMS = [
  {
    question: 'Kan man verkligen mäta fotosyntes med drönare?',
    answer: 'Drönare mäter inte fotosyntes direkt utan den fotosyntetiska potentialen via spektrala index. Frisk vegetation absorberar rött ljus (klorofyll, fotosyntes) och reflekterar NIR (cellstruktur). Indexen NDVI och NDRE är starkt korrelerade med klorofyllhalt och fotosyntetisk kapacitet, vilket ger en proxy för skogens biologiska aktivitet.',
  },
  {
    question: 'Vad är skillnaden mot vanlig NDVI-kartläggning?',
    answer: 'Fotosyntesmätning fokuserar specifikt på klorofyllrelaterade index (NDRE, CI Red-Edge, GNDVI) snarare än enbart generell vitalitet (NDVI). Analysen riktas mot att uppskatta skogens biologiska produktionskapacitet och identifiera bestånd med avvikande fotosyntetisk effektivitet.',
  },
  {
    question: 'När på året bör flygningen ske?',
    answer: 'Optimal period är under aktiv tillväxtsäsong, vanligtvis juni–augusti, då den fotosyntetiska aktiviteten är som högst. Jämförelse mellan tidpunkter under säsongen kan avslöja trender och avvikelser.',
  },
  {
    question: 'Vilka beslut kan fattas utifrån fotosyntesmätning?',
    answer: 'Mätningen ger underlag för att identifiera bestånd med minskad produktionskapacitet, prioritera skogsvårdsåtgärder, utvärdera effekt av gödsling eller gallring, och upptäcka tidiga stressignaler som kan indikera sjukdom eller skadedjursangrepp.',
  },
]

export default function FotosyntesmatningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Fotosyntesmätning', url: '/tjanster/fotosyntesmatning' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Mätning av fotosyntetisk aktivitet i skog med drönare',
              description: 'Spektrala index som mäter fotosyntetisk kapacitet i skog. Unik insikt i skogens biologiska produktionsförmåga.',
              url: '/tjanster/fotosyntesmatning',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Fotosyntesmätning"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Fotosyntetisk aktivitet i skog — mätning med drönare"
        intro="Fotosyntetisk aktivitet är skogens motor. Genom att mäta hur vegetationen reflekterar ljus i specifika våglängdsband kan vi uppskatta klorofyllhalt och fotosyntetisk kapacitet — en unik indikator på skogens biologiska produktionsförmåga."
        relatedLinks={[
          { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
          { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
          { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
        ]}
      >
        <h2>Vad mäter vi?</h2>
        <p>
          Fotosyntetisk aktivitet är den process där träd omvandlar solljus, vatten och
          koldioxid till energi och syre. Klorofyll i bladen absorberar rött ljus för att driva
          fotosyntesen, medan friska celler reflekterar starkt i nära infrarött (NIR). Genom att
          mäta denna kontrast med en multispektral sensor kan vi beräkna index som är starkt
          korrelerade med klorofyllhalt och fotosyntetisk kapacitet.
        </p>

        <h2>Spektrala index för fotosyntesmätning</h2>
        <p>Vi använder en kombination av index som tillsammans ger en nyanserad bild av skogens fotosyntetiska status:</p>
        <ul>
          <li>
            <strong>NDRE</strong> (Normalized Difference Red Edge) — det mest känsliga indexet för
            klorofyllvariationer. Reagerar på förändringar i fotosyntetisk kapacitet innan NDVI
            visar utslag.
          </li>
          <li>
            <strong>CI Red-Edge</strong> (Chlorophyll Index) — kvantifierar klorofyllhalt direkt
            och korrelerar starkt med bladens fotosyntetiska kapacitet och kvävestatus.
          </li>
          <li>
            <strong>GNDVI</strong> (Green NDVI) — känsligare för klorofyllkoncentration i tät
            kronslutning där NDVI mättar.
          </li>
          <li>
            <strong>NDVI</strong> — ger en övergripande bild av vegetationens vitalitet som
            referenspunkt.
          </li>
        </ul>

        <h2>Tillämpningar</h2>
        <ul>
          <li>Kartlägga bestånd med minskad fotosyntetisk effektivitet</li>
          <li>Identifiera tidiga stressignaler innan visuella symptom uppträder</li>
          <li>Utvärdera effekt av skogsvårdsåtgärder som gödsling och gallring</li>
          <li>Jämföra produktionskapacitet mellan bestånd och över tid</li>
          <li>Underlag för klimatrelaterad skogsanalys och koldioxidbindning</li>
        </ul>

        <h2>Varför mäta fotosyntetisk aktivitet?</h2>
        <p>
          Traditionell skogsinventering fokuserar på fysiska parametrar som höjd och volym.
          Fotosyntesmätning adderar en biologisk dimension som avslöjar skogens faktiska
          hälsotillstånd och produktionskapacitet. Ett bestånd kan se grönt ut på ett ortofoto men
          ha signifikant minskad fotosyntetisk aktivitet — en tidig varningssignal som bara syns
          i spektraldata.
        </p>

        <h2>Leveranser</h2>
        <ul>
          <li>Klorofyllindex-kartor (CI Red-Edge, NDRE) i GeoTIFF</li>
          <li>Klassificerad karta över fotosyntetisk aktivitet (4–5 klasser)</li>
          <li>Jämförelsekarta om historisk data finns tillgänglig</li>
          <li>PDF-rapport med kartor, statistik och tolkningsguide</li>
        </ul>

        <p>
          Kombinera fotosyntesmätning med{' '}
          <Link href="/tjanster/multispektralanalys" className="text-forest-600 underline hover:text-forest-800">
            multispektralanalys
          </Link>{' '}
          för en komplett bild av skogens hälsa, eller med{' '}
          <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsinventering
          </Link>{' '}
          för att koppla biologisk kapacitet till fysiska beståndsmått.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
