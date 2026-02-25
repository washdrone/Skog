'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const SERVICE_ITEMS = [
  { label: 'Areamätning', href: '/areamatning-och-skogsbruk/areamatning' },
  { label: 'Inventering', href: '/areamatning-och-skogsbruk/inventering' },
  { label: 'Avverkningsunderlag', href: '/areamatning-och-skogsbruk/avverkningsunderlag' },
  { label: 'Skadeinventering', href: '/areamatning-och-skogsbruk/skadeinventering' },
  { label: 'Planteringsuppföljning', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
]

const VEG_ITEMS = [
  { label: 'NDVI-kartläggning', href: '/vegetationsanalys/ndvi-kartlaggning' },
  { label: 'Stressanalys', href: '/vegetationsanalys/stressanalys' },
  { label: 'Uppföljning över tid', href: '/vegetationsanalys/uppfoljning-over-tid' },
]

const NAV_ITEMS = [
  { label: 'Leveranser', href: '/areamatning-och-skogsbruk/leveranser' },
  { label: 'Case', href: '/areamatning-och-skogsbruk/case' },
  { label: 'FAQ', href: '/areamatning-och-skogsbruk/faq' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [vegDropdownOpen, setVegDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-night-950/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 shadow-lg shadow-forest-600/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-forest-600/40">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L6 10h3l-4 7h4l-3 5h12l-3-5h4l-4-7h3L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Wash<span className="text-forest-400">Drone</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudnavigation">
          {/* Mätning & kartläggning dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/areamatning-och-skogsbruk"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
            >
              Mätning
              <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 rounded-2xl bg-night-950/95 backdrop-blur-2xl border border-white/[0.08] p-2 shadow-2xl shadow-black/30">
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
            )}
          </div>

          {/* Vegetationsanalys dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setVegDropdownOpen(true)}
            onMouseLeave={() => setVegDropdownOpen(false)}
          >
            <Link
              href="/vegetationsanalys"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/[0.06]"
            >
              Vegetationsanalys
              <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${vegDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            {vegDropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 rounded-2xl bg-night-950/95 backdrop-blur-2xl border border-white/[0.08] p-2 shadow-2xl shadow-black/30">
                  {VEG_ITEMS.map((child) => (
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
            )}
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
            href="/areamatning-och-skogsbruk/kontakt"
            className="ml-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-forest-500/30 transition-all duration-300 hover:bg-forest-400 hover:shadow-xl hover:shadow-forest-400/30 hover:-translate-y-0.5 active:translate-y-0 group"
          >
            Boka en fri konsultation
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
          aria-label="Öppna meny"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-night-950/98 backdrop-blur-2xl border-t border-white/[0.06]" aria-label="Mobilmeny">
          <div className="container-page py-6 space-y-1">
            <Link
              href="/areamatning-och-skogsbruk"
              className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Mätning & kartläggning
            </Link>
            <div className="ml-4 space-y-1 border-l border-white/[0.08] pl-4">
              {SERVICE_ITEMS.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-xl px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
            <Link
              href="/vegetationsanalys"
              className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Vegetationsanalys
            </Link>
            <div className="ml-4 space-y-1 border-l border-white/[0.08] pl-4">
              {VEG_ITEMS.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-xl px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
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
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/areamatning-och-skogsbruk/kontakt"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-forest-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest-500/30 transition-all duration-300 hover:bg-forest-400"
                onClick={() => setMobileOpen(false)}
              >
                Boka en fri konsultation
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
