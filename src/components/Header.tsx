'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'Tjänster', href: '/areamatning-och-skogsbruk' },
  { label: 'Leveranser', href: '/areamatning-och-skogsbruk/leveranser' },
  { label: 'Vanliga frågor', href: '/areamatning-och-skogsbruk/faq' },
  { label: 'Referenscase', href: '/areamatning-och-skogsbruk/case' },
  { label: 'Kontakt', href: '/areamatning-och-skogsbruk/kontakt' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-skog-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold text-skog-800">
          <svg
            className="h-8 w-8 text-skog-600"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16 2L8 14h4l-5 10h6l-5 8h16l-5-8h6l-5-10h4L16 2z" fill="currentColor" />
          </svg>
          WashDrone
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Huvudnavigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-terrain-700 transition-colors hover:bg-skog-50 hover:text-skog-800"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/areamatning-och-skogsbruk/kontakt" className="btn-primary ml-3 text-sm">
            Begär offert
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-terrain-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Öppna meny"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-skog-100 bg-white px-4 pb-4 pt-2 md:hidden" aria-label="Mobilmeny">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-terrain-700 hover:bg-skog-50 hover:text-skog-800"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/areamatning-och-skogsbruk/kontakt"
            className="btn-primary mt-3 block w-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Begär offert
          </Link>
        </nav>
      )}
    </header>
  )
}
