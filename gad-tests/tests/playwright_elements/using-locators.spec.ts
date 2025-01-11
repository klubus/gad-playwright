import { expect, test } from '@playwright/test';

test.describe('Finding different elements using raw locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-elements.html');
  });

  test('Finding label element by ID (CSS)', async ({ page }) => {
    const elementSelector = '#id-label-element';
    const elementLocator = page.locator(elementSelector);
    const expectedMessage = 'Some text for label';

    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText(expectedMessage);
  });

  test('Finding label element by ID (Xpath)', async ({ page }) => {
    const elementSelector = "//*[@id='id-label-element']";
    const elementLocator = page.locator(elementSelector);
    const expectedMessage = 'Some text for label';

    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText(expectedMessage);
  });
});
