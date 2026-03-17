import { test, expect } from '@playwright/test'
import fs from 'fs'

function getjsondata(path: string) {

    return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

test('Put Request Api', async ({ request }) => {

    console.log('Creating a Data in API')
    const postdata = getjsondata('testdata/postdata.json')
    const reqresponse = await request.post('https://restful-booker.herokuapp.com/booking', { data: postdata })
    const postresponsebody = await reqresponse.json()
    const bookingid = await postresponsebody.bookingid
    console.log('------------------------------')

    console.log('Generating the token')
    const tokendata = getjsondata('testdata/tokendata.json')
    const tokenresponse = await request.post('https://restful-booker.herokuapp.com/auth', { data: tokendata })
    const tokenresponsebody = await tokenresponse.json()
    const token = await tokenresponsebody.token
    console.log('------------------------------')

    console.log('Updating the data using PUT')
    const putdata = getjsondata('testdata/putdata.json')
    const putresponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {
        headers: { 'Cookie': `token=${token}` },
        data: putdata
    }) 
    const putresponsebody = await putresponse.json()
    console.log(putresponsebody)
    console.log(putresponse.status())
    expect(putresponse.status()).toBe(200)

})