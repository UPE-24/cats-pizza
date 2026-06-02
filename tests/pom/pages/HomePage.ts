import { expect, type Page } from '@playwright/test';
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
  // Открыть карзину
  async openCart() {
    await this.page.getByTestId('openCartButton').click();
  }
  // Перейти к оформлению
  async goToCartPage() {
    await this.page.getByTestId('makOrderButton').click();
  }
  //Открываем каризну - переходим на страницу офрмления заказа - созаем заказ
  async goToCheckoutFromCart() {
    await this.openCart();
    await this.goToCartPage();
    await this.page.getByTestId('maheOrderButton').click();
  }
  // Проверка что страница загрузилась и оглавление отображается
  async assertLoaded() {
    await expect(this.page).toHaveURL('/');
    await expect(this.page.getByTestId('homePgeHeader')).toBeVisible();
  }
  //Проверка карточек товара
  async assertCardVisible() {
    const cards = this.page.getByTestId(/catCard_/);
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(9);
  }
  // Проверям что в кнопке коризне отобраажется товар
  async assertCardBadgeCount(count: number) {
    await expect(this.page.getByTestId('openCartButton')).toContainText(`(${count})`);
  }
  //Проврека что открыта стр. коризны
  async assertCartPage() {
    await expect(this.page).toHaveURL(/\/cart$/);
    await expect(this.page.getByRole('heading', { name: 'Корзина' })).toBeVisible();
  }
}
