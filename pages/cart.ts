import { Page, expect, Locator } from "@playwright/test";

export class CartPage {
  private addToCartButton: Locator;
  private proceedToCheckoutButton: Locator;
  private cartProducts: Locator;
  private deleteIcon: Locator;
  private cartPageTitle: Locator;
  private emptyCartMessage: Locator;

  constructor(page: Page) {
    this.addToCartButton = page.locator("a[class='btn btn-default add-to-cart']");
    this.cartProducts = page.locator("tbody tr");
    this.cartPageTitle = page.locator("ol[class='breadcrumb'] li").nth(1);
    this.deleteIcon = page.locator("a[class='cart_quantity_delete']");
    this.emptyCartMessage = page.locator("span[id='empty_cart'] b");
    this.proceedToCheckoutButton = page.locator(
      "a[class='btn btn-default check_out']"
    );
  }

  async verifyCartPageTitle(): Promise<void> {
    await expect(this.cartPageTitle).toBeVisible();
    await expect(this.cartPageTitle).toHaveText("Shopping Cart");
  }
    async addProductToCart(): Promise<void> {
    await this.addToCartButton.first().click();
  }



  async verifyCartProductsVisible(): Promise<void> {
    for (let i = 0; i < (await this.cartProducts.count()); i++) {
      await expect(this.cartProducts.nth(i)).toBeVisible();
    }
  }
  async deleteAllProductsFromCart(): Promise<void> {
    while ((await this.deleteIcon.count()) > 0) {
      await this.deleteIcon.first().click({ delay: 200 });
    }
  }

  async verifyProductsInCart(): Promise<void> {
    await expect(this.emptyCartMessage).toBeVisible();
    await expect(this.emptyCartMessage).toHaveText("Cart is empty!");
  }
  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}