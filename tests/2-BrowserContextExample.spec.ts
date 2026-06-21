// Example of using BrowserContext in Playwright
import { test, expect } from '@playwright/test';
import type { Browser, BrowserContext, Page } from '@playwright/test';
import { chromium } from 'playwright';

test('BrowserContext Example', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
    // Create a new browser context1:
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();
    // Create a new browser context2:
    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();
    // Create a new browser context3:
    const context3: BrowserContext = await browser.newContext();
    const page3: Page = await context3.newPage();

    await page1.goto('https://practicetestautomation.com/practice-test-login/');
    await page1.fill('#username', 'student');
    await page1.fill('#password', 'Password123');
    await page1.click('#submit');
    await expect(page1.locator('.post-title')).toHaveText('Logged In Successfully');

    await page2.goto('https://practicetestautomation.com/practice-test-login/');
    await page2.fill('#username', 'incorrectUser');
    await page2.fill('#password', 'Password123');
    await page2.click('#submit');
    await expect(page2.locator('#error')).toHaveText('Your username is invalid!');

    await page3.goto('https://practicetestautomation.com/practice-test-login/');
    await page3.fill('#username', 'student');
    await page3.fill('#password', 'incorrectPassword');
    await page3.click('#submit');
    await expect(page3.locator('#error')).toHaveText('Your password is invalid!');

    context1.close();
    context2.close();
    context3.close();

  await browser.close();
});