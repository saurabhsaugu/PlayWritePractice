// Example with https://www.flipkart.com/
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Type Character with Delay Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(2000);
    const searchBox: Locator = await page.locator('(//input[@name="q"])[1]');
    await searchBox.pressSequentially("Laptop", { delay: 100 });
    await searchBox.press('Enter');
    await expect(page).toHaveTitle(/Laptop/);
    await browser.close();
});