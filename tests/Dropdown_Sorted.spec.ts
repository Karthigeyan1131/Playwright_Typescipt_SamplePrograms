import {test,expect} from '@playwright/test' 

test('validating sorted/not',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/') 
    const optionstext:string[] = await page.locator('#animals>option').allTextContents() 
    const trimmedvalue = optionstext.map(text=>text.trim())

    let originalarr=[...trimmedvalue] 
    let sortedarr=[...trimmedvalue].sort() 

    console.log(originalarr) 
    console.log(sortedarr)
    expect(originalarr).toEqual(sortedarr)
})