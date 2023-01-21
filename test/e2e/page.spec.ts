import { test, expect } from '@playwright/test'

test('job board test', async ({ page, baseURL }) => {
    await page.goto('http://localhost:3000' + '/') // <-- Nuxt app is running and route '/' is showing.

    // Step 1 - Is Homepage working
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible()
})
