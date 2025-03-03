const { test, expect } = require('@playwright/test');

test('Verificar el título de Google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});
