import { test, expect} from '@playwright/test' 
import { request } from 'node:http'

test('Basic auth Username and password',async({request})=>{
    const response = await request.get('https://httpbin.org/#/Auth/get_basic_auth__user___passwd_',{

        headers:{
            Authorization :'Basic ' + Buffer.from("user:pass").toString('base64')
        }
    })
 //   const responsebody = await response.json() 
    expect(response.status()).toBe(200)

})