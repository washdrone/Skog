import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  deliveryPreview?: boolean
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
  deliveryPreview = false,
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
    <section className="relative overflow-hidden bg-forest-900 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 border-b border-forest-800">
      <div className="absolute inset-0 bg-mapping-grid opacity-[0.05] pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Editorial content */}
          <div className="max-w-2xl">
            {badge && (
              <div className="mb-8 inline-flex items-center gap-3">
                <div className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-mono font-bold text-accent-500 uppercase tracking-widest">{badge}</span>
              </div>
            )}

            <h1 className="text-heading-xl text-white font-display sm:text-display-lg tracking-tight">
              {headline}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 font-body sm:text-xl">
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
            
            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="mt-16 grid grid-cols-2 gap-y-4 gap-x-8 sm:grid-cols-4 border-t border-forest-800/50 pt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-xs font-mono text-white/70 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Technical framing / Data visualization */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            {deliveryPreview ? (
              <figure className="overflow-hidden rounded-2xl border border-forest-700 bg-white shadow-2xl">
                <a href="/images/services/tradhojdsmatning.webp" target="_blank" rel="noopener noreferrer" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500" aria-label="Visa trädhöjdsmätningen i större format (ny flik)">
                  <Image src="/images/services/tradhojdsmatning.webp" alt="Punktmoln med vertikal mätlinje för trädhöjd" width={1672} height={941} sizes="(min-width: 1280px) 592px, (min-width: 1024px) calc(50vw - 48px), (min-width: 640px) 512px, calc(100vw - 32px)" className="h-auto w-full" priority />
                </a>
                <figcaption className="p-5 sm:p-6">
                  <p className="font-bold text-slate-900">Från flygbilder till höjdunderlag</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Så kan en leverans se ut. Mätvärdena är exempelvärden.</p>
                  <Link href="/tjanster/tradhojdsmatning" className="mt-4 inline-block text-sm font-bold text-forest-700 underline underline-offset-4">Läs om trädhöjdsmätning</Link>
                </figcaption>
              </figure>
            ) : (
            <div className="tech-frame aspect-[4/3] w-full border-forest-800 bg-forest-900 shadow-2xl relative group">
              <Image 
                src="/forestry_drone.png" 
                alt="Drönare för skogsinventering i flygning över svensk barrskog"
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 512px, 100vw"
                className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105"
                priority
              />

              {/* Corner crosshairs */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-forest-500/50" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-forest-500/50" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-forest-500/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-forest-500/50" />
              
              {/* Map grid simulation */}
              <div className="absolute inset-0 bg-mapping-grid opacity-10" />
              
            </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
