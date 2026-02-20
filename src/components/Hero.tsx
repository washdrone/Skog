import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  proofItems?: string[]
}

export default function Hero({
  headline,
  subheadline,
  ctaLabel = 'Begär offert',
  ctaHref = '/areamatning-och-skogsbruk/kontakt',
  secondaryCtaLabel,
  secondaryCtaHref,
  proofItems,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-terrain-950">
      {/* Background topo texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo-hero" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M40 40c40 0 60 40 100 40s60-30 100-30" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.6" />
              <path d="M-20 80c40 10 60 50 100 50s60-40 100-40" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.4" />
              <path d="M20 120c30 0 50 30 90 30s70-20 110-20" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.3" />
              <path d="M0 160c40 0 70 30 110 30s50-20 90-20" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-hero)" />
        </svg>
      </div>

      <div className="container-page relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-terrain-300 sm:text-xl">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href={ctaHref} className="btn-primary text-base">
              {ctaLabel}
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="btn-secondary border-terrain-500 text-terrain-300 hover:bg-terrain-900 text-base">
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>

        {/* Proof bar */}
        {proofItems && proofItems.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-terrain-800 pt-8">
            {proofItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-terrain-400">
                <svg className="h-4 w-4 flex-shrink-0 text-skog-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
