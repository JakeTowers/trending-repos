import { test, expect } from "@playwright/test";

test.describe("homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  test("has title Repositories", async ({ page }) => {
    await expect(page).toHaveTitle(/Repositories/);
  });

  test("has the language filter", async ({ page }) => {
    await expect(page.locator("#language-filter")).toBeInViewport();
  });

  test("has at least one repository card", async ({ page }) => {
    await expect(
      page.locator("[data-testid='repository-card-0']"),
    ).toBeInViewport();
  });
});

test.describe("favourites", () => {
  test("has title Favourites", async ({ page }) => {
    await page.goto("/favourites");

    await expect(page).toHaveTitle(/Favourites/);
  });
});
