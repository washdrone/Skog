'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'

const SERVICE_ITEMS = [
  { label: 'Skogsinventering', href: '/tjanster/skogsinventering' },
  { label: 'Multispektralanalys', href: '/tjanster/multispektralanalys' },
  { label: 'Barkborredetektering', href: '/tjanster/barkborre-detektering' },
  { label: 'LiDAR-skanning', href: '/tjanster/lidar-skanning' },
  { label: 'Ortofoto & kartering', href: '/tjanster/ortofoto-kartering' },
  { label: 'Kolinlagring & ESG', href: '/tjanster/kolinlagring' },
  { label: 'Skadedokumentation', href: '/tjanster/skadedokumentation' },
  { label: 'Årsavtal', href: '/tjanster/arsavtal' },
  { label: 'Alla tjänster →', href: '/tjanster' },
]

const KUNSKAP_ITEMS = [
  { label: 'Vad är NDVI?', href: '/kunskap/vad-ar-ndvi' },
  { label: 'Barkborre — tidig upptäckt', href: '/kunskap/barkborre-tidigt' },
  { label: 'Vad påverkar priset?', href: '/kunskap/vad-paverkar-priset' },
  { label: 'Säsongsguide', href: '/kunskap/sasongsguide-skogsinventering' },
  { label: 'Kolinlagring i skog', href: '/kunskap/kolinlagring-skog-guide' },
  { label: 'Drönare vs satellitdata', href: '/kunskap/dronare-vs-satellitdata' },
  { label: 'Alla artiklar →', href: '/kunskap' },
]

const NAV_ITEMS = [
  { label: 'Platser', href: '/platser' },
  { label: 'Kontakt', href: '/areamatning-och-skogsbruk/kontakt' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [kunskapDropdownOpen, setKunskapDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const kunskapDropdownRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setDropdownOpen(false)
        setKunskapDropdownOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-forest-600/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group sm:gap-3" onClick={closeMobile}>
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-forest-400 shadow-lg shadow-forest-400/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-forest-400/40 sm:h-10 sm:w-10">
            <svg className="h-[18px] w-[18px] text-forest-600 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L6 10h3l-4 7h4l-3 5h12l-3-5h4l-4-7h3L12 2z" />
            </svg>
          </div>
          <span className="text-lg font-display font-bold text-white tracking-tight sm:text-xl">
            Timber<span className="text-forest-400">Drone</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudnavigation">
          {/* Tjänster dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/tjanster"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
              onFocus={() => setDropdownOpen(true)}
            >
              Tjänster
              <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="w-72 rounded-2xl bg-forest-600/95 backdrop-blur-2xl border border-white/[0.08] p-2 shadow-2xl shadow-black/30">
                {SERVICE_ITEMS.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-xl px-4 py-2.5 text-sm text-white/60 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Kunskap dropdown */}
          <div
            ref={kunskapDropdownRef}
            className="relative"
            onMouseEnter={() => setKunskapDropdownOpen(true)}
            onMouseLeave={() => setKunskapDropdownOpen(false)}
          >
            <Link
              href="/kunskap"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
              onFocus={() => setKunskapDropdownOpen(true)}
            >
              Kunskap
              <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${kunskapDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                kunskapDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="w-64 rounded-2xl bg-forest-600/95 backdrop-blur-2xl border border-white/[0.08] p-2 shadow-2xl shadow-black/30">
                {KUNSKAP_ITEMS.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-xl px-4 py-2.5 text-sm text-white/60 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/offert"
            className="ml-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-2.5 text-sm font-sans font-semibold text-white shadow-lg shadow-accent-600/30 transition-all duration-300 hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:translate-y-0 group"
          >
            Begär offert
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-white/70 hover:text-white hover:bg-white/[0.06] lg:hidden transition-all duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
        >
          <div className="relative h-6 w-6">
            <svg
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'max-h-[calc(100dvh-4rem)] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <nav
          className="bg-forest-600/98 backdrop-blur-2xl border-t border-white/[0.06] overflow-y-auto max-h-[calc(100dvh-4rem)]"
          aria-label="Mobilmeny"
          style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
        >
          <div className="container-page py-4 space-y-1">
            <Link
              href="/tjanster"
              className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              onClick={closeMobile}
            >
              Tjänster
            </Link>
            <div className="ml-4 space-y-0.5 border-l border-white/[0.08] pl-4">
              {SERVICE_ITEMS.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-xl px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  onClick={closeMobile}
                >
                  {child.label}
                </Link>
              ))}
            </div>
            <Link
              href="/kunskap"
              className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              onClick={closeMobile}
            >
              Kunskap
            </Link>
            <div className="ml-4 space-y-0.5 border-l border-white/[0.08] pl-4">
              {KUNSKAP_ITEMS.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-xl px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  onClick={closeMobile}
                >
                  {child.label}
                </Link>
              ))}
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/offert"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-accent-600 px-6 py-3.5 text-sm font-sans font-semibold text-white shadow-lg shadow-accent-600/30 transition-all duration-300 hover:bg-accent-500"
                onClick={closeMobile}
              >
                Begär offert
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
