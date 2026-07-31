import Link from 'next/link'
import Image from 'next/image'

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
    <section className="relative overflow-hidden bg-forest-900 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 border-b border-forest-800">
      {/* Subtle organic forest texture in the background to make it less sterile/dark */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        {/*
          * Rent dekorativ bakgrundstextur (opacity 10 %, mix-blend-overlay).
          * Tom alt enligt WCAG — skärmläsare ska hoppa över den.
          * priority borttagen: bilden är inte LCP-element och konkurrerade
          * tidigare om bandbredd med hjältebilden till höger.
          */}
        <Image
          src="/sunny_ortofoto.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
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

            <p className="mt-6 text-lg leading-relaxed text-white/50 font-body sm:text-xl">
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
                    <p className="mt-1 text-xs font-mono text-white/40 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Technical framing / Data visualization */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
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
              
              {/* Mock data overlay elements */}
              <div className="absolute top-8 right-8 flex flex-col gap-2">
                <div className="bg-forest-950/80 border border-forest-800 px-3 py-1.5 text-[10px] font-mono text-accent-500">
                  LAT 59.3293 N
                </div>
                <div className="bg-forest-950/80 border border-forest-800 px-3 py-1.5 text-[10px] font-mono text-accent-500">
                  LON 18.0686 E
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8">
                <div className="bg-forest-950/80 border border-forest-800 px-4 py-2 text-xs font-mono text-white/70">
                  <span className="text-accent-500 font-bold mr-2">SYS</span> ACTIVE_SCAN
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
