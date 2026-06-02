import { test } from '../../fixtures/app.fixture';

//Проверка коталога и товра в нем
test('Cotalog opens and shows card', async ({ homePage }) => {
  await homePage.open();
  await homePage.assertLoaded();
  await homePage.assertCardVisible();
});
// Провека на отоброжение карточки и добавление ее в карзину
test('Guest adds first cat to cart and sees badge count', async ({ homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await homePage.assertCardBadgeCount(1);
});
// Переход на стр. коризны и проверка товара
test('Guest opens cart and navigates to cart page', async ({ homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await homePage.openCart();
  await homePage.goToCartPage();
  await homePage.assertCartPage();
});
