import { test } from '@playwright/test';

test.describe("Practice.cydeo", () => {

    test.beforeEach(async ({ page }) => {
      await page.goto("http://practice.cydeo.com/");
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
    });

    test("Page Title", async ({ page }) => {
      console.log( await page.title() );
    });

    test("Page URL", async ({ page }) => {
      console.log( page.url() );
    });
});