import { test, expect } from "@playwright/test";

test.describe("favourites", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await expect(
      page.locator("[data-testid='repository-card-0']"),
    ).toBeInViewport();
    await page.locator("[data-testid='repository-card-0'] button").click();
  });

  test("can favourite a repository", async ({ page }) => {
    const response = await page.evaluate(() =>
      localStorage.getItem("favourites"),
    );
    const favourites = response ? JSON.parse(response) : {};

    expect(Object.values(favourites).length).toBe(1);
  });

  test("can un-favourite a repository", async ({ page }) => {
    const favouritedResponse = await page.evaluate(() =>
      localStorage.getItem("favourites"),
    );
    const addedFavourites = favouritedResponse
      ? JSON.parse(favouritedResponse)
      : {};
    expect(Object.values(addedFavourites).length).toBe(1);

    await page.locator("[data-testid='repository-card-0'] button").click();
    const unfavouritedResponse = await page.evaluate(() =>
      localStorage.getItem("favourites"),
    );
    const removedFavourites = unfavouritedResponse
      ? JSON.parse(unfavouritedResponse)
      : {};
    expect(Object.values(removedFavourites).length).toBe(0);
  });

  test("favourited repository shows on favourites page", async ({ page }) => {
    await page.goto("/favourites");

    await expect(
      page.locator("[data-testid='repository-card-0']"),
    ).toBeInViewport();
  });
});
