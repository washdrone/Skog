import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import RevealSection from '@/components/RevealSection'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata = createMetadata({
  title: 'Drönartjänster för skogsbruk',
  description:
    'Drönarbaserade tjänster för skogsbruk: skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering. Skogliga beslutsunderlag i hela Sverige.',
  path: '/tjanster',
})

const SERVICES = [
  {
    title: 'Skogsinventering',
    description: 'Heltäckande inventering av skog med drönare. Volym, stamantal, trädslag och beståndsgränser kartlagt från luften.',
    href: '/tjanster/skogsinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Trädhöjdsmätning',
    description: 'Objektiv höjd- och tillväxtdata för hela beståndet. Höjdmodeller och höjd per träd som underlag för volym och bonitet.',
    href: '/tjanster/tradhojdsmatning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
      </svg>
    ),
  },
  {
    title: 'Planträkning',
    description: 'Räkna plantor och föryngring efter plantering. Plantantal per hektar, täthet och luckkartor för hela hygget.',
    href: '/tjanster/plantrakning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Skogsskadeinventering',
    description: 'Kartläggning av storm-, insekts- och torkskador, inklusive granbarkborre. Georefererad skadekarta med areal och position.',
    href: '/tjanster/skogsskadeinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Beståndsinventering',
    description: 'Beståndsgränser, trädslag, ålder och volym kartlagt per bestånd. Underlag för skogsbruksplan och åtgärdsplanering.',
    href: '/tjanster/bestandsinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Underlag för skogsbruksplan',
    description: 'Komplett drönardata som underlag för skogsbruksplan. Ortofoto, höjdmodeller, beståndskarta och volymdata.',
    href: '/tjanster/skogsbruksplan-underlag',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Årsavtal & löpande förvaltning',
    description: 'Abonnemangsbaserad skogsövervakning med regelbundna flygningar. Förutsägbar kostnad och löpande insikt i skogens tillstånd.',
    href: '/tjanster/arsavtal',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
]

const FAQ_ITEMS = [
  {
    question: 'Vilka drönartjänster för skogsbruk erbjuder TimberDrone?',
    answer: 'Vi erbjuder skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering, samt beståndsinventering, underlag för skogsbruksplan och årsavtal för löpande uppföljning. Alla tjänster levereras som georefererade kartlager i branschstandardformat.',
  },
  {
    question: 'Hur stor areal kan ni kartlägga per dag?',
    answer: 'Med våra drönare kan vi kartlägga stora arealer per flygning beroende på tjänst och flygparametrar. Ortofoton täcker större arealer, medan detaljerade höjd- och skadeinventeringar kräver lägre flyghöjd och täcker mindre yta per flygpass.',
  },
  {
    question: 'I vilka format levereras data?',
    answer: 'Vi levererar i branschstandardformat som GeoTIFF, GeoPackage, Shapefile och LAS/LAZ för punktmoln. Alla data georefereras i SWEREF99 TM (EPSG:3006) och kan importeras direkt i GIS-system som QGIS, ArcGIS och pcSKOG.',
  },
  {
    question: 'Kan ni kombinera flera tjänster i samma uppdrag?',
    answer: 'Ja, det är vanligt att kombinera exempelvis skogsinventering med trädhöjdsmätning, eller skadeinventering med beståndsdata. Att samla in flera datatyper vid samma flygtillfälle är kostnadseffektivt och ger ett bredare beslutsunderlag.',
  },
  {
    question: 'Verkar ni i hela Sverige?',
    answer: 'Ja, vi arbetar rikstäckande och anpassar logistiken efter uppdragets lokalisering och omfattning. Kontakta oss för att diskutera ert specifika område.',
  },
]

export default function TjansterHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Drönarbaserade tjänster för skogsbruk',
              description:
                'Skogsinventering, trädhöjdsmätning, planträkning, skogsskadeinventering och underlag för skogsbruksplaner med drönare.',
              url: '/tjanster',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_ITEMS)),
        }}
      />

      <Breadcrumbs items={[{ label: 'Tjänster' }]} />

      <Hero
        badge="Drönarbaserade skogstjänster"
        headline="Drönartjänster för skogsbruk — från inventering till skadekartläggning"
        subheadline="Skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering. Vi levererar georefererade kartlager, höjdmodeller och analysrapporter — från enstaka uppdrag till årsavtal, rikstäckande i hela Sverige."
        ctaLabel="Begär offert"
        ctaHref="/offert"
        secondaryCtaLabel="Kontakta oss"
        secondaryCtaHref="/offert"
        stats={[
          { value: '7', label: 'Skogstjänster' },
          /* GSD beräknad ur verifierad utrustning (DJI Matrice 4E), ägaren 2026-08-03 */
          { value: '2–3 cm/pixel', label: 'Markupplösning (GSD)' },
          { value: 'Snabb', label: 'Återkoppling' },
          { value: 'SWEREF99', label: 'Koordinatsystem' },
        ]}
      />

      {/* Services grid */}
      <RevealSection>
        <section className="relative section-padding">
          <div className="absolute inset-0 bg-dots opacity-50" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Tjänster</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Alla tjänster</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Varje tjänst anpassas efter era behov. Vi levererar det underlag som krävs — varken mer eller mindre.
              </p>
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
        <section className="relative bg-cream-200/50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Fördelar</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Varför drönarbaserade tjänster?</h2>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Minskad fältid', desc: 'Kartlägg stora arealer utan att behöva gå varje beståndsgräns till fots.' },
                { title: 'Hög precision', desc: 'Hög markupplösning ger detaljerade underlag som kompletterar fältdata.' },
                { title: 'Tidig skadedetektion', desc: 'Återkommande flygningar fångar storm-, insekts- och torkskador i ett tidigt skede.' },
                { title: 'Snabb mobilisering', desc: 'Vid storm, skador eller akuta behov kan vi snabbt vara på plats.' },
                { title: 'Branschstandardformat', desc: 'GeoTIFF, GeoPackage, Shapefile, LAS — importera direkt i ert GIS.' },
                { title: 'Kombinera datalager', desc: 'Ortofoto, höjdmodeller och beståndsdata i samma leverans.' },
              ].map((item, i) => (
                <div key={item.title} className={`group flex gap-4 reveal reveal-delay-${i + 1}`}>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 transition-all duration-500 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/20">
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
      </RevealSection>

      <FAQ items={FAQ_ITEMS} />
      <CTABand ctaHref="/offert" ctaLabel="Begär offert" />
    </>
  )
}
