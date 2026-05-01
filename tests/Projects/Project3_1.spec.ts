import {test, expect} from '@playwright/test';

test('Email Validation', async ({page}) => {
    //1. Open the Application
    await page.goto(" https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");

    //2.Enter the invalid email ID
    let emailInput = page.getByRole("textbox", { name: "email" });
    await emailInput.fill("Riya@gmail.com");

    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").check();
    
    //3.Click on the Create a Free Trial Account button
    let Button = page.getByRole("button", { name : "Create a Free Trial Account"});
    await Button.click();

    //4.Verify the error message
    await expect(page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")).toBeVisible();

})