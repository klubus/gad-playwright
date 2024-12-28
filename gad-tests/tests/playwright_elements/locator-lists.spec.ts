import { test, expect } from "@playwright/test";

test.describe("Locator lists", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });

  test("All butons on page", async ({ page }) => {
    // Arrange
    const elementRole = "button";
    const buttonLocator = page.getByRole(elementRole);
    const expectedElementsCount = 7;

    // Assert
    await expect(buttonLocator).toHaveCount(expectedElementsCount);
  });

  test("action on nth button", async ({ page }) => {
    // Arrange
    const elementRole = "button";
    const resultTestId = "dti-results";
    const expectedMessage = "You clicked the button! (Second one!)";

    const buttonLocator = page.getByRole(elementRole);
    const resultLocator = page.getByTestId(resultTestId);

    // Act
    await buttonLocator.nth(2).click();

    // Assert
    await expect(resultLocator).toHaveText(expectedMessage);
  });

  test("action on multiple buttons", async ({ page }) => {
    // Arrange
    const elementRole = "button";
    const elementText = "Click!";
    const resultsTestId = "dti-results";

    const buttonLocator = page.getByRole(elementRole, { name: elementText });
    const resultLocator = page.getByTestId(resultsTestId);

    // Act
    const numberOfElements = await buttonLocator.count();
    for (let index = 0; index < numberOfElements; index++) {
      await buttonLocator.nth(index).click();
      console.log(await resultLocator.textContent());
    }

    // TODO: add assert
  });
});
