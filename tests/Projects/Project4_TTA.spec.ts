import {test, expect} from '@playwright/test';

test('TTA Bank Validation', async ({page}) =>{
    //1.Open the URL
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    //2.Click on sign in button
    let SignInBtn = page.locator("//button[contains(text(),'Sign Up')]");
    await SignInBtn.click();

    //3.Enter the Details
    let Full_Name = page.getByPlaceholder('John Doe');
    await Full_Name.fill("Riya");

    let Email = page.locator("//input[contains(@type,'email')]");
    await Email.fill("Riya@example.com");

    let Password = page.locator("//input[contains(@type,'password')]");
    await Password.fill("Riya@123");

    let CreateBtn = page.locator("//button[@type='submit']");
    await CreateBtn.click();

    //4.Open the Tranfer Fund Page
    await page.getByRole('button', {name : 'Transfer Funds'}).click();
    
    //5.Enter the transfer details
    let Amount = page.locator("//input[@type='number']");
    await Amount.fill("7000");

    let Note = page.getByPlaceholder("e.g. Rent for October");
    await Note.fill("Grocery");

    let ContinusBtn = await page.getByRole('button', {name : 'Continue'}).click();

    let ConfimBtn =  await page.locator("//div[@class='flex gap-4']/button[contains(text(),'Confirm Transfer')]").click();

    //6.Open the Dashboard Page
    let DashnoardBtn = page.getByRole('button',{name : 'Dashboard'});
    await DashnoardBtn.click();

    //7.Verify the Total Balance Amount
    let TotalBalance = page.locator("//h3[@class='mt-2 text-3xl font-bold']");
    await expect(TotalBalance).toHaveText("$43,000.00");
    console.log("Total Balance is = ", await TotalBalance.textContent());
    


});