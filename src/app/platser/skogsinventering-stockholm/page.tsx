import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import RegionLinks from '@/components/RegionLinks'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Stockholm',
  description:
    'Drönarbaserad skogsinventering i Stockholms och Uppsala län. Tätortsnära skog, mindre skiften och kommunal mark med hänsyn till flygzoner.',
  path: '/platser/skogsinventering-stockholm',
})

const FAQ_ITEMS = [
  {
    question: 'Kan ni flyga drönare nära tätorter i Stockholmsregionen?',
    answer:
      'Ja. Vi följer gällande luftfartsregelverk och ansöker om nödvändiga tillstånd för flygning i kontrollerat luftrum eller nära bebyggelse. Varje uppdrag planeras med hänsyn till aktuella flygzoner, och vi informerar dig om eventuella begränsningar i offerten.',
  },
  {
    question: 'Är drönarinventering meningsfullt för små skogsarealer?',
    answer:
      'Absolut. Drönarbaserad kartläggning är särskilt kostnadseffektiv för mindre fastigheter och skiften där traditionell fältinventering blir oproportionerligt dyr. Även ett skifte på några hektar kan ge värdefull data om beståndsstatus och gränser.',
  },
  {
    question: 'Arbetar ni med kommuner och myndigheter i regionen?',
    answer:
      'Ja. Vi utför uppdrag åt kommuner, länsstyrelser och andra offentliga förvaltare som behöver aktuell kartdata över sin skogsmark. Leveranserna kan anpassas efter kommunens GIS-system och format.',
  },
  {
    question: 'Hur påverkas flygningar av närheten till Arlanda och Bromma?',
    answer:
      'Stockholmsregionen har flera flygplatser med tillhörande kontrollzoner. Vi hanterar detta genom att söka erforderliga tillstånd och koordinera med luftfartsmyndigheter. I vissa fall kan tidsfönster för flygning vara begränsade, vilket vi tar hänsyn till i planeringen.',
  },
]

export default function StockholmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '#' },
              { name: 'Stockholm & Uppsala', url: '/platser/skogsinventering-stockholm' },
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

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Stockholm & Uppsala' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Stockholms- och Uppsalaregionen
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning av skog i Stockholms och Uppsala län. Anpassad för tätortsnära skogar, kommunal mark och mindre skogsfastigheter.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Drönarinventering anpassad för Stockholms- och Uppsalaregionen</h2>
            <p>
              Stockholms- och Uppsalaregionen har en unik skogskaraktär jämfört med övriga Sverige. Här finns en blandning av tätortsnära rekreationsskogar, kommunalt ägd mark, mindre privatägda skiften och sammanhängande skogsområden i länens ytterområden. Skogarna har ofta höga värden både som naturmiljö och som rekreationsyta, vilket ställer särskilda krav på dokumentation och planering.
            </p>
            <p>
              Drönarbaserad skogsinventering erbjuder en effektiv metod för att kartlägga dessa områden utan att störa pågående rekreation eller kräva omfattande fältarbete i tätortsnära miljöer. Med högupplösta ortofoton och georefererade kartlager får fastighetsägare, kommuner och förvaltare aktuella beslutsunderlag för gallring, avverkning, naturvård och stadsplanering.
            </p>
            <p>
              Regionen präglas av blandskog med gran, tall och lövinslag. Många fastigheter är relativt små jämfört med norrländska förhållanden, men behovet av aktuell skogsdata är minst lika stort. En uppdaterad kartläggning kan vara avgörande vid fastighetsaffärer, detaljplanearbete eller ansökningar om naturreservat. Vi levererar data i SWEREF99 TM som kan importeras i pcSKOG, QGIS eller ArcGIS.
            </p>
            <p>
              Närheten till Arlanda, Bromma och andra flygplatser innebär att delar av regionen har kontrollerat luftrum. Vi hanterar detta genom att söka erforderliga tillstånd och planera flygningar inom godkända tidsfönster. Du som kund behöver inte hantera tillståndsprocessen — vi sköter det åt dig.
            </p>

            <h2 className="text-heading-xl text-slate-900">Områden vi täcker</h2>
            <ul>
              <li>Stockholms län — inklusive tätortsnära skogar och skärgårdsområden</li>
              <li>Uppsala län — från Uppsalas stadsnära skogar till Nordupplands skogsmark</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-cream-200/50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Stockholm & Uppsala</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Stockholms- och Uppsalaregionen.
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

      <RegionLinks current="stockholm" />


      <FAQ items={FAQ_ITEMS} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
