import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import RegionLinks from '@/components/RegionLinks'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Dalarna',
  description:
    'Drönarbaserad skogsinventering i Dalarna. Vi kartlägger privat och bolagsägd skog i ett av Sveriges mest skogrika län — från Siljansbygden till fjällnära skogar.',
  path: '/platser/skogsinventering-dalarna',
})

const FAQ_ITEMS = [
  {
    question: 'Hur fungerar drönarinventering i Dalarnas kuperade terräng?',
    answer:
      'Vi anpassar flygplaneringen efter terrängens höjdskillnader för att säkerställa jämn datakvalitet. I kuperade områden krävs noggrannare planering av flygvägar, men slutresultatet blir lika tillförlitligt som i plan terräng. Vi har erfarenhet av att arbeta i varierad topografi.',
  },
  {
    question: 'Kan ni flyga i fjällnära skog i västra Dalarna?',
    answer:
      'Ja. Vi utför uppdrag även i fjällnära skogsområden. Dessa områden kan ha särskilda restriktioner gällande naturskydd och rennäring, vilket vi tar hänsyn till vid planering. Kontakta oss så utreder vi förutsättningarna för just ditt område.',
  },
  {
    question: 'Arbetar ni med skogsbolag i Dalarna?',
    answer:
      'Ja. Vi utför uppdrag åt både privata skogsägare och skogsbolag. För större skogsinnehav planerar vi flerdagsuppdrag och kan anpassa leveranserna efter bolagets GIS-system och arbetsflöden.',
  },
  {
    question: 'Vilken tid på året är bäst för flygning i Dalarna?',
    answer:
      'Huvudsäsongen sträcker sig från maj till september, då ljusförhållanden och väder ger bäst förutsättningar. Tidig vår och sen höst kan fungera beroende på snöläge. Vid akuta behov, exempelvis efter stormskador, kan vi mobilisera utanför huvudsäsongen.',
  },
]

export default function DalarnaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '#' },
              { name: 'Dalarna', url: '/platser/skogsinventering-dalarna' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_ITEMS)),
        }}
      />

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Dalarna' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Dalarna
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning av skog i Dalarnas län. Anpassad för ett av Sveriges mest skogrika landskap — från Siljansbygdens blandskogar till fjällnära barrskog i väster.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Drönarinventering anpassad för Dalarnas skogslandskap</h2>
            <p>
              Dalarna är ett av Sveriges mest skogrika län. Skogen täcker en betydande del av länets yta och utgör en central del av regionens ekonomi och kulturlandskap. Här finns allt från produktiva granskogar i de östra delarna till gles fjällnära skog vid den norska gränsen, och blandskog runt Siljan och i Bergslagen.
            </p>
            <p>
              Skogsägandet i Dalarna är en blandning av privata skogsägare, skogsbolag och allmänningsskogar. Många privata fastigheter har ägts i generationer och förvaltas med långsiktiga mål. Drönarbaserad inventering ger dessa skogsägare ett kostnadseffektivt sätt att hålla skogsbruksplaner aktuella utan att genomföra omfattande och tidskrävande fältinventeringar.
            </p>
            <p>
              Terrängen i Dalarna varierar kraftigt — från flacka moränmarker i de sydöstra delarna till branta bergsluttningar och djupa dalgångar i fjällkedjan. Denna variation ställer krav på noggrann flygplanering. Vi anpassar våra uppdrag efter lokala förhållanden och säkerställer att datakvaliteten är konsekvent oavsett terräng. Leveranser sker i SWEREF99 TM och kan importeras direkt i pcSKOG, QGIS eller ArcGIS.
            </p>
            <p>
              För skogsbolag med stora innehav i Dalarna erbjuder drönarinventering en möjlighet att löpande övervaka beståndsutveckling, identifiera skador och planera åtgärder baserat på aktuella data. Vid stormfällning, insektsangrepp eller andra akuta händelser kan vi snabbt mobilisera och leverera skadeunderlag för att påskynda insatser och försäkringsärenden.
            </p>

            <h2 className="text-heading-xl text-slate-900">Områden vi täcker i Dalarna</h2>
            <ul>
              <li>Östra Dalarna — Borlänge, Falun, Hedemora och omgivande skogsmark</li>
              <li>Siljansbygden — Mora, Leksand, Rättvik och kringliggande skogsområden</li>
              <li>Västra Dalarna — Malung-Sälen, Vansbro och fjällnära skogar</li>
              <li>Södra Dalarna — Avesta, Ludvika och Bergslagsskogarna</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-cream-200/50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Dalarna</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Dalarna.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Areamätning', href: '/tjanster/skogsinventering' },
              { label: 'Inventering & översikt', href: '/tjanster/bestandsinventering' },
              { label: 'Avverkningsunderlag', href: '/tjanster/skogsbruksplan-underlag' },
              { label: 'Skogsskadeinventering', href: '/tjanster/skogsskadeinventering' },
              { label: 'Planträkning', href: '/tjanster/plantrakning' },
              { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center text-sm font-medium text-slate-700 transition-all duration-300 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/[0.05] hover:-translate-y-0.5"
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RegionLinks current="dalarna" />


      <FAQ items={FAQ_ITEMS} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
