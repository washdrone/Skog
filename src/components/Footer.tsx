import Link from 'next/link'
import Image from 'next/image'

const SERVICE_LINKS = [
  { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
  { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
  { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
  { label: 'LiDAR-skanning', href: '/tjanster/lidar-skanning' },
  { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
  { label: 'Kolinlagring & ESG', href: '/tjanster/kolinlagring' },
  { label: 'Skadedokumentation', href: '/tjanster/skadedokumentation' },
  { label: 'Årsavtal', href: '/tjanster/arsavtal' },
]

const KUNSKAP_LINKS = [
  { label: 'Vad är NDVI?', href: '/kunskap/vad-ar-ndvi' },
  { label: 'Barkborre — tidig upptäckt', href: '/kunskap/barkborre-tidigt' },
  { label: 'Vad påverkar priset?', href: '/kunskap/vad-paverkar-priset' },
  { label: 'Säsongsguide', href: '/kunskap/sasongsguide-skogsinventering' },
  { label: 'Drönare vs satellitdata', href: '/kunskap/dronare-vs-satellitdata' },
]

const FORETAG_LINKS = [
  { label: 'För skogsägare', href: '/for/skogsagare' },
  { label: 'För skogsbolag', href: '/for/skogsbolag' },
  { label: 'För fastighetsköpare', href: '/for/fastighet' },
  { label: 'För forskning', href: '/for/forskning' },
  { label: 'För kommuner', href: '/for/kommuner' },
  { label: 'Platser', href: '/platser' },
  { label: 'Begär offert', href: '/offert' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white border-t border-forest-900">
      <div className="container-page py-16 sm:py-24">
        {/* Top: Logo + columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/timberdrone-logo.png"
                alt="TimberDrone"
                width={180}
                height={48}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-sm text-white/50 leading-relaxed font-body">
              Rikstäckande drönarbaserad skogsinventering, fotogrammetri och multispektral analys.
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:info@timberdrone.se" className="block text-sm font-bold text-accent-500 hover:text-accent-400">info@timberdrone.se</a>
            </div>
          </div>

          {/* Tjänster */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest mb-6">Tjänster</h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-bold text-white/70 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kunskap */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest mb-6">Kunskap & Artiklar</h3>
            <ul className="space-y-3">
              {KUNSKAP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-bold text-white/70 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segment */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest mb-6">Målgrupper</h3>
            <ul className="space-y-3">
              {FORETAG_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-bold text-white/70 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-900 bg-forest-950">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs font-mono text-white/40">&copy; {new Date().getFullYear()} TimberDrone. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6 text-xs font-bold text-white/50">
            <Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link>
            <Link href="/cookiepolicy" className="hover:text-white transition-colors">Cookiepolicy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
