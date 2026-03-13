import { test, expect, Locator } from '@playwright/test'

test('Dynamic table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = page.locator("#taskTable tbody")
    const rows: Locator[] = await table.locator("tr").all()
    let perc = ''
    for (let row of rows) {
        const rowval = await row.locator('td').nth(0).innerText()
        if (rowval.includes("Chrome")) {
            console.log(await row.innerText())
            perc = await row.locator('td:has-text("%")').innerText()
            console.log(perc)
            break
        }
    }
    const actualperc = await page.locator("div>p>strong").nth(0).innerText()
    console.log(actualperc)
    expect(actualperc).toBe(perc)
})

test('verifying memory of firefox', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = page.locator("#taskTable tbody")
    const rows: Locator[] = await table.locator("tr").all()
    let actualmemory = ''
    for (let row of rows) {
        const firstcol = await row.locator('td').nth(0).innerText()
        if (firstcol.includes('Firefox')) {
            console.log(await row.innerText())
            let memory: string[] = await row.locator('td:has-text("MB")').allInnerTexts()
            console.log("actual memory:", memory)
            for (let mem of memory) {
                mem = mem.trim()
                if (mem.endsWith('MB')) {
                    console.log("actual:", mem)
                    actualmemory = mem
                    break
                }
            }
            break
        }
    }
    const expectedmemory = await page.locator('div>p>strong').nth(1).innerText()
    console.log("Expec:", expectedmemory)
    expect(expectedmemory).toEqual(actualmemory)
})

test.only('verifying disk of chrome', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = page.locator("#taskTable tbody")
    const rows: Locator[] = await table.locator("tr").all()
    let actualdisk = ''
    for (let row of rows) {
        const firstcol = await row.locator('td').nth(0).innerText()
        if (firstcol.includes('Chrome')) {
            actualdisk = await row.locator('td:has-text("Mbps")').innerText()
            console.log("Actual:", actualdisk)
        }
    }
    const expecteddisk = await page.locator('div>p>strong').nth(2).innerText()
    console.log("Expec:", expecteddisk)
    expect(expecteddisk).toBe(actualdisk)
})