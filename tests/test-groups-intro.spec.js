import { test } from '@playwright/test';

test.describe("", () => {

    test.beforeAll(async () => {
        console.log("Before All is running");
    });

    test.afterAll(async () => {
        console.log("After All is running");
    });

    test.beforeEach(async () => {
        console.log("Before Each is running");
    });

    test.afterEach(async () => {
        console.log("After Each is running");
    });

    test("Test Case 1", async () => {
        console.log("Test Case 1 is running");
    });

    test("Test Case 2", async () => {
      console.log("Test Case 2 is running");
    });

    test("Test Case 3", async () => {
      console.log("Test Case 3 is running");
    });

    test("Test Case 4", async () => {
      console.log("Test Case 4 is running");
    });
});