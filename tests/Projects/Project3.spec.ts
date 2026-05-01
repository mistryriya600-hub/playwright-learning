import {test, expect} from '@playwright/test';

test('Login Validation', async ({page}) => {
    //1. Open the Application
    await page.goto('https://app.vwo.com/#/login');

    //2.Enter the invalid Username and Password
    //not use locator get by beacause element is not unique
    let usernameInput = page.locator("#login-username");
    await usernameInput.fill("Riya");

    let passwordInput = page.getByRole('textbox', { name: 'Password' });
    await passwordInput.fill("Riya123");

    let LoginBtn = page.locator("#js-login-btn");
    await LoginBtn.click();

    //3.Verify the error message
    await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
})