import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Google Search', async () => {
  const browser: Browser = await chromium.launch({headless: false});
  const page: Page = await browser.newPage();
  await page.goto('https://www.google.com');
    const searchBox: Locator = await page.locator('//*[@name="q"]');
    await searchBox.fill("Playwright");
    await searchBox.press('Enter');
    await expect(page).toHaveTitle(/Playwright/);
  await browser.close();
});