import { test, expect } from '@playwright/test'

test("Check Loactors", async ({ page }) => {

    await page.goto("https://www.nopcommerce.com/en/demo")
    //By AltText
    await expect(page.getByAltText("nopCommerce")).toBeVisible()
    //By Text 
    await expect(page.getByText("The Perfect Solution!")).toHaveText("The Perfect Solution!")
    //By Role 
     //await page.getByRole('link', { name: 'Get started' }).nth(1).click() //clicking based on index 
    await page.locator('#ph-topic')
        .getByRole('link', { name: "Get started" })
        .click() //Tracing the element
}
) 
test('Check Lable Locator',async({page})=>{

await page.goto("https://www.nopcommerce.com/en/register?returnUrl=%2Fen") 
await expect(page.getByRole('heading',{name:'Register'})).toBeVisible()
await page.getByLabel('First name:').fill('karthi') 

})
