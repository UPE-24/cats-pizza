import { test, expect } from '@playwright/test';
// Вход
test('Sing in', async ({ page }) => {
  await page.goto('');
  await page.getByTestId('singInButton').click();
  await page.getByLabel('Email:').fill('test@gmail.com');
  await page.getByLabel('Пароль:').fill('123');
  await page.getByTestId('singInOrButton').click();
  expect(page.getByTestId('singOutButton')).toBeVisible();
});
// Регистрация
test('Sing up', async ({ page }) => {
  await page.goto('');
  await page.getByTestId('singInButton').click();
  await page.getByTestId('registerButton').click();
  await page.getByLabel('Имя:').fill('Вова');
  await page.getByLabel('Email:').fill(`${Date.now()}@test.ru`);
  await page.getByLabel('Пароль:', { exact: true }).fill('123');
  await page.getByLabel('Повторите пароль:', { exact: true }).fill('123');
  await page.getByTestId('singInOrButton').click();
  expect(page.getByTestId('singOutButton')).toBeVisible();
});
// Добавить в каризну + аторизоваться
test('Mack order with login', async ({ page }) => {
  await page.goto('');
  await page.getByTestId('catCard_0').getByTestId('addToCartButton').click();
  await page.getByTestId('catModal/AddToCardButton').click();
  await page.getByTestId('openCartButton').click();
  await page.getByTestId('makOrderButton').click();
  await page.getByTestId('maheOrderButton').click();
  await page.getByLabel('Email:').fill('test@gmail.com');
  await page.getByLabel('Пароль:').fill('123');
  await page.getByTestId('singInOrButton').click();
  await page.getByLabel('Город*:').fill('Vcs');
  await page.getByLabel('Улица*:').fill('11');
  await page.getByLabel('Дом*:').fill('1');
  await page.getByLabel('Квартира:').fill('1');
  await page.getByLabel('Комментарий курьеру:').fill('231');
  await page.getByTestId('approvorder').click();
  await expect(page.getByTestId('modeltest')).toHaveText('Заказ оформлен');
  await page.getByTestId('cloysSуsubmittedButton').click();
  await page.getByTestId('openOrferButton').click();
  await expect(page.getByTestId('orderList').getByRole('listitem').first()).toBeVisible;
});

// Аторизоваться + Добавить в каризну
test('Mack order login', async ({ page }) => {
  await page.goto('');
  await page.getByTestId('singInButton').click();
  await page.getByLabel('Email:').fill('test@gmail.com');
  await page.getByLabel('Пароль:').fill('123');
  await page.getByTestId('singInOrButton').click();
  await page.getByTestId('catCard_0').getByTestId('addToCartButton').click();
  await page.getByTestId('catModal/AddToCardButton').click();
  await page.getByTestId('openCartButton').click();
  await page.getByTestId('makOrderButton').click();
  await page.getByTestId('maheOrderButton').click();
  await page.getByLabel('Город*:').fill('Vcs');
  await page.getByLabel('Улица*:').fill('11');
  await page.getByLabel('Дом*:').fill('1');
  await page.getByLabel('Квартира:').fill('1');
  await page.getByLabel('Комментарий курьеру:').fill('231');
  await page.getByTestId('approvorder').click();
  await expect(page.getByTestId('modeltest')).toHaveText('Заказ оформлен');
  await page.getByTestId('cloysSуsubmittedButton').click();
  await page.getByTestId('openOrferButton').click();
  await expect(page.getByTestId('orderList').getByRole('listitem').first()).toBeVisible;
});
