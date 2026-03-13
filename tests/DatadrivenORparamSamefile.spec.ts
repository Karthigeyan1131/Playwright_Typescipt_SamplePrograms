import { test, expect } from '@playwright/test'
import { exec } from 'node:child_process'

const datas: string[] = ['Phone', 'Mobile', 'apple']

for (const data of datas) {
    test.describe('Searching', async () => {
        test(`Product search ${data}`, async ({ page }) => {

            await page.goto("https://tutorialsninja.com/demo/")
            await page.locator("[name='search']").fill(data)
            await page.locator("div>span>button").click()
            await expect(page.locator('div>h4>a')).toBeVisible()

        })
    })

}

const logindata: string[][] = [['Admin', 'admin123', 'valid'],
['Admine', 'admin321', 'invalid'],
['Admins', 'admin12', 'valid']]

for (let [username, password, validity] of logindata) {
    test.describe.only('Logging App', async () => {

        test(`Login Test of ${username} and ${password}`, async ({ page }) => {

            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            await page.locator("[name='username']").fill(username)
            await page.locator("[name='password']").fill(password)
            await page.locator("div>button").click()

            if (validity.toLowerCase() === 'valid') {
                const upgradebtn = page.locator("div>a>button")
                await expect(upgradebtn).toBeVisible()
            }
            else {
                const invalidmsg = await page.locator('div>p').nth(0).innerText()
                console.log(invalidmsg)
                expect(invalidmsg).toBe('Invalid credentials')
            }

        })
    })
}


