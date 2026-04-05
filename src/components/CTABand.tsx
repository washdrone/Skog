import Link from 'next/link'
import { COMPANY } from '@/lib/seo/business-data'

interface CTABandProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CTABand({
  headline = 'Kontakta oss',
  description = 'Berätta om ert uppdrag så återkommer vi med en prisindikation. Vi arbetar med skogsbolag, förvaltare och myndigheter.',
  ctaLabel = 'Begär offert',
  ctaHref = '/offert',
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-forest-950 border-t border-forest-900">
      <div className="absolute inset-0 bg-mapping-grid opacity-[0.05]" />
      
      {/* Structural mapping lines */}
      <div className="absolute top-0 left-10 bottom-0 w-px bg-forest-800/50" />
      <div className="absolute top-0 right-10 bottom-0 w-px bg-forest-800/50 hidden md:block" />

      <div className="container-page relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display text-white font-display tracking-tight mb-6">{headline}</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60 font-body leading-relaxed mb-10">{description}</p>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={ctaHref}
              className="btn-primary"
            >
              {ctaLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="btn-secondary"
            >
              Maila oss
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
