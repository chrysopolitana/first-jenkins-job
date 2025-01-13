// const {test} = require('@playwright/test');

import {test} from '@playwright/test';

test("Simple google test ", async ({page}) => {
    // test code

    await page.goto("https://www.google.co.jp/");

    await page.waitForTimeout(3000);
});