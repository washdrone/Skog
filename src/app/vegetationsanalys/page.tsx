import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps'
import CTABand from '@/components/CTABand'
import Breadcrumbs from '@/components/Breadcrumbs'
import RevealSection from '@/components/RevealSection'
import NDVIGradientBar from '@/components/NDVIGradientBar'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Multispektral vegetationsanalys med drönare | TimberDrone',
  description:
    'Objektiv bedömning av växtlighet, skogshälsa och stress genom vegetationsindex som NDVI, GNDVI och NDRE. Multispektral data som komplement till fältinventering.',
  alternates: { canonical: 'https://timberdrone.se/vegetationsanalys' },
  openGraph: {
    title: 'Multispektral vegetationsanalys med drönare | TimberDrone',
    description: 'Vegetationsindex från drönare — NDVI, NDRE och GNDVI för objektiv bedömning av skogshälsa.',
    url: 'https://timberdrone.se/vegetationsanalys',
    siteName: 'TimberDrone',
    locale: 'sv_SE',
    type: 'website',
  },
}

const SERVICES = [
  {
    title: 'NDVI-kartläggning',
    description: 'Georefererade NDVI-kartor som visar vegetationens vitalitet. Klassificerad karta och tolkningsrapport.',
    href: '/vegetationsanalys/ndvi-kartlaggning',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: 'Stressanalys & skadedetektion',
    description: 'Tidig detektion av vegetationsstress och skadedjursangrepp med Red Edge-analys. Identifiera problem innan de syns.',
    href: '/vegetationsanalys/stressanalys',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Uppföljning över tid',
    description: 'Återkommande flygningar med standardiserad metodik ger tidsserier som avslöjar trender i vegetationens hälsa.',
    href: '/vegetationsanalys/uppfoljning-over-tid',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Uppdragsdialog', description: 'Vi diskuterar syfte, areal och vilka index som är relevanta för ert uppdrag. Offert inom 24 timmar.' },
  { number: 2, title: 'Kalibrerad flygning', description: 'Reflektanspanel före start. Drönare med multispektral sensor (5 band) flyger området. Irradianssensor korrigerar för ljusförändringar.' },
  { number: 3, title: 'Indexberäkning & QA', description: 'NDVI, NDRE och kompletterande index beräknas från reflektanskartor. Radiometrisk korrigering och kvalitetskontroll.' },
  { number: 4, title: 'Leverans', description: 'NDVI-raster (GeoTIFF), klassificerade kartor och tolkningsrapport levereras i SWEREF99 TM — redo att importera i pcSKOG, QGIS eller ArcGIS.' },
]

const BENEFITS = [
  { title: 'Objektiv mätning', desc: 'Index ger ett siffervärde — inte en subjektiv bedömning.' },
  { title: 'Tidig detektion', desc: 'Red Edge-bandet fångar stressignaler innan de syns för ögat.' },
  { title: 'Jämförbarhet', desc: 'Kalibrerade data möjliggör jämförelse mellan flygningar och säsonger.' },
  { title: 'Enskilda trädkronor', desc: '5–10 cm upplösning möjliggör analys på trädnivå.' },
  { title: 'Komplement till satellit', desc: '100–500x högre upplösning än Sentinel-2 (10 m/pixel).' },
  { title: 'GIS-integration', desc: 'Leverans i SWEREF99 TM, importerbar i pcSKOG, QGIS, ArcGIS.' },
]

export default function VegetationsanalysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Hem', url: '/' }, { name: 'Vegetationsanalys', url: '/vegetationsanalys' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Multispektral vegetationsanalys med drönare', description: 'NDVI, NDRE och GNDVI — vegetationsindex för objektiv bedömning av skogshälsa.', url: '/vegetationsanalys' })) }} />

      <Breadcrumbs items={[{ label: 'Vegetationsanalys' }]} />

      <Hero
        badge="Multispektral analys"
        headline="Objektiv bild av skogshälsa — med vegetationsindex från drönare"
        subheadline="Multispektral kamera i 5 våglängdsband mäter hur vegetationen reflekterar ljus. Friska träd absorberar rött ljus för fotosyntes och reflekterar starkt i NIR. Vi omvandlar den kontrasten till kartor som visar var skogen mår bra, var den stressar och var den försämras."
        ctaLabel="Begär offert"
        ctaHref="/areamatning-och-skogsbruk/kontakt"
        secondaryCtaLabel="Läs mer om NDVI"
        secondaryCtaHref="/vegetationsanalys/ndvi-kartlaggning"
        stats={[
          { value: '5 band', label: 'Multispektral sensor' },
          { value: 'NDVI · NDRE', label: 'Vegetationsindex' },
          { value: '5–10 cm', label: 'Multispektral GSD' },
          { value: 'SWEREF99 TM', label: 'Koordinatsystem' },
        ]}
      />

      {/* How it works */}
      <RevealSection>
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-50" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Så fungerar det</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Från ljus till karta</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">Tre steg — från multispektral sensor till georefererad vegetationskarta.</p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Sensorn fångar',
                  text: 'Multispektral kamera mäter reflekterat ljus i 5 våglängdsband: blått (~475 nm), grönt (~560 nm), rött (~668 nm), red edge (~717 nm) och nära infrarött (~842 nm). Varje band avslöjar olika egenskaper hos vegetationen.',
                },
                {
                  step: '2',
                  title: 'Indexet beräknas',
                  text: 'Frisk vegetation absorberar rött ljus (klorofyll, fotosyntes) och reflekterar starkt i NIR (cellstruktur, mesofyll). Kontrasten mellan dessa band ger NDVI — ett mått på vitalitet.',
                },
                {
                  step: '3',
                  title: 'Kartan levereras',
                  text: 'Resultatet är georefererade rasterkartor i GeoTIFF, klassificerade efter vitalitet. Redo att importera i ert GIS.',
                },
              ].map((item, i) => (
                <div key={item.step} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-600 text-white font-bold text-lg shadow-lg shadow-forest-600/25">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>

            {/* NDVI gradient bar */}
            <div className="mt-16 mx-auto max-w-2xl reveal">
              <NDVIGradientBar />
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Services */}
      <RevealSection>
        <section className="relative bg-slate-50 section-padding overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
          <div className="container-page relative">
            <div className="text-center reveal">
              <span className="badge">Tjänster</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Våra analyser</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">Varje analys anpassas efter era behov och levereras med tolkningsstöd.</p>
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
        <section className="section-padding">
          <div className="container-page">
            <div className="text-center reveal">
              <span className="badge">Fördelar</span>
              <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Varför multispektral analys?</h2>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((item, i) => (
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

      <ProcessSteps steps={PROCESS_STEPS} />
      <CTABand />
    </>
  )
}
