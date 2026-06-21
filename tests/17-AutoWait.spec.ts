import { test } from '@playwright/test';

// Default Auto wait duration is 30 sec for Playwiright, but we can set it to 5 sec for demonstration purposes
test.use({
  // Set a default timeout for all actions to demonstrate global auto-wait behavior
  actionTimeout: 5000, // 5 seconds
});

// 1. Default auto-wait behavior
test('should automatically wait for elements to be ready', async ({ page }) => {
  await page.goto('https://example.com');
  const button = await page.getByRole('button', { name: 'Submit' });
  await button.click(); // This will automatically wait for the button to be ready
});

// 2. Overriding auto-wait behavior at the action level
test('should allow overriding auto-wait behavior', async ({ page }) => {
  await page.goto('https://example.com');
  const button = await page.getByRole('button', { name: 'Submit' });
  await button.click({ timeout: 2000 }); // This will disable auto-wait for this action
});

// 3. Overriding auto-wait behavior at test level
test('should allow overriding auto-wait behavior globally', async ({ page }) => {
  // Disable auto-wait globally
  page.setDefaultTimeout(2000);
    await page.goto('https://example.com');
    const button = await page.getByRole('button', { name: 'Submit' });
    await button.click(); // This will not wait for the button to be ready
});