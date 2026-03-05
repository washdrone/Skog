import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Jämtland',
  description:
    'Drönarbaserad skogsinventering i Jämtlands län. Vi kartlägger fjällnära skogar, stora sammanhängande skogsarealer och svårtillgänglig terräng i Jämtland och Härjedalen.',
  path: '/platser/skogsinventering-jamtland',
})

const FAQ_ITEMS = [
  {
    question: 'Kan ni flyga i fjällnära områden i Jämtland?',
    answer:
      'Ja. Vi utför uppdrag i fjällnära skogsområden och anpassar flygplaneringen efter lokala förhållanden. Vissa fjällområden kan ha restriktioner kopplade till naturskydd eller rennäring, vilket vi utreder och tar hänsyn till vid planering av uppdraget.',
  },
  {
    question: 'Hur påverkar de korta säsongerna flygmöjligheterna?',
    answer:
      'Jämtland har kortare flygsäsonger än södra Sverige på grund av snöförhållanden och ljustillgång. Huvudsäsongen sträcker sig från juni till september, men vi kan genomföra flygningar även under sen vår och tidig höst beroende på lokala förhållanden. Vid akuta behov mobiliserar vi oavsett årstid.',
  },
  {
    question: 'Hur hanterar ni de stora avstånden i Jämtland?',
    answer:
      'Vi planerar logistiken noggrant för att maximera flygeffektiviteten per uppdragsdag. För stora skogsinnehav i avlägsna områden planerar vi flerdagsuppdrag. Resekostnad kan tillkomma beroende på avstånd och specificeras alltid i offerten.',
  },
  {
    question: 'Täcker ni även Härjedalen?',
    answer:
      'Ja. Vi utför uppdrag i hela Jämtlands län, vilket inkluderar både Jämtland och Härjedalen. Från Strömsund i norr till Sveg i söder och från fjällkedjan i väster till länsgränsen i öster.',
  },
]

export default function JamtlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '#' },
              { name: 'Jämtland', url: '/platser/skogsinventering-jamtland' },
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

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Jämtland' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Jämtland
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning av skog i Jämtlands län. Anpassad för fjällnära skogar, stora sammanhängande arealer och alpina förhållanden i Jämtland och Härjedalen.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Drönarinventering anpassad för Jämtlands skogar</h2>
            <p>
              Jämtlands län är Sveriges till ytan tredje största län och har en landskapsbild präglad av fjäll, vidsträckta skogsområden och stora sjöar. Skogen i Jämtland sträcker sig från produktiva barrskogar i de östra dalarna till gles fjällbjörkskog vid trädgränsen. Denna variation skapar unika förutsättningar för skogsbruk och ställer särskilda krav på inventering och förvaltning.
            </p>
            <p>
              Den fjällnära skogen i Jämtland har ofta ett särskilt skyddsvärde, och gränsen mellan produktionsskog och skyddad skog kan vara svår att avgöra utan aktuell kartdata. Drönarbaserad inventering ger skogsägare och förvaltare en detaljerad bild av beståndsstruktur, trädgränser och vegetationstyper — information som är värdefull både för skogsbruksplanering och för dialog med myndigheter om naturvårdshänsyn.
            </p>
            <p>
              Stora delar av Jämtlands skogsmark ligger avlägset från bebyggelse och har begränsad väginfrastruktur. Traditionell fältinventering i dessa områden kräver lång restid och innebär höga kostnader. Drönare kan kartlägga skogsmark effektivt utan att personal behöver ta sig långt in i terrängen, vilket gör metoden särskilt lämplig för Jämtlands förhållanden.
            </p>
            <p>
              Jämtland och Härjedalen har också ett betydande inslag av rennäring, vilket påverkar skogsbruket och kräver samverkan mellan markägare och samebyar. Aktuell kartdata från drönarinventering kan bidra till bättre underlag för denna samverkan. Vi levererar data i SWEREF99 TM som kan importeras direkt i pcSKOG, QGIS eller ArcGIS, och anpassar leveranserna efter era behov.
            </p>

            <h2 className="text-heading-xl text-slate-900">Områden vi täcker i Jämtland</h2>
            <ul>
              <li>Östra Jämtland — Östersund, Bräcke och Ragunda</li>
              <li>Västra Jämtland — Åre, Krokom och fjällnära skogsområden</li>
              <li>Norra Jämtland — Strömsund och Berg</li>
              <li>Härjedalen — Sveg, Hede och Funäsdalen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Jämtland</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Jämtland.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Areamätning', href: '/areamatning-och-skogsbruk/areamatning' },
              { label: 'Inventering & översikt', href: '/areamatning-och-skogsbruk/inventering' },
              { label: 'Avverkningsunderlag', href: '/areamatning-och-skogsbruk/avverkningsunderlag' },
              { label: 'Skadeinventering', href: '/areamatning-och-skogsbruk/skadeinventering' },
              { label: 'Planteringsuppföljning', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
              { label: 'NDVI-kartläggning', href: '/vegetationsanalys/ndvi-kartlaggning' },
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

      <FAQ items={FAQ_ITEMS} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
