import { expect, test } from '@playwright/test'

test('light', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  await expect(page.getByText('Device is light mode')).toBeVisible()
})
