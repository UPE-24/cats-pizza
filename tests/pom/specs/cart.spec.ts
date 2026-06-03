import { guestTest as test } from '../../fixtures/app.fixture';
//Проверка карзины на пусто состояние
test('Shows empty cart state', async ({ cartPage }) => {
  await cartPage.open();
  await cartPage.assertEmty();
});
//После удаление элемента с корзины она отсается пустой
test('Removing last item makes cart empty', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.removeFirstItem();
  await cartPage.assertEmty();
});
//После отчистки коризны элемента с корзины она отсается пустой
test('Clear cart removes all items', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.clear();
  await cartPage.assertEmty();
});
// Добавление еще одного товра черрез +
test('Changing quantity updates cart badge and input value', async ({ cartPage, homePage }) => {
  await homePage.open(); // 1. Открываем главную страницу
  await homePage.addFirstCatToCart(); // 2. Добавляем первого кота в корзину
  await cartPage.open(); // 3. Открываем страницу корзины
  await cartPage.addOneMoreSameCat(); // 4. Нажимаем «+» (добавляем ещё одного такого же кота)
  await homePage.assertCardBadgeCount(2); // 5. Проверяем бейдж на главной странице → 2
  await cartPage.assertCatCounter('2'); // 6. Проверяем счётчик в корзине → 2
});
