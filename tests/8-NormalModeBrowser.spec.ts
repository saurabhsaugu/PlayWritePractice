// Normal Mode Browser Example
import { test, expect } from '@playwright/test';
import type { Browser, BrowserContext, Page } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
test('Normal Mode Browser Example', async () => {
  const browser: BrowserContext= await chromium.launchPersistentContext('', { headless: false });
//   const page: Page = await browser.newPage();

// Bug in Playwright 1.35.0 where newPage() is openging one extra page with launchPersistentContext, so using browser.pages()[0] to get the first page.
  const pages: Page[] = await browser.pages();
  const page: Page = pages[0] || await browser.waitForEvent('page'); // To Remove the Error
    await page.goto('https://www.google.com');
    const searchBox = await page.locator('//*[@name="q"]');
    await searchBox.fill("Playwright");
    await searchBox.press('Enter');
    await expect(page).toHaveTitle(/Playwright/);
  await browser.close();
});