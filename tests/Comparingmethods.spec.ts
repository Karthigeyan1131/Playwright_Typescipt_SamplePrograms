import { test, expect, Locator } from '@playwright/test'
import { text } from 'node:stream/consumers'

test('innertext vs textcontent', async ({ page }) => {

    await page.goto('https://demoblaze.com/')
    const products: Locator = page.locator('div>h4>a')
    console.log(await products.nth(2).innerText())
    const texts = (await products.nth(3).textContent())
    console.log(texts?.trim())
    for (let i = 0; i < await products.count(); i++) {
        console.log('Using inner text:', await products.nth(i).innerText())
        const value = await products.nth(i).textContent()
        console.log(value?.trim())

    }
})

test.only('.all() method', async ({ page }) => {

    await page.goto('https://demoblaze.com/')
    const products: Locator = page.locator('div>h4>a')
    const productarr: Locator[] = await products.all()
    await expect(products).not.toHaveCount(0)
    //console.log(await productarr[1].innerText())
    for (let val of productarr) {
        const text = val.innerText()
        console.log(text)
    }
})

test('.allTextcontent and allinnerTexts', async ({ page }) => {

    await page.goto('https://demoblaze.com/')
    const products: Locator = page.locator('div>h4>a')
    await expect(products).toHaveCount(9)  //wait for the elements to appear if we know count 
    const prod: string[] = (await products.allTextContents()).map(text=>text.trim())
     const prod1: string[] = await products.allInnerTexts()
    console.log(prod)
    for (let val of prod) {
        console.log(val)
    } 
    for(let pro of prod1)
    {
        console.log(pro) 

    }
})