import { test, expect, chromium } from '@playwright/test'

test('Page Handling', async ({ }) => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await Promise.all([context.waitForEvent('page'),
    page.locator('button:has-text("New Tab")').click()])

    const pages = context.pages()
    for (let i = 0; i < pages.length; i++) {
        const title = await pages[i].title()
        console.log(await pages[i].title())
        if (title == 'SDET-QA Blog') {
            await pages[i].bringToFront()
            await pages[i].locator("[name='q']").fill('karthi')
            break
        }
    }
    await page.waitForTimeout(5000)

})

test('Page Handling approach 2', async ({ }) => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.locator('button:has-text("New Tab")').click()])
    await newPage.locator("[name='q']").fill('karthi')
    await newPage.locator("[value='Search']").click()
    await newPage.waitForLoadState()
})

test.only('Multiple page', async ({ context }) => {

    const page = await context.newPage()
    await page.goto("https://www.tutorialspoint.com/selenium/practice/browser-windows.php")
    const [newpage] = await Promise.all([context.waitForEvent('page'), page.getByRole('button', { name: 'New Tab' }).click()])
    const txt = await newpage.locator('div>h1').nth(1).innerText()
    console.log(txt)
    const [anotherpage] = await Promise.all([context.waitForEvent('page'), newpage.locator("div>a[title*='back']").click()])
    await newpage.bringToFront()
    await newpage.waitForTimeout(5000)
    const allpages = context.pages()
    await allpages[2].bringToFront()
    await allpages[1].bringToFront()
    allpages[1].locator('div>a').nth(0).click()
    for(let pages of allpages){
        let title = await pages.title()
        console.log(title)
        await pages.bringToFront()
        await pages.waitForTimeout(5000)
        await pages.close()
    }
})

