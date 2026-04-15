import {test, expect} from '@playwright/test';

export class practiceTestTable {
    
    constructor(private page: any) {        
    }

    Java: string = '//*[@id="xpath-table"]//input[@value="Java"]';
    Python: string = '//*[@id="xpath-table"]//input[@value="Python"]';
    Any : string = '//*[@id="xpath-table"]//input[@value="Any"]';

    async goto() {

        await this.page.goto('https://practicetestautomation.com/practice-test-table/');
    }

    async selectLanguage(language: string) {
        const radio = this.page.getByRole('radio', { name: language });
        await radio.check();
    }

    async validateLanguage(lang: string) {
  const cells = this.page.locator('table tbody tr td:nth-child(3)');
  const count = await cells.count();

  let found = false;

  for (let i = 0; i < count; i++) {
    const text = await cells.nth(i).textContent();

    if (text?.trim() === lang) {
      found = true;
      break;
    }
  }

  expect(found).toBeTruthy();
}
}

