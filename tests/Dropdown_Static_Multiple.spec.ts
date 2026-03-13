import{test,expect,Locator} from '@playwright/test' 

test('select multiple',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/') 
    const options:Locator = page.locator('#colors') 
    await options.selectOption(['Red','Blue']) 
    await options.selectOption([{label:'Green'},{label:'Yellow'},{label:'White'}]) 
    await page.waitForTimeout(5000)
}) 
 