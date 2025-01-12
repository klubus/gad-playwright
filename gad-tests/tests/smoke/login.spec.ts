import { LoginPage } from '../../src/pages/login.page';
import { WelcomePage } from '../../src/pages/welcome.page';
import test, { expect } from '@playwright/test';

test.describe('Verify login', () => {
  test('login with correct credentials', async ({ page }) => {
    // Arrange
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Act
    await loginPage.login(userEmail, userPassword);
    const welcomePage = new WelcomePage(page);
    const title = await welcomePage.title();

    // Assert
    await expect(title).toContain('Welcome');
  });
});
