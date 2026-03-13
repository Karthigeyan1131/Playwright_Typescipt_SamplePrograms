import { test, expect } from '@playwright/test'

test('timeouts', async ({ page }) => {

    test.setTimeout(30000)
    await page.goto('https://demoblaze.com/index.html')
    await page.locator("#login2").click({ timeout: 30000 })
    await expect(page.locator("//button[text()='Log in']"))
        .toBeVisible({ timeout: 50000 })

        await page.locator("#loginusername").fill('Karthi',{force:true})
        await expect(page.locator("#loginpassword")).toBeEditable()
    await page.waitForTimeout(5000)
})