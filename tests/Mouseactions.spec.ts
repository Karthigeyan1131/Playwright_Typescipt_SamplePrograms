import { test, expect } from '@playwright/test'

test('Hover', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const ele = page.locator('button.dropbtn')
    await ele.hover()
    await page.waitForTimeout(2000)
    await page.locator('.dropdown-content a:nth-child(1)').hover()
    await page.waitForTimeout(2000)
})

test.only('Double click',async({page})=>{
      await page.goto('https://testautomationpractice.blogspot.com/')
    const ele = page.locator("button:has-text('Copy Text')")
    await ele.dblclick() 
    const inputvalue = (await page.locator("#field2").innerText())
    console.log(inputvalue)
})