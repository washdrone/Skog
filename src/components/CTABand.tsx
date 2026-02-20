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
      {/* Multiple animated glows for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-forest-500/[0.08] blur-[120px] animate-float-slow" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-forest-400/[0.05] blur-[80px] animate-float-reverse" />

      {/* Decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-500/20 to-transparent" />

      <div className="container-page relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading-xl text-white sm:text-display">{headline}</h2>
          <p className="mt-5 text-lg text-white/50 leading-relaxed">{description}</p>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link href={ctaHref} className="btn-accent text-base group">
              {ctaLabel}
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="mailto:info@washdrone.se" className="group text-sm font-medium text-white/50 transition-colors hover:text-forest-400">
              eller maila{' '}
              <span className="underline underline-offset-4 decoration-white/20 group-hover:decoration-forest-400/50 transition-colors">
                info@washdrone.se
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
