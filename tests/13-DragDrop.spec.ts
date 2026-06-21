// Example with https://jqueryui.com/droppable/
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';
test('Drag and Drop Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('.demo-frame');
    await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
    await page.waitForTimeout(2000);
});

// With Mouse Events
test('Drag and Drop Example with Mouse Events', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('.demo-frame');
    const draggable = frame.locator('#draggable');
    const droppable = frame.locator('#droppable');
    const draggableBox = await draggable.boundingBox();
    const droppableBox = await droppable.boundingBox();
    await page.waitForTimeout(2000);
    if (draggableBox && droppableBox) {
        await page.mouse.move(draggableBox.x + draggableBox.width / 2, draggableBox.y + draggableBox.height / 2);
        await page.mouse.down();
        await page.mouse.move(droppableBox.x + droppableBox.width / 2, droppableBox.y + droppableBox.height / 2);
        await page.mouse.up();
    }
    await page.waitForTimeout(2000);
});