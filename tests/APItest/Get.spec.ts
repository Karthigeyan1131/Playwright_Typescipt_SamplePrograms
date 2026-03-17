import {test,expect} from '@playwright/test'

test('Get Request using path parameter',async({request})=>{ 

    const bookid = '2217'
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookid}`)
    const responsebody = await response.json()
    console.log(responsebody)

}) 

test('Get Request using query parameter',async({request})=>{ 
    const response = await request.get("https://restful-booker.herokuapp.com/booking",{ params:
        {
            firstname:"Eric",
            lastname:"Jackson"
        }
    })
     const responsebody = await response.json()
    console.log(responsebody)
})