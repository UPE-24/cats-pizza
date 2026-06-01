import { expect, type Page } from '@playwright/test';
export class OredersPage {
  constructor(private page: Page) {
    this.page = page;
  }
  // Открыь заказ
  async open() {
    await this.page.getByTestId('openOrferButton').click();
  }
  // Проверить что заказ на месте
  async assertHasOrder() {
    await expect(this.page.getByTestId('orderList').getByRole('listitem').first()).toBeVisible();
  }
}
