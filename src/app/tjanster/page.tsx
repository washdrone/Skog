import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import RevealSection from '@/components/RevealSection'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata = createMetadata({
  title: 'Drönarbaserade tjänster för skogsbruk — 14 specialisttjänster',
  description:
    'Komplett utbud av drönarbaserade tjänster för skogsbruk: skogsinventering, multispektralanalys, LiDAR, barkborredetektion, kolinlagring & ESG, skadedokumentation, årsavtal och mer. Nationell täckning.',
  path: '/tjanster',
})

const SERVICES = [
  {
    title: 'Skogsinventering',
    description: 'Snabbare och mer exakt inventering av skog med drönare. Volym, stamantal och trädslag kartlagt från luften.',
    href: '/tjanster/skogsinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Multispektralanalys',
    description: 'Vegetationsindex (NDVI, NDRE, GNDVI) från multispektral sensor. Objektiv hälsobedömning av skog.',
    href: '/tjanster/multispektralanalys',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: 'Fotosyntetisk aktivitet',
    description: 'Mätning av fotosyntetisk aktivitet via spektrala index. Unik insikt i skogens biologiska kapacitet.',
    href: '/tjanster/fotosyntesmatning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'LiDAR-skanning',
    description: 'Detaljerade höjdmodeller och skogsstruktur med drönarburen LiDAR. Terrain- och kronhöjdsmodeller.',
    href: '/tjanster/lidar-skanning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: 'Barkborredetektering',
    description: 'Tidig upptäckt av barkborreangrepp med multispektral analys. Identifiera gröna angrepp innan de syns.',
    href: '/tjanster/barkborre-detektering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Ortofoto & flygfotografering',
    description: 'Högupplösta ortofoton för skogsbruk. Georefererade flygbilder med hög markupplösning.',
    href: '/tjanster/ortofoto-kartering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M6.75 7.5l.75-.75" />
      </svg>
    ),
  },
  {
    title: '3D-modellering',
    description: 'DSM, DTM och punktmoln från fotogrammetri. Höjdmodeller och volymberäkningar för skogsbruk.',
    href: '/tjanster/3d-modellering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: 'Beståndsinventering',
    description: 'Beståndsgränser, trädslag, ålder och volym kartlagt per bestånd. Underlag för skogsbruksplan.',
    href: '/tjanster/bestandsinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Underlag för skogsbruksplan',
    description: 'Komplett drönardata som underlag för skogsbruksplan. Kombinera ortofoto, höjdmodeller och vegetationsindex.',
    href: '/tjanster/skogsbruksplan-underlag',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Planteringsinventering',
    description: 'Kontrollera plantors överlevnad och täthet efter slutavverkning. Underlag för uppföljning enligt Skogsstyrelsens krav.',
    href: '/tjanster/planteringsinventering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Skadedokumentation',
    description: 'Kartläggning och dokumentation av stormskador, brandskador och snöbrott. Professionella underlag för försäkringsärenden.',
    href: '/tjanster/skadedokumentation',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0l5.1-5.1m-5.1 5.1h11.314a6.001 6.001 0 010 12H9.72" />
      </svg>
    ),
  },
  {
    title: 'Kolinlagring & ESG',
    description: 'Biomassemätning och kolinlagringsberäkning med drönare. Dokumenterat underlag för ESG-rapportering och CSRD.',
    href: '/tjanster/kolinlagring',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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
  {
    title: 'Jaktkartering',
    description: 'Högupplösta ortofoton och kartor optimerade för jaktplanering. Fastighetsgränser, terräng och viltstråk.',
    href: '/tjanster/jaktkartering',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
]

const FAQ_ITEMS = [
  {
    question: 'Vilka drönarbaserade tjänster erbjuder TimberDrone?',
    answer: 'Vi erbjuder skogsinventering, multispektralanalys, LiDAR-skanning, barkborredetektion, ortofoto, 3D-modellering, beståndsinventering, fotosyntesmätning, planteringsinventering, skadedokumentation, kolinlagring & ESG-underlag, årsavtal för löpande övervakning, jaktkartering och underlag för skogsbruksplaner. Alla tjänster levereras som georefererade kartlager i branschstandardformat.',
  },
  {
    question: 'Hur stor areal kan ni kartlägga per dag?',
    answer: 'Med våra drönare kan vi kartlägga stora arealer per flygning beroende på tjänst och flygparametrar. Ortofoton täcker större arealer, medan detaljerade multispektralanalyser och LiDAR-skanningar kräver lägre flyghöjd och täcker mindre yta per flygpass.',
  },
  {
    question: 'I vilka format levereras data?',
    answer: 'Vi levererar i branschstandardformat som GeoTIFF, GeoPackage, Shapefile och LAS/LAZ för punktmoln. Alla data georefereras i SWEREF99 TM (EPSG:3006) och kan importeras direkt i GIS-system som QGIS, ArcGIS och pcSKOG.',
  },
  {
    question: 'Kan ni kombinera flera tjänster i samma uppdrag?',
    answer: 'Ja, det är vanligt att kombinera exempelvis ortofoto med multispektralanalys eller LiDAR-skanning med beståndsinventering. Att samla in flera datatyper vid samma flygtillfälle är kostnadseffektivt och ger ett bredare beslutsunderlag.',
  },
  {
    question: 'Hur snabbt kan ni leverera efter flygning?',
    answer: 'Leveranstid beror på tjänst och areal. Vi levererar inom avtalad tid och erbjuder expressleverans vid akuta behov.',
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
                'Skogsinventering, multispektralanalys, LiDAR-skanning, barkborredetektion, ortofoto, 3D-modellering och underlag för skogsbruksplaner.',
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
        headline="Drönarbaserade tjänster för skogsbruk — från inventering till ESG"
        subheadline="Skogsinventering, multispektralanalys, barkborredetektion, kolinlagringsberäkning och skadedokumentation. Vi levererar georefererade kartlager, höjdmodeller och analysrapporter i hela Sverige — från enstaka uppdrag till årsavtal."
        ctaLabel="Begär offert"
        ctaHref="/offert"
        secondaryCtaLabel="Kontakta oss"
        secondaryCtaHref="/areamatning-och-skogsbruk/kontakt"
        stats={[
          { value: '14', label: 'Specialisttjänster' },
          { value: 'Hög', label: 'Markupplösning' },
          { value: '24h', label: 'Offert' },
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
                { title: 'Tidig detektion', desc: 'Multispektrala sensorer fångar stressignaler innan de syns för ögat.' },
                { title: 'Snabb mobilisering', desc: 'Vid storm, skador eller akuta behov kan vi snabbt vara på plats.' },
                { title: 'Branschstandardformat', desc: 'GeoTIFF, GeoPackage, Shapefile, LAS — importera direkt i ert GIS.' },
                { title: 'Kombinera datatillgångar', desc: 'Ortofoto, höjdmodeller och vegetationsindex i samma leverans.' },
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
