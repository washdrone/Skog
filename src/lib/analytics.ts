'use client'

/**
 * Lightweight GA4 event helper.
 * Only fires if gtag is loaded (script injected in layout).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/* Pre-defined events for the forestry section */
export const events = {
  formStart: () => trackEvent('form_start', { form_name: 'lead_skog' }),
  formSubmit: () => trackEvent('form_submit', { form_name: 'lead_skog' }),
  clickCall: () => trackEvent('click_call'),
  clickEmail: () => trackEvent('click_email'),
  clickBook: () => trackEvent('click_book'),
  scrollDepth: (pct: number) => trackEvent('scroll_depth', { percent: pct }),
}

/* Type augmentation for gtag on window */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}
