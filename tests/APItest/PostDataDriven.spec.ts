import {test,expect} from '@playwright/test'
import fs from 'fs'

test('Post API Using JSOn',async({request})=>{
 
    const path ='testdata/postdata.json'
    const jsondata = await JSON.parse(fs.readFileSync(path,'utf-8')) 
    const response = await request.post('https://restful-booker.herokuapp.com/booking',{data:jsondata}) 
    const responsebody = await response.json()
    console.log(responsebody) 

})