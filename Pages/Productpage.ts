import { Page, Locator } from '@playwright/test'

export class Home {

    private readonly page: Page
    private readonly productlist: Promise<Locator[]>
    private readonly actualproduct: Locator
    private readonly addtocartbtn: Locator

    constructor(page: Page) {
        this.page = page
        this.productlist = this.page.locator('.card-title').all()
        this.actualproduct = this.page.locator('div>h2')
        this.addtocartbtn = this.page.locator("a[onclick='addToCart(5)']")

    }

    async clickproduct(productname: string) {
        for (let product of await this.productlist) {
            const name = await product.innerText()
            if (name?.trim() === productname) {
                const locator = product.locator('a')
                await locator.click()
                break
            }
        }
    }

    async clickaddtocart(productname: string) {
        if (await this.actualproduct.innerText() === productname) {
            this.page.on('dialog', async (dialog) => {
                if (dialog.message() === 'Product added.') {
                    await dialog.accept()
                }
            })
            await this.addtocartbtn.click()
        }
    }
}