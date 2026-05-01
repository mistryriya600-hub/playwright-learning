import {chromium, Browser, BrowserContext, Page} from '@playwright/test';

async function run (){
     let browser : Browser = await chromium.launch({headless : false});
    console.log("Browser Launched");

    let context : BrowserContext = await browser.newContext();
    console.log("Browser context created", context);

    let page : Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://example.com");
    console.log("Title :", await page.title());
    
    await page.close();
    await context.close();
    await browser.close();
}   

run();