import {test} from '@playwright/test'


test.describe('ui-elements-interact' , ()=>{
    test.beforeEach('navigate to forms' , async ({page} , testInfo)=>{

        await page.goto('http://localhost:4200/pages/iot-dashboard')
        await page.getByText('Forms').click()

    })

    test('enter email by tagName' , async ({page} , testInfo) =>{

        await page.getByText('Form Layouts').click()

        // find by tagName
        // await page.locator('input').fill('skarwa4491@yopmail.com')

/*         // find by id
        await page.locator('#inputEmail1')

        // by css
        await page.locator('.css-locator') */

        // find by placeholder
        await page.locator(`#inputEmail1`).fill('skarwa4491@gmail.com')
    })
})
