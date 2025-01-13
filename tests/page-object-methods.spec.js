import { test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {

    await page.goto('https://practice.cydeo.com/');

    // pause for 3 seconds
    // await page.waitForTimeout(3000);

    let actualTitle = await page.title();

    console.log(actualTitle);
});

// create an empty test
test('Getting the current url of the page', async ({ page }) => {
    
    await page.goto('https://practice.cydeo.com/');

    let actualUrl = page.url();

    console.log(actualUrl);
});

// create an blank test with no body
test('Set window size', async ({ page }) => {
    
    // await page.goto('https://practice.cydeo.com/');

    // await page.waitForTimeout(3000);

    await page.setViewportSize({ width: 2880, height: 1800 });

    await page.waitForTimeout(3000);
});


