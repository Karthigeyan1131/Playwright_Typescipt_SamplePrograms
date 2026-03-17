import { test, expect } from '@playwright/test'
import fs from 'fs'

function getjsondata(path: string) {

    return JSON.parse(fs.readFileSync(path, 'utf-8'))
}
test('Patch -- Updating the partial Data', async ({ request }) => {

    const postdata = await getjsondata('testdata/postdata.json')
    const reqresponse = await request.post('https://restful-booker.herokuapp.com/booking', { data: postdata })
    const reqresponsebody = await reqresponse.json()
    const id = await reqresponsebody.bookingid
    console.log(reqresponsebody)

    const tokendata = await getjsondata('testdata/tokendata.json')
    const tokenresponse = await request.post('https://restful-booker.herokuapp.com/auth', { data: tokendata })
    const tokenresponsebody = await tokenresponse.json()
    const token = await tokenresponsebody.token

    const patchdata = await getjsondata('testdata/patchdata.json')
    const patchresponse = await request.patch(`https://restful-booker.herokuapp.com/booking/${id}`,
                                             { data: patchdata, headers: { "Cookie": `token=${token}` } })
    const patchresponsebody = await patchresponse.json()
    console.log(patchresponsebody)
})