import { Metadata } from 'next'
import Link from 'next/link'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'WashDrone – Drönarbaserade underlag för skogsbruk & vegetationsanalys',
  description:
    'Kartlager, ortofoton och vegetationsanalys direkt från drönare till ert GIS. Professionella mät- och underlagstjänster för skogsbruk och markförvaltning i hela Sverige.',
  alternates: { canonical: 'https://washdrone.se' },
  openGraph: {
    title: 'WashDrone – Drönarbaserade underlag för skogsbruk & vegetationsanalys',
    description:
      'Kartlager, ortofoton och vegetationsanalys direkt från drönare till ert GIS.',
    url: 'https://washdrone.se',
    siteName: 'WashDrone',
    locale: 'sv_SE',
    type: 'website',
  },
}
import Hero from '@/components/Hero'
import OutputShowcase from '@/components/OutputShowcase'
import FeatureShowcase from '@/components/FeatureShowcase'
import TrustBlock from '@/components/TrustBlock'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import RevealSection from '@/components/RevealSection'

/* EJ VERIFIERAD: "Offert inom 24 timmar" — bekräfta att detta stämmer (A1) */
const PROCESS_STEPS = [
  { number: 1, title: 'Uppdragsdialog', description: 'Vi diskuterar behov, areal och tidsram. Offert inom 24 timmar.' },
  { number: 2, title: 'Datainsamling', description: 'Drönare flyger det aktuella området. Georefererade bilder samlas in.' },
  { number: 3, title: 'Bearbetning & analys', description: 'Data bearbetas till kartlager, ortofoton, vegetationsindex eller rapporter. Kvalitetskontroll av varje leverans.' },
  { number: 4, title: 'Leverans', description: 'Färdiga underlag levereras digitalt i överenskommet format, redo att importeras i era system.' },
]

const BENEFITS = [
  {
    title: 'Minskad fältid',
    desc: 'Kartlägg stora arealer utan att gå varje beståndsgräns till fots. Effektivare planering.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Bättre beslutsunderlag',
    desc: 'Georefererade ortofoton och kartlager ger en aktuell och detaljerad bild av skog och mark.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: 'Spårbarhet & dokumentation',
    desc: 'Varje leverans är daterad, georefererad och arkiverbar för uppföljning och revision.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Snabb mobilisering',
    desc: 'Vid storm, skador eller akuta behov kan vi snabbt vara på plats och leverera underlag.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Branschstandardformat',
    desc: 'Shapefile, GeoPackage, GeoTIFF — kan importeras direkt i era GIS-system.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Datadrivet skogsbruk',
    desc: 'Kombinera drönardata med era befintliga system för ett mer faktabaserat arbetssätt.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: 'Multispektral insikt',
    desc: 'Vegetationsindex (NDVI) ger en objektiv bild av växtlighet och skogshälsa — utan subjektiv bedömning.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      <Hero
        badge="Beslutsstöd för skogsbruk"
        headline="Kartlager, ortofoton och vegetationsanalys — direkt från drönare till ert GIS"
        subheadline="Vi levererar georefererade underlag som ger skogsägare, förvaltare och skogsbolag en aktuell, datadriven bild av skog och mark. Från areamätning till multispektral analys."
        ctaLabel="Boka en fri konsultation"
        ctaHref="/areamatning-och-skogsbruk/kontakt"
        secondaryCtaLabel="Se exempelleveranser"
        secondaryCtaHref="/areamatning-och-skogsbruk/leveranser"
        /* EJ VERIFIERAD: alla stats nedan — bekräfta B1, A1, B2, B3 */
        stats={[
          { value: '2–5 cm', label: 'Markupplösning' },
          { value: 'NDVI & RGB', label: 'Analystyper' },
          { value: 'SWEREF99 TM', label: 'Koordinatsystem' },
          { value: 'GIS-redo', label: 'Leveransformat' },
        ]}
      />

      {/* Output Showcase */}
      <RevealSection>
        <OutputShowcase />
      </RevealSection>

      {/* Two service verticals */}
      <RevealSection>
        <section className="relative bg-slate-50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Våra tjänsteområden</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">
                Två kompletterande erbjudanden
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Skoglig mätning och kartläggning i kombination med multispektral vegetationsanalys — för en komplett bild.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Card 1: Mätning */}
              <Link
                href="/areamatning-och-skogsbruk"
                className="glow-border card-shine group relative rounded-2xl border border-slate-200/80 bg-white p-10 shadow-sm transition-all duration-500 hover:border-forest-300 hover:shadow-2xl hover:shadow-forest-500/[0.08] hover:-translate-y-1.5 reveal reveal-delay-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 transition-all duration-500 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/25">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">Skoglig mätning & kartläggning</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Georefererade kartlager, ortofoton och rapporter för areal, bestånd, avverkning och skadedokumentation.
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-slate-600">
                  {['Areamätning', 'Inventering & översikt', 'Avverkningsunderlag', 'Skadeinventering', 'Planteringsuppföljning'].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-forest-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-forest-600">
                  Utforska mättjänster
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>

              {/* Card 2: Vegetationsanalys */}
              <Link
                href="/vegetationsanalys"
                className="glow-border card-shine group relative rounded-2xl border border-slate-200/80 bg-white p-10 shadow-sm transition-all duration-500 hover:border-forest-300 hover:shadow-2xl hover:shadow-forest-500/[0.08] hover:-translate-y-1.5 reveal reveal-delay-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 transition-all duration-500 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/25">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">Vegetationsanalys & multispektral</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Objektiv bedömning av skogshälsa och stress genom vegetationsindex. Tidig detektion av problem innan de syns.
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-slate-600">
                  {['NDVI-kartläggning', 'Stressanalys & skadedetektion', 'Uppföljning över tid'].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-forest-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-forest-600">
                  Utforska vegetationsanalys
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Feature showcase with checkmarks + LayerStack */}
      <RevealSection>
        <FeatureShowcase />
      </RevealSection>

      {/* Benefits section */}
      <RevealSection>
        <section className="relative bg-slate-50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Fördelar</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">
                Varför drönarbaserade underlag?
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((item, i) => (
                <div key={item.title} className={`group flex gap-4 reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 transition-all duration-500 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Trust Block */}
      <RevealSection>
        <TrustBlock />
      </RevealSection>

      {/* Target audiences */}
      <RevealSection>
        <section className="section-padding">
          <div className="container-page">
            <div className="text-center reveal">
              <span className="badge">Målgrupper</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Vilka vi arbetar med</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">Vi levererar underlag till aktörer inom skogsbruk och markförvaltning i hela Sverige.</p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Skogsbolag & skogsbrukskoncerner',
                'Skogsentreprenörer',
                'Skogsförvaltare & fastighetsförvaltning',
                'Kommuner & markägare',
                'Virkesköpare & planerare',
                'Försäkringsbolag & skadebesiktning',
                'Miljökonsulter & ekologer',
              ].map((audience, i) => (
                <div key={audience} className={`card-shine rounded-2xl border border-slate-200/80 bg-white p-5 text-center text-sm font-medium text-slate-700 transition-all duration-500 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/[0.05] hover:-translate-y-0.5 reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <ProcessSteps steps={PROCESS_STEPS} />

      <CTABand
        headline="Redo att effektivisera er skogliga datainsamling?"
        description="Berätta om ert uppdrag — oavsett om det gäller areamätning, inventering eller vegetationsanalys. Vi återkommer med en prisindikation."
      />
    </>
  )
}
