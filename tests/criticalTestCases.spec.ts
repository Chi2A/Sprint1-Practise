import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SignUp } from "../pages/signUp";
import { LoginPage } from "../pages/login";
import { CartPage } from "../pages/cart";
import { CheckoutPage } from "../pages/checkout";   



test('Register User', async ({ page }) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUp(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

                
    await homePage.navigateToTheLink();
    await homePage.goToSignup();
    await signUpPage.enterSignupInfo("Sarah", "sarah55@gmail.com");
    await signUpPage.fillAccountInformation();
    await signUpPage.fillAddressDetails(
        "Sarah",
        "Connor",
        "Tech Corp",
        "123 Future St",
        "Apt 456",
        "Canada",
        "Ontario",
        "Toronto",
        "M4B1B3",
        "+1234567890"
    );
}); 




test('Login User with correct email and password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.navigateToTheLink();
    await homePage.verifyHomePageVisible();
    await homePage.goToSignup();
    await loginPage.login("sarah555@gmail.com", "Iris12345!");
    await loginPage.isLoginToYourAccountTitleVisible();
});

test("User Logout", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.navigateToTheLink();
    await homePage.verifyHomePageVisible();
    await homePage.goToSignup();
    await loginPage.login("sarah555@gmail.com", "Iris12345!");
    await loginPage.verifyLoggedInAs(); 
    await loginPage.logout();
    await homePage.verifyHomePageVisible();
});



test("Add item to cart and checkout", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUp(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.navigateToTheLink();
  await homePage.verifyHomePageVisible();
  await homePage.goToSignup();
  await loginPage.login("sarah555@gmail.com", "Iris12345!");
  
    await cartPage.addProductToCart();
    await cartPage.verifyCartPageTitle();
  await cartPage.verifyCartProductsVisible();
  await checkoutPage.verifyAddressDetails();
  await checkoutPage.clickPlaceOrder();
});
test("Delete items from cart", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUp(page);
  const cartPage = new CartPage(page);

  await homePage.navigateToTheLink();
  await homePage.verifyHomePageVisible();
  await homePage.goToSignup();
    await loginPage.login("   sarah55@gmail.com", "password123");     
    await cartPage.verifyCartPageTitle();
    await cartPage.deleteAllProductsFromCart();
});
