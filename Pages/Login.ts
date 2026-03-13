import { Page, Locator } from '@playwright/test'

export class Loginpage {

    private readonly page: Page
    private readonly loginlink: Locator
    private readonly usernameinput: Locator
    private readonly passwordinput: Locator
    private readonly loginbtn: Locator

    constructor(page: Page) {
        this.page = page 
        this.loginlink = this.page.locator('#login2')
        this.usernameinput = this.page.locator('#loginusername')
        this.passwordinput = this.page.locator('#loginpassword')
        this.loginbtn = this.page.locator("button:has-text('Log in')")
    }

    async clickloginlink()
    {
        await this.loginlink.click()
    }

    async enterusername(username:string)
    {
        await this.usernameinput.clear()
        await this.usernameinput.fill(username)
    }
    async enterpassword(password:string)
    {
        await this.passwordinput.clear()
        await this.passwordinput.fill(password)
    }
    async clickloginbtn()
    {
        await this.loginbtn.click()
    }

    async perfomlogin(username:string,password:string)
    {
        await this.clickloginlink()
        await this.enterusername(username)
        await this.enterpassword(password)
        await this.clickloginbtn()
    }
}