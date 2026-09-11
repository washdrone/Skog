import { test, expect } from '@playwright/test'

test('service context is preserved and private owners need no company', async ({ page }) => {
  await page.goto('/tjanster/skogsskadeinventering')
  await page.locator('header a[href="/offert?tjanst=skogsskadeinventering"]').click()
  await expect(page.locator('#uppdragstyp')).toHaveValue('Skogsskadeinventering')
  await expect(page.locator('#foretag')).not.toHaveAttribute('required', '')
  await page.locator('#kontaktperson').fill('Test')
  await page.locator('#epost').fill('test@example.com')
  // Isolated browser response: no real lead, email or webhook is sent.
  await page.route('**/api/lead', route => route.fulfill({ status: 502, contentType: 'application/json', body: JSON.stringify({ error: 'Testfel' }) }))
  await page.getByRole('button', { name: 'Skicka förfrågan' }).click()
  await expect(page.getByRole('alert')).toBeVisible()
  await expect(page.locator('#uppdragstyp')).toHaveValue('Skogsskadeinventering')
  await expect(page.locator('#epost')).toHaveValue('test@example.com')
})
