import { test, expect, Locator } from '@playwright/test'

test("Getting values from all pages", async ({ page }) => {
    await page.goto("https://editor.datatables.net/examples/api/backNext.html")
    await expect(page.locator('#example tbody tr')).toHaveCount(10)

    let hasbtn = true
    while (hasbtn) {
        const rows = await page.locator('#example tbody tr').all()
        for (let row of rows) {
            console.log(await row.innerText())
        }
        const nxtbtn = page.locator("[aria-label='Next']")
        const nxbtndis = await nxtbtn.getAttribute('class')
        if (nxbtndis?.includes('disabled')) {
            hasbtn = false
        }
        else {
            await nxtbtn.click()
        }
    }
})
test('Searching particular value', async ({ page }) => {

    await page.goto("https://editor.datatables.net/examples/api/backNext.html")
    await expect(page.locator('#example tbody tr')).toHaveCount(10)
    await page.locator(".dt-input").fill('Caesar Vance')
    await expect(page.locator('#example tbody tr')).toHaveCount(1)
    const rows = await page.locator("#example tbody tr").all()
    await expect(rows.length).toBe(1)
    for (let row of rows) {
        const position = await row.locator('td').nth(1).innerText()
        console.log(position)
    }

})
test.only('Datas based on name', async ({ page }) => {

    await page.goto("https://editor.datatables.net/examples/api/backNext.html")
    await expect(page.locator('#example tbody tr')).toHaveCount(10)
    const rows = await page.locator("#example tbody tr")
    const row = await rows.count()
    let found = true
while(found)
{
   for (let i = 0; i < row; i++) {
        const coloumns = await rows.nth(i).locator('td').allInnerTexts()
        if(coloumns.includes("Fiona Green")){
           console.log(coloumns[2])
           found = false
        } 
    }
    if((await page.locator("[aria-label='Next']").getAttribute('class'))?.includes('disabled'))
    {
console.log("No more pages")
    }
 await page.locator("[aria-label='Next']").click() 
}
 
})