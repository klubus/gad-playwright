import { expect, test } from '@playwright/test';

test.describe('auto wait exercises', () => {
  test('button and delayed results', async ({ page }) => {
    await page.goto('/practice/delayed-elements-and-delayed-result-1.html');

    // Arrange:
    const buttonTestId = 'dti-button-element-1';
    const resultTestId = 'dti-results';
    const expectedMessage = 'You clicked the button!';

    const buttonLocator = page.getByTestId(buttonTestId);
    const resultLocator = page.getByTestId(resultTestId);

    // Act:
    await buttonLocator.click();

    // Assert:
    await expect(resultLocator).toHaveText(expectedMessage);
  });
  test('button and delayed results (greater delay)', async ({ page }) => {
    await page.goto('/practice/delayed-elements-and-delayed-result-2.html');
    // Arrange:
    const buttonTestId = 'dti-button-element-2';
    const resultTestId = 'dti-results';
    const expectedMessage = 'You clicked the button!  (Delayed)';

    const buttonLocator = page.getByTestId(buttonTestId);
    const resultLocator = page.getByTestId(resultTestId);

    // Act:
    await buttonLocator.click();

    // Assert:
    await expect(resultLocator).toHaveText(expectedMessage, { timeout: 10000 });
  });
});
