import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, articleSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Vad påverkar priset på skogsinventering?',
  description:
    'Kostnaden för skogsinventering med drönare beror på areal, terräng, sensortyp, leveransformat och avtal. Läs vilka faktorer som påverkar priset.',
  path: '/kunskap/vad-paverkar-priset',
})

/* Från git-historik — uppdatera vid faktisk innehållsändring (synligt datum + Article-schema) */
const ARTICLE_DATES = {
  published: '2026-03-05',
  modified: '2026-06-02',
  modifiedDisplay: '2 juni 2026',
}

const faqItems = [
  {
    question: 'Varför varierar priset så mycket mellan olika uppdrag?',
    answer:
      'Priset påverkas av en kombination av faktorer: areal, terräng, vilken typ av analys som krävs, hur data ska levereras och var fastigheten ligger. Ett litet uppdrag med ortofoto kostar mindre än en storskalig inventering med fullständig analys.',
  },
  {
    question: 'Blir det billigare med ett årsavtal?',
    answer:
      'Ja, återkommande uppdrag innebär lägre mobiliseringskostnader per tillfälle och möjlighet att planera logistik effektivare. Årsavtal med flera inventeringstillfällen ger normalt ett lägre pris per hektar jämfört med enstaka uppdrag.',
  },
  {
    question: 'Ingår analys och rapport i priset?',
    answer:
      'Det beror på valt leveransformat. Rådata (ortofoto, punktmoln) utan analys har ett lägre pris. Fullständiga analysrapporter med skogliga parametrar, hälsokartor eller volymberäkningar innebär mer bearbetningstid och kostar därför mer.',
  },
  {
    question: 'Spelar fastighetens läge stor roll för priset?',
    answer:
      'Ja, reseavstånd och logistik är en kostnadsfaktor. Uppdrag som kan samordnas geografiskt eller kombineras med andra uppdrag i samma region ger lägre logistikkostnad.',
  },
  {
    question: 'Hur begär jag en prisindikation?',
    answer:
      'Kontakta oss via offertformuläret med uppgifter om areal, fastighetsbeteckning och vilken typ av data ni behöver. Vi återkommer med en prisindikation baserad på era specifika förutsättningar.',
  },
]

export default function VadPaverkarPrisetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Kunskap', url: '/kunskap' },
              { name: 'Vad påverkar priset?', url: '/kunskap/vad-paverkar-priset' },
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
            articleSchema({
              headline: 'Vad påverkar kostnaden för skogsinventering med drönare?',
              description:
                'Kostnaden för skogsinventering med drönare beror på areal, terräng, sensortyp, leveransformat och avtal. Läs vilka faktorer som påverkar priset.',
              url: '/kunskap/vad-paverkar-priset',
              datePublished: ARTICLE_DATES.published,
              dateModified: ARTICLE_DATES.modified,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Kunskap', href: '/kunskap' },
          { label: 'Vad påverkar priset?' },
        ]}
      />

      <section className="gradient-hero section-padding">
        <div className="container-page max-w-3xl">
          <h1 className="text-display text-white sm:text-display-lg">
            Vad påverkar kostnaden för skogsinventering med drönare?
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            En genomgång av de faktorer som avgör priset — utan att gissa på siffror.
          </p>
          <p className="mt-4 text-sm font-mono text-white/40">Senast uppdaterad: {ARTICLE_DATES.modifiedDisplay}</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-page max-w-3xl prose-forest">
          <p>
            Kostnaden för skogsinventering med drönare bestäms av flera samverkande faktorer.
            Det finns inget standardpris per hektar eftersom varje uppdrag har unika förutsättningar
            gällande areal, terräng, sensorval och önskat leveransformat. Nedan beskriver vi de
            viktigaste faktorerna som påverkar priset.
          </p>

          <h2>Faktorer som påverkar kostnaden</h2>
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 pr-4 text-left font-semibold text-slate-900">Faktor</th>
                <th className="py-3 text-left font-semibold text-slate-900">Påverkan på pris</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Areal</td>
                <td className="py-3 text-slate-600">
                  Större arealer ger lägre pris per hektar tack vare skaleffekter.
                  Mobilisering, transport och planering fördelas på fler hektar.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Terräng</td>
                <td className="py-3 text-slate-600">
                  Kuperad terräng, höga berg eller svårtillgängliga områden kräver mer
                  flygtid och noggrannare planering, vilket ökar kostnaden.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Analystyp</td>
                <td className="py-3 text-slate-600">
                  Ortofoto är den mest kostnadseffektiva lösningen. Mer avancerade analyspaket,
                  exempelvis detaljerad 3D-data och volymberäkning under krontaket, kräver mer
                  bearbetning och kostar mer.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Leveransformat</td>
                <td className="py-3 text-slate-600">
                  Rådata (ortofoto, punktmoln) är billigare. Analyserade produkter med
                  volymberäkningar, hälsokartor eller fullständiga rapporter kräver mer
                  bearbetningstid.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Antal tillfällen per år</td>
                <td className="py-3 text-slate-600">
                  Årsavtal med flera inventeringstillfällen ger lägre pris per flygning.
                  Enstaka uppdrag har högre mobiliseringskostnad.
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-forest-700">Avstånd och logistik</td>
                <td className="py-3 text-slate-600">
                  Reseavstånd till fastigheten påverkar kostnaden. Uppdrag som kan samordnas
                  geografiskt ger lägre logistikkostnad.
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Hur analystypen påverkar priset</h2>
          <p>
            En stor prisfaktor är ofta hur omfattande analys uppdraget kräver.
            Ett ortofoto och en grundläggande{' '}
            <Link href="/tjanster/skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              skogsinventering
            </Link>{' '}
            är de mest kostnadseffektiva lösningarna. Mer avancerade analyspaket — exempelvis
            detaljerad 3D-data med volymberäkning under krontaket — kräver mer omfattande
            databearbetning och kostar därför mer.
          </p>

          <h2>Skaleffekter vid större arealer</h2>
          <p>
            Kostnaden per hektar minskar med ökad areal. Det beror på att en stor del av
            kostnaden är fast — planering, transport, kalibrering och mobilisering — oavsett
            om uppdraget gäller 50 eller 500 hektar. För skogsbolag och förvaltare med
            stora innehav lönar det sig att inventera flera fastigheter i samma uppdrag.
          </p>

          <h2>Årsavtal och återkommande inventering</h2>
          <p>
            Många skogsägare och förvaltare behöver inventering vid flera tillfällen per år,
            exempelvis{' '}
            <Link href="/kunskap/sasongsguide-skogsinventering" className="text-forest-600 underline hover:text-forest-800">
              anpassat efter säsong
            </Link>
            . Ett årsavtal med planerade flygningar ger förutsägbara kostnader och lägre
            pris per tillfälle jämfört med enstaka beställningar.
          </p>

          <h2>Hur får jag en prisindikation?</h2>
          <p>
            Eftersom priset beror på dina specifika förutsättningar ger vi alltid en
            individuell offert. Kontakta oss med uppgifter om areal, geografiskt läge
            och vilken typ av data ni behöver så återkommer vi med en prisindikation.
          </p>
        </div>
      </article>

      <FAQ items={faqItems} />
      <CTABand
        headline="Begär en kostnadsfri offert"
        description="Berätta om ert uppdrag — areal, läge och önskad analys — så återkommer vi med en prisindikation."
        ctaHref="/offert"
      />
    </>
  )
}
