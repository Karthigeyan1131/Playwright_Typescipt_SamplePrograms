import { test, expect } from '@playwright/test'

test('Uploading Files...', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const fileupload = page.locator('#singleFileInput')
    await fileupload.setInputFiles('uploadingfile/file.txt')
    await page.locator("button:has-text('Upload Single File')").click()
    await page.waitForTimeout(5000)
    const status = page.locator("#singleFileStatus")
    console.log(await status.innerText())
    await page.waitForTimeout(5000)
})

test.only('Multiple Files', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#multipleFilesInput").
        setInputFiles(['uploadingfile/file.txt', 'uploadingfile/pdffile.pdf'])
    await page.locator("button:has-text('Upload Multiple Files')").click()
    console.log(await page.locator('#multipleFilesStatus').innerText())
    await page.waitForTimeout(5000)
})