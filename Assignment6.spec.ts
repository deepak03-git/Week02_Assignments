import {chromium,firefox,test} from '@playwright/test'

test('launch browser', async () =>{
    const browser= await chromium.launch({headless:false, channel:'msedge'})
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://www.redbus.com/")
    console.log(`The title of the page is ${ await page.title()}`);
    console.log(`The page url is ${page.url()}`);
    await page.waitForTimeout(3000)
    page.url()
    
})

test('launch browser1', async() =>{
    const browser= await firefox.launch({headless:false, channel:'firefox'})
    const browserContext= await browser.newContext()
    const page= await browserContext.newPage()
    await page.goto("https://www.amazon.in/")
    console.log(`The title of the page is ${ await page.title()}`);
    console.log(`The page url is ${page.url()}`);
    await page.waitForTimeout(5000)
    page.url()

})