import { expect, test } from '@playwright/test';

test.describe('Locator filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-multiple-elements-no-ids.html');
  });
  test('Single button click using operations', async ({ page }) => {
    // Arrange
    const elementRole = 'button';
    const resultTestId = 'dti-results';
    const expectedMessage = 'You clicked the button!';
    const elementText = 'Click me!';

    const buttonLocator = page.getByRole(elementRole, { name: elementText });
    const resultsLocator = page.getByTestId(resultTestId);

    // Act
    await buttonLocator.click();

    // Assert
    await expect(resultsLocator).toHaveText(expectedMessage);
  });
  test('Single button click using filter and hasText', async ({ page }) => {
    // Arrange
    const elementRole = 'button';
    const resultTestId = 'dti-results';
    const expectedMessage = 'You clicked the button!';
    const elementText = 'Click me!';

    const buttonLocator = page
      .getByRole(elementRole)
      .filter({ hasText: elementText });
    const resultsLocator = page.getByTestId(resultTestId);

    // Act
    await buttonLocator.click();

    // Assert
    await expect(resultsLocator).toHaveText(expectedMessage);
  });
  test('Single button click using chained getBy', async ({ page }) => {
    // Arrange
    const elementRole = 'button';
    const parentRole = 'row';
    const parentText = 'Row 2';
    const resultTestId = 'dti-results';
    const expectedMessage = 'You clicked the button! (row 2)';

    const buttonLocator = page
      .getByRole(parentRole, { name: parentText })
      .getByRole(elementRole);
    const resultsLocator = page.getByTestId(resultTestId);

    // Act
    await buttonLocator.click();

    // Assert
    await expect(resultsLocator).toHaveText(expectedMessage);
  });

  test('Single button click using filter', async ({ page }) => {
    // Arrange
    const elementRole = 'button';
    const parentRole = 'row';
    const parentText = 'Row 2';
    const resultTestId = 'dti-results';
    const expectedMessage = 'You clicked the button! (row 2)';

    const buttonLocator = page
      .getByRole(parentRole)
      .filter({ has: page.getByText(parentText) })
      .getByRole(elementRole);
    const resultsLocator = page.getByTestId(resultTestId);

    // Act
    await buttonLocator.click();

    // Assert
    await expect(resultsLocator).toHaveText(expectedMessage);
  });

  test('Make reservation', async ({ page }) => {
    // Arrange
    await page.goto('/practice/simple-reservation-v1.html');
    const elementCheckbox = 'checkbox';
    const elementButton = 'button';
    const parentRole = 'row';
    const parentFoodText = 'Food';
    const parentReserveText = '23.10.2024';
    const resultTestId = 'dti-results-container';
    const expectedMessage =
      'Reservation for 23.10.2024 with features: Food for total price: 150$';
    const checkoutButtonText = 'Checkout';

    const buttonFoodLocator = page
      .getByRole(parentRole)
      .filter({ has: page.getByText(parentFoodText) })
      .getByRole(elementCheckbox);

    const buttonReserveLocator = page
      .getByRole(parentRole)
      .filter({ has: page.getByText(parentReserveText) })
      .getByRole(elementButton);

    const buttonCheckout = page
      .getByRole(elementButton)
      .filter({ has: page.getByText(checkoutButtonText) });

    const resultsLocator = page.getByTestId(resultTestId);

    // Act
    await buttonFoodLocator.click();
    await buttonReserveLocator.click();
    await buttonCheckout.click();

    // Assert
    await expect(resultsLocator).toHaveText(expectedMessage);
  });
});
