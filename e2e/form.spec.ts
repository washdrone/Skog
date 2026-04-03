import { test, expect } from '@playwright/test'

test.describe('Lead Form (Offert)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/offert', { waitUntil: 'commit' })
  })

  test('form fields are focusable and usable', async ({ page }) => {
    const foretag = page.locator('#foretag')
    await expect(foretag).toBeVisible()
    await foretag.focus()
    await expect(foretag).toBeFocused()
    await foretag.fill('Test AB')
    await expect(foretag).toHaveValue('Test AB')

    const kontakt = page.locator('#kontaktperson')
    await kontakt.fill('Test Person')
    await expect(kontakt).toHaveValue('Test Person')

    const epost = page.locator('#epost')
    await epost.fill('test@example.com')
    await expect(epost).toHaveValue('test@example.com')
  })

  test('select dropdowns work', async ({ page }) => {
    const uppdragstyp = page.locator('#uppdragstyp')
    await expect(uppdragstyp).toBeVisible()
    await uppdragstyp.selectOption('Areamätning')
    await expect(uppdragstyp).toHaveValue('Areamätning')
  })

  test('checkboxes can be toggled', async ({ page }) => {
    const checkbox = page.locator('input[type="checkbox"]').first()
    await checkbox.scrollIntoViewIfNeeded()
    await expect(checkbox).toBeVisible()
    await checkbox.check()
    await expect(checkbox).toBeChecked()
    await checkbox.uncheck()
    await expect(checkbox).not.toBeChecked()
  })

  test('submit button is not blocked by layout', async ({ page }) => {
    const submitBtn = page.locator('button[type="submit"]')
    await submitBtn.scrollIntoViewIfNeeded()
    await expect(submitBtn).toBeVisible()

    const box = await submitBtn.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.width).toBeGreaterThan(0)
    expect(box!.height).toBeGreaterThan(30)
  })
})
