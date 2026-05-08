import {test, expect} from '@playwright/test';

test('Web Table Validation', async ({page}) =>{
    //1. Open the URL
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //2.Search Kabir
    const name = await page.locator(".search-box").fill("kabir");
    
    //3.Select the Checkbox
    const checkbox = page.locator("//table[@aria-label='Employee Management System table']/tbody/tr", {hasText : 'Kabir.Khan'}).locator('input[type="checkbox"]');
    await checkbox.check();

    //4.Verify the Name
    await expect(page.locator("//div[@id='selected-output']")).toHaveText("Kabir.Khan");
})
