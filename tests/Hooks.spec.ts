import { test, expect, Page, Locator } from '@playwright/test'

test.describe.serial('Cart flow',async()=>{
    let page: Page

test.beforeAll('Launching the Application', async ({ browser }) => {

    page = await browser.newPage()
    await page.goto("https://demoblaze.com/")
})

test.afterAll("Closing the application", async () => {
    await page.close()
})

test.beforeEach('Login', async ({ browser }) => {
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('button:has-text("Log in")').click()
})

test.afterEach('Logging out', async () => {
    await page.locator('#logout2').click()
})

test('Adding product to cart', async () => {
    const products: Locator[] = await page.locator('div>h4>a').all()
    for (let product of products) {
        const nameofprod = await product.innerText()
        if (nameofprod === 'Sony xperia z5') {
            await product.click()
            break
        }
    }
    page.on('dialog',async(dialog)=>{
        const msg = dialog.message()
        expect(msg).toBe('Product added.')
        dialog.accept()
    })
    await page.locator("div>a[onclick='addToCart(6)']").click()
}) 

test('Checking Cart and place order',async()=>{
    await page.locator('a:has-text("Cart")').click()
    const proudcttable = page.locator("table.table  tbody") 
    const prodrows = await proudcttable.locator("tr").all() 

    for(let prod of prodrows){
        const texts =await prod.locator('td').allInnerTexts()
        if(texts.includes('Sony xperia z5'))
        {
            console.log("Added product in the cart...")
            break
        }
    }
await page.locator('button:has-text("Place Order")').click()
await page.locator("button[class='close']").nth(2).click()
})

})