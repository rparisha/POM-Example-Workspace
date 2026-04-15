import { Page } from '@playwright/test';

export class LoginSauceDemoPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

username = '#user-name';
  password = '#password';
  loginButton = '#login-button';

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }

 
}