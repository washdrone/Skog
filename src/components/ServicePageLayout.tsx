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
        <header className="bg-terrain-950 py-14 sm:py-20">
          <div className="container-page max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-terrain-300">
              {intro}
            </p>
            <div className="mt-6">
              <Link href="/areamatning-och-skogsbruk/kontakt" className="btn-primary">
                Begär offert
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="section-padding">
          <div className="container-page max-w-3xl prose-skog">
            {children}
          </div>
        </div>

        {/* Related links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="bg-skog-50 section-padding">
            <div className="container-page">
              <h2 className="text-center text-xl font-bold text-terrain-900">Relaterade tjänster</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-skog-200 bg-white px-5 py-3 text-sm font-medium text-terrain-800 transition-colors hover:border-skog-400 hover:text-skog-800"
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
