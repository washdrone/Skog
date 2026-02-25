'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if dismissed this session
    if (sessionStorage.getItem('stickyCTADismissed')) {
      setDismissed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    // Observe the hero section (first section after header)
    const hero = document.querySelector('section')
    if (hero) observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem('stickyCTADismissed', 'true')
  }

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 translate-y-0 animate-fade-up lg:bottom-6 lg:left-auto lg:right-6 lg:w-auto">
      <div className="flex items-center gap-3 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-5 py-3 shadow-2xl lg:rounded-2xl lg:border lg:border-slate-200/80 lg:px-6 lg:py-4"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <Link
          href="/areamatning-och-skogsbruk/kontakt"
          className="btn-primary text-sm whitespace-nowrap"
        >
          Boka en fri konsultation
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <button
          onClick={handleDismiss}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Stäng"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
