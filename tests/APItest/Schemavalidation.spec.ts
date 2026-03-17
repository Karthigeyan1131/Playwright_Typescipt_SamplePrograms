import {test,expect} from '@playwright/test'
import Ajv from 'ajv' 
import { json } from 'node:stream/consumers'

test('JSON Schema Validation',async({request})=>{
 
    const response = await request.get('https://mocktarget.apigee.net/json')
    const responsebody = await response.json()

    const schema = {
        type:'object', 
        properties: {
            firstName : {type:'string'},
            lastName : {type:'string'},
            city : {type:'string'},
            state : {type:'string'},
        },
        required:['firstName','lastName','city','state'],
        additionalProperties:false
    }
 
    const ajv = new Ajv()
    const validate = ajv.compile(schema)
    const isvalid = validate(responsebody) 
    expect(isvalid).toBeTruthy()
})