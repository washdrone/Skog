import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'

interface ServicePageLayoutProps {
  breadcrumbLabel: string
  breadcrumbParent?: { label: string; href: string }
  headline: string
  intro: string
  children: React.ReactNode
  relatedLinks?: { label: string; href: string }[]
}

export default function ServicePageLayout({
  breadcrumbLabel,
  breadcrumbParent = { label: 'Areamätning & skogsbruk', href: '/areamatning-och-skogsbruk' },
  headline,
  intro,
  children,
  relatedLinks,
}: ServicePageLayoutProps) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: breadcrumbParent.label, href: breadcrumbParent.href },
          { label: breadcrumbLabel },
        ]}
      />

      <article>
        {/* Page header */}
        <header className="relative overflow-hidden gradient-hero pt-12 pb-20 sm:pt-16 sm:pb-28">
          {/* Faint forest texture overlay to give all subpages a premium organic feel */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none">
            <Image src="/sunny_ortofoto.png" alt="Forest background" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-mapping-grid opacity-[0.03] pointer-events-none" />
          
          <div className="container-page relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white font-display sm:text-display-lg">
              {headline}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
              {intro}
            </p>
            <div className="mt-8">
              <Link href="/offert" className="btn-primary">
                Begär offert
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
          <section className="bg-cream-200/50 section-padding-sm border-t border-slate-200">
            <div className="container-page">
              <h2 className="text-center text-heading text-slate-900">Relaterade tjänster</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-forest-400 hover:text-forest-700 hover:shadow-sm"
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
