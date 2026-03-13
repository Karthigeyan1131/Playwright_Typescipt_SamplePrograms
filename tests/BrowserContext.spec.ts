import { test, expect, chromium } from '@playwright/test'

test('page creation', async ({ context }) => {

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://www.nopcommerce.com/en/demo")
    await page2.goto('https://testautomationpractice.blogspot.com/')

    await page1.waitForTimeout(5000)
    await page2.waitForTimeout(5000)
})

test('context creation', async ({ browser }) => {

    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://www.nopcommerce.com/en/demo")
    await page2.goto('https://testautomationpractice.blogspot.com/')

    await page1.waitForTimeout(5000)
    await page2.waitForTimeout(5000)
})

test.only('Browser creation', async ({ }) => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://www.nopcommerce.com/en/demo")
    await page2.goto('https://testautomationpractice.blogspot.com/')
    console.log("Number of pages:", await context.pages().length)
    await page1.waitForTimeout(5000)
    await page2.waitForTimeout(5000)
})

