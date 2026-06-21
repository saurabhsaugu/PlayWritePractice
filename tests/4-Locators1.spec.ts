// 1. ID Selector
// 2. Class Name Selector
// 3. Text Selector
// 4. CSS Selector
// 5. XPath Selector

import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Locator Examples', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto('https://www.makemytrip.global/');
        await page.locator('#header-container > div.headerOuter > div.modal.displayBlock.modalLogin.dynHeight.personal > div > section > span').click();
    // ID Selector
    const fromInput: Locator = await page.locator('id=fromCity');
    await fromInput.click();

    // Class Name Selector
    const logo: Locator = await page.locator('.mmtLogo.makeFlex');
    await logo.isVisible();

    // Text Selector
    const searchButton: Locator = await page.locator('text=One Way');
    await searchButton.isVisible();

    // CSS Selector with attribute
    const toInputBox: Locator = await page.locator('css=input[placeholder="To"]');
    await toInputBox.isVisible();

    const toInputBox1: Locator = await page.locator('input[placeholder="To"]');
    await toInputBox1.isVisible();

    // XPath Selector
    const fromInputBox: Locator = await page.locator('xpath=//input[@placeholder="From"]');
    await fromInputBox.isVisible();

    const fromInputBox1: Locator = await page.locator('//input[@placeholder="From"]');
    await fromInputBox1.isVisible();

  await browser.close();
});