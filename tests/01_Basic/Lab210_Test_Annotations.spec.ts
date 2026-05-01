import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    //open the application and verify the title
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('/Playwright/');
});

test.skip('Skipped the test', async ({page}) => {
    //This test is Skipped
})

test.only('focused test', async ({page}) =>{
    //This test only will be executed
});

test.fail('Expected to fail', async ({page}) => { 
    //This test is exected to fail
});

test('Slow test', async ({page}) =>{
    test.slow();
    //This test is marked as slow
});

test('Conditional test', async ({page , browserName}) =>{
    test.skip(browserName == 'firefox', 'This test is not executed on firefox')
});