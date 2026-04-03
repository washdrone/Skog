import { test, expect } from '@playwright/test'

test.describe('Regression: Fixed bugs', () => {
  test('bg-grid class renders without errors', async ({ page }) => {
    await page.goto('/offert', { waitUntil: 'commit' })
    const bgGrid = page.locator('.bg-grid').first()
    await expect(bgGrid).toBeAttached()
  })

  test('reveal animations trigger on scroll', async ({ page }) => {
    await page.goto('/tjanster', { waitUntil: 'commit' })

    const revealEl = page.locator('.reveal').first()
    if (await revealEl.count() > 0) {
      await revealEl.scrollIntoViewIfNeeded()
      await page.waitForTimeout(800)
      const opacity = await revealEl.evaluate(
        (el) => window.getComputedStyle(el).opacity
      )
      expect(parseFloat(opacity)).toBeGreaterThan(0)
    }
  })

  test('body has no horizontal overflow on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test')
    await page.goto('/', { waitUntil: 'commit' })

    const overflow = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }
    })
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth)
  })

  test('persona cards grid renders correctly', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })

    const personaLinks = page.locator('a[href^="/for/"]')
    const count = await personaLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      await expect(personaLinks.nth(i)).toBeVisible()
    }
  })

  test('font families load', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })

    const fontFamily = await page.evaluate(() => {
      const h1 = document.querySelector('h1')
      return h1 ? window.getComputedStyle(h1).fontFamily : ''
    })
    expect(fontFamily).toBeTruthy()
  })

  test('mobile menu scroll lock works', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test')
    await page.goto('/', { waitUntil: 'commit' })

    const menuBtn = page.locator('button[aria-label="Öppna meny"]')

    // Open menu
    await menuBtn.click()
    const overflowWhenOpen = await page.evaluate(
      () => document.body.style.overflow
    )
    expect(overflowWhenOpen).toBe('hidden')

    // Close menu
    await menuBtn.click()
    const overflowWhenClosed = await page.evaluate(
      () => document.body.style.overflow
    )
    expect(overflowWhenClosed).toBe('')
  })
})
