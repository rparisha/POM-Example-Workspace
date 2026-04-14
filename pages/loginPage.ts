import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {
    }

    userNameInput = '#username';
    passwordInput = '#password';
    submitButton =  '#submit';

    async goto() {

        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

        async login(username: string, password:string){
            await this.page.fill(this.userNameInput, username);
            await this.page.fill(this.passwordInput, password);
            await this.page.click(this.submitButton);
        }
}
