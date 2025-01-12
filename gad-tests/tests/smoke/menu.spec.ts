import { MainMenuComponent } from '../../components/main-menu.component';
import { ArticlesPage } from '../../src/pages/articles.page';
import { CommentsPage } from '../../src/pages/comments.page';
import { HomePage } from '../../src/pages/home.page';
import test, { expect } from '@playwright/test';

test.describe('Verify main menu buttons', () => {
  test('comments button navigates to comments page @GAD-R01-03', async ({
    page,
  }) => {
    // Arrange
    const articlesPage = new ArticlesPage(page);
    const commentsPage = new CommentsPage(page);
    const commentsPageTitle = 'Comments';

    // Act
    await articlesPage.goto();
    await articlesPage.mainMenu.commentsButton.click();
    const title = await commentsPage.title();

    // Assert
    expect(title).toContain(commentsPageTitle);
  });

  test('articles button navigates to articles page @GAD-R01-03', async ({
    page,
  }) => {
    // Arrange
    const articlesPage = new ArticlesPage(page);
    const commentsPage = new CommentsPage(page);
    const articlesPageTitle = 'Articles';

    // Act
    await commentsPage.goto();
    await commentsPage.mainMenu.articlesButton.click();
    const title = await articlesPage.title();

    // Assert
    expect(title).toContain(articlesPageTitle);
  });

  test('home pagebutton navigates to main page @GAD-R01-03', async ({
    page,
  }) => {
    // Arrange
    const articlesPage = new ArticlesPage(page);
    const homePage = new HomePage(page);
    const homePageTitle = 'GAD';

    // Act
    await articlesPage.goto();
    await articlesPage.mainMenu.homePage.click();
    const title = await homePage.title();

    // Assert
    expect(title).toContain(homePageTitle);
  });
});
