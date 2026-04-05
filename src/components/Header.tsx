'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
  { label: 'Kontakt', href: '/offert' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [kunskapDropdownOpen, setKunskapDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-forest-950 border-b border-forest-900 shadow-sm'
          : 'bg-forest-950 border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/timberdrone-logo.png"
            alt="TimberDrone"
            width={180}
            height={48}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudnavigation">
          {/* Tjänster dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setDropdownOpen(false) }}
          >
            <Link
              href="/tjanster"
              className="flex items-center gap-1.5 rounded-sm px-4 py-2 text-sm font-bold text-white/70 transition-colors hover:text-white hover:bg-forest-900"
            >
              Tjänster
              <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <div className={`absolute left-0 top-full pt-1 transition-all duration-100 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className="w-64 panel-dark p-1 shadow-xl">
                {SERVICE_ITEMS.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-sm px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-forest-800"
                    tabIndex={dropdownOpen ? 0 : -1}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Kunskap dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setKunskapDropdownOpen(true)}
            onMouseLeave={() => setKunskapDropdownOpen(false)}
            onFocus={() => setKunskapDropdownOpen(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setKunskapDropdownOpen(false) }}
          >
            <Link
              href="/kunskap"
              className="flex items-center gap-1.5 rounded-sm px-4 py-2 text-sm font-bold text-white/70 transition-colors hover:text-white hover:bg-forest-900"
            >
              Kunskap
              <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${kunskapDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <div className={`absolute left-0 top-full pt-1 transition-all duration-100 ${kunskapDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className="w-64 panel-dark p-1 shadow-xl">
                {KUNSKAP_ITEMS.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-sm px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-forest-800"
                    tabIndex={kunskapDropdownOpen ? 0 : -1}
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
              className="rounded-sm px-4 py-2 text-sm font-bold text-white/70 transition-colors hover:text-white hover:bg-forest-900"
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-4 pl-4 border-l border-forest-900">
            <Link
              href="/offert"
              className="btn-primary"
            >
              Begär offert
            </Link>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex flex-col gap-1.5 p-2 text-white/70 hover:text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Öppna meny"
        >
          <span className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-forest-950 border-t border-forest-900 max-h-[calc(100dvh-5rem)] overflow-y-auto" aria-label="Mobilmeny">
          <div className="container-page py-6 space-y-2">
            <div className="font-bold text-white/50 text-xs tracking-widest uppercase mb-2">Tjänster</div>
            <div className="space-y-1 mb-6">
              {SERVICE_ITEMS.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-2 py-2 text-sm font-bold text-white/80 hover:text-white hover:bg-forest-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>

            <div className="font-bold text-white/50 text-xs tracking-widest uppercase mb-2">Kunskap</div>
            <div className="space-y-1 mb-6">
              {KUNSKAP_ITEMS.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-2 py-2 text-sm font-bold text-white/80 hover:text-white hover:bg-forest-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1 mb-6 border-t border-forest-900 pt-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-2 text-sm font-bold text-white/80 hover:text-white hover:bg-forest-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-forest-900">
              <Link
                href="/offert"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Begär offert
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
