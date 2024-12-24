import { test, expect } from "@playwright/test";

test.describe("Finding different elements with getBy methods", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Finding button element by getByRole method", async ({ page }) => {
    const elementLocator = page.getByRole("button", { name: "Click me!" });

    await expect(elementLocator).toBeVisible();
  });

  test("Finding button element by getByText and getByTestId method", async ({
    page,
  }) => {
    const elementLocator = page.getByText("Click me");
    const resultId = "dti-results";
    const expectedMessage = "You clicked the button!";

    await expect(elementLocator).toBeVisible();

    await elementLocator.click();

    const resultElementLocator = page.getByTestId(resultId);
    await expect(resultElementLocator).toHaveText(expectedMessage);
  });
});
