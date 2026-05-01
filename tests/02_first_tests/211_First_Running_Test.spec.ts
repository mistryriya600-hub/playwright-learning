// **Creating your first Playwright test:**

// - Test structure
// - Basic assertions
// - Navigation
// - Element interaction

import {test, expect} from '@playwright/test';

test('Verify our first TC', async ({page}) => {

    await page.goto('https://app.vwo.com');

    await expect(page).toHaveTitle('Login - VWO'); // toHaveTitle retune the promise

    const imag_vwo = page.locator('#vow-login-logo'); //no retune the promise

    await expect(imag_vwo).toBeVisible();
});