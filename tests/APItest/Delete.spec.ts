import {test,expect} from '@playwright/test'
import fs from 'fs'

function getjsondata(path:string)
{
    return JSON.parse(fs.readFileSync(path,'utf-8'))
}

test('Deleting the data',async({request})=>{

    const postdata = await getjsondata('testdata/postdata.json')
    const reqresponse = await request.post('https://restful-booker.herokuapp.com/booking', { data: postdata })
    const reqresponsebody = await reqresponse.json()
    const id = await reqresponsebody.bookingid
    console.log(reqresponsebody) 

    const tokendata = getjsondata('testdata/tokendata.json')
    const tokenresponse = await request.post('https://restful-booker.herokuapp.com/auth',{data:tokendata})
    const tokenresponsebody = await tokenresponse.json()
    const token = await tokenresponsebody.token

    const deleteresponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${id}`,
                                                {headers:{'Cookie': `token = ${token}`}})
    console.log(deleteresponse.statusText())

})