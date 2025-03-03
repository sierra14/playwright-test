const { test, expect } = require('@playwright/test');

test('Verify title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByTestId('user-name').fill('standard_user');

    await page.getByTestId('password').fill('secret_sauce');

    await page.getByTestId('login-button').click();

    await expect(page.getByText('Products')).toBeVisible();
});
