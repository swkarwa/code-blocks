import {test} from '@playwright/test'


test.beforeAll('run before all test' , ()=>{
    console.log('run once before all test once')
})

test.beforeEach('navigate to home' , async ({page} , testInfo)=>{
    console.log(`executing test: '${testInfo.titlePath[2]}' from suite '${testInfo.titlePath[1]}'`)
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    await page.getByText('Forms').click()
})

test.describe('suite1' , ()=>{

    test.beforeEach('navigate to home' , async ({page} , testInfo)=>{
        console.log(`this will only execute before each test in suite '${testInfo.titlePath[1]}'`)
    })
    
    test('navigate to form layout' , async ({page})=>{
        await page.getByText('Form Layouts').click()
    })
})

test.describe('suite 2' , ()=>{
    test('navigate to date picker' , async ({page})=>{
        await page.getByText('Datepicker').click()
    })
})


