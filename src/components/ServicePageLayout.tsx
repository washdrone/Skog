import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'

interface ServicePageLayoutProps {
  breadcrumbLabel: string
  headline: string
  intro: string
  children: React.ReactNode
  relatedLinks?: { label: string; href: string }[]
}

export default function ServicePageLayout({
  breadcrumbLabel,
  headline,
  intro,
  children,
  relatedLinks,
}: ServicePageLayoutProps) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Areamätning & skogsbruk', href: '/areamatning-och-skogsbruk' },
          { label: breadcrumbLabel },
        ]}
      />

      <article>
        {/* Page header */}
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white sm:text-display-lg">
              {headline}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              {intro}
            </p>
            <div className="mt-8">
              <Link href="/areamatning-och-skogsbruk/kontakt" className="btn-primary">
                Boka en fri konsultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="section-padding">
          <div className="container-page max-w-3xl prose-forest">
            {children}
          </div>
        </div>

        {/* Related links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="bg-slate-50 section-padding-sm">
            <div className="container-page">
              <h2 className="text-center text-heading text-slate-900">Relaterade tjänster</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-forest-300 hover:text-forest-700 hover:shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTABand />
    </>
  )
}
