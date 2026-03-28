 import { test } from "@playwright/test";
test("Navigate to URL", async({page})=>{
    await page.goto("https://www.https://testautomationpractice.blogspot.com/.com/");
await page.waitForTimeout(5000);
})