import { test, expect } from '@playwright/test';

test('Check header', async ({ page }) => {
  await page.goto('');
  const header = page.getByTestId('homePgeHeader');
  await expect(header).toBeVisible();
});
