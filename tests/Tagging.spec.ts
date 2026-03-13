import {test,expect} from '@playwright/test' 

test('@sanity sanity test',async()=>{
    console.log('Sanity Test')
})

test('Regression',{tag:'@regression'},async()=>{
    console.log("Regression Test...")
})

test('Both',{tag:['@sanity','@regression']},async()=>{
    console.log("Regression and sanity Test...")
})