import { expect } from './percentage.expect';
import { test } from '@playwright/test';

test.describe('Weather forecast tests - humidity', () => {
  test('humidity valid format', async ({ page }) => {
    await page.goto('/practice/simple-weather-forecast.html');
    // Arrange:
    const todayHumidityTestId = 'dti-humidity-today';
    const todayHumidityLocator = page.getByTestId(todayHumidityTestId);

    // Act:

    const todayHumidityLocatorValue = await todayHumidityLocator.innerText();

    // Assert:
    await expect(todayHumidityLocatorValue).toBeValidPercent();
    await expect(todayHumidityLocatorValue).toBeValidPercentInRange(0, 100);
  });

  test('humidity valid format with percentage', async ({ page }) => {
    await page.goto('/practice/simple-weather-forecast.html');
    // Arrange:
    const todayHumidityTestId = 'dti-humidity-today';
    const todayHumidityLocator = page.getByTestId(todayHumidityTestId);

    // Act:

    const todayHumidityLocatorValue = await todayHumidityLocator.innerText();

    // Assert:
    await expect(todayHumidityLocatorValue).toBeValidPercentageWithParams();
  });
});
