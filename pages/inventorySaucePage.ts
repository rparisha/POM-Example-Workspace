import { test, expect, Page } from '@playwright/test';

export class InventorySaucePage {
    constructor(private page: any) {
    }
    
    async addSauceLabsBackpackToCart() {
        const SauceLabsBackpack = await this.page.locator('//*[@id="item_4_title_link"]/div').click();
        console.log('Clicked on Sauce Labs Backpack');
        const addToCartButton = await this.page.getByRole('button', { name: 'Add to cart' }).click();
        console.log('Clicked on Add to Cart button');
    }
    async verifySauceLabsBackpackAddedToCart() {
        const cartBadge = await this.page.locator('//*[@id="shopping_cart_container"]/a/span');
        console.log('Located cart badge');
        await expect(cartBadge).toHaveText('1');
        console.log('Verified cart badge has text "1"');         
        
    }
    async navigateToCartPage() {    
        await this.page.click('//*[@id="shopping_cart_container"]/a');
        console.log('Clicked on cart link');
        await expect(this.page).toHaveURL(/.*cart.html/);
        console.log('Verified URL is cart page');
        
    }  
    async checkOutPage(){
        const checkOutButton = await this.page.locator('#checkout');
        await expect(checkOutButton).toBeVisible();
        console.log('Located Checkout button');
        await checkOutButton.click();
        console.log('Clicked on Checkout button');
        console.log('Verified URL is checkout step one page');
        await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
        console.log('Verified URL is checkout step one page');
        await this.page.fill('#first-name', 'Johnson');
        console.log('Filled first name');
        await this.page.fill('#last-name', 'Smith');
        console.log('Filled last name');
        await this.page.fill('#postal-code', '75234');
        console.log('Filled postal code');
        await this.page.click('#continue');
        console.log('Clicked on Continue button');
        await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
        console.log('Verified URL is checkout step two page');
        await this.page.click('#finish');
        console.log('Clicked on Finish button');
        await expect(this.page).toHaveURL(/.*checkout-complete.html/);
        console.log('Verified URL is checkout complete page');
        await expect(this.page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
        console.log('Verified order completion message is displayed');
        await this.page.click('#back-to-products');
        console.log('Clicked on Back to Products button');
        await expect(this.page).toHaveURL(/.*inventory.html/);
        console.log('Verified URL is inventory page');
        
    } 
    
    async verifySortingFunctionality() {
        const sortDropdown = await this.page.locator('.product_sort_container');
        await expect(sortDropdown).toBeVisible();
        console.log('Located sorting dropdown');
        //For name A to Z
        await sortDropdown.selectOption('az');
        console.log('Selected "Name (A to Z)" sorting option');
        const firstProductName = await this.page.locator('.inventory_item_name').first().textContent();
        expect(firstProductName).toBe('Sauce Labs Backpack');
        console.log('Verified first product is Sauce Labs Backpack after sorting A to Z');
        //For Name Z to A
        await sortDropdown.selectOption('za');
        console.log('Selected "Name (Z to A)" sorting option');
        const firstProductNameZA = await this.page.locator('.inventory_item_name ').first().textContent();
        expect(firstProductNameZA).toBe('Test.allTheThings() T-Shirt (Red)');
        console.log('Verified first product is Test.allTheThings() T-Shirt (Red) after sorting Z to A');
        //For price Low to High
        await sortDropdown.selectOption('lohi');
        console.log('Selected "Price (Loe to High)" sorting option');
        const firstProductNamePriceLowToHigh = await this.page.locator('.inventory_item_name').first().textContent();
        expect(firstProductNamePriceLowToHigh).toBe('Sauce Labs Onesie');
        console.log('Verified first product is Sauce Labs Onsie after sorting Price Low to High');
        //For price High to Low
        await sortDropdown.selectOption('hilo');
        console.log('Selected "Price (High to Low)" sorting option');
        const firstProductNamePriceHightoLow = await this.page.locator('.inventory_item_name').first().textContent();
        expect(firstProductNamePriceHightoLow).toBe('Sauce Labs Fleece Jacket');
        console.log('Verified first product is Sauce Labs Fleece Jacket after sorting Price High to Low');

    }
}   