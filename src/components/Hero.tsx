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
  ctaHref = '/offert',
  secondaryCtaLabel,
  secondaryCtaHref,
  stats,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />
      {/* Topographic overlay */}
      <div className="absolute inset-0 topo-pattern" />

      {/* Animated radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-forest-500/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-forest-400/8 blur-[100px] animate-float-reverse" />

      {/* Floating decorative elements */}
      <div className="absolute top-[15%] right-[10%] w-20 h-20 rounded-full border border-forest-500/10 animate-float-slow" aria-hidden="true" />
      <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-forest-400/30 animate-float" aria-hidden="true" />
      <div className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-forest-300/20 animate-float-reverse" aria-hidden="true" />
      <div className="absolute bottom-[30%] left-[8%] w-16 h-16 rounded-full border border-white/5 animate-float" aria-hidden="true" />

      {/* Decorative tree silhouettes */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] opacity-[0.03]" aria-hidden="true">
        <svg viewBox="0 0 500 300" fill="currentColor" className="text-forest-400 w-full h-full">
          <path d="M450 300 L450 200 L430 200 L460 150 L440 150 L470 100 L450 100 L480 50 L460 50 L490 0 L520 50 L500 50 L530 100 L510 100 L540 150 L520 150 L550 200 L530 200 L530 300Z" />
          <path d="M350 300 L350 220 L335 220 L355 180 L340 180 L365 130 L350 130 L375 80 L360 80 L385 30 L410 80 L395 80 L420 130 L405 130 L430 180 L415 180 L435 220 L420 220 L420 300Z" />
          <path d="M280 300 L280 240 L268 240 L285 205 L273 205 L293 165 L281 165 L300 125 L319 165 L307 165 L327 205 L315 205 L332 240 L320 240 L320 300Z" />
        </svg>
      </div>

      <div className="container-page relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-4xl">
          {badge && (
            <div className="hero-animate-1 mb-6 inline-flex items-center rounded-full bg-forest-500/10 border border-forest-500/20 px-4 py-1.5 backdrop-blur-sm">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-forest-400 pulse-ring" />
              <span className="text-xs font-semibold text-forest-300 tracking-wide uppercase">{badge}</span>
            </div>
          )}

          <h1 className="hero-animate-2 text-display text-white sm:text-display-lg lg:text-display-xl">
            {headline}
          </h1>

          <p className="hero-animate-3 mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            {subheadline}
          </p>

          <div className="hero-animate-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={ctaHref} className="btn-primary text-base group">
              {ctaLabel}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
          <div className="hero-animate-5 mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="group rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-5 text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-forest-500/20">
                <p className="text-2xl font-bold text-white sm:text-3xl tracking-tight">{stat.value}</p>
                <p className="mt-1.5 text-xs font-medium text-white/40 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
