import {test,expect} from '@playwright/test'

test("verify page title",async ({page})=>{

await page.goto("https://automationexercise.com/#google_vignette")
let pagetitle:String = await page.title()
console.log(pagetitle) 
await expect(page).toHaveTitle("Automation Exercise")
}) 

test("verify url",async({page})=>
{

    await page.goto("https://automationexercise.com/#google_vignette") 

    await expect(page).toHaveURL(/automationexercise/) 
})