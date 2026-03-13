import { test, expect, Locator } from '@playwright/test'

test("Input box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const firstname: Locator = page.locator("#name")
    await firstname.fill("Karthik")
    const input: string = await firstname.inputValue()
    console.log(input)
    await page.waitForTimeout(5000)

})

test.only("radio buttons", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const radiobtn: Locator = page.locator('[name="gender"]')
    const count: number = await radiobtn.count()
    for (let i = 0; i < count; i++) {
        let radio = await radiobtn.nth(i)
        await expect(radio).toBeVisible()
        let value = await radio.getAttribute("value")
        if (value == 'female') {
            radio.check()
        }

    }
const radiobtn1: Locator[] = await page.locator('[name="gender"]').all()
for(let radio of radiobtn1){
    let btn =  radio.getAttribute("value")
    if((await btn)?.trim().includes("Male"))    {
        await radio.check()
        
    }
}

await page.waitForTimeout(5000)
})