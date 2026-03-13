import { expect, test } from '@playwright/test'
import fs from 'fs'

test('Downloading the file', async ({ page }) => {
    const downloadpath = 'downloadingfile/textfile.txt'
    const fileexits = fs.existsSync(downloadpath)
    if(fileexits)
    {
        fs.unlinkSync(downloadpath)
    }
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
    await page.locator('#inputText').first().fill('Newfile')
    await page.locator('button#generateTxt').click()
    const [download] = await Promise.all([page.waitForEvent('download'),
    page.locator('a#txtDownloadLink').click()])
    await download.saveAs(downloadpath)
    await page.waitForTimeout(5000)
})