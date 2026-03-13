import { test, expect, Locator } from '@playwright/test'

test('Selecting Hidden Element', async ({ page }) => {

    await page.goto("https://www.flipkart.com/")
    await page.locator("input[name='q']").first().fill("phone")
    const options: Locator = page.locator('ul>li')
    await page.waitForTimeout(3000)
    let count = await options.count()
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).innerText()
        console.log(text)
        if (text === 'phone 3') {
            await options.nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
})

test.only('Selecting AutoSuggest Non-hidden', async ({ page }) => {

    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=14810921153787661095&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007810&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
    await page.locator('#twotabsearchtextbox').first().fill('watch')
    await page.waitForTimeout(3000)
    const options: string[] = await page.
                      locator('[class="two-pane-results-container"]>div>div')
                      .allTextContents() 
    console.log(options)

 for(let value of options)
 {
    if(value === 'watches for men original')
    {
        const option =  await page.getByLabel(value) 
        await option.click()
        break
    }
 }
await page.waitForTimeout(5000)

})