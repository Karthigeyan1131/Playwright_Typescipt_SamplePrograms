import { test, expect } from '@playwright/test'

test('Comparing ScreenShot', async ({ page }) => {

    await page.goto('https://demoblaze.com/')
    //await expect(page).toHaveScreenshot('homepage.png') 

    expect(await page.screenshot()).toMatchSnapshot('homepage.png')

    // validating the screenshot of the element 

    const logo = page.locator('a#nava')
     expect(await logo.screenshot()).toMatchSnapshot('logo.png')
})