import { test, expect, Locator } from '@playwright/test'

test('Static web table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = page.locator("table[name='BookTable'] tbody")
    const rows = table.locator("tr")
    console.log("No of rows:", await rows.count())
    const coloumns = rows.locator("th")
    console.log("No of coloumns", await coloumns.count())
    //Printing all the values
    for (let i = 0; i < await rows.count(); i++) {
        const value = await rows.nth(i).innerText()
        console.log(value)
    }

    const rowval: Locator[] = await rows.all()
    for (let value of rowval.slice(1)) {
        const col = await value.locator('td').allInnerTexts()
        console.log(col.join('\t'))
    }

})
test('Particular row from the table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = page.locator("table[name='BookTable'] tbody")
    const rows = table.locator("tr")
    const coloumns = rows.locator("th")

    const fourth: Locator[] = await rows.nth(4).locator('td').all()

    for (let fourcell of fourth) {
        console.log(await fourcell.innerText())
    }

})
test('Based on Books', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = page.locator("table[name='BookTable'] tbody")
    const rows = table.locator("tr")
    const coloumns = rows.locator("th")
    for (let i = 1; i < await rows.count(); i++) {
        const Coloumn: Locator = rows.nth(i).locator('td').nth(2)
        const colval = await Coloumn.innerText()
        //   for (let val of colval) {
        if (colval === 'Selenium') {
            const author = await rows.nth(i).locator('td').nth(1).innerText()
            console.log(colval, author)
        }
        //  }
    }
    for (let i = 0; i < await rows.count(); i++) {
        const Coloumn: Locator = rows.nth(i).locator('td').nth(2)
        const colval = await Coloumn.allInnerTexts()
        for (let val of colval) {
            if (val === 'Selenium') {
                const author = await rows.nth(i).locator('td').nth(1).innerText()
                console.log(val, author)
            }
        }
    }

})
test.only('Calculating values', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = page.locator("table[name='BookTable'] tbody")
    const rows = table.locator('tr')
    let totalprice = 0
    const allrow = await rows.all()
    for (let rows of allrow.slice(1)) {
        const prices= await rows.locator('td').nth(3).innerText()
        const price = parseInt(prices) 
        totalprice += price 
    }

console.log(totalprice)
})