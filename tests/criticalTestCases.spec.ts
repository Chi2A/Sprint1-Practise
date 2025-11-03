import { test, expect } from "@playwright/test";
import {  HomePage } from "../pages/HomePage";
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
    let name = process.env.name!;
    let email= process.env.email!;
    await signUpPage.enterSignupInfo(name ,email);
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
    let email = process.env.email!;
    let password = process.env.password!;
    await loginPage.login(email, password);
    await loginPage.isLoginToYourAccountTitleVisible();
});

test("User Logout", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.navigateToTheLink();
    await homePage.verifyHomePageVisible();
    await homePage.goToSignup();
    let email = process.env.email!;
    let password = process.env.password!;
    await loginPage.login(email, password);
    await loginPage.verifyLoggedInAs();
    await loginPage.logout();
    await homePage.verifyHomePageVisible();
});



    test("Add multiple items to cart", async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await homePage.navigateToTheLink();
        await homePage.verifyHomePageVisible();
        await homePage.goToSignup();
        const email = process.env.email!;
        const password = process.env.password!;
        await loginPage.login(email, password);
        await cartPage.addAllProductsToCart();
        await cartPage.verifyCartProductsVisible();
    
    });

   test("Delete items from cart", async ({ page }) => {
     const homePage = new HomePage(page);
     const loginPage = new LoginPage(page);
     const cartPage = new CartPage(page);

     await homePage.navigateToTheLink();
     await homePage.verifyHomePageVisible();
     await homePage.goToSignup();
     const email = process.env.email!;
     const password = process.env.password!;
     await loginPage.login(email, password);
     await cartPage.addAllProductsToCart();
     await cartPage.verifyCartProductsVisible();
     await cartPage.deleteAllProductsFromCart();
   });
