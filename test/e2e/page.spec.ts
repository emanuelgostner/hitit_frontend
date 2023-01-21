import { test, expect } from '@playwright/test'

test('Login test', async ({ page }) => {
    await page.goto('/')

    // Step 1 - Is Homepage working
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible()
})
