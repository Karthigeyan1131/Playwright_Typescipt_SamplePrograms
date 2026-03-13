import { test, expect } from '@playwright/test'

test('Muliplewindows', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('https://testautomationpractice.blogspot.com/')
    await Promise.all([page.waitForEvent('popup'), page.locator("#PopUp").click()])
    const windows = context.pages()
    console.log(windows.length)
    for (let window of windows) {

        const title = await window.title()
        console.log(title)
        //         if(title.includes('Selenium'))
        //         {
        // await window.locator("//a[text()='Register now!']").click()
        //         }
        if (title.includes('Playwright')) {
            await window.locator("//a[text()='Get started']").click()
            break
        }
    }
    await page.waitForTimeout(5000)
})