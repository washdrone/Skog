import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo/metadata'
import { organizationSchema, faqSchema } from '@/lib/seo/schema'
import Hero from '@/components/Hero'
import OutputShowcase from '@/components/OutputShowcase'
import FeatureShowcase from '@/components/FeatureShowcase'
import TrustBlock from '@/components/TrustBlock'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import FAQ from '@/components/FAQ'

export const metadata = buildMetadata({
  title: 'Skogsinventering med Drönare — Multispektralanalys & LiDAR',
  description:
    'Skogsinventering med drönare — multispektralanalys, fotosyntesmätning, LiDAR och barkborredetektion. Georefererade data i SWEREF99 TM.',
  path: '/',
})

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
    desc: 'Kartlägg stora arealer utan att gå varje beståndsgräns till fots. Mätdata i 1-5 cm upplösning över tusentals hektar.',
  },
  {
    title: 'Faktabaserade beslut',
    desc: 'Georefererade ortofoton och 3D-modeller ger en exakt nulägesbild — inte uppskattningar, utan lasermätdata.',
  },
  {
    title: 'Tidig skadedetektion',
    desc: 'Multispektral analys identifierar stressade träd innan skador syns med blotta ögat (NDVI & RE-analys).',
  },
  {
    title: 'Spårbarhet & ESG',
    desc: 'Varje leverans är daterad, georefererad och arkiverbar — färdig för revision och koldioxidrapportering.',
  },
  {
    title: 'Rikstäckande nätverk',
    desc: 'Vi mobiliserar i hela Sverige — från stormskador i syd till inventeringar i norr.',
  },
  {
    title: 'Branschstandardformat',
    desc: 'Shapefile, GeoPackage, GeoTIFF, LAS/LAZ — importeras direkt i QGIS, ArcGIS och skogliga verksamhetssystem.',
  },
]

const PERSONA_CARDS = [
  {
    title: 'Skogsägare',
    desc: 'Ha exakt koll på din skog. Identifiera barkborreangrepp, kontrollera beståndsgränser och beräkna volym utan tidsödande fältbesök.',
    href: '/for/skogsagare',
    label: 'Analys för ägare',
    linkText: 'Tjänster för skogsägare',
  },
  {
    title: 'Distansägare',
    desc: 'Följ utvecklingen digitalt. Få fotogrammetrisk dokumentation av utförda åtgärder och underlag för kolinlagringsberäkning.',
    href: '/for/skogsagare',
    label: 'Översikt',
    linkText: 'Drönardata för distansägare',
  },
  {
    title: 'Skogsbolag',
    desc: 'Storskalig datainsamling med multispektrala drönare. Ramavtalskapacitet för inventering före och efter avverkning.',
    href: '/for/skogsbolag',
    label: 'Ramavtal',
    linkText: 'Tjänster för skogsbolag',
  },
  {
    title: 'Forskning & Förvaltning',
    desc: 'Rådata, dokumenterade arbetsmetoder och reproducerbar metodik. Multispektral data och punktmoln för vetenskaplig analys.',
    href: '/for/forskning',
    label: 'Vetenskaplig data',
    linkText: 'Drönardata för forskning',
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

      <Hero
        badge="Flygburen skogsinventering"
        headline="Precisionsdata för framtidens skogsbruk"
        subheadline="Fotogrammetri, LiDAR och multispektralanalys från luften. Vi levererar exakta, georefererade beslutsunderlag direkt till era skogliga system."
        ctaLabel="Begär offert"
        ctaHref="/offert"
        secondaryCtaLabel="Tjänsteutbud"
        secondaryCtaHref="/tjanster"
        stats={[
          { value: 'Multispektral', label: 'Sensortyp' },
          { value: 'NDVI & RE', label: 'Vegetationsindex' },
          { value: 'SWEREF99 TM', label: 'Koordinatsystem' },
          { value: 'Centimeternivå', label: 'Markupplösning' },
          /* EJ VERIFIERAD: exakt GSD beror på utrustning och flyghöjd — ange specifikt värde när bekräftat */
        ]}
      />

      <ProcessSteps steps={PROCESS_STEPS} />

      {/* Target Audiences Block — Structured editorial layout */}
      <section className="bg-cream-100 section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="badge">Aktörer</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 font-display tracking-tight">
                Anpassad mätdata för din verksamhet
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-slate-600 font-body">
                Drönarbaserad inventering skapar förutsättningar för ett faktabaserat och lönsamt skogsbruk, oavsett innehavets storlek.
              </p>
            </div>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-slate-200 rounded-md overflow-hidden">
            {PERSONA_CARDS.map((card, i) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group flex flex-col p-8 transition-colors hover:bg-forest-50 focus-visible:bg-forest-50 border-slate-200 ${
                  i < 2 ? 'border-b' : ''
                } ${i % 2 === 0 ? 'sm:border-r' : ''} ${
                  i < 3 ? 'lg:border-r' : ''
                } lg:border-b-0`}
              >
                <div className="text-[10px] font-mono text-forest-500 uppercase tracking-widest mb-4">
                  {card.label}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600 font-body">
                  {card.desc}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-forest-600">
                  {card.linkText}
                  <svg className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Two service verticals — Sharp technical framing */}
      <section className="bg-white section-padding border-b border-slate-200 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-mapping-grid opacity-[0.03] pointer-events-none" />
        <div className="container-page relative">
          <div className="mb-14">
            <span className="badge">Tjänsteområden</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 font-display tracking-tight">
              Kritiska beslutsunderlag
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 font-body">
              Vi delar in vår verksamhet i skoglig volym- och arealuppskattning samt multispektral hälsoundersökning. Båda integreras sömlöst.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Card 1: Mätning */}
            <div className="panel flex flex-col group overflow-hidden">
              <div className="relative h-56 w-full bg-forest-900 overflow-hidden">
                <Image src="/sunny_lidar.png" alt="LiDAR Mätning" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
                <div className="absolute top-0 left-0 h-1 w-full bg-forest-600 transition-all duration-300 group-hover:bg-accent-500" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Mätning & Geodata</h3>
                  <div className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-sm border border-slate-200">
                    RGB / LiDAR
                  </div>
                </div>
                <p className="text-slate-600 font-body leading-relaxed mb-8">
                  Fotogrammetriskt framställda ortofoton och laserdata (LiDAR) som ger underlag för planering av avverkning, markberedning och röjning.
                </p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {['Arealmätning med centimeterprecision', 'Volymberäkning av bestånd', 'Avverkningsunderlag & gränser', '3D-terrängmodeller (DEM)'].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-slate-700 font-body">
                      <div className="h-1 w-1 bg-forest-500 rounded-none" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-100">
                  <Link href="/tjanster" className="btn-ghost w-full">
                    Gå till mättjänster
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Vegetationsanalys */}
            <div className="panel flex flex-col group overflow-hidden">
              <div className="relative h-56 w-full bg-forest-900 overflow-hidden">
                <Image src="/multispectral_ndvi.png" alt="Multispektral Analys" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
                <div className="absolute top-0 left-0 h-1 w-full bg-forest-800 transition-all duration-300 group-hover:bg-accent-500" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Multispektral Analys</h3>
                  <div className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-sm border border-slate-200">
                    NIR / RED EDGE
                  </div>
                </div>
                <p className="text-slate-600 font-body leading-relaxed mb-8">
                  Användning av vetenskapliga vegetationsindex (NDVI, NDRE) för att identifiera angrepp av granbarkborre och allmän stressnivå i skogen.
                </p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {['Tidig detektion av barkborre', 'Stresskartläggning via fotosyntes', 'Övervakning av plantetablering', 'Identifiering av fukthantering i mark'].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-slate-700 font-body">
                      <div className="h-1 w-1 bg-forest-500 rounded-none" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-100">
                  <Link href="/tjanster/multispektralanalys" className="btn-ghost w-full">
                    Gå till vegetationsanalys
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OutputShowcase />
      <FeatureShowcase />

      {/* Benefits section — Structured Grid Layout */}
      <section className="bg-cream-100 section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="mb-14 max-w-2xl">
            <span className="badge">Teknisk fördel</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 font-display tracking-tight">
              Varför drönarbaserad datainsamling?
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((item, i) => (
              <div key={item.title} className="relative group pl-6 border-l border-slate-300 hover:border-forest-500 transition-colors">
                {/* Horizontal marker line */}
                <div className="absolute top-0 left-0 w-3 h-px bg-slate-300 group-hover:bg-forest-500 transition-colors" />
                
                <div className="text-[10px] font-mono font-bold text-forest-400 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-slate-900 text-lg tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBlock />
      <FAQ items={HOME_FAQ_ITEMS} />
      
      <CTABand
        headline="Behöver du uppdaterad information om din mark?"
        description="Vi levererar tekniskt verifierade underlag oavsett om det gäller en årlig beståndsuppdatering, akut skadedokumentation eller ESG-underlag för skogsfonden."
      />
    </>
  )
}
