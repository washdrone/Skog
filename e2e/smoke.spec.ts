import { test, expect } from '@playwright/test'

const CRITICAL_PAGES = [
  { path: '/', name: 'Startsida' },
  { path: '/tjanster', name: 'Tjänster' },
  { path: '/offert', name: 'Offert' },
  { path: '/kunskap', name: 'Kunskap' },
  { path: '/platser', name: 'Platser' },
]

for (const page of CRITICAL_PAGES) {
  test(`${page.name} (${page.path}) loads without errors`, async ({ page: p }) => {
    const errors: string[] = []
    p.on('pageerror', (err) => errors.push(err.message))

    const response = await p.goto(page.path, { waitUntil: 'commit', timeout: 30000 })
    expect(response?.status()).toBeLessThan(400)

    // Wait for Next.js app to hydrate
    await p.waitForSelector('body', { timeout: 15000 })

    // No blocking JS errors from own code (ignore third-party like gtag)
    const ownErrors = errors.filter(
      (e) => !e.includes('gtag') && !e.includes('googletagmanager')
    )
    expect(ownErrors).toHaveLength(0)
  })
}
