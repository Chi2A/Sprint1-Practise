import { Page, expect, Locator } from "@playwright/test";

export class CheckoutPage {
  private addressDetails: Locator;
  private placeOrderButton: Locator;
  private deliveryAddress: Locator;
  private billingAddress: Locator;

  constructor(private page: Page) {
    this.addressDetails = this.page.locator(".checkout-information");
    this.placeOrderButton = this.page.locator("text=Place Order");
    this.deliveryAddress = this.page.locator("#address_delivery");
    this.billingAddress = this.page.locator("#address_invoice");
  }

  async verifyAddressDetails() {
    await expect(this.deliveryAddress).toBeVisible();
    await expect(this.billingAddress).toBeVisible();
  }

  async clickPlaceOrder() {
    await this.placeOrderButton.click();
  }
}
