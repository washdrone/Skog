import Link from 'next/link'
import { organizationSchema } from '@/lib/schema'
import Hero from '@/components/Hero'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'

const PROCESS_STEPS = [
  { number: 1, title: 'Uppdragsdialog', description: 'Vi diskuterar behov, areal och tidsram. Offert inom 24 timmar.' },
  { number: 2, title: 'Datainsamling', description: 'Drönare flyger det aktuella området. Georefererade bilder samlas in.' },
  { number: 3, title: 'Bearbetning & QA', description: 'Data bearbetas till kartlager, ortofoton eller rapporter. Kvalitetskontroll.' },
  { number: 4, title: 'Leverans', description: 'Färdiga underlag levereras digitalt i överenskommet format.' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      <Hero
        badge="Drönarbaserade mättjänster"
        headline="Exakta underlag för skogsbruk och markförvaltning"
        subheadline="Areamätning, inventering och dokumentation — levererat som kartlager, ortofoton och rapporter redo att importera i era system."
        ctaLabel="Begär offert"
        ctaHref="/areamatning-och-skogsbruk/kontakt"
        secondaryCtaLabel="Se våra tjänster"
        secondaryCtaHref="/areamatning-och-skogsbruk"
        stats={[
          { value: '2–5 cm', label: 'Markupplösning' },
          { value: '24h', label: 'Offert' },
          { value: '100+ ha', label: 'Per flygning' },
          { value: 'SWEREF99', label: 'Koordinatsystem' },
        ]}
      />

      {/* Services overview */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center">
            <span className="badge">Tjänster</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">
              Tjänster för skog &amp; mark
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Vi levererar drönarbaserade underlag som effektiviserar planering, uppföljning och dokumentation inom skogsbruk.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Areamätning',
                desc: 'Georefererade polygoner för fastigheter, avdelningar och bestånd. Exakta ytberäkningar.',
                href: '/areamatning-och-skogsbruk/areamatning',
              },
              {
                title: 'Inventering & översikt',
                desc: 'Beståndsgränser, hyggen, vägar, upplag och kantzoner kartlagda som beslutsunderlag.',
                href: '/areamatning-och-skogsbruk/inventering',
              },
              {
                title: 'Avverkningsunderlag',
                desc: 'Yta, avgränsning, åtkomst och hinder kartlagda för avverkningsplanering.',
                href: '/areamatning-och-skogsbruk/avverkningsunderlag',
              },
              {
                title: 'Skadeinventering',
                desc: 'Dokumentation och kartlager efter storm, snöbrott eller insektsangrepp.',
                href: '/areamatning-och-skogsbruk/skadeinventering',
              },
              {
                title: 'Planteringsuppföljning',
                desc: 'Översikt och dokumentation av planteringar och ungskog. Identifiera luckor.',
                href: '/areamatning-och-skogsbruk/planteringsuppfoljning',
              },
              {
                title: 'Leveranser & format',
                desc: 'Shapefile, GeoPackage, GeoTIFF, PDF — kartlager och ortofoton i branschstandard.',
                href: '/areamatning-och-skogsbruk/leveranser',
              },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-500/5 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-forest-700 transition-colors">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-forest-600 opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Läs mer
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="bg-slate-50 section-padding">
        <div className="container-page">
          <div className="text-center">
            <span className="badge">Fördelar</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">
              Varför drönarbaserade underlag?
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Minskad fältid', desc: 'Kartlägg stora arealer utan att gå varje beståndsgräns till fots. Effektivare planering.' },
              { title: 'Bättre beslutsunderlag', desc: 'Georefererade ortofoton och kartlager ger en aktuell och detaljerad bild av skog och mark.' },
              { title: 'Spårbarhet & dokumentation', desc: 'Varje leverans är daterad, georefererad och arkiverbar för uppföljning och revision.' },
              { title: 'Snabb mobilisering', desc: 'Vid storm, skador eller akuta behov kan vi snabbt vara på plats och leverera underlag.' },
              { title: 'Branschstandardformat', desc: 'Shapefile, GeoPackage, GeoTIFF — kan importeras direkt i era GIS-system.' },
              { title: 'Datadrivet skogsbruk', desc: 'Kombinera drönardata med era befintliga system för ett mer faktabaserat arbetssätt.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600 ring-1 ring-forest-100">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
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

      {/* Target audiences */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center">
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
            ].map((audience) => (
              <div key={audience} className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-sm font-medium text-slate-700 transition-all hover:border-forest-200 hover:shadow-sm">
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
