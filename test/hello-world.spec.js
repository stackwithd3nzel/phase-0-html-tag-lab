const { test, expect } = require('@playwright/test');

test('application is running', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed
    const title = await page.title();
    expect(title).toBe('Expected Title'); // Replace with the expected title of your application
});