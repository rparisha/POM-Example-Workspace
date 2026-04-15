import { test, expect } from '@playwright/test';
import { InventorySaucePage } from '../pages/inventorySaucePage';
import { LoginSauceDemoPage } from '../pages/LoginSauceDemoPage';
import { testData } from '../utils/testData';

test('Checkout process for Sauce Labs Backpack', async ({ page}) => {
    const loginPage = new LoginSauceDemoPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validSauceUser.username, testData.validSauceUser.password);
    const inventoryPage = new InventorySaucePage(page);
    await inventoryPage.addSauceLabsBackpackToCart();
    await inventoryPage.verifySauceLabsBackpackAddedToCart();
    await inventoryPage.navigateToCartPage();
});

test('verify the sorting functionality of the inventory page' , async ({ page }) => {
    const loginPage = new LoginSauceDemoPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validSauceUser.username, testData.validSauceUser.password);
    const inventoryPage = new InventorySaucePage(page);
    await inventoryPage.verifySortingFunctionality();
});
