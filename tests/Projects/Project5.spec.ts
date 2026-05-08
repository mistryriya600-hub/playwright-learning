import {Page, test, expect} from '@playwright/test';

const Base_URL = "https://app.thetestingacademy.com/playwright/tables/practice";
const Upload_Image = "";

test('QA Profile From Validation', async ({page}) => {
    // Open the URL
    await page.goto(Base_URL);

    //Personal Information
    await page.getByRole('textbox', {name: 'firstName'}).fill("Riya");
    await page.getByRole('textbox', {name: 'lastName'}).fill("Mistry");

    //Gender
    await page.getByLabel("Female").check();

    //Years of experience
    await page.locator("#years-experience").selectOption("3");

    //Date 
    await page.locator("#profile-date").fill("05/07/2026");

    //Profession
    await page.locator("//input[@value='Automation Tester'])").check();

    //Technical skills
    //Automation Tools
    await page.locator("//input[@value='UFT']").check();
    await page.locator("Protractor").check();

    //Country you Works 
    await page.locator("//input[@value='Asia']").check();
    await page.locator("//input[@value='Antarctica']").check();

    //Selenium commands
    await page.getByRole('button', {name: "Browser Commands"}).click();
    await page.getByRole('button', {name: "Wait Commands"}).click();
    
    
})