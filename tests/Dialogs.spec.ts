import {test,expect} from '@playwright/test' 

test('simple alert',async({page})=>
{

await page.goto("https://testautomationpractice.blogspot.com/")

page.on('dialog',async(dialog)=>{ 
    await expect(dialog.type()).toContain('alert')
    console.log('Message from alert:',dialog.message())
await dialog.accept()
})

await page.locator("button[id='alertBtn']").click()
await page.waitForTimeout(5000)
})

test('confirmation alert',async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/') 
page.on('dialog',async(dialog)=>{
console.log('Message from Alert:',dialog.message())
await dialog.accept()
})
await page.locator("button[id='confirmBtn']").click()
const text =await page.locator("#demo").innerText() 
console.log(text) 
await expect(text).toContain('You pressed OK!')
}) 

test.only('Prompt alert',async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/') 
page.on('dialog',async(dialog)=>{
console.log('Message from Alert:',dialog.message())
console.log(dialog.defaultValue())
await dialog.accept('Karthik')
})
await page.locator("button[id='promptBtn']").click()
const text =await page.locator("#demo").innerText() 
console.log(text) 
await expect(text).toContain('Hello Karthik! How are you today?')
}) 