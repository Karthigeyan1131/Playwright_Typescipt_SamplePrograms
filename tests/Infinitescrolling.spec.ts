import {
    test, expect
} from '@playwright/test'

test('Scrolling to end of page', async ({ page }) => {

    test.slow()

    await page.goto('https://www.booksbykilo.in/new-books')
    let previousheight = 0;
    let bookfound = false
    while (true) {
 
        const booktitle = await page.locator('#divItemCard h3').allInnerTexts() 
        if(booktitle.includes('Hamstermagic'))
        {
            console.log("Book Found...")
            bookfound = true
            break
        }
        await page.evaluate(async () => {
            window.scrollTo(0, document.body.scrollHeight)
        })
        await page.waitForTimeout(2000)
        const currentheight = await page.evaluate(async () => {
            return document.body.scrollHeight
        })

        console.log("Previous Height is:", previousheight)
        console.log("Current height is:", currentheight)

        if (currentheight === previousheight) {
            break;
        }
        else {
            previousheight = currentheight
        }
    }
 
    if(!bookfound)                   // (bookfound === false) 
    {
        console.log('Your Book not found')
    }


})