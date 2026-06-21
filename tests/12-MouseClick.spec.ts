// Mouse Click Exmaple with https://demo.guru99.com/test/simple_context_menu.html
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
test('Mouse Click Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
    await page.locator('//span[text()="right click me"]').click({button: 'right'});
    await page.locator('//span[text()="Edit"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//span[text()="right click me"]').click({button: 'right'});
    await page.locator('//span[text()="Cut"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//button[text()="Double-Click Me To See Alert"]').dblclick();
    await page.waitForTimeout(2000);
});