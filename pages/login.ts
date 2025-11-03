import { Page, expect, Locator } from '@playwright/test';
export class LoginPage {
  private loginToYourAccountTitle: Locator;
  private loginEmail: Locator;
  private loginPassword: Locator;
  private loginButton: Locator;
  private loggedInAsTitle: Locator;
  private logoutButton: Locator;

  constructor(private page: Page) {
    this.loginToYourAccountTitle = this.page.locator(
      "div[class='login-form'] h2"
    );
    this.loginEmail = this.page.locator('input[data-qa="login-email"]');
    this.loginPassword = this.page.locator('input[data-qa="login-password"]');
    this.loginButton = this.page.locator('button[data-qa="login-button"]');
    this.loggedInAsTitle = this.page.getByText("Logged in as Iris");
    this.logoutButton = this.page.locator("a[href='/logout']");
  }

  async login(EMAIL: string, PASSWORD: string) {
    await this.loginEmail.fill(EMAIL);
    await this.loginPassword.fill(PASSWORD);
    await this.loginButton.click();
  }
  async isLoginToYourAccountTitleVisible() {
    await expect(this.loginToYourAccountTitle).toBeVisible();
  }
  async verifyLoggedInAs() {
    await expect(this.loggedInAsTitle).toBeVisible();
  }
  async logout() {
    await this.logoutButton.click();
  }
}
