// Exmaple Single File Upload with https://the-internet.herokuapp.com/upload
import { test, expect } from '@playwright/test';
import type { Browser, Page, Locator } from '@playwright/test';
import path from 'path/posix';
import { webkit, chromium, firefox } from 'playwright';
test('File Upload Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/upload');
    const filePath: string = 'D:\\QEArchitect\\Git\\Git-2.46.0-64-bit.exe';
    await page.locator('input#file-upload').setInputFiles(filePath);
    await page.click('input#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await browser.close();
});

// Exmaple Multiple File Upload with https://davidwalsh.name/demo/multiple-file-upload.php with path.join
test('Multiple File Upload Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    const filePath1: string = 'D:\\QEArchitect\\Git\\Git-2.46.0-64-bit.exe';
    const filePath2: string = 'D:\\QEArchitect\\Git\\Git-2.46.0-64-bit.exe';
    // await page.locator('input#filesToUpload').setInputFiles([filePath1, filePath2]);
    await page.locator('input#filesToUpload').setInputFiles(
        [
            path.join('D:\\QEArchitect\\Git\\Git-2.46.0-64-bit.exe/'),
            path.join('D:\\QEArchitect\\Git\\Git-2.46.0-64-bit.exe')
        ]
    );
    await browser.close();
});

// Upload a file from Buffer with new Test File
test('File Upload from Buffer Example', async () => {
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileContent: Buffer = Buffer.from('Hello, this is a test file.');
    const fileName: string = 'testfile.txt';
    await page.locator('input#file-upload').setInputFiles({
        name: fileName,
        mimeType: 'text/plain',
        buffer: fileContent
    });
    await page.click('input#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await page.waitForTimeout(2000);
    await browser.close();
});