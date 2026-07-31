import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo/metadata'
import { faqSchema } from '@/lib/seo/schema'
import Hero from '@/components/Hero'
import OutputShowcase from '@/components/OutputShowcase'
import FeatureShowcase from '@/components/FeatureShowcase'
import TrustBlock from '@/components/TrustBlock'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import FAQ from '@/components/FAQ'

export const metadata = buildMetadata({
  title: 'Skogsinventering med drönare i hela Sverige',
  description:
    'Drönarbaserad skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering. Georefererade skogliga beslutsunderlag i SWEREF99 TM — rikstäckande.',
  path: '/',
})

const HOME_FAQ_ITEMS = [
  {
    question: 'Vad är skogsinventering med drönare?',
    answer: 'Skogsinventering med drönare innebär att hela skogsarealen kartläggs från luften med högupplösta kameror och sensorer. Till skillnad från traditionell inventering som bygger på stickprov ger drönardata en heltäckande bild av beståndets struktur — volym, stamantal, trädhöjd och beståndsgränser.',
  },
  {
    question: 'Vilka tjänster erbjuder TimberDrone?',
    answer: 'TimberDrone erbjuder skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering, samt beståndsinventering, underlag för skogsbruksplan och årsavtal för löpande uppföljning. Alla tjänster levereras som georefererade kartlager i branschstandardformat.',
  },
  {
    question: 'Var i Sverige verkar TimberDrone?',
    answer: 'TimberDrone arbetar rikstäckande i hela Sverige och anpassar logistiken efter uppdragets lokalisering och omfattning. Kontakta oss för att diskutera ert specifika område.',
  },
  {
    question: 'Hur skiljer sig drönarbaserad inventering från satellitdata?',
    answer: 'Drönarbaserad inventering ger betydligt högre rumslig upplösning än satellitdata och möjliggör analys på enskild trädnivå. Drönare påverkas inte av molntäcke och kan flygas på begäran. Satellitdata (t.ex. Sentinel-2 med 10 m upplösning) ger bra överblick men saknar detaljer för trädindividuell analys.',
  },
  {
    question: 'Kan drönare upptäcka granbarkborreangrepp?',
    answer: 'Drönare kan kartlägga granbarkborreangrepp där angreppen ger synliga förändringar i kronorna, till exempel missfärgade eller avbarrade träd. Genom regelbunden flygning kan nya angreppspunkter lokaliseras så att angripna träd kan tas ut i tid. Tidiga, ännu gröna angrepp är svårare att se och kräver ofta kompletterande kontroll på marken.',
  },
  {
    question: 'Hur lång tid tar det att få sina data?',
    answer: 'Leveranstid beror på uppdragets omfattning och komplexitet. Kontakta oss för att diskutera er specifika tidsram.',
  },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Kontakt & offert', description: 'Beskriv ert behov — areal, syfte och tidsram. Vi återkommer med en offert.' },
  { number: 2, title: 'Flygning', description: 'Vi mobiliserar till ert område och samlar in georefererade data med drönare.' },
  { number: 3, title: 'Analys & leverans', description: 'Data bearbetas till kartlager, höjdmodeller och rapporter. Kvalitetskontrollerat och levererat digitalt.' },
]

const BENEFITS = [
  {
    title: 'Helhetsbild utan fältarbete',
    desc: 'Kartlägg stora arealer utan att gå varje beståndsgräns till fots. Mätdata i hög upplösning över hela innehavet.',
  },
  {
    title: 'Faktabaserade beslut',
    desc: 'Georefererade ortofoton och höjdmodeller ger en exakt nulägesbild — objektiva mått i stället för uppskattningar.',
  },
  {
    title: 'Tidig skadedetektion',
    desc: 'Återkommande flygningar fångar storm-, insekts- och torkskador i ett tidigt skede, så att åtgärder kan sättas in i tid.',
  },
  {
    title: 'Spårbar dokumentation',
    desc: 'Varje leverans är daterad, georefererad och arkiverbar — färdig för uppföljning, skadeärenden och planrevision.',
  },
  {
    title: 'Flexibel mobilisering',
    desc: 'Vi mobiliserar rikstäckande — från stormskador i syd till inventeringar i norr.',
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
    /*
     * Kortet pekade tidigare på /for/skogsagare — samma mål som kortet ovanför.
     * /for/fastighet saknade helt ingång från startsidan trots att den är en av
     * de få sidor Google faktiskt indexerat. Texten är hämtad från sidans egen
     * ingress, inga nya påståenden har lagts till.
     */
    title: 'Fastighetsköpare',
    desc: 'Verifiera virkesvolymer, skogens hälsa och beståndsgränser inför köp eller försäljning av skogsfastighet.',
    href: '/for/fastighet',
    label: 'Due diligence',
    linkText: 'Drönardata för fastighetsköpare',
  },
  {
    title: 'Skogsbolag',
    desc: 'Storskalig datainsamling med drönare. Ramavtalskapacitet för inventering före och efter avverkning.',
    href: '/for/skogsbolag',
    label: 'Ramavtal',
    linkText: 'Tjänster för skogsbolag',
  },
  {
    title: 'Forskning & Förvaltning',
    desc: 'Rådata, dokumenterade arbetsmetoder och reproducerbar metodik. Höjddata och punktmoln för vetenskaplig analys.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQ_ITEMS)) }}
      />

      <Hero
        badge="Flygburen skogsinventering"
        headline="Skogsinventering med drönare — precisionsdata för svenskt skogsbruk"
        subheadline="Fotogrammetri och höjddata från luften. Vi levererar exakta, georefererade beslutsunderlag för inventering, tillväxt och skadeläge direkt till era skogliga system — rikstäckande i hela Sverige."
        ctaLabel="Begär offert"
        ctaHref="/offert"
        secondaryCtaLabel="Tjänsteutbud"
        secondaryCtaHref="/tjanster"
        stats={[
          { value: 'Trädhöjd', label: 'Höjd & tillväxt' },
          { value: 'Volym', label: 'Virkesförråd' },
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
              Vi delar in verksamheten i skoglig inventering och skadekartläggning. Båda bygger på samma georefererade drönardata och integreras sömlöst.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Card 1: Inventering */}
            <div className="panel flex flex-col group overflow-hidden">
              <div className="relative h-56 w-full bg-forest-900 overflow-hidden">
                <Image src="/sunny_lidar.png" alt="Skoglig inventering och höjdmätning med drönare" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
                <div className="absolute top-0 left-0 h-1 w-full bg-forest-600 transition-all duration-300 group-hover:bg-accent-500" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Inventering & Höjddata</h3>
                  <div className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-sm border border-slate-200">
                    RGB / HÖJD
                  </div>
                </div>
                <p className="text-slate-600 font-body leading-relaxed mb-8">
                  Fotogrammetriskt framställda ortofoton och höjdmodeller som ger underlag för volym, tillväxt och planering av avverkning, markberedning och röjning.
                </p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {['Arealmätning med centimeterprecision', 'Volym- och stamuppskattning', 'Trädhöjd och tillväxt', 'Avverkningsunderlag & gränser'].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-slate-700 font-body">
                      <div className="h-1 w-1 bg-forest-500 rounded-none" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-100">
                  <Link href="/tjanster/skogsinventering" className="btn-ghost w-full">
                    Gå till skogsinventering
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Skadeinventering */}
            <div className="panel flex flex-col group overflow-hidden">
              <div className="relative h-56 w-full bg-forest-900 overflow-hidden">
                <Image src="/forestry_drone.png" alt="Skogsskadeinventering med drönare efter storm och barkborreangrepp" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply" />
                <div className="absolute top-0 left-0 h-1 w-full bg-forest-800 transition-all duration-300 group-hover:bg-accent-500" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Skogsskadeinventering</h3>
                  <div className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-sm border border-slate-200">
                    STORM / INSEKT
                  </div>
                </div>
                <p className="text-slate-600 font-body leading-relaxed mb-8">
                  Kartläggning av storm-, insekts- och torkskador, inklusive granbarkborre. Avgränsade skadeytor med beräknad areal som underlag för uttag och dokumentation.
                </p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {['Stormfällen och vindfällen', 'Angrepp av granbarkborre', 'Tork- och torkstressskador', 'Skadeavgränsning & arealberäkning'].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-slate-700 font-body">
                      <div className="h-1 w-1 bg-forest-500 rounded-none" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-100">
                  <Link href="/tjanster/skogsskadeinventering" className="btn-ghost w-full">
                    Gå till skogsskadeinventering
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
        headline="Behöver du uppdaterad information om din skog?"
        description="Vi levererar tekniskt verifierade underlag oavsett om det gäller en årlig beståndsuppdatering, akut skadeinventering efter storm eller underlag för skogsbruksplanen."
      />
    </>
  )
}
