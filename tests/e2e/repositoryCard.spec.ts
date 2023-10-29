import { test, expect } from "@playwright/test";

test.describe("repositoryCard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await expect(
      page.locator("[data-testid='repository-card-0']"),
    ).toBeInViewport();
  });

  test("can click on and go to repository card url", async ({ page }) => {
    const url = await page
      .locator("[data-testid='repository-card-0']")
      .locator("a")
      .innerText();

    await page
      .locator("[data-testid='repository-card-0']")
      .locator("a")
      .click();

    expect(page.url()).toBe(url);
  });
});
