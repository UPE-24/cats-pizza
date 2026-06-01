import { type Page } from '@playwright/test';
export class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }
  // Открываем страницу
  async open() {
    await this.page.goto('/');
  }
  // Добовляем товар в корзину
  async addFirstCatToCart() {
    await this.page.getByTestId('catCard_0').getByTestId('addToCartButton').click();
    await this.page.getByTestId('catModal/AddToCardButton').click();
  }
  //Открываем каризну - переходим на страницу офрмления заказа - созаем заказ
  async goToCheckoutFromCart() {
    await this.page.getByTestId('openCartButton').click();
    await this.page.getByTestId('makOrderButton').click();
    await this.page.getByTestId('maheOrderButton').click();
  }
}
