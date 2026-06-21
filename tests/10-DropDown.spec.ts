// DropDown Example with https://automationpractice.qualitytestinghub.com/dropdown-list/
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
test('DropDown Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://automationpractice.qualitytestinghub.com/dropdown-list/');
    const dropdown =  '#testingtypes';
    await page.selectOption(dropdown, 'IntegrationTesting');
    await page.waitForTimeout(2000);
    await page.selectOption(dropdown, {'label': 'FunctionTesting'});
    await page.waitForTimeout(2000);
    await page.selectOption(dropdown, {'index': 3});
    await page.waitForTimeout(2000);
    await page.selectOption(dropdown, {'value': 'performance'});
    await page.waitForTimeout(2000);
    // Print all the options in the dropdown
    const options: Locator = await page.locator(`${dropdown} > option`);
    for (let i = 0; i < await options.count(); i++) {
        console.log(await options.nth(i).textContent());
    }
    //OR
    const options1 = await page.$$(`${dropdown} > option`);
    for (const option of options1) {
        console.log(await option.textContent());
    }
});