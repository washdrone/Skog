import { test, expect } from '@playwright/test'

test.describe('FAQ Accordion', () => {
  test('accordion opens and closes on homepage', async ({ page }) => {
    await page.goto('/')

    // Scroll to FAQ section and find accordion buttons (exclude hamburger menu)
    const faqSection = page.locator('section').filter({ hasText: 'Vanliga frågor' })
    await faqSection.scrollIntoViewIfNeeded()

    const faqBtn = faqSection.locator('button[aria-expanded]').first()
    await expect(faqBtn).toBeVisible()

    // Initially closed
    await expect(faqBtn).toHaveAttribute('aria-expanded', 'false')

    // Open
    await faqBtn.click()
    await expect(faqBtn).toHaveAttribute('aria-expanded', 'true')

    // Close
    await faqBtn.click()
    await expect(faqBtn).toHaveAttribute('aria-expanded', 'false')
  })

  test('only one FAQ item open at a time', async ({ page }) => {
    await page.goto('/')

    const faqSection = page.locator('section').filter({ hasText: 'Vanliga frågor' })
    await faqSection.scrollIntoViewIfNeeded()

    const faqBtns = faqSection.locator('button[aria-expanded]')
    const count = await faqBtns.count()
    test.skip(count < 2, 'Need at least 2 FAQ items')

    // Open first
    await faqBtns.first().click()
    await expect(faqBtns.first()).toHaveAttribute('aria-expanded', 'true')

    // Open second — first should close
    await faqBtns.nth(1).click()
    await expect(faqBtns.first()).toHaveAttribute('aria-expanded', 'false')
    await expect(faqBtns.nth(1)).toHaveAttribute('aria-expanded', 'true')
  })
})
