import Link from 'next/link'

const SERVICE_LINKS = [
  { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
  { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
  { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
  { label: 'LiDAR-skanning', href: '/tjanster/lidar-skanning' },
  { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
  { label: 'Kolinlagring & ESG', href: '/tjanster/kolinlagring' },
  { label: 'Skadedokumentation', href: '/tjanster/skadedokumentation' },
  { label: 'Årsavtal', href: '/tjanster/arsavtal' },
  { label: 'Jaktkartering', href: '/tjanster/jaktkartering' },
  { label: 'Alla tjänster', href: '/tjanster' },
]

const KUNSKAP_LINKS = [
  { label: 'Vad är NDVI?', href: '/kunskap/vad-ar-ndvi' },
  { label: 'Barkborre — tidig upptäckt', href: '/kunskap/barkborre-tidigt' },
  { label: 'Vad påverkar priset?', href: '/kunskap/vad-paverkar-priset' },
  { label: 'Säsongsguide', href: '/kunskap/sasongsguide-skogsinventering' },
  { label: 'Kolinlagring i skog', href: '/kunskap/kolinlagring-skog-guide' },
  { label: 'Drönare vs satellitdata', href: '/kunskap/dronare-vs-satellitdata' },
  { label: 'Alla artiklar', href: '/kunskap' },
]

const FORETAG_LINKS = [
  { label: 'För skogsägare', href: '/for/skogsagare' },
  { label: 'För skogsbolag', href: '/for/skogsbolag' },
  { label: 'För fastighetsköpare', href: '/for/fastighet' },
  { label: 'För forskning', href: '/for/forskning' },
  { label: 'För kommuner', href: '/for/kommuner' },
  { label: 'Begär offert', href: '/offert' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-600 text-white/60">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page relative">
        <div className="py-16 sm:py-20">
          {/* Top: Logo + columns */}
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-400 shadow-lg shadow-forest-400/20 transition-transform duration-300 group-hover:scale-105">
                  <svg className="h-5 w-5 text-forest-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L6 10h3l-4 7h4l-3 5h12l-3-5h4l-4-7h3L12 2z" /></svg>
                </div>
                <span className="text-xl font-display font-bold text-white tracking-tight">
                  Timber<span className="text-forest-400">Drone</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                Rikstäckande drönarbaserad skogsinventering och multispektralanalys.
              </p>
              <p className="mt-4 text-sm text-white/60">
                <a href="mailto:info@timberdrone.se" className="hover:text-forest-400 transition-colors">info@timberdrone.se</a>
              </p>
            </div>

            {/* Tjänster */}
            <div>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Tjänster</h3>
              <ul className="space-y-2.5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-forest-400 transition-colors">{link.label}</Link>
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
                    <Link href={link.href} className="text-sm text-white/60 hover:text-forest-400 transition-colors">{link.label}</Link>
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
                    <Link href={link.href} className="text-sm text-white/60 hover:text-forest-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
          <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} TimberDrone. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/integritetspolicy" className="hover:text-forest-400 transition-colors">Integritetspolicy</Link>
            <Link href="/cookiepolicy" className="hover:text-forest-400 transition-colors">Cookiepolicy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
