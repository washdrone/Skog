import Link from 'next/link'

interface CTABandProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CTABand({
  headline = 'Redo att effektivisera ert skogsbruk?',
  description = 'Berätta om ert uppdrag så återkommer vi med en prisindikation inom 24 timmar.',
  ctaLabel = 'Begär offert',
  ctaHref = '/areamatning-och-skogsbruk/kontakt',
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-night-950">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest-500/10 blur-[100px]" />

      <div className="container-page relative py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading-xl text-white sm:text-display">{headline}</h2>
          <p className="mt-4 text-lg text-white/50">{description}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href={ctaHref} className="btn-accent text-base">
              {ctaLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="mailto:info@washdrone.se" className="text-sm font-medium text-white/60 transition-colors hover:text-forest-400">
              eller maila info@washdrone.se
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
