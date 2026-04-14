import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { testData } from "../utils/testData";


test.describe('Validate Login Functionality' , () => {
test('Valid credentials' , async ({ page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');    
});

test('Invalid credentials' , async ({ page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await page.waitForURL('https://practicetestautomation.com/practice-test-login/');
    await expect(page.locator('#error')).toBeVisible();
}); 
});