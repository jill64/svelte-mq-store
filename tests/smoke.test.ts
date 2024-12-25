import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('result.v: undefined')).toBeVisible()

  await page.emulateMedia({ colorScheme: 'dark' })
  await expect(page.getByText('result.v: true')).toBeVisible()

  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.getByText('result.v: false')).toBeVisible()
})
