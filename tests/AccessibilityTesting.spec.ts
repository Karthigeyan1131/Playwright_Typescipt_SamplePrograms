import {test,expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('Testing all accessibility',async({page})=>{

    await page.goto('https://demoblaze.com/')
    const accessres = await new AxeBuilder({page}).analyze() 
    console.log(accessres)
    expect(accessres.violations).toEqual([])
    expect(accessres.violations.length).toBe(0)
}) 

test.only('With Specific Rules',async({page})=>{
    await page.goto('https://demoblaze.com/') 
    const accessres = await new AxeBuilder({page}).withRules(['duplicate-id']).analyze()
console.log(accessres.violations.length)
})