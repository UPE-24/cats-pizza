import { expect, type Page } from '@playwright/test';
export class AuthModal {
  constructor(private page: Page) {
    this.page = page;
  }
  // Открываем страницу
  async open() {
    await this.page.getByTestId('singInButton').click();
  }
  async openregisterButton() {
    await this.page.getByTestId('registerButton').click();
  }
  // Авторизация
  async signIn(email: string, password: string) {
    await this.open();
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Пароль:').fill(password);
    await this.page.getByTestId('singInOrButton').click();
  }
  // Регстрация
  async signUp(name: string, email: string, password: string) {
    await this.open();
    await this.openregisterButton();
    await this.page.getByLabel('Имя:').fill(name);
    await this.page.getByLabel('Email:').fill(email);
    await this.page.getByLabel('Пароль:', { exact: true }).fill(password);
    await this.page.getByLabel('Повторите пароль:', { exact: true }).fill(password);
    await this.page.getByTestId('singInOrButton').click();
  }
  //Провека что кнопка "Выйти" отоброжается
  async assertSignedIn() {
    await expect(this.page.getByTestId('singOutButton')).toBeVisible();
  }
}
