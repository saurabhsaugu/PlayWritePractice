// Mouse Hover Example with https://automationpractice.qualitytestinghub.com/hovers/
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
test('Mouse Hover Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://automationpractice.qualitytestinghub.com/hovers/');
    await page.locator('//button[text()="Testing Pyramid"]').hover();
    await page.locator('//a[text()="API Testing"]').click();
    await page.waitForTimeout(2000);
});
