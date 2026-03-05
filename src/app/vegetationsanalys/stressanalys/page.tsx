import { Metadata } from 'next'
import Link from 'next/link'
import ServicePageLayout from '@/components/ServicePageLayout'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Vegetationsstress & tidig skadedetektion med drönare | TimberDrone',
  description:
    'Multispektral analys avslöjar stresssignaler i vegetation innan de syns för blotta ögat. Red Edge-analys för tidig detektion av granbarkborre och andra skador.',
  alternates: { canonical: 'https://timberdrone.se/vegetationsanalys/stressanalys' },
}

export default function StressanalysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Vegetationsanalys', url: '/vegetationsanalys' },
              { name: 'Stressanalys', url: '/vegetationsanalys/stressanalys' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Vegetationsstress & tidig skadedetektion',
              description: 'Multispektral analys med Red Edge för tidig detektion av vegetationsstress och skadedjursangrepp.',
              url: '/vegetationsanalys/stressanalys',
            })
          ),
        }}
      />

      <ServicePageLayout
        breadcrumbLabel="Stressanalys"
        breadcrumbParent={{ label: 'Vegetationsanalys', href: '/vegetationsanalys' }}
        headline="Vegetationsstress & tidig skadedetektion"
        intro="Multispektral analys avslöjar stresssignaler i vegetation innan de syns för blotta ögat. Red Edge-bandet reagerar på subtila klorofyllförändringar — ofta innan gulning eller avfärgning blir synlig."
        relatedLinks={[
          { label: 'Skadeinventering', href: '/areamatning-och-skogsbruk/skadeinventering' },
          { label: 'NDVI-kartläggning', href: '/vegetationsanalys/ndvi-kartlaggning' },
          { label: 'Uppföljning över tid', href: '/vegetationsanalys/uppfoljning-over-tid' },
          { label: 'Kontakt', href: '/areamatning-och-skogsbruk/kontakt' },
        ]}
      >
        <h2>Vad ingår</h2>
        <ul>
          <li>Multispektral flygning optimerad för stressdetektion</li>
          <li>Primäranalys: NDRE (Normalized Difference Red Edge) — det känsligaste indexet för tidig stress</li>
          <li>Komplement: GNDVI för klorofyllbedömning i tät kronslutning, SAVI för skadade ytor med synlig mark</li>
          <li>Zonklassificering: Markering av områden med signifikant avvikelse från omgivande frisk vegetation</li>
          <li>Jämförelse-referens mot frisk skog i samma bestånd</li>
        </ul>

        <h2>Skadedjur — vad kan detekteras?</h2>

        <h3>Granbarkborre (Ips typographus)</h3>
        <p>
          Den insekt som orsakar störst skada på svensk granskog. Angreppet stör vattenförsörjningen via
          splintvedsgångar, vilket leder till klorofyllnedbrytning och spektrala förändringar.
        </p>
        <ul>
          <li><strong>Grön attack (tidigt skede)</strong> — Trädet ser grönt ut men multispektral analys kan upptäcka förändringar i Red Edge och Green Shoulder i ett tidigt skede</li>
          <li>{/* MÅSTE VERIFIERAS: detektionsgrad och specifikt index kräver källhänvisning */}<strong>Detektionsfönster</strong> — Vegetationsindex kan indikera angrepp innan nya skalbaggar kläcks, men detektionsgraden varierar med förhållandena</li>
          <li><strong>Röd attack (sent skede)</strong> — Kronan gulnar/rodnar — synlig med standard-NDVI, men då har skalbaggen ofta redan svärmat</li>
        </ul>
        <p>
          {/* MÅSTE VERIFIERAS: kräver specifik källhänvisning om denna påstående ska vara kvar */}
          Forskning indikerar att drönarbaserad multispektral analys kan identifiera fler angripna träd
          jämfört med enbart fältbesök, men resultaten varierar beroende på förhållanden och metodik.
        </p>

        <h3>Snytbagge (Hylobius abietis)</h3>
        <p>
          Orsakar störst plantdödlighet i svensk skog. Skador sker på barknivå på unga plantor — svårt att
          detektera direkt med drönare. Drönardata kan användas för att kartlägga plantöverlevnad och identifiera
          luckor i nyplanteringar (indirekt effektmätning).
        </p>

        <h2>Torkstress och svampsjukdomar</h2>
        <ul>
          <li>Torkstress syns via minskat NIR-reflektans (cellturgor sjunker, mesofyllstruktur försämras)</li>
          <li>Svampinfektioner (t.ex. Diplodia, tallskytte) ger klorofyllnedbrytning detekterbar i Red Edge-bandet</li>
          <li><strong>Rotröta (Heterobasidion) i gran</strong> — svampen sitter i kärnveden och ger normalt inga symptom i kronan — inte detekterbar spektralt</li>
          <li><strong>Rotröta i tall</strong> — angriper splintveden → kronförtunning → detekterbar via NDRE och kronstrukturanalys</li>
        </ul>

        <h2>Tidslinje för detekterbarhet</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-3 pr-4 font-semibold text-slate-900">Tid efter angrepp</th>
                <th className="pb-3 pr-4 font-semibold text-slate-900">Synliga symptom</th>
                <th className="pb-3 font-semibold text-slate-900">Multispektral detekterbarhet</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {/* MÅSTE VERIFIERAS: specifika veckoantal och detektionsgrader kräver källhänvisning */}
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Tidigt skede</td>
                <td className="py-2.5 pr-4">Inga</td>
                <td className="py-2.5">Mycket låg</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium">Mellanskede</td>
                <td className="py-2.5 pr-4">Inga till mycket subtila</td>
                <td className="py-2.5">Måttlig — Red Edge reagerar</td>
              </tr>
              <tr className="border-b border-slate-100 bg-forest-50/50">
                <td className="py-2.5 pr-4 font-semibold text-forest-800">Detektionsfönster</td>
                <td className="py-2.5 pr-4 text-forest-800">Möjlig svag missfärgning</td>
                <td className="py-2.5 font-semibold text-forest-800">Förhöjd detekterbarhet</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Sent skede</td>
                <td className="py-2.5 pr-4">Gulning synlig</td>
                <td className="py-2.5">Mycket hög — standard-NDVI</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Avgränsning</h2>
        <p>
          Vi identifierar zoner med avvikande vegetation och kvantifierar avvikelsens storlek.
          Artbestämning av skadedjur eller diagnos av specifik sjukdom kräver alltid fältverifiering.
          Vår analys visar <em>var och hur mycket</em> — inte <em>varför</em>. Det gör den till
          ett effektivt prioriteringsverktyg för fältinsatser.
        </p>

        <h2>Rekommenderad flygfrekvens</h2>
        <p>
          Veckovis eller varannan vecka under högriskperioden (maj–augusti) för granbarkborre.
          Månadsvis för generell hälsoövervakning. Kontakta oss via{' '}
          <Link href="/areamatning-och-skogsbruk/kontakt" className="text-forest-600 underline hover:text-forest-800">
            kontaktformuläret
          </Link>{' '}
          för att diskutera en plan anpassad efter era förutsättningar.
        </p>
      </ServicePageLayout>
    </>
  )
}
