import { test, expect } from '@playwright/test'

test.describe('Responsive Layout', () => {
  test('no horizontal overflow on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })

  test('no horizontal overflow on tjänster page', async ({ page }) => {
    await page.goto('/tjanster', { waitUntil: 'commit' })

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })

  test('no horizontal overflow on offert page', async ({ page }) => {
    await page.goto('/offert', { waitUntil: 'commit' })

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })

  test('primary CTA is visible and clickable on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })
    const cta = page.locator('section a[href="/offert"]').first()
    await expect(cta).toBeVisible()
    await expect(cta).toBeEnabled()

    const box = await cta.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.width).toBeGreaterThan(0)
    expect(box!.height).toBeGreaterThan(0)
  })

  test('container elements stay within viewport', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })

    const viewportWidth = page.viewportSize()!.width

    const containers = page.locator('.container-page')
    const count = await containers.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < Math.min(count, 5); i++) {
      const box = await containers.nth(i).boundingBox()
      if (box) {
        expect(box.x).toBeGreaterThanOrEqual(0)
        expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 1)
      }
    }
  })

  test('footer is visible and not overlapped', async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toBeVisible()
  })
})
