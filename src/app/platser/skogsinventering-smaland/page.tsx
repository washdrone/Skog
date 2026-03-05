import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Småland & Götaland',
  description:
    'Drönarbaserad skogsinventering i Småland och Götaland — Jönköping, Kronoberg, Kalmar och övriga Götaland. Hög skogstäthet, privat ägande och granbarkborreproblematik.',
  path: '/platser/skogsinventering-smaland',
})

const FAQ_ITEMS = [
  {
    question: 'Kan drönare upptäcka granbarkborreangrepp i Småland?',
    answer:
      'Ja. Med multispektral analys och NDVI-kartläggning kan vi identifiera tidiga tecken på stress i granbestånd innan skadorna syns med blotta ögat. Rött ljus-absorption minskar i angripna träd, vilket ger ett mätbart utslag i vegetationsindex. Tidig detektion gör att ni kan vidta åtgärder innan angreppet sprider sig.',
  },
  {
    question: 'Arbetar ni med privata skogsägare i Småland?',
    answer:
      'Absolut. Småland har en hög andel privata skogsägare, och vi anpassar våra tjänster efter både mindre fastigheter och större skogsinnehav. Oavsett om ni äger 10 hektar eller 500 hektar kan vi leverera aktuella kartunderlag som komplement till er skogsbruksplan.',
  },
  {
    question: 'Vilka områden i Götaland täcker ni utöver Småland?',
    answer:
      'Vi utför uppdrag i Götaland, inklusive Östergötland, Västra Götaland, Halland, Skåne, Blekinge och Gotland. Smålandslänen — Jönköping, Kronoberg och Kalmar — är ett kärnområde. Resekostnad kan tillkomma beroende på avstånd.',
  },
  {
    question: 'Hur hjälper drönardata vid avverkningsplanering i tätbevuxna småländska skogar?',
    answer:
      'Högupplösta ortofoton och kartlager ger en aktuell bild av beståndsgränser, vägnät, upplag och hinder som är svåra att överblicka i tätbevuxen skog. Datan underlättar planering av avverkning, gallring och logistik, och minskar behovet av tidskrävande fältrekognosering.',
  },
]

export default function SmalandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '#' },
              { name: 'Småland & Götaland', url: '/platser/skogsinventering-smaland' },
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

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Småland & Götaland' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Småland &amp; Götaland
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning i Jönköping, Kronoberg, Kalmar och övriga Götaland. Hög skogstäthet, småskaligt ägande och proaktiv hantering av granbarkborre.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Skogsinventering i Smålands täta granskogar</h2>
            <p>
              Småland och stora delar av Götaland har en hög andel skogsmark. Landskapet präglas av tät granskog, kuperad terräng och en hög andel privatägd skogsmark. Många fastigheter har gått i arv i generationer, och behovet av aktuella kartunderlag är stort — inte minst som komplement till skogsbruksplaner som kan vara flera år gamla.
            </p>
            <p>
              Regionen har under de senaste åren drabbats hårt av granbarkborreangrepp, särskilt efter torrperioder som försvagat granbestånden. Drönarbaserad inventering och multispektral analys ger skogsägare möjlighet att upptäcka stressade träd i ett tidigt skede, innan angreppen sprider sig och orsakar omfattande ekonomiska förluster. Genom NDVI-kartläggning kan vi identifiera områden där vegetationens vitalitet avviker från det normala.
            </p>
            <p>
              Den småskaliga ägarstrukturen i Småland och Götaland innebär att många skogsägare hanterar allt från planering till åtgärder själva, ofta i dialog med skogsbruksplaneledare eller virkesköpare. Drönarbaserade kartlager och ortofoton blir ett värdefullt stöd i den dialogen — en gemensam, aktuell bild av skogstillståndet som alla parter kan utgå ifrån.
            </p>
            <p>
              Vi utför uppdrag i Götaland med fokus på Jönköpings, Kronobergs och Kalmar län. Alla leveranser sker i SWEREF99 TM och kan importeras direkt i pcSKOG, QGIS eller ArcGIS. Från enskilda fastigheter till större skogsinnehav — vi anpassar uppdraget efter era behov och förhållanden.
            </p>

            <h2 className="text-heading-xl text-slate-900">Län vi täcker</h2>
            <ul>
              <li>Jönköpings län</li>
              <li>Kronobergs län</li>
              <li>Kalmar län</li>
              <li>Östergötlands län</li>
              <li>Västra Götalands län</li>
              <li>Hallands län</li>
              <li>Skåne län</li>
              <li>Blekinge län</li>
              <li>Gotlands län</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-slate-50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Småland &amp; Götaland</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Småland och Götaland.
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
