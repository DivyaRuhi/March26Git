
 import { test } from "@playwright/test";
test("Navigate to URL of Insta", async({page})=>{
    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(5000);
})
