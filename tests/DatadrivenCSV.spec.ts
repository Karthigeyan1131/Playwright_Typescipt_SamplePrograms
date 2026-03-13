import { test, expect } from '@playwright/test'
import fs from 'fs'
import { parse } from 'csv-parse/sync'

const csvpath = 'testdata/logindata.csv'
const filecontent = fs.readFileSync(csvpath, 'utf-8')
const records: any = parse(filecontent, {
    columns: true,
    skip_empty_lines: true,
    trim: true
})

for (let data of records) {

    test.describe.only('Logging App', async () => {

        test(`Login Test of ${data.username} and ${data.password}`, async ({ page }) => {

            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            await page.locator("[name='username']").fill(data.username)
            await page.locator("[name='password']").fill(data.password)
            await page.locator("div>button").click()

            if ((data.validity).toLowerCase() === 'valid') {
                const upgradebtn = page.locator("div>a>button")
                await expect(upgradebtn).toBeVisible({ timeout: 10000 })
            }
            else {
                const invalidmsg = await page.locator('div>p').nth(0).innerText()
                console.log(invalidmsg)
                expect(invalidmsg).toBe('Invalid credentials')
            }

        })
    })

}