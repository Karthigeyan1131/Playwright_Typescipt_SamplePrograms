import { test, expect } from '@playwright/test'

import { Loginpage } from '../../Pages/Login'
import { Home } from '../../Pages/Productpage'
import { Cart } from '../../Pages/Cartpage'

test('Verify and Place order', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html')
    const login = new Loginpage(page)
    await login.perfomlogin('pavanol', 'test@123')
    const home = new Home(page)
    await home.clickproduct('Iphone 6 32gb')
    await page.waitForTimeout(2000)
    await home.clickaddtocart('Iphone 6 32gb')
    const cart = new Cart(page)
    await cart.clickcartlink()
    await page.waitForTimeout(2000)
    const verfiyprouct = await cart.checkproduct('Iphone 6 32gb')
    expect(verfiyprouct).toBe(true)
    await cart.clickplaceorderbtn()
})