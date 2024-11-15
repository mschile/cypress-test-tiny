// to run: npx playwright test --ui

import { test } from '@playwright/test';

test('element to be visible', async ({ page }) => {
  await page.goto('file:////Users/mschile/Projects/cypress-test-tiny/cypress/fixtures/dom.html');

  await page.getByRole('paragraph').click();
});
