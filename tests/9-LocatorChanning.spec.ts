// 1. Locator Chaining Example with https://www.facebook.com/
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Locator Chaining Example', async () => { // Changing the Elements to Locator Chaining Example
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.facebook.com/');
    // Locator Chaining Example
    const loginForm: Locator = await page.locator('#login_form');
    const emailInput: Locator = await loginForm.locator('input[name="email"]');
    const passwordInput: Locator = await loginForm.locator('input[name="pass"]');
    const loginButton: Locator = await loginForm.locator('//span[text()="Log in"]');
    await emailInput.fill('abc@gmail.com');
    await passwordInput.fill('incorrectPassword');
    await loginButton.click();
  await browser.close();
});

test('Locator Chaining Example with >>', async () => { // Changing the name of the test to Locator Chaining Example with >>
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.facebook.com/');
    // Locator Chaining Example
    const emailInput: Locator = await page.locator('#login_form >> input[name="email"]');
    const passwordInput: Locator = await page.locator('#login_form >> input[name="pass"]');
    const loginButton: Locator = await page.locator('#login_form >> //span[text()="Log in"]');
    await emailInput.fill('abc@gmail.com');
    await passwordInput.fill('incorrectPassword');
    await loginButton.click();
  await browser.close();
});