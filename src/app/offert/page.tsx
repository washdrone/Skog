import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { COMPANY } from '@/lib/seo/business-data'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Begär offert',
  description:
    'Begär en kostnadsfri offert för drönarbaserad skogsinventering, trädhöjdsmätning, planträkning eller skogsskadeinventering. Rikstäckande i hela Sverige.',
  path: '/offert',
})

const PROCESS_STEPS = [
  { number: 1, title: 'Fyll i formulär', description: 'Beskriv ert uppdrag, areal och önskade leveranser.' },
  { number: 2, title: 'Vi återkommer', description: 'Vi granskar er förfrågan och återkommer med en prisindikation inom 24 timmar.' },
  { number: 3, title: 'Bekräfta detaljer', description: 'Vi stämmer av uppdragsdetaljer, areal och tidsplan.' },
  { number: 4, title: 'Vi genomför uppdraget', description: 'Flygning genomförs och underlag levereras enligt överenskommelse.' },
]

export default function OffertPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Begär offert', url: '/offert' },
            ])
          ),
        }}
      />

      <Breadcrumbs items={[{ label: 'Begär offert' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Begär en kostnadsfri offert
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Berätta om ert uppdrag så återkommer vi med en prisindikation inom 24 timmar.
            Fyll i formuläret nedan eller kontakta oss direkt på{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-forest-400 hover:text-forest-300 underline">
              {COMPANY.email}
            </a>.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <LeadForm />
            </div>

            {/* Trust signals sidebar */}
            <aside className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Varför TimberDrone</h3>
                <ul className="mt-4 space-y-4">
                  {[
                    /* A1 verifierad av ägaren 2026-08-03: svar inom 24 timmar */
                    { icon: 'clock', text: 'Svar inom 24 timmar' },
                    /* Rikstäckning verifierad av ägaren 2026-06-11 (A6) */
                    { icon: 'map', text: 'Rikstäckande i hela Sverige' },
                    { icon: 'layer', text: 'GIS-redo leveranser' },
                    { icon: 'shield', text: 'Ingen bindningstid' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-700 pt-1">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-cream-200/50 p-6">
                <h3 className="font-semibold text-slate-900">Direktkontakt</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">E-post</span>
                    <a href={`mailto:${COMPANY.email}`} className="text-forest-600 hover:text-forest-800">
                      {COMPANY.email}
                    </a>
                  </p>
                  {COMPANY.phone && (
                    <p>
                      <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Telefon</span>
                      <a href={`tel:${COMPANY.phone.replace(/[\s-]/g, '')}`} className="text-forest-600 hover:text-forest-800">
                        {COMPANY.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="relative bg-cream-200/50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Så fungerar det</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Från förfrågan till leverans</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-600 text-white font-bold text-lg shadow-lg shadow-forest-600/25">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
