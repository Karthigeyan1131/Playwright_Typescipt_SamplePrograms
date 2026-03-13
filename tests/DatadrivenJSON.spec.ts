import {test,expect} from '@playwright/test' 
import fs from 'fs' 

const jsonpath = 'testdata/logindata.json'
const logindata = JSON.parse(fs.readFileSync(jsonpath,'utf-8')) 

for (let {username, password, validity} of logindata) {
    test.describe.only('Logging App', async () => {

        test(`Login Test of ${username} and ${password}`, async ({ page }) => {

            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            await page.locator("[name='username']").fill(username)
            await page.locator("[name='password']").fill(password)
            await page.locator("div>button").click()

            if (validity.toLowerCase() === 'valid') {
                const upgradebtn = page.locator("div>a>button")
                await expect(upgradebtn).toBeVisible({timeout:5000})
            }
            else {
                const invalidmsg = await page.locator('div>p').nth(0).innerText()
                console.log(invalidmsg)
                expect(invalidmsg).toBe('Invalid credentials')
            }

        })
    })
}

