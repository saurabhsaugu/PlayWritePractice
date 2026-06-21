// Basic Authentication Example in Playwright: https://the-internet.herokuapp.com/basic_auth in head mode

import { test, expect } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Basic Authentication', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/basic_auth');
  await browser.close();
});

test('Basic Authentication with btoa encoding', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
    const username = 'admin';
    const password = 'admin';
    const encodedCredentials = 'Basic ' + btoa(`${username}:${password}`);

    page.setExtraHTTPHeaders({
        'Authorization': encodedCredentials
    });

    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/basic_auth');
  await browser.close();
});
