import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CaseCard from '@/components/CaseCard'
import CTABand from '@/components/CTABand'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Referenscase – drönarbaserade mättjänster i skogsbruk',
  description:
    'Exempel på uppdrag inom areamätning, skogsinventering och skadedokumentation med drönare. Se hur drönarbaserade underlag används i praktiken.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk/case' },
}

const CASES = [
  {
    title: 'Areamätning av skogsinnehav',
    customer: 'Privat skogsägare, Mellansverige',
    description:
      'Uppdaterade arealuppgifter för 12 avdelningar över 180 hektar. Georefererade polygoner levererades som Shapefile för import i skogsbruksplan. Uppdraget effektiviserade planeringen av kommande gallring.',
    tags: ['Areamätning', 'Skogsbruksplan'],
    href: '/areamatning-och-skogsbruk/case',
  },
  {
    title: 'Skadeinventering efter storm',
    customer: 'Skogsbolag, Södra Sverige',
    description:
      'Snabb kartläggning av stormskadade bestånd efter höststorm. Skadade ytor avgränsades i kartlager med ytberäkning. Underlaget användes för försäkringsanmälan och åtgärdsplanering.',
    tags: ['Skadeinventering', 'Storm'],
    href: '/areamatning-och-skogsbruk/case',
  },
  {
    title: 'Planteringsuppföljning ungskog',
    customer: 'Skogsförvaltare, Norrland',
    description:
      'Flygning av 95 hektar planterad yta för bedömning av etableringsgrad. Högupplösta ortofoton visade luckor och variationer i tillväxt. Resultatet gav underlag för beslut om kompletteringsplantering.',
    tags: ['Planteringsuppföljning', 'Ungskog'],
    href: '/areamatning-och-skogsbruk/case',
  },
]

export default function CasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Referenscase', url: '/areamatning-och-skogsbruk/case' },
            ])
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Areamätning & skogsbruk', href: '/areamatning-och-skogsbruk' },
          { label: 'Referenscase' },
        ]}
      />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Referenscase
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Exempel på uppdrag inom areamätning, inventering och skadedokumentation.
            Varje case beskriver uppdragets syfte, genomförande och leverans.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <CaseCard key={i} {...c} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            Fler referenscase publiceras löpande. Kontakta oss för att diskutera ert specifika behov.
          </p>
        </div>
      </section>

      <CTABand
        headline="Har ni ett liknande behov?"
        description="Berätta om ert uppdrag så diskuterar vi hur vi kan hjälpa er."
      />
    </>
  )
}
