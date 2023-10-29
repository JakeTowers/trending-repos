import { test, expect } from "@playwright/test";

test.describe("header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  test("can click on and go to home page", async ({ page }) => {
    await page.locator("nav").locator("a").last().click();
    await page.waitForURL("**/");

    expect(await page.title()).toBe("Repositories");
  });

  test("can click on and go to favourites page", async ({ page }) => {
    await page.locator("nav").locator("a").last().click();
    await page.waitForURL("**/favourites");

    expect(await page.title()).toBe("Favourites");
  });
});
