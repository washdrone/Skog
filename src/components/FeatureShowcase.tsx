import Link from 'next/link'
import Image from 'next/image'

const FEATURES = [
  'Georefererade ortofoton och höjdmodeller',
  'Högupplöst bildinsamling med RTK-positionering',
  'Kartlager i branschstandard — Shapefile, GeoTIFF, GeoPackage',
  'Direkt import i QGIS, ArcGIS och verksamhetssystem',
  'Punktmoln (LAS/LAZ) för höjd- och volymanalys',
  'Rikstäckande mobilisering i hela Sverige',
]

export default function FeatureShowcase() {
  return (
    <section className="bg-white border-b border-slate-200 section-padding overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Features with sharp lines */}
          <div>
            <span className="badge">Teknisk plattform</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display tracking-tight">
              Drönardata i oöverträffad upplösning
            </h2>
            <p className="mt-5 text-slate-600 font-body leading-relaxed">
              Drönarbaserad inventering ger betydligt högre rumslig upplösning än satellitdata. Genom att flyga under molntäcket fångar vi exakt det ni behöver, exakt när ni behöver det — med hög markupplösning på den enskilda fastigheten.
            </p>

            <ul className="mt-10 border-t border-slate-200">
              {FEATURES.map((feature, idx) => (
                <li key={feature} className="flex items-center gap-4 py-4 border-b border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400 font-bold">0{idx + 1}</div>
                  <span className="text-sm font-bold text-slate-800 tracking-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/tjanster" className="btn-primary">
                Utforska vår teknik
              </Link>
            </div>
          </div>

          {/* Right: Technical framing visual instead of soft blobs */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="tech-frame aspect-[4/5] bg-slate-50 border border-slate-200 shadow-xl overflow-hidden group relative">
              <Image
                src="/sunny_ortofoto.png"
                alt="Georefererat ortofoto över skogsbestånd från drönare"
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 512px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-950/20 mix-blend-multiply" />

              {/* Map grid simulation */}
              <div className="absolute inset-0 bg-mapping-grid opacity-20 mix-blend-overlay" />
              
              {/* Technical framing lines */}
              <div className="absolute top-8 left-0 right-0 h-px bg-forest-500/20" />
              <div className="absolute top-0 bottom-0 left-8 w-px bg-forest-500/20" />
              <div className="absolute bottom-8 left-0 right-0 h-px bg-forest-500/20" />
              <div className="absolute top-0 bottom-0 right-8 w-px bg-forest-500/20" />
              
              {/* Center focus crosshair element simulating drone focus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-forest-600 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-forest-600 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-forest-600 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-forest-600 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                  <div className="absolute inset-0 m-auto w-1 h-1 bg-accent-500" />
                </div>
              </div>

              {/* Data badges */}
              <div className="absolute bottom-12 left-12 px-3 py-1.5 bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-700 shadow-sm">
                SWEREF99 TM
              </div>
              <div className="absolute bottom-12 right-12 px-3 py-1.5 bg-forest-900 border border-forest-800 text-[10px] font-mono font-bold text-accent-500 shadow-sm">
                ORTOFOTO
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
