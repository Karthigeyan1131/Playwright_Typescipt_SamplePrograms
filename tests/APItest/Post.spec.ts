import{test,expect} from '@playwright/test' 

test('Post Api request test',async({request})=>{

    const requestbody ={
    "firstname": "karthik",
    "lastname": "downey",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2013-02-23",
        "checkout": "2014-10-23"
    },
    "additionalneeds": "Anything"
}
const response=await request.post('https://restful-booker.herokuapp.com/booking',{data:requestbody})
const responsebody = await response.json()
console.log(responsebody)

expect(response.status()).toBe(200)
expect(response.ok()).toBeTruthy()
expect(responsebody).toHaveProperty('bookingid')
expect(responsebody).toHaveProperty('booking.bookingdates.checkin')


})