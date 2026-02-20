import Link from 'next/link'

interface HeroProps {
  badge?: string
  headline: string
  subheadline: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  stats?: { value: string; label: string }[]
}

export default function Hero({
  badge,
  headline,
  subheadline,
  ctaLabel = 'Begär offert',
  ctaHref = '/areamatning-och-skogsbruk/kontakt',
  secondaryCtaLabel,
  secondaryCtaHref,
  stats,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden gradient-hero">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />
      {/* Topographic overlay */}
      <div className="absolute inset-0 topo-pattern" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-forest-500/10 blur-[120px]" />

      <div className="container-page relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-4xl">
          {badge && (
            <div className="mb-6 inline-flex items-center rounded-full bg-forest-500/10 border border-forest-500/20 px-4 py-1.5">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-forest-400 animate-pulse-slow" />
              <span className="text-xs font-semibold text-forest-300 tracking-wide uppercase">{badge}</span>
            </div>
          )}

          <h1 className="text-display text-white sm:text-display-lg lg:text-display-xl">
            {headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={ctaHref} className="btn-primary text-base">
              {ctaLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="btn-secondary text-base">
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>

        {/* Stats bar */}
        {stats && stats.length > 0 && (
          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 text-center">
                <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-white/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
