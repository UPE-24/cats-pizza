import { expect, type Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {
    this.page = page;
  }
  //Открыть каризну
  async open() {
    await this.page.goto('/cart');
  }
  //Проверку для пустой каризны
  async assertEmty() {
    await expect(
      this.page.getByText('Корзина пуста. Добавьте котика с главной страницы'),
    ).toBeVisible();
  }
  //Удалить товра из карзины
  async removeFirstItem() {
    await this.page.getByRole('button', { name: 'Удалить' }).first().click();
  }
  // Очистить корзину
  async clear() {
    await this.page.getByRole('button', { name: 'Очистить корзину' }).click();
  }
  //проверка количетво товара
  async assertCatCounter(value: string) {
    await expect(this.page.getByTestId('itemCounter')).toHaveValue(value);
  }
  //Добавление товара +
  async addOneMoreSameCat() {
    await this.page.getByRole('button', { name: '+' }).click();
  }
}
