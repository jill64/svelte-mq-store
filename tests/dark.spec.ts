import { expect, test } from '@playwright/test'

test('dark', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.getByText('Device is dark mode')).toBeVisible()
})
