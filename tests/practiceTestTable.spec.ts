import {test, expect} from '@playwright/test';
import { practiceTestTable } from '../pages/practiceTestTable';


const languages = ['Java', 'Python', 'Any'];

for (const lang of languages) {


  test(`Select ${lang} Language`, async ({ page }) => {

    const practiceTestTablePage = new practiceTestTable(page);

    await practiceTestTablePage.goto();

    // Select language
    await practiceTestTablePage.selectLanguage(lang);

    // Verify radio is selected (better way)
    await expect(
      page.getByLabel(lang)
    ).toBeChecked();

    // Validate table data
    await practiceTestTablePage.validateLanguage(lang);

  });

}

