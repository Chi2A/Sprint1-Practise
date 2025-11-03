import { Page, expect, Locator } from "@playwright/test";

export class HomePage {
  private homePageTitle: Locator;
  private signUpLoginLink: Locator;
  private dressItemLink: Locator;

  constructor(private page: Page) {
    this.homePageTitle = this.page.locator("h1");
    this.signUpLoginLink = this.page.locator("a[href='/login']");
    this.dressItemLink = this.page.locator("a[href='/dress']");
  }

  async navigateToTheLink() {
    await this.page.goto("https://automationexercise.com/");
  }
  async verifyHomePageVisible() {
    await expect(
      this.page.locator('img[alt="Website for automation practice"]')
    ).toBeVisible();
  }
  async goToSignup() {
    await this.signUpLoginLink.click();
  }
  async dressItemSelection(): Promise<void> {
    await this.dressItemLink.click();
  }
}
