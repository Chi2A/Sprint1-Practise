import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";


test('Test Case 1: Register User ', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToTheLink();
    await homePage.goToSignup();
    await homePage.enterSignupInfo("Sarah", "sarah55@gmail.com");   
    await homePage.fillAccountInformation();
    await homePage.fillAddressDetails(
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