// Get By Role Locator Example in head mode with Playwright website (Accessibility Role, Reference: https://playwright.dev/docs/locators#locating-by-role)

import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Get By Role Locator Example', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
    await page.goto('https://playwright.dev/');
    // Get By Role Locator Example
    const getStartedButton: Locator = await page.getByRole('link', { name: 'Get started' });
    await getStartedButton.isVisible();
    await getStartedButton.click();

    // Expects page to have a heading with the name of Installation.
    const installationHeading: Locator = await page.getByRole('heading', { name: 'Installation' });
    await expect(installationHeading).toBeVisible();
  await browser.close();
});