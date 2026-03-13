import {test,expect} from '@playwright/test' 

test('HardAssertion',async({page})=>{

    await page.goto("https://demoblaze.com/index.html") 

    expect((await page.title()).includes('STORE')).toBeTruthy() 
 await expect(page.locator('#signin2')).not.toBeEnabled()   //fails 
 await expect(page.locator('a.navbar-brand')).toBeVisible()
 await page.waitForTimeout(5000)
}) 

test('SoftAssertion',async({page})=>{

    await page.goto("https://demoblaze.com/index.html") 

    expect((await page.title()).includes('STORE')).toBeTruthy() 
 await expect.soft(page.locator('#signin2')).not.toBeEnabled()   //fails 
 await expect.soft(page.locator('a.navbar-brand')).toBeVisible() 
 await page.locator("[class^='card-img-top img-fluid']").first().click()
 await page.waitForTimeout(5000)
})