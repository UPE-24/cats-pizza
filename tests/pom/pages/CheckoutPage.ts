import { expect, type Page } from '@playwright/test';
export class CheckoutPage {
  constructor(private page: Page) {
    this.page = page;
  }
  // Автризация
  async singInCheckout(email: string, password: string) {
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Пароль:').fill(password);
    await this.page.getByTestId('singInOrButton').click();
  }
  // Заполнение адресса
  async fillAdress(address: {
    city: string;
    streat: string;
    house: string;
    appartment: string;
    comment: string;
  }) {
    await this.page.getByLabel('Город*:').fill(address.city);
    await this.page.getByLabel('Улица*:').fill(address.streat);
    await this.page.getByLabel('Дом*:').fill(address.house);
    await this.page.getByLabel('Квартира:').fill(address.appartment);
    await this.page.getByLabel('Комментарий курьеру:').fill(address.comment);
  }
  // Проверка что заказ оформлен
  async submit() {
    await this.page.getByTestId('approvorder').click();
    await expect(this.page.getByTestId('modeltest')).toHaveText('Заказ оформлен');
    await this.page.getByTestId('cloysSуsubmittedButton').click();
  }
}
