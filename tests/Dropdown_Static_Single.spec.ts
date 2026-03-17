import { test, expect, Locator } from '@playwright/test'

test('Single Select', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const dropdown: Locator = page.locator("#country")
    dropdown.selectOption("Australia")
    await page.waitForTimeout(3000)
    dropdown.selectOption({ value: 'brazil' })
    await page.waitForTimeout(3000)
    dropdown.selectOption({ label: 'Canada' })
    await page.waitForTimeout(3000)
    dropdown.selectOption({ index: 2 })
    await page.waitForTimeout(3000)
})

test.only("validations", async ({ page }) => {
    // 1. Validating the options Count
    await page.goto("https://testautomationpractice.blogspot.com/")
    const optionscount: Locator = page.locator('#animals>option')
    await expect(optionscount).toHaveCount(10)

    //2. Validating the particular option present or not 
    const optionstext: string[] = await optionscount.allTextContents()
    console.log(optionstext)  // This will return the array of Texts with Spaces 
    const trimmedvalue = optionstext.map(text => text.trim())
    console.log(trimmedvalue)
    for (let option of trimmedvalue) {
        if ((option.includes('Giraffe'))) {
            console.log("Option found")
        }
    } 
    expect(trimmedvalue).toContain('Zebra')
})