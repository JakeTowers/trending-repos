import { test, expect } from "@playwright/test";

test.describe("languagesFilter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await expect(page.locator("#language-filter")).toBeInViewport();
  });

  test("can filter by all", async ({ page }) => {
    const allLanguage = await page
      .locator("#language-filter")
      .locator("option")
      .first()
      .innerText();

    await page.selectOption("#language-filter", allLanguage);

    expect(await page.locator("#language-filter").inputValue()).toBe("All");
  });

  test("can filter by a language", async ({ page }) => {
    const firstLanguage = await page
      .locator("#language-filter")
      .locator("option")
      .nth(1)
      .innerText();

    await page.selectOption("#language-filter", firstLanguage);

    expect(await page.locator("#language-filter").inputValue()).toBe(
      firstLanguage,
    );

    // Each card should have the selected language
    for (const row of await page.locator("li").all()) {
      await expect(row.locator("p").nth(2)).toHaveText(firstLanguage);
    }
  });
});
