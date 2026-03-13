import { test, expect, chromium } from '@playwright/test'

test('Page Handling', async ({ }) => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await Promise.all([context.waitForEvent('page'),
    page.locator('button:has-text("New Tab")').click()])
    
    const pages = context.pages()
    for(let i=0;i<pages.length;i++)
    {
        const title = await pages[i].title() 
        console.log(await pages[i].title())
        if(title == 'SDET-QA Blog')
        {
          await pages[i].bringToFront()
          await pages[i].locator("[name='q']").fill('karthi')
          break
        }
    }
await page.waitForTimeout(5000)

}) 

test.only('Page Handling approach 2', async ({ }) => {

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

