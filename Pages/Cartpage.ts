import { Page, Locator } from '@playwright/test'

export class Cart {

    private readonly page: Page
    private readonly cartlink: Locator
    private readonly productslist: Locator
    private readonly placeorderbtn: Locator

    constructor(page: Page) {
        this.page = page
        this.cartlink = this.page.locator("#cartur")
        this.productslist = this.page.locator('#tbodyid tr')
        this.placeorderbtn = this.page.locator("button:has-text('Place Order')")

    }

    async clickcartlink() {
        await this.cartlink.click()
    }

    async checkproduct(productname:string) {

        const allproducts:Locator[] = await this.productslist.all()
        for(let product of allproducts)
        {
            const loc = product.locator('td').nth(1)
            const name = await loc.innerText()
            console.log(name)
            if(name.trim().includes(productname) )
            {
                return true
            }
        }
        return false
    } 

    async clickplaceorderbtn()
    {
        await this.placeorderbtn.click()
    }

}