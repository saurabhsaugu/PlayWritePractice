// Exmaple for File Upload with Flipkart
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 

test('Focus on Element Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(2000);
    const searchBox: Locator = await page.locator('(//input[@name="q"])[1]');
    await searchBox.focus();
    await page.waitForTimeout(2000);
    await searchBox.press('Enter');
    await page.waitForTimeout(2000);
    await browser.close();
});