import Link from 'next/link'

const SERVICE_LINKS = [
  { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
  { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
  { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
  { label: 'LiDAR-skanning', href: '/tjanster/lidar-skanning' },
  { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
  { label: '3D-modellering', href: '/tjanster/3d-modellering' },
]

const KUNSKAP_LINKS = [
  { label: 'Vad är NDVI?', href: '/kunskap/vad-ar-ndvi' },
  { label: 'Barkborre — tidig upptäckt', href: '/kunskap/barkborre-tidigt' },
  { label: 'Drönare vs satellitdata', href: '/kunskap/dronare-vs-satellitdata' },
  { label: 'Alla artiklar', href: '/kunskap' },
]

const FORETAG_LINKS = [
  { label: 'För skogsägare', href: '/for/skogsagare' },
  { label: 'För skogsbolag', href: '/for/skogsbolag' },
  { label: 'För forskning', href: '/for/forskning' },
  { label: 'För kommuner', href: '/for/kommuner' },
  { label: 'Begär offert', href: '/offert' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-950 text-white/60">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page relative">
        <div className="py-16 sm:py-20">
          {/* Top: Logo + columns */}
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 shadow-lg shadow-forest-600/20 transition-transform duration-300 group-hover:scale-105">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L6 10h3l-4 7h4l-3 5h12l-3-5h4l-4-7h3L12 2z" /></svg>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Timber<span className="text-forest-400">Drone</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-white/40 leading-relaxed">
                {/* MÅSTE VERIFIERAS: A6 geografisk täckning */}
                Drönarbaserad skogsinventering och multispektralanalys.
              </p>
              <p className="mt-4 text-sm text-white/30">
                <a href="mailto:info@timberdrone.se" className="hover:text-forest-400 transition-colors">info@timberdrone.se</a>
              </p>
            </div>

            {/* Tjänster */}
            <div>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Tjänster</h3>
              <ul className="space-y-2.5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-forest-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kunskap */}
            <div>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Kunskap</h3>
              <ul className="space-y-2.5">
                {KUNSKAP_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-forest-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Företag */}
            <div>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Kundsegment</h3>
              <ul className="space-y-2.5">
                {FORETAG_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-forest-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-forest-500/40 hover:text-forest-400 hover:bg-forest-600/10">
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-forest-500/40 hover:text-forest-400 hover:bg-forest-600/10">
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-forest-500/40 hover:text-forest-400 hover:bg-forest-600/10">
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} TimberDrone. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6 text-xs text-white/25">
            <span className="transition-colors hover:text-white/50 cursor-pointer">Integritetspolicy</span>
            <span className="transition-colors hover:text-white/50 cursor-pointer">Cookiepolicy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
