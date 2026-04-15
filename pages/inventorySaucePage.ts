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
}   