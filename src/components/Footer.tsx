import Link from 'next/link'

const SERVICE_LINKS = [
  { label: 'Areamätning', href: '/areamatning-och-skogsbruk/areamatning' },
  { label: 'Inventering', href: '/areamatning-och-skogsbruk/inventering' },
  { label: 'Avverkningsunderlag', href: '/areamatning-och-skogsbruk/avverkningsunderlag' },
  { label: 'Skadeinventering', href: '/areamatning-och-skogsbruk/skadeinventering' },
  { label: 'Planteringsuppföljning', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
]

const INFO_LINKS = [
  { label: 'Leveranser & format', href: '/areamatning-och-skogsbruk/leveranser' },
  { label: 'Vanliga frågor', href: '/areamatning-och-skogsbruk/faq' },
  { label: 'Referenscase', href: '/areamatning-och-skogsbruk/case' },
  { label: 'Kontakt & offert', href: '/areamatning-och-skogsbruk/kontakt' },
]

export default function Footer() {
  return (
    <footer className="border-t border-skog-100 bg-terrain-950 text-terrain-300">
      <div className="container-page section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-heading text-lg font-bold text-white">WashDrone</p>
            <p className="mt-3 text-sm leading-relaxed">
              Professionella drönarbaserade mät- och underlagstjänster för skogsbruk och fastighetsförvaltning i hela Sverige.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-terrain-400">Tjänster</p>
            <ul className="mt-4 space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-terrain-400">Information</p>
            <ul className="mt-4 space-y-2">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-terrain-400">Kontakt</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>E-post: <a href="mailto:info@washdrone.se" className="transition-colors hover:text-white">info@washdrone.se</a></p>
              <p>Telefon: <a href="tel:+46000000000" className="transition-colors hover:text-white">Kontakta oss</a></p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-terrain-800 pt-8 text-center text-xs text-terrain-500">
          <p>&copy; {new Date().getFullYear()} WashDrone. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
