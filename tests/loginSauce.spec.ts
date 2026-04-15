import {test, expect } from '@playwright/test';
import { LoginSauceDemoPage } from '../pages/LoginSauceDemoPage';
import { testData } from '../utils/testData';

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginSauceDemoPage(page);
    await loginPage.goto();
    console.log('Navigated to Sauce Demo login page');
    await loginPage.login(testData.validSauceUser.username, testData.validSauceUser.password);
    console.log('Entered valid credentials and clicked login');    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('Login successful, navigated to inventory page');
});
test ('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginSauceDemoPage(page);
    await loginPage.goto();
    console.log('Navigated to Sauce Demo Loginpage');
    await loginPage.login(testData.invalidSauceUser.username, testData.invalidSauceUser.password);
    console.log('Entered invalid credentials and clicked login');
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    console.log('Verified error message is displayed for invalid login');
});