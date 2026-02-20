import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import Breadcrumbs from '@/components/Breadcrumbs'
import RevealSection from '@/components/RevealSection'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Areamätning & skogsbruk med drönare',
  description:
    'Drönarbaserade mät- och underlagstjänster för skogsbruk: areamätning, inventering, avverkningsunderlag, skadeinventering och planteringsuppföljning. Begär offert idag.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk' },
  openGraph: {
    title: 'Areamätning & skogsbruk med drönare | WashDrone',
    description: 'Professionella drönarbaserade mättjänster för skogsbruk. Kartlager, ortofoton och rapporter levererade i branschstandard.',
    url: 'https://washdrone.se/areamatning-och-skogsbruk',
  },
}

const SERVICES = [
  {
    title: 'Areamätning',
    description: 'Georefererade polygoner för fastigheter, avdelningar och bestånd. Exakta ytberäkningar baserade på drönarfotogrammetri.',
    href: '/areamatning-och-skogsbruk/areamatning',
    icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>),
  },
  {
    title: 'Inventering & översikt',
    description: 'Kartläggning av beståndsgränser, hyggen, vägar, upplag och kantzoner. Ett komplett visuellt beslutsunderlag.',
    href: '/areamatning-och-skogsbruk/inventering',
    icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>),
  },
  {
    title: 'Avverkningsunderlag',
    description: 'Yta, avgränsning, åtkomst och hinder kartlagda som underlag för avverkningsplanering och maskindisponering.',
    href: '/areamatning-och-skogsbruk/avverkningsunderlag',
    icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>),
  },
  {
    title: 'Skadeinventering',
    description: 'Dokumentation och kartlager efter storm, snöbrott eller insektsangrepp. Snabb överblick för beslutsfattande.',
    href: '/areamatning-och-skogsbruk/skadeinventering',
    icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>),
  },
  {
    title: 'Planteringsuppföljning',
    description: 'Översikt och dokumentation av planteringar och ungskog. Identifiera luckor och bedöm etableringsgrad.',
    href: '/areamatning-och-skogsbruk/planteringsuppfoljning',
    icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>),
  },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Uppdragsdialog', description: 'Vi diskuterar behov, areal, tidsram och önskade leveranser. Offert inom 24 timmar.' },
  { number: 2, title: 'Datainsamling', description: 'Drönare flyger det aktuella området enligt planerat uppdrag. Georefererade bilder samlas in.' },
  { number: 3, title: 'Bearbetning & QA', description: 'Data bearbetas till kartlager, ortofoton eller rapporter. Kvalitetskontroll av varje leverans.' },
  { number: 4, title: 'Leverans', description: 'Färdiga underlag levereras digitalt i överenskommet format, redo att importeras i era system.' },
]

export default function HubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hem', url: '/' }, { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Drönarbaserade mättjänster för skogsbruk', description: 'Areamätning, inventering, avverkningsunderlag, skadeinventering och planteringsuppföljning med drönare.', url: '/areamatning-och-skogsbruk' })) }} />

      <Breadcrumbs items={[{ label: 'Areamätning & skogsbruk' }]} />

      <Hero
        badge="Drönarbaserade mättjänster"
        headline="Underlag för skogsbruk och markförvaltning"
        subheadline="Areamätning, inventering och dokumentation — levererat som kartlager, ortofoton och rapporter. Minska fältid, öka precision och få bättre beslutsunderlag."
        ctaLabel="Begär offert"
        ctaHref="/areamatning-och-skogsbruk/kontakt"
        secondaryCtaLabel="Se leveranser"
        secondaryCtaHref="/areamatning-och-skogsbruk/leveranser"
        stats={[
          { value: '2–5 cm', label: 'Markupplösning' },
          { value: '24h', label: 'Offert' },
          { value: '100+ ha', label: 'Per flygning' },
          { value: 'SWEREF99', label: 'Koordinatsystem' },
        ]}
      />

      {/* Services */}
      <RevealSection>
        <section className="relative section-padding">
          <div className="absolute inset-0 bg-dots opacity-50" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Tjänster</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Våra tjänster</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">Varje tjänst anpassas efter era behov. Vi levererar det underlag som krävs — varken mer eller mindre.</p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((svc, i) => (
                <ServiceCard key={svc.href} {...svc} index={i} />
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Benefits */}
      <RevealSection>
        <section className="relative bg-slate-50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Fördelar</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Varför drönarbaserade underlag?</h2>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Minskad fältid', desc: 'Kartlägg stora arealer utan att behöva gå varje beståndsgräns till fots. Effektivare planering.' },
                { title: 'Bättre beslutsunderlag', desc: 'Georefererade ortofoton och kartlager ger en aktuell och detaljerad bild av skog och mark.' },
                { title: 'Spårbarhet & dokumentation', desc: 'Varje leverans är daterad, georefererad och arkiverbar för uppföljning och revision.' },
                { title: 'Snabb mobilisering', desc: 'Vid storm, skador eller akuta behov kan vi snabbt vara på plats och leverera underlag.' },
                { title: 'Branschstandardformat', desc: 'Shapefile, GeoPackage, GeoTIFF — kan importeras direkt i era GIS-system.' },
                { title: 'Datadrivet skogsbruk', desc: 'Kombinera drönardata med era befintliga system för ett faktabaserat arbetssätt.' },
              ].map((item, i) => (
                <div key={item.title} className={`group flex gap-4 reveal reveal-delay-${i + 1}`}>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 transition-all duration-500 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/20">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
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
              {['Skogsbolag & skogsbrukskoncerner', 'Skogsentreprenörer', 'Skogsförvaltare & fastighetsförvaltning', 'Kommuner & markägare', 'Virkesköpare & planerare', 'Försäkringsbolag & skadebesiktning'].map((a, i) => (
                <div key={a} className={`card-shine rounded-2xl border border-slate-200/80 bg-white p-5 text-center text-sm font-medium text-slate-700 transition-all duration-500 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/[0.05] hover:-translate-y-0.5 reveal reveal-delay-${i + 1}`}>{a}</div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <ProcessSteps steps={PROCESS_STEPS} />
      <CTABand />
    </>
  )
}
