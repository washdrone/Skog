import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kontakt & offert – drönarbaserade mättjänster för skogsbruk',
  description:
    'Begär offert eller boka en genomgång av drönarbaserade mättjänster för skog och mark. Prisindikation inom 24 timmar.',
  alternates: { canonical: 'https://washdrone.se/areamatning-och-skogsbruk/kontakt' },
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

      <header className="bg-terrain-950 py-14 sm:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Begär offert
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-terrain-300">
            Berätta om ert uppdrag så återkommer vi med en prisindikation inom 24 timmar.
            Fyll i formuläret nedan eller kontakta oss direkt.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold text-terrain-900">Offertförfrågan</h2>
              <LeadForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="rounded-lg border border-skog-100 bg-skog-50 p-6">
                <h3 className="font-semibold text-terrain-900">Så fungerar det</h3>
                <ol className="mt-4 space-y-3 text-sm text-terrain-700">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-skog-700 text-xs font-bold text-white">1</span>
                    <span>Fyll i formuläret med uppgifter om ert uppdrag.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-skog-700 text-xs font-bold text-white">2</span>
                    <span>Vi granskar förfrågan och återkommer med prisindikation inom 24 timmar.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-skog-700 text-xs font-bold text-white">3</span>
                    <span>Vi bekräftar uppdragsdetaljer, areal och tidsplan.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-skog-700 text-xs font-bold text-white">4</span>
                    <span>Flygning genomförs och underlag levereras enligt överenskommelse.</span>
                  </li>
                </ol>
              </div>

              <div className="rounded-lg border border-skog-100 bg-white p-6">
                <h3 className="font-semibold text-terrain-900">Direktkontakt</h3>
                <div className="mt-4 space-y-3 text-sm text-terrain-700">
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-wider text-terrain-500">E-post</span>
                    <a href="mailto:info@washdrone.se" className="text-skog-700 hover:text-skog-900">
                      info@washdrone.se
                    </a>
                  </p>
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-wider text-terrain-500">Telefon</span>
                    Kontakta oss via e-post för telefonnummer
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-skog-100 bg-white p-6">
                <h3 className="font-semibold text-terrain-900">Täckningsområde</h3>
                <p className="mt-3 text-sm text-terrain-700">
                  Vi utför uppdrag i hela Sverige. Vid längre avstånd tillkommer resekostnad som specificeras i offerten.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
