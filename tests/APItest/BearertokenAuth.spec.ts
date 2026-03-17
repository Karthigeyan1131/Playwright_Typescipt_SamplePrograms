import {test,expect} from '@playwright/test' 

test('Bearer Token Authentication',async({request})=>{

    const token =' '
    const response = request.get('',{
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
})