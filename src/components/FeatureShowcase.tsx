import Link from 'next/link'

const FEATURES = [
  'Georefererade ortofoton med hög markupplösning — LiDAR, RTK och multispektral kamera',
  'Kartlager i branschstandard — Shapefile, GeoPackage, GeoTIFF',
  'Leverans inom avtalad tid',
  'Kvalitetssäkrade data med dokumenterad noggrannhet',
  'Direkt import i era befintliga GIS-system',
  'Rikstäckande — flexibel mobilisering vid akuta behov',
]

export default function FeatureShowcase() {
  return (
    <section className="relative bg-cream-50 section-padding overflow-hidden">
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Features with checkmarks */}
          <div>
            <span className="badge">Varför TimberDrone</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display">
              Professionella drönarunderlag för skog och mark
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Vi kombinerar branschledande drönare, LiDAR, RTK-positionering och multispektral kamera med gedigen skoglig kompetens för att leverera exakta, pålitliga underlag.
            </p>

            <ul className="mt-8 space-y-4">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-500">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/areamatning-och-skogsbruk" className="btn-primary text-sm group">
                Utforska våra tjänster
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Image placeholder with forest/drone scene */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-forest-700 via-forest-600 to-forest-950 shadow-2xl">
              {/* Decorative overlay simulating drone/forest photography */}
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 topo-pattern opacity-40" />
              <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-forest-500/20 blur-[80px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-forest-400/15 blur-[60px]" />

              {/* Centered drone/forest icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                <svg className="h-24 w-24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L6 10h3l-4 7h4l-3 5h12l-3-5h4l-4-7h3L12 2z" />
                </svg>
                <p className="mt-4 text-xs font-medium text-white/30 tracking-wider uppercase">Drönarfoto</p>
              </div>

              {/* Stats overlay in bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 text-center">
                  <p className="text-lg font-bold text-white">Stora arealer</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Per flygning</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 text-center">
                  <p className="text-lg font-bold text-white">Hög upplösning</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Markupplösning</p>
                </div>
              </div>
            </div>

            {/* Decorative floating element */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-forest-50 border border-forest-100 -z-10" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-forest-50/50 border border-forest-100/50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
