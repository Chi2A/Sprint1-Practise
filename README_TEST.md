# Register User Test Automation

This project contains an automated test for the user registration flow on automationexercise.com using Playwright and TypeScript.

## Test Structure

The test follows the Page Object Model (POM) pattern with the following pages:

- **HomePage.ts** - Landing page with Signup/Login button
- **SignupLoginPage.ts** - Initial signup form (name and email)
- **SignupPage.ts** - Detailed account information form
- **AccountCreatedPage.ts** - Success confirmation page

## Test Case: Register User

The test covers all 14 steps:

1. Launch browser
2. Navigate to http://automationexercise.com
3. Verify home page is visible
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address (unique timestamp-based)
7. Click 'Signup' button
8. Verify 'ENTER ACCOUNT INFORMATION' is visible
9. Fill account details (Title, Password, Date of birth)
10. Select 'Sign up for our newsletter!' checkbox
11. Select 'Receive special offers from our partners!' checkbox
12. Fill address details (First name, Last name, Company, Address, etc.)
13. Click 'Create Account' button
14. Verify 'ACCOUNT CREATED!' is visible

## How to Run

### Run all tests:

```bash
npm test
```

### Run in headed mode (see browser):

```bash
npm run test:headed
```

### Run with Playwright UI:

```bash
npm run test:ui
```

### Run only the register user test:

```bash
npm run test:register
```

### Run with specific options:

```bash
npx playwright test --headed --project=chromium
```

## Notes

- Each test run generates a unique email using timestamps to avoid conflicts
- The test uses Page Object Model for better maintainability
- Screenshots and videos are captured on failure
- Test report is generated in HTML format
