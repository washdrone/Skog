import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kontakt & offert – drönarbaserade mättjänster för skogsbruk',
  description:
    'Begär offert eller boka en genomgång av drönarbaserade mättjänster för skog och mark.',
  alternates: { canonical: 'https://timberdrone.se/areamatning-och-skogsbruk/kontakt' },
}

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Kontakt & offert', url: '/areamatning-och-skogsbruk/kontakt' },
            ])
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Areamätning & skogsbruk', href: '/areamatning-och-skogsbruk' },
          { label: 'Kontakt & offert' },
        ]}
      />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Begär offert
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Berätta om ert uppdrag så återkommer vi med en prisindikation.
            Fyll i formuläret nedan eller kontakta oss direkt.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold text-slate-900">Offertförfrågan</h2>
              <LeadForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Så fungerar det</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-600 text-xs font-bold text-white">1</span>
                    <span>Fyll i formuläret med uppgifter om ert uppdrag.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-600 text-xs font-bold text-white">2</span>
                    <span>Vi granskar förfrågan och återkommer med en prisindikation inom 24 timmar.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-600 text-xs font-bold text-white">3</span>
                    <span>Vi bekräftar uppdragsdetaljer, areal och tidsplan.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-600 text-xs font-bold text-white">4</span>
                    <span>Flygning genomförs och underlag levereras enligt överenskommelse.</span>
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Direktkontakt</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">E-post</span>
                    <a href="mailto:info@timberdrone.se" className="text-forest-600 hover:text-forest-800">
                      info@timberdrone.se
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Täckningsområde</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Vi arbetar rikstäckande i hela Sverige. Vid längre avstånd tillkommer resekostnad som specificeras i offerten.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
