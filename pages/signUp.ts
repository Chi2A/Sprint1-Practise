import { Page, expect, Locator } from "@playwright/test";


export class SignUp {
  private signUpName: Locator;
  private signUpEmail: Locator;
  private signUpButton: Locator;
    private enterAccountInformationTitle: Locator;
    private title: Locator;
    private nameInput: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;




  constructor(private page: Page) {
    this.signUpName = this.page.locator('[data-qa="signup-name"]');
    this.signUpEmail = this.page.locator('[data-qa="signup-email"]');
    this.signUpButton = this.page.locator('[data-qa="signup-button"]');
      this.enterAccountInformationTitle = this.page.locator("h2");
      this.title = this.page.locator("title");
      this.nameInput = this.page.locator('#name');
      this.emailInput = this.page.locator('#email');
      this.passwordInput = this.page.locator('#password');      
  }

  async enterSignupInfo(name: string, email: string) {
    await this.signUpName.fill(process.env.name!);
    await this.signUpEmail.fill(process.env.email!);
    await this.signUpButton.click();
  }
  async isEnterAccountInformationTitleVisible() {
    await expect(this.enterAccountInformationTitle).toBeVisible();
  }
  async fillAccountInformation() {
    await expect(
      this.page.getByText("Enter Account Information", { exact: false })
    ).toBeVisible();
    await this.page.locator("#id_gender2").check();
    await this.page.locator('[data-qa="password"]').fill("Password123!");
    await this.page.selectOption("#days", "10");
    await this.page.selectOption("#months", "5");
    await this.page.selectOption("#years", "1995");
    await this.page.locator("#newsletter").check();
    await this.page.locator("#optin").check();
  }

  async fillAddressDetails(
    firstName: string,
    lastName: string,
    company: string,
    address: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobile: string
  ) {
    await this.page.locator('[data-qa="first_name"]').fill(firstName);
    await this.page.locator('[data-qa="last_name"]').fill(lastName);
    await this.page.locator('[data-qa="company"]').fill(company);
    await this.page.locator('[data-qa="address"]').fill(address);
    await this.page.locator('[data-qa="address2"]').fill(address2);
    await this.page.selectOption('[data-qa="country"]', country);
    await this.page.locator('[data-qa="state"]').fill(state);
    await this.page.locator('[data-qa="city"]').fill(city);
    await this.page.locator('[data-qa="zipcode"]').fill(zipcode);
    await this.page.locator('[data-qa="mobile_number"]').fill(mobile);
  }

  async createAccount() {
    await this.page.locator('[data-qa="create-account"]').click();
    await expect(
      this.page.getByText("Account Created!", { exact: false })
    ).toBeVisible();
    await this.page.locator('[data-qa="continue-button"]').click();
  }

  async verifyUserLoggedIn() {
    await expect(this.page.getByText("Logged in as")).toBeVisible();
  }
}
