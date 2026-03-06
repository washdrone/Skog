import { Metadata } from 'next'
import Link from 'next/link'
import { organizationSchema, faqSchema } from '@/lib/schema'
import Hero from '@/components/Hero'
import OutputShowcase from '@/components/OutputShowcase'
import FeatureShowcase from '@/components/FeatureShowcase'
import TrustBlock from '@/components/TrustBlock'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import FAQ from '@/components/FAQ'
import RevealSection from '@/components/RevealSection'

export const metadata: Metadata = {
  title: 'TimberDrone | Skogsinventering med Drönare — Precision du kan lita på',
  description:
    'Skogsinventering med drönare — multispektralanalys, fotosyntesmätning, LiDAR och barkborredetektion. Datan levereras snabbt. Hela Sverige.',
  alternates: { canonical: 'https://timberdrone.se' },
  openGraph: {
    title: 'TimberDrone | Skogsinventering med Drönare — Precision du kan lita på',
    description:
      'Skogsinventering med drönare — multispektralanalys, fotosyntesmätning, LiDAR och barkborredetektion. Kolinlagringsberäkning för ESG.',
    url: 'https://timberdrone.se',
    siteName: 'TimberDrone',
    locale: 'sv_SE',
    type: 'website',
  },
}

const HOME_FAQ_ITEMS = [
  {
    question: 'Vad är skogsinventering med drönare?',
    answer: 'Skogsinventering med drönare innebär att hela skogsarealen kartläggs från luften med högupplösta kameror och sensorer. Till skillnad från traditionell inventering som bygger på stickprov ger drönardata en heltäckande bild av beståndets struktur — volym, stamantal, trädhöjd och beståndsgränser.',
  },
  {
    question: 'Vilka tjänster erbjuder TimberDrone?',
    answer: 'TimberDrone erbjuder skogsinventering, multispektralanalys, fotosyntesmätning, LiDAR-skanning, barkborredetektion, ortofoto, 3D-modellering, beståndsinventering, planteringsinventering, skadedokumentation, kolinlagring & ESG-underlag, årsavtal och jaktkartering. Alla tjänster levereras som georefererade kartlager i branschstandardformat.',
  },
  {
    question: 'Var i Sverige verkar TimberDrone?',
    answer: 'TimberDrone erbjuder rikstäckande tjänster i hela Sverige — från Skåne till Norrbotten. Vi har kapacitet att mobilisera till alla regioner och anpassar logistiken efter uppdragets lokalisering och omfattning.',
  },
  {
    question: 'Hur skiljer sig drönarbaserad inventering från satellitdata?',
    answer: 'Drönarbaserad inventering ger betydligt högre rumslig upplösning än satellitdata och möjliggör analys på enskild trädnivå. Drönare påverkas inte av molntäcke och kan flygas på begäran. Satellitdata (t.ex. Sentinel-2 med 10 m upplösning) ger bra överblick men saknar detaljer för trädindividuell analys.',
  },
  {
    question: 'Kan drönare upptäcka barkborreangrepp tidigt?',
    answer: 'Ja, multispektral analys kan identifiera stressförändringar i vegetation som orsakas av granbarkborre, ofta innan angreppen är synliga med blotta ögat. Genom att analysera NIR- och Red Edge-reflektans kan stressade träd skiljas från friska.',
  },
  {
    question: 'Hur lång tid tar det att få sina data?',
    answer: 'Leveranstid beror på uppdragets omfattning och komplexitet. Kontakta oss för att diskutera er specifika tidsram.',
  },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Kontakt & offert', description: 'Beskriv ert behov — areal, syfte och tidsram. Vi återkommer med en offert.' },
  { number: 2, title: 'Flygning', description: 'Vi mobiliserar till ert område och samlar in georefererade data med drönare.' },
  { number: 3, title: 'Analys & leverans', description: 'Data bearbetas till kartlager, index och rapporter. Kvalitetskontrollerat och levererat digitalt.' },
]

const BENEFITS = [
  {
    title: 'Helhetsbild utan fältarbete',
    desc: 'Kartlägg stora arealer utan att gå varje beståndsgräns till fots. Du får överblick utan att behöva vara på plats.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Faktabaserade beslut',
    desc: 'Georefererade ortofoton och kartlager ger en aktuell och detaljerad bild — inte gissningar, utan mätdata.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: 'Tidig skadedetektion',
    desc: 'Multispektral analys identifierar stressade träd innan skador syns med blotta ögat. Agera innan det är för sent.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Spårbarhet & dokumentation',
    desc: 'Varje leverans är daterad, georefererad och arkiverbar — för uppföljning, revision och ESG-rapportering.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Rikstäckande verksamhet',
    desc: 'Vi mobiliserar i hela Sverige — vid storm, skador eller akuta behov. Snabbt och professionellt.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Branschstandardformat',
    desc: 'Shapefile, GeoPackage, GeoTIFF — importeras direkt i era GIS-system. Inga speciallösningar krävs.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
]

const PERSONA_CARDS = [
  {
    title: 'Skogsägare',
    desc: 'Ha koll på din skog utan att gå varje meter. Barkborre, beståndsgränser och volym — från luften.',
    href: '/for/skogsagare',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Distansägare',
    desc: 'Se din skog digitalt — även om den ligger långt bort. ESG-underlag och kolinlagringsberäkning ingår.',
    href: '/for/skogsagare',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Skogsbolag',
    desc: 'Storskalig datainsamling med multispektral analys. Ramavtalskapacitet och ESG-dokumentation.',
    href: '/for/skogsbolag',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: 'Forskare',
    desc: 'Rådata, reproducerbarhet och dokumenterade metoder. Multispektral och LiDAR för vetenskapligt bruk.',
    href: '/for/forskning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQ_ITEMS)) }}
      />

      {/* Hero — above the fold */}
      <Hero
        badge="Skogsinventering med drönare"
        headline="Skogsinventering med drönare — Precision du kan lita på"
        subheadline="Vi flyger. Du bestämmer. Multispektralanalys, fotosyntesmätning och LiDAR — samlat i kartlager du kan använda direkt."
        ctaLabel="Begär offert"
        ctaHref="/offert"
        secondaryCtaLabel="Se våra tjänster"
        secondaryCtaHref="/tjanster"
        stats={[
          { value: 'Multispektral', label: 'Djupanalys' },
          { value: 'NDVI & NIR', label: 'Fotosyntesmätning' },
          { value: 'SWEREF99 TM', label: 'Koordinatsystem' },
          { value: 'GIS-redo', label: 'Leveransformat' },
        ]}
      />

      {/* 3-step process — immediately after hero to show simplicity */}
      <ProcessSteps steps={PROCESS_STEPS} />

      {/* Who we work with — persona cards */}
      <RevealSection>
        <section className="section-padding">
          <div className="container-page">
            <div className="text-center reveal">
              <span className="badge">Vilka vi arbetar med</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display">
                Din skog, dina frågor — vår teknik
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500 font-body">
                Oavsett om du äger 30 hektar eller förvaltar tusentals — vi anpassar datainsamlingen efter ditt behov.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PERSONA_CARDS.map((card, i) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`glow-border card-shine group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:border-forest-400/50 hover:shadow-2xl hover:shadow-forest-400/[0.08] sm:hover:-translate-y-1.5 sm:p-8 reveal reveal-delay-${Math.min(i + 1, 4)}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-400/10 text-forest-500 ring-1 ring-forest-400/20 transition-all duration-500 group-hover:bg-forest-500 group-hover:text-white group-hover:ring-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/25 sm:h-12 sm:w-12">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-sans font-semibold text-slate-900 group-hover:text-forest-600 transition-colors sm:mt-5">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 font-body">{card.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-sans font-semibold text-forest-500 sm:mt-5">
                    Läs mer
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Two service verticals */}
      <RevealSection>
        <section className="relative bg-cream-200/50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-400/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Våra tjänsteområden</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display">
                Två kompletterande erbjudanden
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500 font-body">
                Skoglig mätning och kartläggning i kombination med multispektral vegetationsanalys — för en komplett bild.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Card 1: Mätning */}
              <Link
                href="/tjanster"
                className="glow-border card-shine group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:border-forest-400/50 hover:shadow-2xl hover:shadow-forest-400/[0.08] sm:hover:-translate-y-1.5 sm:p-10 reveal reveal-delay-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-400/10 text-forest-500 ring-1 ring-forest-400/20 transition-all duration-500 group-hover:bg-forest-500 group-hover:text-white group-hover:ring-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/25 sm:h-14 sm:w-14">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-sans font-bold text-slate-900 group-hover:text-forest-600 transition-colors">Skoglig mätning & kartläggning</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 font-body">
                  Georefererade kartlager, ortofoton och rapporter för areal, bestånd, avverkning och skadedokumentation.
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-slate-600 font-body">
                  {['Areamätning', 'Inventering & översikt', 'Avverkningsunderlag', 'Skadeinventering', 'Planteringsuppföljning'].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-forest-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-sans font-semibold text-forest-500">
                  Utforska mättjänster
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>

              {/* Card 2: Vegetationsanalys */}
              <Link
                href="/tjanster/multispektralanalys"
                className="glow-border card-shine group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:border-forest-400/50 hover:shadow-2xl hover:shadow-forest-400/[0.08] sm:hover:-translate-y-1.5 sm:p-10 reveal reveal-delay-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-400/10 text-forest-500 ring-1 ring-forest-400/20 transition-all duration-500 group-hover:bg-forest-500 group-hover:text-white group-hover:ring-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/25">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-sans font-bold text-slate-900 group-hover:text-forest-600 transition-colors">Vegetationsanalys & multispektral</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 font-body">
                  Objektiv bedömning av skogshälsa och stress genom vegetationsindex. Tidig detektion av problem innan de syns.
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-slate-600 font-body">
                  {['NDVI-kartläggning', 'Stressanalys & skadedetektion', 'Uppföljning över tid'].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-forest-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-sans font-semibold text-forest-500">
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

      {/* Output Showcase */}
      <RevealSection>
        <OutputShowcase />
      </RevealSection>

      {/* Feature showcase with checkmarks */}
      <RevealSection>
        <FeatureShowcase />
      </RevealSection>

      {/* Benefits section */}
      <RevealSection>
        <section className="relative bg-cream-200/50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-400/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Fördelar</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display">
                Varför drönarbaserade underlag?
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((item, i) => (
                <div key={item.title} className={`group flex gap-4 reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-forest-400/10 text-forest-500 ring-1 ring-forest-400/20 transition-all duration-500 group-hover:bg-forest-500 group-hover:text-white group-hover:ring-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 font-body">{item.desc}</p>
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

      <FAQ items={HOME_FAQ_ITEMS} />

      <CTABand
        headline="Redo att ta kontroll över din skog?"
        description="Berätta om ditt uppdrag — oavsett om det gäller inventering, barkborredetektion, kolinlagringsberäkning eller akut skadedokumentation."
      />
    </>
  )
}
