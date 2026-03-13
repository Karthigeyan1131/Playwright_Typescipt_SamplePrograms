import {test,expect} from '@playwright/test' 

test('Keyboard action',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/') 
const box1 = await page.locator('#input1').focus()
 await page.keyboard.type('karthi')
 await page.keyboard.press('Control+A')
 await page.keyboard.down('Control')
 await page.keyboard.press('C')
 await page.keyboard.up('Control')
 await page.keyboard.press('Tab')
 await page.keyboard.press('Tab')
 const box2 = await page.locator('#input2').click()
 await page.keyboard.press('Control+v')

await page.waitForTimeout(5000)

})