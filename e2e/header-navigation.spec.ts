import { test, expect } from '@playwright/test'

test.describe('Header & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit', timeout: 30000 })
    await page.waitForSelector('header', { timeout: 15000 })
  })

  test('header is visible', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()
  })

  test('logo links to home', async ({ page }) => {
    const logo = page.locator('header a[href="/"]').first()
    await expect(logo).toBeVisible()
  })

  test('desktop nav links are visible on desktop', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop-only test')
    const nav = page.locator('nav[aria-label="Huvudnavigation"]')
    await expect(nav).toBeVisible()
  })

  test('mobile menu button is visible on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test')
    const menuBtn = page.locator('button[aria-label="Öppna meny"]')
    await expect(menuBtn).toBeVisible()
  })

  test('mobile menu opens and closes', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test')

    const menuBtn = page.locator('button[aria-label="Öppna meny"]')
    const mobileNav = page.locator('nav[aria-label="Mobilmeny"]')

    // Menu should not be visible initially
    await expect(mobileNav).not.toBeVisible()

    // Open menu
    await menuBtn.click()
    await expect(mobileNav).toBeVisible()
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true')

    // Close menu
    await menuBtn.click()
    await expect(mobileNav).not.toBeVisible()
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
  })

  test('mobile menu links are clickable', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test')

    const menuBtn = page.locator('button[aria-label="Öppna meny"]')
    await menuBtn.click()

    const mobileNav = page.locator('nav[aria-label="Mobilmeny"]')
    await expect(mobileNav).toBeVisible()

    // Click a navigation link
    const link = mobileNav.locator('a[href="/tjanster/skogsinventering"]')
    await expect(link).toBeVisible()
    await link.click()

    // Menu should close after navigation
    await expect(mobileNav).not.toBeVisible()
  })

  test('navigation works after route change', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test')

    const menuBtn = page.locator('button[aria-label="Öppna meny"]')

    // Open menu and navigate
    await menuBtn.click()
    const mobileNav = page.locator('nav[aria-label="Mobilmeny"]')
    const link = mobileNav.locator('a[href="/tjanster"]').first()
    await link.click()

    // Wait for navigation
    await page.waitForURL('**/tjanster', { waitUntil: 'commit' })

    // Menu button should still work on new page
    await expect(menuBtn).toBeVisible()
    await menuBtn.click()
    await expect(page.locator('nav[aria-label="Mobilmeny"]')).toBeVisible()
  })

  test('"Begär offert" CTA is visible and clickable', async ({ page }) => {
    // On mobile, the CTA is inside the mobile menu; on desktop it's in the header
    const cta = page.locator('header').locator('a[href="/offert"]').first()
    await expect(cta).toBeVisible()
    await cta.click()
    await page.waitForURL('**/offert', { waitUntil: 'commit' })
  })
})
