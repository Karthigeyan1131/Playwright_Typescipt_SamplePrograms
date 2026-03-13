import { test, expect, Locator } from '@playwright/test'

test('Validating Duplicates in Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const options: string[] = (await page.locator('#colors>option').allTextContents())
        .map(text => text.trim())

    let duplicates: string[] = []
    let singleset = new Set<String>()

    for (let text of options) {
        if (singleset.has(text)) {
            duplicates.push(text)
        }
        else {
            singleset.add(text)
        }
    }

    console.log("Duplicate values:",duplicates) 
    console.log("Non Duplicates:",singleset) 

    if(duplicates.length>0)
    {
        console.log("Duplicates Found")
    }
    else 
        console.log("Duplicates not Found")
})
