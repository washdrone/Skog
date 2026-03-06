import Link from 'next/link'

interface CTABandProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CTABand({
  headline = 'Kontakta oss',
  description = 'Berätta om ert uppdrag så återkommer vi med en prisindikation inom 24 timmar. Vi arbetar rikstäckande med skogsbolag, förvaltare och myndigheter.',
  ctaLabel = 'Begär offert',
  ctaHref = '/offert',
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background: rich forest gradient simulating aerial photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-600 to-forest-900" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 topo-pattern opacity-30" />

      {/* Atmospheric glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-forest-600/15 blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] rounded-full bg-forest-500/10 blur-[100px]" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container-page relative z-10 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading-xl text-white font-display sm:text-display lg:text-display-lg">{headline}</h2>
          <p className="mt-4 text-base text-white/60 font-body leading-relaxed sm:mt-5 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-sans font-semibold text-white shadow-lg shadow-accent-600/30 transition-all duration-300 hover:bg-accent-500 hover:shadow-xl hover:-translate-y-0.5"
            >
              {ctaLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@timberdrone.se"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
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
