import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Norrland',
  description:
    'Drönarbaserad skogsinventering i Norrland — Norrbotten, Västerbotten, Jämtland, Västernorrland och Gävleborg. Vi hanterar stora arealer, avlägsna skogsområden och korta flygsäsonger.',
  path: '/platser/skogsinventering-norrland',
})

const FAQ_ITEMS = [
  {
    question: 'Hur hanterar ni de korta flygsäsongerna i Norrland?',
    answer:
      'Vi planerar uppdrag noggrant utifrån väder- och ljusförhållanden. Huvudsäsongen sträcker sig från maj till september, men vi kan genomföra flygningar även under tidig vår och sen höst beroende på snöförhållanden. Vid akuta behov, exempelvis efter stormskador, mobiliserar vi snabbt oavsett årstid.',
  },
  {
    question: 'Kan ni flyga i avlägsna områden utan vägaccess?',
    answer:
      'Ja. Våra drönarsystem är portabla och kräver ingen fast infrastruktur. Vi kan operera från skogsbilvägar, avlägg eller öppna ytor i terrängen. För mycket avlägsna områden planerar vi logistiken i förväg så att vi maximerar flygeffektiviteten per dag.',
  },
  {
    question: 'Hur stora arealer kan ni kartlägga per uppdrag i Norrland?',
    answer:
      'Arealkapaciteten per flygdag varierar beroende på terrängförhållanden, önskad upplösning och andra faktorer. För stora skogsinnehav i Norrland planerar vi flerdagsuppdrag för att täcka den areal som behövs med bibehållen datakvalitet.',
  },
  {
    question: 'Vilka län i Norrland täcker ni?',
    answer:
      'Vi utför uppdrag i Norrland, inklusive Norrbottens län, Västerbottens län, Jämtlands län, Västernorrlands län och Gävleborgs län. Resekostnad kan tillkomma beroende på avstånd och specificeras alltid i offerten.',
  },
]

export default function NorrlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '#' },
              { name: 'Norrland', url: '/platser/skogsinventering-norrland' },
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

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Norrland' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Norrland
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning av skog i Norrbotten, Västerbotten, Jämtland, Västernorrland och Gävleborg. Anpassad för stora arealer, avlägsen terräng och nordliga förhållanden.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Drönarinventering anpassad för norrländska förhållanden</h2>
            <p>
              Norrland har vidsträckta barrskogsområden som ofta ligger långt från närmaste väg. Traditionell fältinventering i dessa områden är tidskrävande och kostsam — inte sällan behöver personal ta sig flera kilometer in i terrängen för att nå aktuella bestånd. Drönarbaserad skogsinventering erbjuder ett effektivt alternativ som minskar fältiden avsevärt.
            </p>
            <p>
              Vi arbetar i Norrland, från Gävleborg i söder till Norrbottens fjällnära skogar i norr. Våra drönarsystem är utformade för att hantera de utmaningar som kännetecknar regionen: stora sammanhängande skogsarealer, begränsad väginfrastruktur, kuperad terräng och korta flygsäsonger med begränsade ljusförhållanden under vinterhalvåret.
            </p>
            <p>
              Genom att kombinera högupplösta ortofoton med GIS-baserade kartlager skapar vi aktuella beslutsunderlag för skogsförvaltning, avverkningsplanering och skadeinventering. Data levereras i SWEREF99 TM och kan importeras direkt i pcSKOG, QGIS eller ArcGIS. Vi anpassar uppdraget efter era behov — oavsett om det gäller en enskild fastighet på 20 hektar eller ett storskaligt skogsinnehav på tusentals hektar.
            </p>
            <p>
              För skogsbolag och förvaltare med mark i Norrland innebär drönarbaserad inventering en möjlighet att hålla skogsbruksplaner uppdaterade utan att behöva genomföra omfattande fältbesök varje säsong. Vid akuta händelser som stormfällning eller insektsangrepp kan vi snabbt mobilisera och leverera skadeunderlag.
            </p>

            <h2 className="text-heading-xl text-slate-900">Län vi täcker i Norrland</h2>
            <ul>
              <li>Norrbottens län</li>
              <li>Västerbottens län</li>
              <li>Jämtlands län</li>
              <li>Västernorrlands län</li>
              <li>Gävleborgs län</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Norrland</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Norrland.
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
