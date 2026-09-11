import ServiceDecisionGuide from './ServiceDecisionGuide'
import ServiceReference from './ServiceReference'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'

interface ServicePageLayoutProps {
  serviceId?: string
  breadcrumbLabel: string
  breadcrumbParent?: { label: string; href: string }
  headline: string
  intro: string
  children: React.ReactNode
  relatedLinks?: { label: string; href: string }[]
}

export default function ServicePageLayout({
  serviceId,
  breadcrumbLabel,
  breadcrumbParent = { label: 'Tjänster', href: '/tjanster' },
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
        <header className="relative overflow-hidden gradient-hero pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/5 blur-[100px]" />
          <div className="container-page relative max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white font-display sm:text-display-lg">
              {headline}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
              {intro}
            </p>
            <div className="mt-8">
              <Link href={serviceId ? `/offert?tjanst=${serviceId}` : "/offert"} className="btn-primary">
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
            {serviceId && <ServiceDecisionGuide serviceId={serviceId} />}
            {children}
            {serviceId && <ServiceReference serviceId={serviceId} />}
          </div>
        </div>

        {/* Related links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="bg-cream-200/50 section-padding-sm">
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
              {/* Kontextuella länkar upp till hubbarna — tjänstesidorna länkade
                  tidigare bara sidledes, vilket lämnade /tjanster, /kunskap och
                  /platser utan inlänkar i brödinnehåll */}
              <p className="mt-8 text-center text-sm text-slate-600 font-body">
                Se hela vårt utbud på{' '}
                <Link href="/tjanster" className="font-bold text-forest-600 hover:text-forest-700">
                  tjänsteöversikten
                </Link>
                , fördjupa dig i{' '}
                <Link href="/kunskap" className="font-bold text-forest-600 hover:text-forest-700">
                  kunskapsbanken
                </Link>{' '}
                eller läs om{' '}
                <Link href="/platser" className="font-bold text-forest-600 hover:text-forest-700">
                  var i Sverige vi arbetar
                </Link>
                .
              </p>
            </div>
          </section>
        )}
      </article>

      <CTABand ctaHref={serviceId ? `/offert?tjanst=${serviceId}` : "/offert"} />
    </>
  )
}
