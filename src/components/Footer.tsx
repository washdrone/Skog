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
    <footer className="relative overflow-hidden bg-night-950 text-white/60">
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] rounded-full bg-forest-500/[0.04] blur-[100px]" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page relative">
        <div className="grid gap-12 border-b border-white/[0.06] py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 shadow-lg shadow-forest-600/20 transition-transform duration-300 group-hover:scale-105">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L6 10h3l-4 7h4l-3 5h12l-3-5h4l-4-7h3L12 2z" /></svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Wash<span className="text-forest-400">Drone</span></span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed">Professionella drönarbaserade mät- och underlagstjänster för skogsbruk och fastighetsförvaltning i hela Sverige.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">Tjänster</p>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-300 hover:text-forest-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">Information</p>
            <ul className="mt-5 space-y-3">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-300 hover:text-forest-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">Kontakt</p>
            <div className="mt-5 space-y-4">
              <a href="mailto:info@washdrone.se" className="group flex items-center gap-3 text-sm transition-colors duration-300 hover:text-forest-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover:bg-forest-600/20 group-hover:border-forest-500/30">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                info@washdrone.se
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                Hela Sverige
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} WashDrone. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6 text-xs text-white/25">
            <span className="transition-colors hover:text-white/50 cursor-pointer">Integritetspolicy</span>
            <span className="transition-colors hover:text-white/50 cursor-pointer">Cookiepolicy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
