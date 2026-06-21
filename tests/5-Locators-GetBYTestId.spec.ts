// 6. Data-Test-id Attribute Example

import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Data-Test-id Attribute Example', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
    await page.goto('https://www.makemytrip.global/');
    await page.locator('#header-container > div.headerOuter > div.modal.displayBlock.modalLogin.dynHeight.personal > div > section > span').click();
    
    // Data-Test-id Attribute Example (data-testid="country-lang-switcher")
    const fromInput: Locator = await page.getByTestId('country-lang-switcher');
    await fromInput.isVisible();
    
  await browser.close();
    
});

test('Data-* custom Attribute Example', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
    await page.goto('https://www.makemytrip.global/');
    await page.locator('#header-container > div.headerOuter > div.modal.displayBlock.modalLogin.dynHeight.personal > div > section > span').click();

    // Data-Test-id Attribute Example (data-sg="country-lang-switcher")
    // Add a custom data attribute to the element in the HTML, for example: <div data-sg="country-lang-switcher">...</div>
    // In Playwright.config.ts, add the following to the "use" section to enable custom data attribute selectors:
    /*
    use: {
      dataAttribute: 'data-sg'
    }
    */
    const fromInput: Locator = await page.getByTestId('country-lang-switcher');
    await fromInput.isVisible();
    
  await browser.close();
    
});