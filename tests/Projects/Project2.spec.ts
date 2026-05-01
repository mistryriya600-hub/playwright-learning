import {test, expect} from '@playwright/test';

test('Open the Application', async ({page}) =>{
    //1. Open the Application
    await page.goto('https://katalon-demo-cura.herokuapp.com');

    //2. Click on the make appointment button
    let makeAppointmentButton = page.locator('.text-vertical-center #btn-make-appointment');
    await makeAppointmentButton.click();

    //3. Enter the username and password
    let usernameInput = page.locator('#txt-username')
    await usernameInput.fill("John Doe");

    let passwordInput = page.locator('#txt-password');
    await passwordInput.fill("ThisIsNotAPassword");

    let LoginBtn = page.locator("#btn-login");
    await LoginBtn.click();

    //4. Verify the URL
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');

    //5.Verify the Page Content Text
    let pageContent = page.locator(".col-sm-12.text-center");
    await expect(pageContent).toContainText("Make Appointment");
})