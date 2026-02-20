import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import Breadcrumbs from '@/components/Breadcrumbs'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Areamätning & skogsbruk med drönare',
  description:
    'Drönarbaserade mät- och underlagstjänster för skogsbruk: areamätning, inventering, avverkningsunderlag, skadeinventering och planteringsuppföljning. Begär offert idag.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk' },
  openGraph: {
    title: 'Areamätning & skogsbruk med drönare | WashDrone',
    description:
      'Professionella drönarbaserade mättjänster för skogsbruk. Kartlager, ortofoton och rapporter levererade i branschstandard.',
    url: 'https://washdrone.se/areamatning-och-skogsbruk',
  },
}

const SERVICES = [
  {
    title: 'Areamätning',
    description:
      'Georefererade polygoner för fastigheter, avdelningar och bestånd. Exakta ytberäkningar baserade på drönarfotogrammetri.',
    href: '/areamatning-och-skogsbruk/areamatning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: 'Inventering & översikt',
    description:
      'Kartläggning av beståndsgränser, hyggen, vägar, upplag och kantzoner. Ett komplett visuellt beslutsunderlag.',
    href: '/areamatning-och-skogsbruk/inventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.209-.553-.34-.874-.384a3 3 0 01-1.69-1.009l-.628-.785a.75.75 0 00-.585-.28H9.395c-.484 0-.917.289-1.106.736l-.04.1a2.001 2.001 0 01-1.796 1.235M15 2.25l.174.685a1.18 1.18 0 01-.333 1.148l-1.272 1.272a3 3 0 00-.655 3.279l.007.016a.85.85 0 001.334.326.85.85 0 00.326-1.334l-.007-.016a1.5 1.5 0 01.327-1.639l1.273-1.273a2.68 2.68 0 00.756-2.607L15 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Avverkningsunderlag',
    description:
      'Yta, avgränsning, åtkomst och hinder kartlagda som underlag för avverkningsplanering och maskindisponering.',
    href: '/areamatning-och-skogsbruk/avverkningsunderlag',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Skadeinventering',
    description:
      'Dokumentation och kartlager efter storm, snöbrott eller insektsangrepp. Snabb överblick för beslutsfattande.',
    href: '/areamatning-och-skogsbruk/skadeinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Planteringsuppföljning',
    description:
      'Översikt och dokumentation av planteringar och ungskog. Identifiera luckor och bedöm etableringsgrad.',
    href: '/areamatning-och-skogsbruk/planteringsuppfoljning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
]

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Uppdragsdialog',
    description: 'Vi diskuterar behov, areal, tidsram och önskade leveranser. Offert inom 24 timmar.',
  },
  {
    number: 2,
    title: 'Datainsamling',
    description: 'Drönare flyger det aktuella området enligt planerat uppdrag. Georefererade bilder samlas in.',
  },
  {
    number: 3,
    title: 'Bearbetning & QA',
    description: 'Data bearbetas till kartlager, ortofoton eller rapporter. Kvalitetskontroll av varje leverans.',
  },
  {
    number: 4,
    title: 'Leverans',
    description: 'Färdiga underlag levereras digitalt i överenskommet format, redo att importeras i era system.',
  },
]

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarbaserade mättjänster för skogsbruk',
              description:
                'Areamätning, inventering, avverkningsunderlag, skadeinventering och planteringsuppföljning med drönare.',
              url: '/areamatning-och-skogsbruk',
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ label: 'Areamätning & skogsbruk' }]} />

      <Hero
        headline="Drönarbaserade underlag för skogsbruk och markförvaltning"
        subheadline="Areamätning, inventering och dokumentation — levererat som kartlager, ortofoton och rapporter. Minska fältid, öka precision och få bättre beslutsunderlag."
        ctaLabel="Begär offert"
        ctaHref="/areamatning-och-skogsbruk/kontakt"
        secondaryCtaLabel="Se leveranser"
        secondaryCtaHref="/areamatning-och-skogsbruk/leveranser"
        proofItems={[
          'Offert inom 24 timmar',
          'Georefererade leveranser',
          'Branschstandardformat',
          'Kvalitetskontrollerat',
        ]}
      />

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
            Våra tjänster
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-terrain-600">
            Varje tjänst anpassas efter era behov. Vi levererar det underlag som krävs — varken mer eller mindre.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.href} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefit bullets */}
      <section className="bg-skog-50 section-padding">
        <div className="container-page">
          <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
            Varför drönarbaserade underlag?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Minskad fältid',
                desc: 'Kartlägg stora arealer utan att behöva gå varje beståndsgräns till fots. Effektivare planering och lägre kostnader.',
              },
              {
                title: 'Bättre beslutsunderlag',
                desc: 'Georefererade ortofoton och kartlager ger en aktuell och detaljerad bild av skog, mark och infrastruktur.',
              },
              {
                title: 'Spårbarhet & dokumentation',
                desc: 'Varje leverans är daterad, georefererad och arkiverbar. Fullständig dokumentation för uppföljning och revision.',
              },
              {
                title: 'Snabb mobilisering',
                desc: 'Vid storm, skador eller akuta behov kan vi snabbt vara på plats och leverera underlag inom kort tid.',
              },
              {
                title: 'Branschstandardformat',
                desc: 'Leveranser i Shapefile, GeoPackage, GeoTIFF och andra format som kan importeras direkt i era GIS-system.',
              },
              {
                title: 'Datadrivet skogsbruk',
                desc: 'Kombinera drönardata med era befintliga system för ett mer datadrivet och faktabaserat arbetssätt.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-skog-100 text-skog-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-terrain-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-terrain-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target audiences */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
            Vilka vi arbetar med
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-terrain-600">
            Vi levererar underlag till aktörer inom skogsbruk och markförvaltning i hela Sverige.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Skogsbolag & skogsbrukskoncerner',
              'Skogsentreprenörer',
              'Skogsförvaltare & fastighetsförvaltning',
              'Kommuner & markägare',
              'Virkesköpare & planerare',
              'Försäkringsbolag & skadebesiktning',
            ].map((audience) => (
              <div
                key={audience}
                className="rounded-lg border border-skog-100 bg-white p-4 text-center text-sm font-medium text-terrain-800"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={PROCESS_STEPS} />

      <CTABand />
    </>
  )
}
